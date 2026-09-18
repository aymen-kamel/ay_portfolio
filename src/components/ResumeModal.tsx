import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Globe, Code } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 border-primary/30 backdrop-blur-2xl text-foreground p-6 md:p-8">
        <DialogHeader className="border-b border-primary/20 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <DialogTitle className="text-3xl font-bold text-gradient">
                AYMEN KAMEL
              </DialogTitle>
              <DialogDescription className="text-primary font-medium text-lg mt-1">
                Diplômé en Sciences Informatiques — IA & Développement Full-Stack | Étudiant ingénieur, IIT Sfax
              </DialogDescription>
            </div>
            <a
              href="https://drive.google.com/file/d/1SVmsOZSuEtvDWRZJbaE9K9z6dmwT8Tnb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button className="hero-button bg-primary/20 text-primary border-primary/40 hover:bg-primary/30">
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV (PDF)
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground pt-4">
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:kamelaymen793@gmail.com" className="hover:text-primary transition-colors">
                kamelaymen793@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+21627379370" className="hover:text-primary transition-colors">
                +216 27 379 370
              </a>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-accent" /> Sfax, Tunisie
            </span>
            <span className="flex items-center gap-1">
              <Globe className="h-4 w-4 text-accent" />
              <a href="https://aymenkamel.netlify.app" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                aymenkamel.netlify.app
              </a>
            </span>
          </div>
        </DialogHeader>

        <div className="space-y-6 pt-4 text-sm sm:text-base">
          {/* Executive Summary */}
          <section className="bg-muted/20 p-4 rounded-xl border border-primary/10">
            <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
              <Code className="h-5 w-5 text-accent" /> Profil Personnel
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Diplômé en Sciences Informatiques (Licence, 2026), passionné par l'IA, les LLM et le développement logiciel. Curieux et créatif, je transforme mes idées en solutions concrètes avec des technologies comme Python, Java, React, FastAPI et TensorFlow. Motivé par l'innovation, je cherche à contribuer à des projets alliant impact et performance dans le cadre d'un cycle ingénieur informatique.
            </p>
          </section>

          {/* Stages & Projets IA */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-gradient flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-accent" /> Stages & Projets IA
            </h3>

            <div className="border-l-2 border-primary/30 pl-4 space-y-4">
              <div>
                <div className="flex justify-between items-start flex-wrap">
                  <h4 className="font-bold text-foreground text-lg">SmartPlayAI — Stage de Fin d'Études</h4>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-accent/20 text-accent rounded-full">2026</span>
                </div>
                <p className="text-sm text-primary font-medium">Développeur IA & Computer Vision</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>Conception et développement d'une plateforme intelligente d'analyse vidéo pour le padel.</li>
                  <li>Détection et suivi des joueurs à l'aide de modèles YOLO et d'algorithmes de tracking.</li>
                  <li>Détection de la balle avec TrackNet et analyse des trajectoires en temps réel.</li>
                  <li>Extraction de statistiques de performance et génération d'indicateurs tactiques.</li>
                  <li>Développement d'API REST avec FastAPI et intégration d'une interface web React.</li>
                  <li>Participation à l'optimisation des modèles de vision par ordinateur.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap">
                  <h4 className="font-bold text-foreground text-lg">HeroScore — Co-fondateur & Lead AI Developer</h4>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-primary/20 text-primary rounded-full">2025 (Programme OSTX)</span>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                  <li>Développement d'une plateforme SaaS de gamification avec analyse automatique de données.</li>
                  <li>Conception d'algorithmes d'IA pour l'évaluation et le scoring en temps réel.</li>
                  <li>Architecture microservices avec intégration d'APIs intelligentes.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap">
                  <h4 className="font-bold text-foreground text-lg">API de Détection de Joueurs (YOLO11 + FastAPI)</h4>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                  <li>Système de détection d'objets en temps réel pour l'analyse vidéo sportive.</li>
                  <li>Optimisation avec YOLOv11 et REST FastAPI, extraction de métriques vidéo.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start flex-wrap">
                  <h4 className="font-bold text-foreground text-lg">Stage Développeur Full-Stack & IA — Djagora</h4>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-muted/40 text-muted-foreground rounded-full">2025</span>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                  <li>Développement d'applications web avec Angular et NestJS, intégration de fonctionnalités IA.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Formation & Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <section className="bg-muted/10 p-4 rounded-xl border border-primary/10">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-accent" /> Formation
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-foreground">Cycle Ingénieur — Informatique / Data & AI</p>
                  <p className="text-xs text-muted-foreground">IIT Sfax — en cours</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Licence en Sciences Informatiques</p>
                  <p className="text-xs text-muted-foreground">Faculté des Sciences de Sfax — 2023-2026</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Baccalauréat Mathématiques</p>
                  <p className="text-xs text-muted-foreground">Lycée Habib Maazoun — 2023</p>
                </div>
              </div>
            </section>

            <section className="bg-muted/10 p-4 rounded-xl border border-primary/10">
              <h3 className="text-lg font-bold text-accent mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" /> Certifications & Prix
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>NVIDIA Deep Learning Institute</strong> — Deep Learning Fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>OSTX</strong> — Startup Ideation Program (2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>TSYP13 Award (3e place)</strong> — Projet "UtopiaHire: AI Career Architect"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span><strong>IELTS Academic</strong> — Overall Band 5.5</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ResumeModal;
