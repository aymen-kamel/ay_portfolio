import { Sparkles } from "lucide-react";

const About = () => {
  const badges = [
    "IEEE Computer Society (Treasurer, 2 years)",
    "Event organizer & ambassador", 
    "Open to internships & collaborations"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
            About Me
          </h2>
          
          <div className="cv-card group">
            <div className="flex items-center mb-8">
              <Sparkles className="text-accent mr-4 animate-pulse" size={32} />
              <h3 className="text-2xl font-bold text-gradient">My Story</h3>
            </div>
            
            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-muted-foreground">
                I am a 21-year-old 2nd year Licence in Computer Science at the Faculty of Science Sfax (Tunisia). 
                I enjoy building data-driven products, experimenting with AI/ML, and shipping clean, maintainable web apps.
              </p>
              
              <p className="text-xl leading-relaxed text-muted-foreground">
                Currently I lead <span className="text-gradient font-semibold">HeroScore</span> — a mobile app that collects and showcases in-depth stats for Tunisian football: 
                lineups, fixtures, player & team stats, performance ratings and AI-powered match predictions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 pt-8">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="badge text-center py-3 hover:scale-105 transition-all duration-300"
                    style={{ 
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    {badge}
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

export default About;