import { ExternalLink, Calendar, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "HeroScore",
      dates: "2024 – Present",
      tags: ["Mobile", "AI", "Sports Analytics"],
      description: "Data-first mobile app for Tunisian football that tracks lineups, player stats, performance ratings and uses AI to predict match favorites.",
      link: "#",
      featured: true
    },
    {
      name: "YOLOv8 Player Detection API", 
      dates: "2025",
      tags: ["Computer Vision", "FastAPI"],
      description: "Detects player positions in frames and returns a structured JSON for each frame (no tracking/ID). Built as a REST POST /detect endpoint.",
      link: "#"
    },
    {
      name: "Arduino Side-Scroller (I2C LCD)",
      dates: "2024", 
      tags: ["Embedded", "Game"],
      description: "A side-scrolling runner game built on Arduino with I2C LCD — inspired by Chrome dino.",
      link: "#"
    },
    {
      name: "n8n Telegram Match Bot",
      dates: "2025",
      tags: ["Automation", "Telegram", "SofaScore"], 
      description: "Automation workflow that pushes live match updates to Telegram using unofficial SofaScore API and n8n.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
            Selected Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`cv-card group relative ${project.featured ? 'md:col-span-2' : ''}`}>
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center space-x-2 text-accent">
                    <Zap size={16} className="animate-pulse" />
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gradient mb-3">{project.name}</h3>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Calendar size={16} className="mr-2 text-primary" />
                      <span className="text-sm">{project.dates}</span>
                    </div>
                  </div>
                  <a
                    href={project.link}
                    className="group/link p-3 rounded-xl bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 opacity-60 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0"
                    aria-label={`View ${project.name} project`}
                  >
                    <ExternalLink size={18} className="text-primary group-hover/link:text-accent transition-colors duration-300" />
                  </a>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, hsl(177 70% 50% / 0.1) 0%, hsl(290 100% 70% / 0.1) 100%)`,
                        borderColor: `hsl(177 70% 50% / 0.3)`,
                        color: `hsl(177 70% 70%)`
                      }}
                    >
                      {tag}
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

export default Projects;