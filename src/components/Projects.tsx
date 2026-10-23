import { useState } from "react";
import { ArrowUpRight, CheckCircle2, ChevronRight, X, ExternalLink, Sparkles, Layers, Cpu } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { CaseStudyData } from "@/i18n/translations";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<CaseStudyData | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const flagshipProjects = t.work.projects.filter(
    (p) => p.id === "smartplayai" || p.id === "memora"
  );

  const secondaryProjects = t.work.projects.filter(
    (p) => p.id !== "smartplayai" && p.id !== "memora"
  );

  const filteredSecondary =
    filter === "all"
      ? secondaryProjects
      : filter === "ai"
      ? secondaryProjects.filter((p) => p.tags.includes("Deep Learning") || p.tags.includes("LLM") || p.tags.includes("Computer Vision") || p.tags.includes("RAG") || p.tags.includes("YOLOv11"))
      : secondaryProjects.filter((p) => p.tags.includes("Full-Stack") || p.tags.includes("SaaS") || p.tags.includes("React") || p.tags.includes("FastAPI"));

  return (
    <section id="projects" className="section-padding bg-[#111111] relative">
      <div className="container-custom">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="editorial-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[rgba(242,238,230,0.08)] pb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#96918E] tracking-widest uppercase">
                <span className="text-[#8C374A] font-bold">02 / 05</span>
                <span>SELECTED WORK</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F2EEE6]">
                {t.work.title}
              </h2>
            </div>
            <p className="text-sm md:text-base text-[#96918E] max-w-md font-sans leading-relaxed">
              {t.work.description}
            </p>
          </div>

          {/* Flagship Projects Showcase Grid (Inspired directly by the reference image!) */}
          <div className="grid md:grid-cols-2 gap-8">
            {flagshipProjects.map((project, idx) => {
              const isSmartPlay = project.id === "smartplayai";
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded-2xl overflow-hidden bg-[#191719] border border-[rgba(242,238,230,0.1)] hover:border-[#8C374A]/60 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-xl min-h-[440px]"
                >
                  {/* Visual Background Simulation with Court / Product Texture */}
                  <div className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-[#191719] via-[#111111] to-[#191719]">
                    {isSmartPlay ? (
                      /* SmartPlayAI Court Graphics Mockup */
                      <div className="w-full h-full relative flex items-center justify-center p-6 bg-[#0f1412]">
                        {/* Padel Court Geometry Lines */}
                        <div className="w-full h-full border border-emerald-500/20 relative rounded-lg flex items-center justify-center">
                          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-emerald-500/20"></div>
                          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-emerald-500/30 border-t border-dashed border-emerald-400/40"></div>
                          
                          {/* Player Bounding Box 1 */}
                          <div className="absolute top-6 left-12 w-14 h-20 border border-cyan-400/80 rounded bg-cyan-400/10 flex items-start p-1">
                            <span className="text-[9px] font-mono text-cyan-300 font-semibold leading-none">P1 0.94</span>
                          </div>
                          
                          {/* Player Bounding Box 2 */}
                          <div className="absolute bottom-6 right-16 w-14 h-20 border border-blue-400/80 rounded bg-blue-400/10 flex items-start p-1">
                            <span className="text-[9px] font-mono text-blue-300 font-semibold leading-none">P2 0.96</span>
                          </div>

                          {/* Ball Trajectory TrackNet Dot */}
                          <div className="absolute top-1/2 left-1/3 -translate-y-4">
                            <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 animate-pulse shadow-lg shadow-yellow-400/60"></div>
                            <div className="absolute -top-1 -left-1 w-5.5 h-5.5 rounded-full border border-yellow-400/50"></div>
                          </div>
                        </div>

                        {/* Top Overlay Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="editorial-tag bg-[#111111]/85 text-[#F2EEE6] border-emerald-500/40">
                            YOLOv11 & TrackNet Pipeline
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* MÉMORA Luxury Hardware / Phygital Mockup */
                      <div className="w-full h-full relative flex items-center justify-center p-6 bg-[#161314]">
                        <div className="w-48 h-32 rounded-xl bg-gradient-to-br from-[#241e21] to-[#191719] border border-[#F2EEE6]/15 shadow-2xl p-4 flex flex-col justify-between relative group-hover:scale-105 transition-transform duration-500">
                          <div className="flex items-center justify-between">
                            <span className="font-editorial text-sm font-bold text-[#F2EEE6] tracking-widest">MÉMORA</span>
                            <div className="w-2.5 h-2.5 rounded-full bg-[#8C374A]"></div>
                          </div>
                          <div className="space-y-1">
                            <div className="w-12 h-[1px] bg-[#F2EEE6]/40"></div>
                            <span className="text-[10px] font-mono text-[#96918E]">NFC · PRIVATE VIDEO MEMORY</span>
                          </div>
                        </div>

                        {/* Top Overlay Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="editorial-tag bg-[#111111]/85 text-[#F2EEE6] border-[#8C374A]/40">
                            NFC Phygital Hardware
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191719] via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Content Details */}
                  <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className="text-xs font-mono tracking-widest uppercase text-[#8C374A] font-semibold">
                          0{idx + 1} · {project.categoryTag}
                        </span>
                        <span className="text-xs font-mono text-[#96918E]">{project.dates}</span>
                      </div>

                      <h3 className="font-editorial text-3xl font-bold text-[#F2EEE6] group-hover:text-[#F2EEE6] transition-colors mb-2">
                        {project.name}
                      </h3>

                      <p className="text-sm font-sans font-medium text-[#F2EEE6]/90 mb-3">
                        {project.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-[#96918E] font-sans leading-relaxed line-clamp-3">
                        {project.shortDesc}
                      </p>
                    </div>

                    <div>
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="editorial-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom Action Trigger */}
                      <div className="pt-4 border-t border-[rgba(242,238,230,0.08)] flex items-center justify-between text-xs font-mono tracking-wide text-[#F2EEE6] group-hover:text-[#8C374A] transition-colors">
                        <span>{t.work.viewCaseStudy}</span>
                        <div className="w-8 h-8 rounded-full bg-[#111111] border border-[rgba(242,238,230,0.12)] group-hover:border-[#8C374A] flex items-center justify-center transition-all group-hover:translate-x-1">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Filter Pills for Other Verified Projects */}
          <div className="pt-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <h3 className="font-editorial text-2xl font-bold text-[#F2EEE6]">
                Autres Réalisations & Projets
              </h3>

              <div className="flex items-center gap-2">
                {[
                  { id: "all", label: t.work.filterAll },
                  { id: "ai", label: t.work.filterAI },
                  { id: "web", label: t.work.filterWeb },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                      filter === f.id
                        ? "bg-[#702C3B] text-[#F2EEE6] border-[#702C3B]"
                        : "bg-[#191719] text-[#96918E] border-[rgba(242,238,230,0.08)] hover:text-[#F2EEE6]"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Secondary Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSecondary.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="editorial-card p-6 rounded-xl cursor-pointer hover:border-[#8C374A]/40 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono text-[#8C374A] font-semibold">
                        {proj.dates}
                      </span>
                      <span className="editorial-badge text-[10px] px-2 py-0.5 rounded bg-[rgba(242,238,230,0.05)] text-[#96918E]">
                        {proj.badge}
                      </span>
                    </div>

                    <h4 className="font-editorial text-xl font-bold text-[#F2EEE6] group-hover:text-[#F2EEE6] transition-colors mb-1.5">
                      {proj.name}
                    </h4>

                    <p className="text-xs text-[#96918E] leading-relaxed mb-4 line-clamp-3">
                      {proj.shortDesc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.tags.slice(0, 3).map((tg, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(242,238,230,0.03)] text-[#96918E] border border-[rgba(242,238,230,0.06)]">
                          {tg}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[rgba(242,238,230,0.06)] flex items-center justify-between text-xs font-mono text-[#96918E] group-hover:text-[#F2EEE6] transition-colors">
                      <span>Détails & Architecture</span>
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Deep Case Study Modal (11 Rigorous Pillars) */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#191719] border-[rgba(242,238,230,0.14)] text-[#F2EEE6] p-6 sm:p-10 rounded-2xl shadow-2xl">
            <DialogHeader className="border-b border-[rgba(242,238,230,0.08)] pb-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="editorial-tag bg-[#702C3B]/20 text-[#F2EEE6] border-[#702C3B]/40">
                  {selectedProject.badge}
                </span>
                <span className="text-xs font-mono text-[#96918E]">
                  {selectedProject.dates}
                </span>
              </div>

              <div>
                <DialogTitle className="font-editorial text-3xl sm:text-4xl font-bold text-[#F2EEE6]">
                  {selectedProject.name}
                </DialogTitle>
                <DialogDescription className="text-sm font-sans font-medium text-[#8C374A] pt-1">
                  {selectedProject.statusBadge}
                </DialogDescription>
              </div>

              <p className="text-sm sm:text-base text-[#F2EEE6]/85 font-sans leading-relaxed pt-2">
                {selectedProject.overview}
              </p>
            </DialogHeader>

            <div className="space-y-8 pt-6 font-sans">
              {/* Context & Problem */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono tracking-widest uppercase text-[#8C374A] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C374A]"></span>
                  Contexte & Problématique
                </h4>
                <p className="text-sm text-[#96918E] leading-relaxed">
                  {selectedProject.context}
                </p>
              </div>

              {/* Objectives */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest uppercase text-[#8C374A] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C374A]"></span>
                  Objectifs Techniques
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#F2EEE6]/90">
                  {selectedProject.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#8C374A] shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Role & Contribution */}
              <div className="space-y-2 p-4 rounded-xl bg-[#111111]/60 border border-[rgba(242,238,230,0.06)]">
                <h4 className="text-xs font-mono tracking-widest uppercase text-[#F2EEE6] flex items-center gap-2">
                  <Cpu size={14} className="text-[#8C374A]" />
                  Rôle & Contributions Réelles
                </h4>
                <p className="text-xs sm:text-sm text-[#96918E] leading-relaxed">
                  {selectedProject.role}
                </p>
              </div>

              {/* System Architecture */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest uppercase text-[#8C374A] flex items-center gap-2">
                  <Layers size={14} />
                  Architecture Système
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedProject.architecture.map((arch, i) => (
                    <div key={i} className="p-3.5 rounded-lg bg-[#111111]/40 border border-[rgba(242,238,230,0.06)] text-xs text-[#96918E] flex items-start gap-2">
                      <span className="font-mono text-[#8C374A] font-bold">0{i + 1}.</span>
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono tracking-widest uppercase text-[#8C374A]">
                  Stack Technologique Utilisée
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedProject.techStack.map((stackGroup, i) => (
                    <div key={i} className="space-y-1.5 p-3 rounded-lg bg-[#111111]/30 border border-[rgba(242,238,230,0.04)]">
                      <span className="text-xs font-semibold text-[#F2EEE6] block">
                        {stackGroup.label}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {stackGroup.items.map((item, j) => (
                          <span key={j} className="editorial-tag text-[10px] py-0.5 px-2">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono tracking-widest uppercase text-[#8C374A]">
                  Défis Techniques & Solutions
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#96918E]">
                  {selectedProject.challenges.map((ch, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#8C374A] font-bold">—</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results & Development Status */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono tracking-widest uppercase text-[#8C374A]">
                  Résultats & Statut Actuel
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#F2EEE6]/90">
                  {selectedProject.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Sparkles size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lessons Learned */}
              <div className="space-y-2 p-4 rounded-xl bg-[#702C3B]/10 border border-[#702C3B]/30">
                <h4 className="text-xs font-mono tracking-widest uppercase text-[#F2EEE6]">
                  Enseignements Techniques Clés
                </h4>
                <ul className="space-y-1.5 text-xs text-[#F2EEE6]/80">
                  {selectedProject.lessons.map((les, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#8C374A] font-bold">•</span>
                      <span>{les}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Modal Action */}
              <div className="pt-4 border-t border-[rgba(242,238,230,0.08)] flex justify-end">
                <Button
                  onClick={() => setSelectedProject(null)}
                  className="bg-[#702C3B] hover:bg-[#8C374A] text-[#F2EEE6] text-xs font-mono px-6 rounded-full"
                >
                  {t.work.closeCaseStudy}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Projects;
