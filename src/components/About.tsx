import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Terminal, Compass, Lightbulb } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const principleIcons = [Terminal, Compass, Lightbulb];

  return (
    <section id="about" className="section-padding bg-[#111111] relative">
      <div className="container-custom space-y-16">
        {/* Section Header */}
        <div className="editorial-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(242,238,230,0.08)] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#96918E] tracking-widest uppercase">
              <span className="text-[#8C374A] font-bold">04 / 05</span>
              <span>BIOGRAPHY & PHILOSOPHY</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F2EEE6]">
              {t.about.title}
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#96918E] max-w-md font-sans leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative & Principles Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="editorial-reveal delay-150 lg:col-span-7 space-y-6 font-sans text-base sm:text-lg text-[#F2EEE6]/85 font-light leading-relaxed">
            <p className="first-letter:font-editorial first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#8C374A]">
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>
            <p>
              {t.about.p3}
            </p>

            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[#96918E]">
              <span className="text-[#8C374A]">●</span>
              <span>FSS Sfax (2023–2026)</span>
              <span>·</span>
              <span>IIT Sfax (Cycle Ingénieur)</span>
              <span>·</span>
              <span>IEEE CS Active</span>
            </div>
          </div>

          {/* Three Principles Column */}
          <div className="lg:col-span-5 space-y-4">
            {t.about.principles.map((pr, idx) => {
              const Icon = principleIcons[idx] || Sparkles;
              return (
                <div
                  key={idx}
                  className="editorial-card p-6 rounded-2xl space-y-2 hover:border-[#8C374A]/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#111111] border border-[rgba(242,238,230,0.08)] flex items-center justify-center text-[#8C374A]">
                      <Icon size={16} />
                    </div>
                    <h4 className="font-editorial text-lg font-bold text-[#F2EEE6]">
                      {pr.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#96918E] font-sans leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
