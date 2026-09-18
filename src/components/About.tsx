import React from "react";
import { Sparkles, GraduationCap, Code, Rocket, Search, Globe, Award } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Cycle Ingénieur — Informatique / Data & AI",
      institution: "IIT Sfax",
      period: "En cours",
      status: "Ingénierie & Data Science",
      color: "border-primary/40 text-primary"
    },
    {
      degree: "Licence en Sciences Informatiques",
      institution: "Faculté des Sciences de Sfax (FSS)",
      period: "2023 – 2026",
      status: "Diplômé Licence",
      color: "border-accent/40 text-accent"
    },
    {
      degree: "Baccalauréat Mathématiques",
      institution: "Lycée Habib Maazoun",
      period: "2023",
      status: "Mention Très Bien / Math",
      color: "border-muted-foreground/30 text-muted-foreground"
    }
  ];

  const highlights = [
    {
      icon: Code,
      title: "IA & Computer Vision",
      desc: "Détection temps réel (YOLOv11), suivi d'objets (TrackNet) et modèles RAG avec LLMs."
    },
    {
      icon: Rocket,
      title: "Co-fondateur & Product Lead",
      desc: "Lead AI Developer pour HeroScore (Programme OSTX 2025) - SaaS gamification & analytics."
    },
    {
      icon: Search,
      title: "IT Talent Sourcing & Matching",
      desc: "Compréhension fine des rôles IT, qualification technique & sourcing de candidats (TSYP13 Winner)."
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              À propos de moi
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Étudiant ingénieur passionné par l'innovation logicielle, la vision par ordinateur et la création de valeur produit.
            </p>
          </div>

          <div className="cv-card group space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-accent">
                <Sparkles size={28} className="animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient">Profil Professionnel</h3>
                <p className="text-xs text-muted-foreground">Diplômé Licence Sciences Informatiques | IIT Sfax</p>
              </div>
            </div>

            <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                Diplômé en Sciences Informatiques (Licence, 2026) et actuellement étudiant en Cycle Ingénieur (Informatique / Data & AI) à l'<strong>IIT Sfax</strong>. Passionné par l'Intelligence Artificielle, la Vision par Ordinateur, les LLM et le développement d'applications web scalables.
              </p>

              <p>
                Mon parcours technique me permet de concevoir et déployer des architectures complètes : des pipelines d'analyse vidéo en temps réel (<span className="text-primary font-semibold">YOLOv11, TrackNet</span>) jusqu'aux APIs REST performantes (<span className="text-accent font-semibold">FastAPI, NestJS</span>) et interfaces web réactives (<span className="text-foreground font-semibold">React, Angular</span>).
              </p>

              <p>
                Co-fondateur et Lead AI Developer de <strong className="text-primary font-semibold">HeroScore</strong> dans le cadre du programme startup <strong>OSTX (2025)</strong>, j'allie rigueur d'ingénierie logicielle et vision produit. Je m'intéresse également au recrutement technique (<span className="text-accent font-medium">IT Talent Sourcing & Screening</span>), avec une ambition affirmée pour les marchés IT européen et international.
              </p>
            </div>

            {/* Highlights cards */}
            <div className="grid md:grid-cols-3 gap-6 pt-4">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl bg-muted/20 border border-primary/15 hover:border-primary/40 transition-all duration-300">
                    <IconComp size={24} className="text-accent mb-3" />
                    <h4 className="font-bold text-foreground mb-1 text-base">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Timeline Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gradient flex items-center gap-3">
              <GraduationCap className="text-accent" size={28} /> Formation Académique
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="cv-card hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${edu.color}`}>
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                    <p className="text-primary font-medium text-sm mb-2">{edu.institution}</p>
                  </div>
                  <div className="pt-4 border-t border-primary/10 text-xs text-muted-foreground flex items-center justify-between">
                    <span>{edu.status}</span>
                    <Award size={16} className="text-accent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;