import React from "react";
import { Code, Brain, Globe, Wrench, Users, Languages, CheckCircle } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Langages de Programmation",
      icon: Code,
      items: [
        { name: "Python", level: "Expert" },
        { name: "TypeScript / JS", level: "Avancé" },
        { name: "Java", level: "Avancé" },
        { name: "SQL", level: "Intermédiaire" }
      ]
    },
    {
      name: "IA & Machine Learning",
      icon: Brain,
      items: [
        { name: "Computer Vision (YOLOv11, TrackNet)", level: "Spécialité" },
        { name: "LLMs & RAG Architectures", level: "Avancé" },
        { name: "TensorFlow / Keras", level: "Avancé" },
        { name: "Deep Learning & NLP", level: "Pratique" }
      ]
    },
    {
      name: "Développement Web & APIs",
      icon: Globe,
      items: [
        { name: "FastAPI", level: "Expert" },
        { name: "React", level: "Avancé" },
        { name: "NestJS & Node.js", level: "Avancé" },
        { name: "Angular & Spring", level: "Intermédiaire" }
      ]
    },
    {
      name: "Outils & Méthodologies",
      icon: Wrench,
      items: [
        { name: "Git & GitHub", level: "Quotidien" },
        { name: "Docker & DevOps", level: "Pratique" },
        { name: "Agile / Scrum", level: "Maîtrisé" },
        { name: "Architecture Logicielle", level: "Avancé" }
      ]
    }
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle", percentage: 100 },
    { name: "Français", level: "Courant (B2)", percentage: 85 },
    { name: "Anglais", level: "Bon niveau (IELTS 5.5)", percentage: 75 },
    { name: "Néerlandais", level: "Débutant", percentage: 25 }
  ];

  const sourcingSkills = [
    "IT Talent Sourcing & Candidate Screening",
    "Recherche de profils IT & Talent Mapping",
    "Qualification technique des candidats",
    "LinkedIn Research & Business Development",
    "Communication candidats & clients IT",
    "Organisation & Autonomie"
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-background via-muted/20 to-background relative">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Compétences & Langues
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Panorama de mes stacks techniques en IA, développement full-stack, langues et sourcing informatique.
            </p>
          </div>

          {/* Core Technical Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div key={idx} className="cv-card group hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-accent">
                      <IconComp size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gradient">{cat.name}</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors flex flex-col justify-between"
                      >
                        <span className="font-semibold text-foreground text-sm">{skill.name}</span>
                        <span className="text-xs text-primary font-medium mt-1">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sourcing & Languages Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* IT Talent Sourcing Skills */}
            <div className="cv-card border-accent/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-gradient">Compétences Sourcing & Recrutement IT</h3>
              </div>

              <div className="space-y-3">
                {sourcingSkills.map((sk, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/20 border border-primary/10">
                    <CheckCircle size={18} className="text-accent shrink-0" />
                    <span className="text-sm text-foreground/90 font-medium">{sk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Progress */}
            <div className="cv-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <Languages size={24} />
                </div>
                <h3 className="text-xl font-bold text-gradient">Langues</h3>
              </div>

              <div className="space-y-5">
                {languages.map((lang, lIdx) => (
                  <div key={lIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-foreground">{lang.name}</span>
                      <span className="text-primary text-xs font-medium">{lang.level}</span>
                    </div>
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden p-0.5 border border-primary/10">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;