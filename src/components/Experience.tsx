import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Founder",
      company: "HeroScore",
      period: "2024 – Present",
      location: "Tunisia",
      summary: "Built an AI-powered mobile app for Tunisian football analytics: match stats, player ratings, and fan engagement features (predictions, voting). Led product, data collection and prototype development.",
      featured: true
    },
    {
      role: "Intern",
      company: "Djagora", 
      period: "2025",
      location: "Tunisia",
      summary: "Worked on frontend/backend tasks and delivered features for the platform. Contributed to UI improvements and integrations."
    },
    {
      role: "Student Projects & Hackathons",
      company: "Various",
      period: "2023 – Present", 
      location: "Sfax / Remote",
      summary: "Arduino side-scroller game (I2C LCD), YOLOv8 + FastAPI player detection prototype, n8n Telegram automation bot using SofaScore, and other AI/ML experiments."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-muted/10 via-background to-muted/10">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`cv-card group ${exp.featured ? 'border-accent/40' : ''}`}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <Briefcase className="text-primary mr-3" size={24} />
                      <h3 className="text-2xl font-bold text-gradient">{exp.role}</h3>
                      {exp.featured && (
                        <span className="ml-3 px-3 py-1 text-xs font-medium bg-accent/20 text-accent border border-accent/30 rounded-full">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <p className="text-xl text-primary font-semibold mb-2">{exp.company}</p>
                  </div>
                  <div className="flex flex-col lg:items-end mt-4 lg:mt-0">
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar size={16} className="mr-2 text-accent" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin size={16} className="mr-2 text-accent" />
                      <span className="text-sm font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{exp.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;