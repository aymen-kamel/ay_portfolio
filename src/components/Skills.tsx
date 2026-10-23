import { useLanguage } from "@/context/LanguageContext";
import { Brain, Globe, Cpu, Users, Languages, CheckCircle2 } from "lucide-react";

const Skills = () => {
  const { t } = useLanguage();

  const pillarIcons: Record<string, any> = {
    "01": Brain,
    "02": Globe,
    "03": Cpu,
    "04": Users,
  };

  const spokenLanguages = [
    { name: "Arabe", level: "Langue maternelle / Native", tag: "Native" },
    { name: "Français", level: "Courant / Professional (B2)", tag: "Fluent" },
    { name: "Anglais", level: "Bon niveau académique (IELTS 5.5)", tag: "IELTS 5.5" },
    { name: "Néerlandais", level: "Notions de base / Beginner", tag: "A1" },
  ];

  return (
    <section id="expertise" className="section-padding bg-[#111111] relative">
      <div className="container-custom space-y-16">
        {/* Section Header */}
        <div className="editorial-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(242,238,230,0.08)] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#96918E] tracking-widest uppercase">
              <span className="text-[#8C374A] font-bold">03 / 05</span>
              <span>TECHNICAL DOMAINS</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F2EEE6]">
              {t.expertise.title}
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#96918E] max-w-md font-sans leading-relaxed">
            {t.expertise.description}
          </p>
        </div>

        {/* Four Editorial Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.expertise.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[pillar.id] || Cpu;
            return (
              <div
                key={pillar.id}
                className="editorial-card p-8 rounded-2xl relative overflow-hidden group hover:border-[#8C374A]/50 transition-all duration-300 flex flex-col justify-between min-h-[290px]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-[#8C374A]">
                      {pillar.id}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[rgba(242,238,230,0.08)] flex items-center justify-center text-[#F2EEE6] group-hover:text-[#8C374A] transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#F2EEE6] mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#96918E] font-sans leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(242,238,230,0.06)]">
                  {pillar.technologies.map((tech, i) => (
                    <span key={i} className="editorial-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Spoken Languages & IT Sourcing Section */}
        <div className="grid md:grid-cols-12 gap-8 pt-4">
          {/* Spoken Languages */}
          <div className="md:col-span-6 editorial-card p-8 rounded-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#111111] border border-[rgba(242,238,230,0.08)] flex items-center justify-center text-[#8C374A]">
                <Languages size={18} />
              </div>
              <div>
                <h4 className="font-editorial text-xl font-bold text-[#F2EEE6]">
                  Langues & Communication
                </h4>
                <p className="text-xs text-[#96918E] font-sans">
                  Profil international et environnement multiculturel
                </p>
              </div>
            </div>

            <div className="space-y-3 font-sans">
              {spokenLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#111111]/40 border border-[rgba(242,238,230,0.06)]"
                >
                  <div>
                    <span className="font-medium text-sm text-[#F2EEE6] block">
                      {lang.name}
                    </span>
                    <span className="text-xs text-[#96918E]">
                      {lang.level}
                    </span>
                  </div>
                  <span className="editorial-badge text-[11px] px-2.5 py-1 rounded bg-[#702C3B]/15 text-[#F2EEE6] border border-[#702C3B]/30">
                    {lang.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* IT Talent Sourcing & Methodologies */}
          <div className="md:col-span-6 editorial-card p-8 rounded-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#111111] border border-[rgba(242,238,230,0.08)] flex items-center justify-center text-[#8C374A]">
                <Users size={18} />
              </div>
              <div>
                <h4 className="font-editorial text-xl font-bold text-[#F2EEE6]">
                  Sourcing & Recrutement Technique
                </h4>
                <p className="text-xs text-[#96918E] font-sans">
                  Expertise développée lors des projets de matching IA & TSYP13
                </p>
              </div>
            </div>

            <div className="space-y-2.5 font-sans">
              {[
                "Cartographie des compétences informatiques & Talent Mapping",
                "Screening & qualification technique approfondie des candidats",
                "Compréhension fine des architectures technologiques d'entreprise",
                "Communication structurée entre équipes techniques et recruteurs",
                "Pratique rigoureuse des méthodologies Agiles / Scrum",
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-[#111111]/40 border border-[rgba(242,238,230,0.06)]">
                  <CheckCircle2 size={16} className="text-[#8C374A] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#F2EEE6]/90 font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
