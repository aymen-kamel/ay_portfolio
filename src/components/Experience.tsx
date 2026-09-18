import React from "react";
import { Calendar, MapPin, Briefcase, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Développeur IA & Computer Vision",
      company: "SmartPlayAI",
      type: "Stage de Fin d'Études",
      period: "2026",
      location: "Tunisie",
      featured: true,
      badge: "SFE 2026",
      techs: ["YOLOv11", "TrackNet", "FastAPI", "React", "Python", "Computer Vision"],
      bullets: [
        "Conception et développement d'une plateforme intelligente d'analyse vidéo sportive pour le padel.",
        "Détection et suivi des joueurs à l'aide de modèles YOLO et d'algorithmes de tracking avancés.",
        "Détection de la balle avec le modèle TrackNet et analyse fine des trajectoires en temps réel.",
        "Extraction automatisée de statistiques de performance et génération d'indicateurs tactiques.",
        "Développement d'APIs REST haute performance avec FastAPI et intégration dans une interface web React.",
        "Optimisation des modèles de vision par ordinateur pour accroître la précision et le framerate d'analyse."
      ]
    },
    {
      role: "Co-fondateur & Lead AI Developer",
      company: "HeroScore",
      type: "Programme OSTX Startup",
      period: "2025",
      location: "Tunisie / Remote",
      featured: true,
      badge: "OSTX 2025",
      techs: ["Python", "Machine Learning", "Microservices", "REST APIs", "SaaS Analytics"],
      bullets: [
        "Développement d'une plateforme SaaS innovante de gamification avec analyse automatique des données sportives.",
        "Conception et entraînement d'algorithmes d'IA pour l'évaluation et le scoring en temps réel des joueurs et équipes.",
        "Conception d'une architecture microservices évolutive et intégration d'APIs intelligentes."
      ]
    },
    {
      role: "Stage Développeur Full-Stack & IA",
      company: "Djagora",
      type: "Stage Professionnel",
      period: "2025",
      location: "Sfax, Tunisie",
      featured: false,
      badge: "Full-Stack & IA",
      techs: ["Angular", "NestJS", "TypeScript", "REST APIs", "IA Integration"],
      bullets: [
        "Développement d'applications web modernes et réactives avec Angular et NestJS.",
        "Intégration de fonctionnalités d'intelligence artificielle au cœur des produits logiciels existants.",
        "Contribution active à l'architecture backend, à la conception d'APIs REST et aux tests de performance."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-muted/10 via-background to-muted/10 relative">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Parcours & Expériences
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stages de fin d'études, rôles de leadership en startup et développements IA / Full-Stack.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`cv-card group transition-all duration-300 ${
                  exp.featured ? 'border-primary/40 shadow-lg shadow-primary/5' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center flex-wrap gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-accent">
                        <Briefcase size={22} />
                      </div>
                      <h3 className="text-2xl font-bold text-gradient">{exp.role}</h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-accent/20 text-accent border border-accent/30 rounded-full">
                        {exp.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xl font-bold text-foreground">
                      <span>{exp.company}</span>
                      <span className="text-muted-foreground text-sm font-normal">({exp.type})</span>
                    </div>
                  </div>

                  <div className="flex flex-row lg:flex-col items-center lg:items-end gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/30 border border-primary/10">
                      <Calendar size={14} className="text-accent" />
                      <span className="font-semibold text-foreground">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/30 border border-primary/10">
                      <MapPin size={14} className="text-primary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-2.5 mb-6 text-base text-muted-foreground">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <ChevronRight size={18} className="text-accent shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/10">
                  {exp.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-muted/40 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;