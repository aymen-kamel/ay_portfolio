import React from "react";
import { Award, CheckCircle2, Trophy, Users, Globe, ExternalLink } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "NVIDIA Deep Learning Institute",
      subtitle: "Deep Learning Fundamentals",
      category: "AI Certification",
      date: "Certified",
      icon: Trophy,
      badgeColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30",
      description: "Comprehensive training on neural network architectures, computer vision model training, hyperparameter tuning, and PyTorch/TensorFlow frameworks."
    },
    {
      title: "OSTX Startup Program",
      subtitle: "Entrepreneurship & Startup Ideation",
      category: "Startup & Product",
      date: "2025",
      icon: Award,
      badgeColor: "from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30",
      description: "Focused training on SaaS product development, business ideation, rapid prototyping, microservices architecture, and pitch presentation."
    },
    {
      title: "TSYP13 National Competition",
      subtitle: "3rd Place Winner — Team FSS",
      category: "Award & AI Innovation",
      date: "National Award",
      icon: Trophy,
      badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
      description: "Project 'UtopiaHire: AI Career Architect' — AI platform matching candidate skill matrices, career opportunities, and candidate talent sourcing."
    },
    {
      title: "IELTS Academic",
      subtitle: "Band 5.5",
      category: "Language Competency",
      date: "International Certification",
      icon: Globe,
      badgeColor: "from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/30",
      description: "Official academic English language certification evaluating listening, reading, writing, and speaking skills."
    }
  ];

  const leaderships = [
    {
      title: "IEEE Computer Society",
      role: "Executive Bureau Member (2 Years)",
      description: "Coordinated activities, organized tech workshops, webinars, and regional hackathons fostering computer science collaboration."
    },
    {
      title: "Tech Congresses & Symposia",
      role: "Participant & Speaker Representative",
      description: "Active participation in CSTAM, IEEE Xtreme 18.0, WiEAct, and PESTGM.i presenting cutting-edge advances in AI and software engineering."
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Certifications & Leadership
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognized certifications, innovation awards, and community engagement in AI and software engineering.
            </p>
          </div>

          {/* Grid of Certifications */}
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="cv-card group hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-accent group-hover:scale-110 transition-transform duration-300">
                        <IconComp size={28} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${item.badgeColor}`}>
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gradient mb-1">{item.title}</h3>
                    <p className="text-primary font-medium text-base mb-3">{item.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-primary/10 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-accent font-medium">
                      <CheckCircle2 size={14} /> Verified Achievement
                    </span>
                    <span>{item.date}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Leadership & Activities */}
          <div className="cv-card border-accent/30 bg-gradient-to-r from-card/80 via-muted/30 to-card/80">
            <div className="flex items-center gap-3 mb-8">
              <Users size={28} className="text-accent" />
              <h3 className="text-2xl font-bold text-gradient">Activités, Engagements & IEEE</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {leaderships.map((act, i) => (
                <div key={i} className="space-y-2 p-4 rounded-xl bg-background/50 border border-primary/10">
                  <h4 className="text-lg font-bold text-foreground">{act.title}</h4>
                  <p className="text-xs text-accent font-semibold">{act.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{act.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
