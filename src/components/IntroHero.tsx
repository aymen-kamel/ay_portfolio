import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Intro hero: full-screen portrait with a cursor / touch spotlight that
 * reveals the masked version of the photo.
 *
 * Scroll behaviour:
 *  1. The hero stays pinned (sticky) while the user scrolls.
 *  2. A slogan fades in over it.
 *  3. Once the pinned distance is consumed, the rest of the website scrolls in.
 */

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const smooth = (a: number, b: number, v: number) => {
  const x = clamp((v - a) / (b - a));
  return x * x * (3 - 2 * x);
};

const IntroHero = () => {
  const { t } = useLanguage();

  const wrapRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLImageElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);
  const dimRef = useRef<HTMLDivElement>(null);

  /* ---------- scroll: slogan in / out ---------- */
  useEffect(() => {
    const wrap = wrapRef.current;
    const slogan = sloganRef.current;
    const dim = dimRef.current;
    if (!wrap || !slogan || !dim) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = wrap.getBoundingClientRect();
      const distance = wrap.offsetHeight - window.innerHeight;
      const p = distance > 0 ? clamp(-rect.top / distance) : 0;

      const appear = smooth(0.18, 0.45, p);
      const leave = smooth(0.88, 1, p);
      const o = appear * (1 - leave);

      slogan.style.opacity = String(o);
      slogan.style.transform = `translate3d(0, ${(1 - appear) * 28 - leave * 20}px, 0)`;
      dim.style.opacity = String(appear * 0.55 * (1 - leave));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* ---------- spotlight: mouse + touch ---------- */
  useEffect(() => {
    const stage = stageRef.current;
    const reveal = revealRef.current;
    if (!stage || !reveal) return;

    const LERP = 0.22;
    let W = 110;
    let H = 140;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let started = false;
    let raf: number | null = null;

    const setSize = (w: number, h: number) => {
      W = w;
      H = h;
      const s = `${w}px ${h}px`;
      reveal.style.setProperty("-webkit-mask-size", s);
      reveal.style.maskSize = s;
    };

    const apply = () => {
      const pos = `${cx - W / 2}px ${cy - H / 2}px`;
      reveal.style.setProperty("-webkit-mask-position", pos);
      reveal.style.maskPosition = pos;
    };

    const tick = () => {
      cx += (tx - cx) * LERP;
      cy += (ty - cy) * LERP;
      apply();
      if (Math.abs(tx - cx) < 0.3 && Math.abs(ty - cy) < 0.3) {
        cx = tx;
        cy = ty;
        apply();
        raf = null;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const move = (e: PointerEvent) => {
      const touch = e.pointerType !== "mouse";
      const wantW = touch ? 200 : 110;
      const wantH = touch ? 250 : 140;
      if (W !== wantW) setSize(wantW, wantH);

      const r = stage.getBoundingClientRect();
      tx = e.clientX - r.left;
      // on touch, sit slightly above the finger so it stays visible
      ty = e.clientY - r.top - (touch ? 60 : 0);

      if (!started) {
        started = true;
        cx = tx;
        cy = ty;
        apply();
      }
      reveal.style.opacity = "1";
      if (raf === null) raf = requestAnimationFrame(tick);
    };

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        started = false;
        move(e);
      }
    };
    const hide = () => {
      reveal.style.opacity = "0";
    };
    const up = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") hide();
    };

    stage.addEventListener("pointerdown", down);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerup", up);
    stage.addEventListener("pointercancel", hide);
    stage.addEventListener("pointerleave", hide);
    return () => {
      stage.removeEventListener("pointerdown", down);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerup", up);
      stage.removeEventListener("pointercancel", hide);
      stage.removeEventListener("pointerleave", hide);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  const layer: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    transform: "translateZ(0)",
    userSelect: "none",
    pointerEvents: "none",
  };

  return (
    // Tall wrapper = the distance the hero stays pinned for.
    <section ref={wrapRef} id="intro" className="relative bg-[#111111]" style={{ height: "260vh" }}>
      <div
        ref={stageRef}
        className="sticky top-0 h-screen min-h-[560px] overflow-hidden"
        style={{ touchAction: "pan-y" }}
      >
        {/* 1. clean portrait */}
        <img src="/hero/portrait.jpg" alt="" draggable={false} style={layer} />

        {/* 2. masked version at 10% */}
        <img src="/hero/mask.jpg" alt="" draggable={false} style={{ ...layer, opacity: 0.1 }} />

        {/* 3. masked version, revealed by the spotlight */}
        <img
          ref={revealRef}
          src="/hero/mask.jpg"
          alt=""
          draggable={false}
          style={{
            ...layer,
            opacity: 0,
            transition: "opacity 0.4s ease-out",
            willChange: "opacity",
            WebkitMaskImage: "radial-gradient(closest-side, #000 62%, transparent 100%)",
            maskImage: "radial-gradient(closest-side, #000 62%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "110px 140px",
            maskSize: "110px 140px",
            WebkitMaskPosition: "-9999px -9999px",
            maskPosition: "-9999px -9999px",
          }}
        />

        {/* 4. scrim */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,24,32,0.55) 0%, rgba(20,24,32,0.12) 45%, rgba(20,24,32,0.6) 100%)",
          }}
        />

        {/* 5. extra dimming while the slogan is visible */}
        <div ref={dimRef} className="absolute inset-0 pointer-events-none bg-[#111111]" style={{ opacity: 0 }} />

        {/* 6. slogan (appears while the hero is pinned) */}
        <div
          ref={sloganRef}
          className="absolute inset-0 flex items-center justify-center px-6 text-center pointer-events-none"
          style={{ opacity: 0, willChange: "opacity, transform" }}
        >
          <p
            className="font-editorial text-[#F2EEE6] leading-[1.02]"
            style={{ fontSize: "clamp(40px, 7.4vw, 104px)", fontWeight: 500 }}
          >
            {t.hero.introSlogan}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroHero;
