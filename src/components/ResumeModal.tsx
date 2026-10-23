import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#191719] border-[rgba(242,238,230,0.14)] text-[#F2EEE6] p-6 md:p-10 rounded-2xl shadow-2xl font-sans">
        <DialogHeader className="border-b border-[rgba(242,238,230,0.08)] pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <DialogTitle className="font-editorial text-3xl sm:text-4xl font-bold text-[#F2EEE6]">
                AYMEN KAMEL
              </DialogTitle>
              <DialogDescription className="text-sm font-sans font-medium text-[#8C374A] mt-1">
                {t.resumeModal.subtitle}
              </DialogDescription>
            </div>
            <a
              href="https://drive.google.com/file/d/1SVmsOZSuEtvDWRZJbaE9K9z6dmwT8Tnb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button className="bg-[#702C3B] hover:bg-[#8C374A] text-[#F2EEE6] text-xs font-mono px-5 py-2.5 rounded-full flex items-center gap-2">
                <Download size={14} />
                <span>{t.resumeModal.downloadBtn}</span>
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#96918E] pt-4">
            <span className="flex items-center gap-1.5">
              <Mail size={13} className="text-[#8C374A]" />
              <a href="mailto:kamelaymen793@gmail.com" className="hover:text-[#F2EEE6] transition-colors">
                kamelaymen793@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={13} className="text-[#8C374A]" />
              <a href="tel:+21627379370" className="hover:text-[#F2EEE6] transition-colors">
                +216 27 379 370
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#8C374A]" /> Sfax, Tunisie
            </span>
          </div>
        </DialogHeader>

        <div className="space-y-8 pt-6">
          {/* Executive Summary */}
          <section className="bg-[#111111]/60 p-5 rounded-xl border border-[rgba(242,238,230,0.06)] space-y-2">
            <h3 className="text-xs font-mono tracking-widest uppercase text-[#8C374A]">
              {t.resumeModal.profileTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#96918E] leading-relaxed">
              Diplômé en Sciences Informatiques (Licence, 2026) et étudiant en Cycle Ingénieur (Informatique / Data & AI) à l'IIT Sfax. Spécialisé en Vision par Ordinateur (YOLOv11, TrackNet), architectures RAG et développement web moderne (FastAPI, React, NestJS). Alliant rigueur d'ingénierie et vision produit avec l'ambition de créer des solutions logicielles scalables et impactantes.
            </p>
          </section>

          {/* Stages & Projets IA */}
          <section className="space-y-4">
            <h3 className="font-editorial text-xl font-bold text-[#F2EEE6] flex items-center gap-2">
              <Briefcase size={18} className="text-[#8C374A]" /> Expériences & Projets Marquants
            </h3>

            <div className="border-l-2 border-[#702C3B]/40 pl-4 space-y-5">
              <div>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="font-editorial text-lg font-bold text-[#F2EEE6]">
                    SmartPlayAI — Stage de Fin d'Études (PFE)
                  </h4>
                  <span className="editorial-badge text-[10px] px-2 py-0.5 rounded bg-[#702C3B]/20 text-[#F2EEE6]">
                    2026
                  </span>
                </div>
                <p className="text-xs font-mono text-[#8C374A]">Développeur IA & Computer Vision</p>
                <ul className="list-disc list-inside text-xs text-[#96918E] mt-2 space-y-1">
                  <li>Conception et développement d'une plateforme d'analyse vidéo sportive pour le padel.</li>
                  <li>Détection et tracking des joueurs (YOLOv11) et de la balle (TrackNet) en temps réel.</li>
                  <li>Extraction automatisée de statistiques tactiques via API REST FastAPI et UI React.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="font-editorial text-lg font-bold text-[#F2EEE6]">
                    HeroScore — Co-fondateur & Lead AI Developer
                  </h4>
                  <span className="editorial-badge text-[10px] px-2 py-0.5 rounded bg-[#111111] text-[#96918E] border border-[rgba(242,238,230,0.06)]">
                    2025 (OSTX)
                  </span>
                </div>
                <p className="text-xs font-mono text-[#8C374A]">SaaS & Algorithmes de Scoring Sportif</p>
                <ul className="list-disc list-inside text-xs text-[#96918E] mt-2 space-y-1">
                  <li>Plateforme SaaS de gamification avec scoring automatisé de performances sportives.</li>
                  <li>Architecture microservices en Python avec intégration de flux de données en continu.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="font-editorial text-lg font-bold text-[#F2EEE6]">
                    Djagora — Stage Développeur Full-Stack & IA
                  </h4>
                  <span className="editorial-badge text-[10px] px-2 py-0.5 rounded bg-[#111111] text-[#96918E] border border-[rgba(242,238,230,0.06)]">
                    2025
                  </span>
                </div>
                <p className="text-xs font-mono text-[#8C374A]">Développement Web & Intégration IA</p>
                <ul className="list-disc list-inside text-xs text-[#96918E] mt-1 space-y-1">
                  <li>Conception d'applications avec Angular et NestJS, intégration de microservices d'IA.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Formation & Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <section className="bg-[#111111]/40 p-5 rounded-xl border border-[rgba(242,238,230,0.06)] space-y-3">
              <h3 className="font-editorial text-lg font-bold text-[#F2EEE6] flex items-center gap-2">
                <GraduationCap size={18} className="text-[#8C374A]" /> Formation Académique
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <p className="font-semibold text-[#F2EEE6]">Cycle Ingénieur — Informatique / Data & AI</p>
                  <p className="text-[11px] text-[#96918E]">IIT Sfax — En cours</p>
                </div>
                <div>
                  <p className="font-semibold text-[#F2EEE6]">Licence en Sciences Informatiques</p>
                  <p className="text-[11px] text-[#96918E]">Faculté des Sciences de Sfax — 2023–2026</p>
                </div>
                <div>
                  <p className="font-semibold text-[#F2EEE6]">Baccalauréat Mathématiques</p>
                  <p className="text-[11px] text-[#96918E]">Lycée Habib Maazoun — 2023 (Mention Très Bien)</p>
                </div>
              </div>
            </section>

            <section className="bg-[#111111]/40 p-5 rounded-xl border border-[rgba(242,238,230,0.06)] space-y-3">
              <h3 className="font-editorial text-lg font-bold text-[#F2EEE6] flex items-center gap-2">
                <Award size={18} className="text-[#8C374A]" /> Prix & Certifications
              </h3>
              <ul className="space-y-2 text-xs text-[#96918E]">
                <li><strong className="text-[#F2EEE6]">NVIDIA DLI</strong> — Deep Learning Fundamentals</li>
                <li><strong className="text-[#F2EEE6]">TSYP13 (3e Place)</strong> — Projet "UtopiaHire: AI Career Architect"</li>
                <li><strong className="text-[#F2EEE6]">OSTX</strong> — Startup Ideation Program (2025)</li>
                <li><strong className="text-[#F2EEE6]">IELTS Academic</strong> — Overall Band 5.5</li>
              </ul>
            </section>
          </div>

          <div className="pt-4 border-t border-[rgba(242,238,230,0.08)] flex justify-end">
            <Button
              onClick={onClose}
              className="bg-[#702C3B] hover:bg-[#8C374A] text-[#F2EEE6] text-xs font-mono px-6 rounded-full"
            >
              {t.resumeModal.closeBtn}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
