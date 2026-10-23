import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, MapPin, Check, Copy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY <= 900) {
        setScrollProgress(scrollY / 900);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kamelaymen793@gmail.com");
    setCopied(true);
    toast({
      title: "Email copié !",
      description: "kamelaymen793@gmail.com a été copié dans le presse-papier.",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-10 overflow-hidden bg-[#111111]"
    >
      {/* Subtle deep burgundy atmospheric glow behind the composition */}
      <div className="absolute top-1/4 right-0 lg:right-1/6 w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(140,55,74,0.14)_0%,_rgba(112,44,59,0.05)_50%,_transparent_72%)] blur-[95px] pointer-events-none -z-0"></div>

      <div className="container-custom my-auto py-6 sm:py-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Hierarchy */}
          <div
            className="lg:col-span-7 space-y-7 z-10"
            style={{
              transform: `translateY(${scrollProgress * 18}px)`,
              opacity: Math.max(0.2, 1 - scrollProgress * 0.75),
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            {/* 1. Professional Subtitle Label */}
            <div className="flex items-center gap-3 text-xs md:text-sm font-mono tracking-widest text-[#96918E] animate-hero-slide-1">
              <span className="inline-block w-8 h-[1px] bg-[#96918E]/60"></span>
              <span className="uppercase">{t.hero.roleLabel}</span>
            </div>

            {/* 2. Editorial Three-Line Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl xl:text-[5.2rem] font-bold tracking-tight text-[#F2EEE6] leading-[1.06] animate-hero-slide-2">
              <span>{t.hero.headlineLine1 || "Engineering"}</span>
              <br />
              <span className="font-normal text-[#F2EEE6]/95">
                {t.hero.headlineLine2 || "intelligence."}
              </span>
              <br />
              <span className="text-[#8C374A] font-normal italic font-editorial">
                {t.hero.headlineLine3 || "Creating impact."}
              </span>
            </h1>

            {/* 3. Refined Burgundy Separator */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#8C374A] via-[#8C374A]/60 to-transparent animate-hero-slide-2"></div>

            {/* Mobile Portrait Integration (Cleanly positioned on mobile between headline and description) */}
            <div className="lg:hidden relative flex justify-center py-4 animate-hero-portrait">
              <div className="relative w-full max-w-[270px] sm:max-w-[310px] aspect-[4/5] flex items-center justify-center">
                {/* Burgundy rim glow behind head */}
                <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[270px] h-[270px] bg-[radial-gradient(circle,_rgba(140,55,74,0.24)_0%,_transparent_70%)] blur-2xl pointer-events-none"></div>

                {/* Subtle orbital ring for mobile */}
                <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full border border-[rgba(140,55,74,0.22)] pointer-events-none animate-hero-orbit">
                  <div className="absolute top-6 right-6 w-2 h-2 bg-[#8C374A] rotate-45 border border-[#F2EEE6]/40 shadow-[0_0_8px_rgba(140,55,74,0.7)]"></div>
                </div>

                {/* Natural portrait without rectangular frame */}
                <img
                  src="/images/aymen-cybernetic-avatar.png"
                  alt="Aymen Kamel — AI Engineer & Full-Stack Developer"
                  className="w-full h-full object-cover object-top cinematic-portrait-mask"
                  loading="eager"
                />

                {/* Soft perimeter vignette and bottom dissolve */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_68%_68%_at_50%_42%,transparent_32%,rgba(17,17,17,0.4)_52%,#111111_78%)] pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* 4. Supporting Editorial Description */}
            <p className="text-base sm:text-lg md:text-xl text-[#F2EEE6]/85 font-sans leading-relaxed max-w-2xl font-light animate-hero-slide-3">
              {t.hero.description}
            </p>

            {/* Live Opportunity Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#191719]/90 border border-[rgba(242,238,230,0.1)] text-xs md:text-sm text-[#F2EEE6]/90 shadow-sm animate-hero-slide-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-sans font-medium">{t.hero.status}</span>
            </div>

            {/* 5. Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1 animate-hero-slide-4">
              <Button
                onClick={() => scrollTo("projects")}
                className="h-13 px-8 bg-[#702C3B] hover:bg-[#8C374A] text-[#F2EEE6] text-sm md:text-base font-sans font-medium rounded-full transition-all duration-300 shadow-lg shadow-[#702C3B]/25 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>{t.hero.ctaWork}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => scrollTo("contact")}
                variant="outline"
                className="h-13 px-7 bg-transparent border-[rgba(242,238,230,0.22)] hover:border-[rgba(242,238,230,0.5)] text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.05)] text-sm md:text-base font-sans font-medium rounded-full transition-all duration-300 cursor-pointer"
              >
                {t.hero.ctaContact}
              </Button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#96918E] hover:text-[#F2EEE6] transition-colors px-3 py-2 border border-transparent hover:border-[rgba(242,238,230,0.08)] rounded-full cursor-pointer"
                title="Copier l'email"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>kamelaymen793@gmail.com</span>
              </button>
            </div>

            {/* 6. Geographic & Availability Location Line */}
            <div className="flex items-center gap-2 text-xs text-[#96918E] font-sans pt-1 animate-hero-slide-4">
              <MapPin size={13} className="text-[#8C374A]" />
              <span>{t.hero.location}</span>
            </div>
          </div>

          {/* Right Column: Desktop Natural Blended Portrait & Astronomical Orbital Ring */}
          <div
            className="hidden lg:flex lg:col-span-5 relative items-center justify-center animate-hero-portrait select-none pointer-events-none"
            style={{
              transform: `scale(${Math.max(0.92, 1 - scrollProgress * 0.05)}) translateY(${
                scrollProgress * 26
              }px)`,
              opacity: Math.max(0.35, 1 - scrollProgress * 0.55),
              transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
            }}
          >
            <div className="relative w-full max-w-[440px] xl:max-w-[480px] aspect-[4/5] flex items-center justify-center">
              {/* Layer 1: Burgundy Rim Atmospheric Light centered directly behind head */}
              <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[radial-gradient(ellipse_at_center,_rgba(140,55,74,0.22)_0%,_rgba(112,44,59,0.08)_50%,_transparent_72%)] blur-2xl"></div>

              {/* Layer 2: Geometric Orbital Hairline & Diamond Node */}
              <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[390px] h-[390px] xl:w-[440px] xl:h-[440px] rounded-full border border-[rgba(140,55,74,0.25)] animate-hero-orbit">
                {/* Diamond Accent Node */}
                <div className="absolute top-10 right-10 w-2.5 h-2.5 bg-[#8C374A] rotate-45 border border-[#F2EEE6]/50 shadow-[0_0_12px_rgba(140,55,74,0.8)]"></div>
              </div>

              {/* Layer 3: Natural Portrait with Mask */}
              <img
                src="/images/aymen-cybernetic-avatar.png"
                alt="Aymen Kamel — AI Engineer & Full-Stack Developer"
                className="w-full h-full object-cover object-top cinematic-portrait-mask filter contrast-[1.03] brightness-[0.98]"
                loading="eager"
              />

              {/* Layer 4: Multi-Directional Seamless Void Blends */}
              {/* Soft perimeter vignette preserving face in center */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_68%_68%_at_50%_42%,transparent_32%,rgba(17,17,17,0.4)_52%,#111111_78%)]"></div>
              {/* Bottom fade dissolving coat into #111111 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar & Clickable Scroll Hint */}
      <div className="container-custom pt-6 border-t border-[rgba(242,238,230,0.06)]">
        <div className="flex items-center justify-between text-xs font-mono text-[#96918E]">
          <div className="flex items-center gap-3">
            <span className="text-[#F2EEE6] font-semibold">01 / 05</span>
            <span className="tracking-widest uppercase">
              {t.hero.scrollIndicator || "SELECTED WORK"}
            </span>
            <span className="hidden sm:inline-block w-24 h-[1px] bg-[rgba(242,238,230,0.12)]"></span>
          </div>

          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2 hover:text-[#F2EEE6] transition-colors focus:outline-none group cursor-pointer"
            aria-label="Scroll to selected work"
          >
            <span className="tracking-wider">SCROLL TO EXPLORE</span>
            <ArrowDown
              size={13}
              className="text-[#8C374A] group-hover:translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
