import { useLanguage } from "@/context/LanguageContext";

const EditorialBanner = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#141214] border-y border-[rgba(242,238,230,0.06)] relative overflow-hidden">
      {/* Restrained burgundy background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-48 bg-[#702C3B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom text-center relative z-10 space-y-6 editorial-reveal">
        <div className="text-xs font-mono tracking-[0.25em] text-[#8C374A] uppercase">
          {t.quoteBanner.pillars}
        </div>

        <blockquote className="font-editorial text-2xl sm:text-4xl md:text-5xl font-medium text-[#F2EEE6] tracking-tight max-w-4xl mx-auto leading-snug italic">
          “{t.quoteBanner.quote}”
        </blockquote>

        <div className="flex items-center justify-center gap-3 pt-2">
          <span className="w-12 h-[1px] bg-[rgba(242,238,230,0.15)]"></span>
          <span className="text-xs font-mono text-[#96918E] tracking-widest uppercase">AYMEN KAMEL</span>
          <span className="w-12 h-[1px] bg-[rgba(242,238,230,0.15)]"></span>
        </div>
      </div>
    </section>
  );
};

export default EditorialBanner;
