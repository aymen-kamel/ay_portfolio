const Skills = () => {
  const skillCategories = [
    { 
      name: "Languages", 
      items: ["Python", "C++", "Java", "JavaScript"],
      icon: "💻"
    },
    { 
      name: "Web", 
      items: ["React", "TailwindCSS", "Node.js", "FastAPI"],
      icon: "🌐"
    },
    { 
      name: "AI/ML", 
      items: ["PyTorch/TensorFlow", "Transfer Learning", "YOLOv8"],
      icon: "🤖"
    },
    { 
      name: "Other", 
      items: ["n8n", "Arduino", "Git", "Docker"],
      icon: "⚡"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">
            Skills & Tools
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="cv-card group">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-gradient">
                    {category.name}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-tag text-center group-hover:scale-105 transition-all duration-300"
                      style={{ 
                        animationDelay: `${skillIndex * 100}ms`
                      }}
                    >
                      {skill}
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

export default Skills;