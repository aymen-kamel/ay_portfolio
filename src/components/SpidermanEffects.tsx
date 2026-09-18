import React, { useState, useEffect, useRef } from "react";
import { Zap, Volume2, VolumeX, Sparkles, MessageSquare, X } from "lucide-react";

interface WebClick {
  id: number;
  x: number;
  y: number;
}

export const SpidermanEffects = () => {
  const [webs, setWebs] = useState<WebClick[]>([]);
  const [spideyQuote, setSpideyQuote] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeSpidey, setActiveSpidey] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const quotes = [
    "🕷️ With great code comes great responsibility!",
    "⚡ Spider-Sense is tingling! High-performance AI detected!",
    "🕸️ Your friendly neighborhood AI & Full-Stack Engineer!",
    "🎯 Web-slinging through FastAPI, React & Computer Vision!",
    "🚀 Scaling microservices faster than swinging through Manhattan!"
  ];

  // Web shooting canvas effect on document click
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Don't trigger web click on buttons or interactive inputs if clicked directly
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("input") || target.closest("a") || target.closest("textarea")) {
        return;
      }

      const newWeb: WebClick = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };

      setWebs(prev => [...prev.slice(-4), newWeb]); // keep up to 5 active webs

      // Play web shoot sound effect if enabled
      if (soundEnabled) {
        try {
          const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(800, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.15);
          gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.15);
        } catch (err) {
          // Audio context fallback
        }
      }
    };

    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", handleDocumentClick);
  }, [soundEnabled]);

  // Draw webs on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render web lines connecting recent click points to Spiderman in bottom right corner
      const spideyAnchorX = window.innerWidth - 80;
      const spideyAnchorY = window.innerHeight - 100;

      webs.forEach(web => {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(spideyAnchorX, spideyAnchorY);
        ctx.lineTo(web.x, web.y);
        ctx.strokeStyle = "rgba(239, 68, 68, 0.7)";
        ctx.lineWidth = 2;
        ctx.shadowColor = "rgba(59, 130, 246, 0.9)";
        ctx.shadowBlur = 8;
        ctx.stroke();

        // Draw web burst circle at click target
        ctx.beginPath();
        ctx.arc(web.x, web.y, 16, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw web radial spokes
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4;
          ctx.beginPath();
          ctx.moveTo(web.x, web.y);
          ctx.lineTo(web.x + Math.cos(angle) * 24, web.y + Math.sin(angle) * 24);
          ctx.strokeStyle = "rgba(239, 68, 68, 0.8)";
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [webs]);

  const triggerSpideyQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSpideyQuote(randomQuote);

    // Swap Spidey character image
    setActiveSpidey(prev => (prev % 3) + 1);

    setTimeout(() => {
      setSpideyQuote(null);
    }, 4500);
  };

  return (
    <>
      {/* Dynamic Canvas for Interactive Web Lines */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-40"
      />

      {/* Spidey Floating Quote Bubble */}
      {spideyQuote && (
        <div className="fixed bottom-36 right-6 z-50 max-w-xs sm:max-w-sm p-4 rounded-2xl bg-gradient-to-r from-red-950/90 via-slate-900/95 to-blue-950/90 border-2 border-red-500/80 backdrop-blur-xl text-white shadow-2xl animate-bounce">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
              <Zap size={14} className="text-yellow-400 animate-pulse" /> Spider-Sense Alert
            </div>
            <button
              onClick={() => setSpideyQuote(null)}
              className="text-gray-400 hover:text-white"
            >
              <X size={14} />
            </button>
          </div>
          <p className="text-sm font-semibold leading-snug">{spideyQuote}</p>
        </div>
      )}

      {/* Hanging / Crawling Spider-Man Widget */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 group">
        {/* Sound FX Toggle & Spidey Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full bg-slate-900/80 border border-red-500/40 text-red-400 hover:text-white hover:bg-red-600/30 transition-all backdrop-blur-md shadow-lg"
            title={soundEnabled ? "Disable Web Sound FX" : "Enable Web Sound FX"}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          <span className="px-3 py-1 bg-red-600/20 border border-red-500/40 rounded-full text-xs font-bold text-red-400 backdrop-blur-md shadow-lg flex items-center gap-1">
            <Zap size={12} className="text-yellow-400 animate-spin" /> Spidey Mode
          </span>
        </div>

        {/* Spiderman Character Avatar Container */}
        <div
          onClick={triggerSpideyQuote}
          className="relative cursor-pointer animate-spidey-swing transition-transform hover:scale-110"
          title="Click Spider-Man to shoot webs & speak!"
        >
          {/* Hanging Web Thread */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-transparent via-red-400/80 to-white"></div>

          {/* Character Image */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-red-500/60 bg-gradient-to-br from-red-600/20 via-blue-600/20 to-slate-950/80 p-1.5 backdrop-blur-xl shadow-2xl shadow-red-500/30">
            <img
              src={`/spiderman/spiderman${activeSpidey}.${activeSpidey === 3 ? 'png' : 'jpg'}`}
              alt="Spider-Man"
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
            />
          </div>

          {/* Spider Sense Ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/40 animate-spider-sense pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};

export default SpidermanEffects;
