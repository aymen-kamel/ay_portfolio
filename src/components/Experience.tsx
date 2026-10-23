import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, Calendar, MapPin, GraduationCap, Award, ChevronRight, Users, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding bg-[#141214] relative">
      <div className="container-custom space-y-20">
        {/* Section Header */}
        <div className="editorial-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(242,238,230,0.08)] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#96918E] tracking-widest uppercase">
              <span className="text-[#8C374A] font-bold">04 / 05</span>
              <span>JOURNEY & CREDENTIALS</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F2EEE6]">
              {t.experience.title}
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#96918E] max-w-md font-sans leading-relaxed">
            {t.experience.description}
          </p>
        </div>

        {/* Roles & Experiences Timeline */}
        <div className="space-y-8">
          <h3 className="font-editorial text-2xl font-bold text-[#F2EEE6] flex items-center gap-3">
            <Briefcase size={22} className="text-[#8C374A]" />
            <span>{t.experience.rolesTitle}</span>
          </h3>

          <div className="space-y-6 editorial-reveal delay-150">
            {t.experience.roles.map((exp, idx) => (
              <div
                key={idx}
                className="editorial-card p-8 rounded-2xl group hover:border-[#8C374A]/40 transition-all duration-300 space-y-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center flex-wrap gap-3">
                      <h4 className="font-editorial text-2xl font-bold text-[#F2EEE6]">
                        {exp.role}
                      </h4>
                      <span className="editorial-badge px-3 py-1 rounded-full bg-[#702C3B]/20 text-[#F2EEE6] border border-[#702C3B]/40">
                        {exp.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-base font-sans font-medium text-[#F2EEE6]/90">
                      <span>{exp.company}</span>
                      <span className="text-[#96918E] text-xs font-normal">({exp.type})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-[#96918E]">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] border border-[rgba(242,238,230,0.06)]">
                      <Calendar size={13} className="text-[#8C374A]" />
                      <span className="text-[#F2EEE6]">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] border border-[rgba(242,238,230,0.06)]">
                      <MapPin size={13} className="text-[#8C374A]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#96918E] leading-relaxed">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <ChevronRight size={15} className="text-[#8C374A] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(242,238,230,0.06)]">
                  {exp.techs.map((tech, tIdx) => (
                    <span key={tIdx} className="editorial-tag text-[10px] py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Formation & Education Grid */}
        <div className="space-y-8 pt-4">
          <h3 className="font-editorial text-2xl font-bold text-[#F2EEE6] flex items-center gap-3">
            <GraduationCap size={22} className="text-[#8C374A]" />
            <span>{t.experience.educationTitle}</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {t.experience.education.map((edu, idx) => (
              <div
                key={idx}
                className="editorial-card p-6 rounded-2xl flex flex-col justify-between hover:border-[#8C374A]/40 transition-all space-y-4"
              >
                <div className="space-y-3">
                  <span className="editorial-badge inline-block text-[10px] px-2.5 py-0.5 rounded-full bg-[#111111] text-[#8C374A] border border-[#8C374A]/30">
                    {edu.period}
                  </span>
                  <h4 className="font-editorial text-xl font-bold text-[#F2EEE6] leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-mono text-[#8C374A]">
                    {edu.institution}
                  </p>
                </div>

                <div className="pt-3 border-t border-[rgba(242,238,230,0.06)] text-xs text-[#96918E]">
                  {edu.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Leadership Grid */}
        <div className="grid lg:grid-cols-12 gap-8 pt-4">
          {/* Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-editorial text-2xl font-bold text-[#F2EEE6] flex items-center gap-3">
              <Award size={22} className="text-[#8C374A]" />
              <span>{t.experience.certTitle}</span>
            </h3>

            <div className="space-y-4">
              {t.experience.certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="editorial-card p-5 rounded-xl space-y-2 hover:border-[#8C374A]/30 transition-all"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="editorial-badge text-[10px] text-[#8C374A]">
                      {cert.category}
                    </span>
                    <span className="text-[11px] font-mono text-[#96918E]">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="font-editorial text-lg font-bold text-[#F2EEE6]">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-medium text-[#F2EEE6]/80 font-sans">
                    {cert.subtitle}
                  </p>
                  <p className="text-xs text-[#96918E] font-sans leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IEEE Leadership & Community */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-editorial text-2xl font-bold text-[#F2EEE6] flex items-center gap-3">
              <Users size={22} className="text-[#8C374A]" />
              <span>{t.experience.leadershipTitle}</span>
            </h3>

            <div className="editorial-card p-6 rounded-2xl space-y-6">
              {t.experience.leadership.map((lead, lIdx) => (
                <div key={lIdx} className="space-y-2 pb-6 border-b border-[rgba(242,238,230,0.06)] last:border-b-0 last:pb-0">
                  <span className="editorial-badge text-[10px] text-[#8C374A] block">
                    {lead.role}
                  </span>
                  <h4 className="font-editorial text-lg font-bold text-[#F2EEE6]">
                    {lead.title}
                  </h4>
                  <p className="text-xs text-[#96918E] font-sans leading-relaxed">
                    {lead.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
