import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Download, Mail, Facebook } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative animate-float mt-12">
            <img
              src="/me.png"
              alt="Aymen Kamel profile photo"
              className="w-48 h-48 rounded-full object-cover relative z-10"
            />
            <div className="absolute inset-0 w-48 h-48 rounded-full animate-pulse-glow border-2 border-primary/30"></div>
            <div className="absolute inset-[-10px] w-56 h-56 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl"></div>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold text-gradient">
              Aymen Kamel
            </h1>
            <div className="relative">
              <p className="text-2xl md:text-3xl font-medium text-primary">
                Computer Science Student • AI & Web Enthusiast
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-0.5 top-1/2 blur-sm"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              3rd year Computer Science student at Faculty of Science Sfax (Tunisia). 
              Passionate about AI, web apps, and product-focused engineering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button className="hero-button bg-primary/20 hover:bg-primary/30 text-primary border-primary/40">
              <Download className="mr-2 h-5 w-5" />
             <a href="https://drive.google.com/file/d/1uPehzr0kQKpNhDRcjnhMzr15-R--Lqa6/view?usp=sharing"target="_blank">Download CV </a>
            </Button>
            <a
              href="mailto:kamelaymen@gmail.com?subject=Hello&body=Hi Aymen, I wanted to say hello!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="hero-button bg-accent/20 hover:bg-accent/30 text-accent border-accent/40">
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </Button>
            </a>
          </div>

          <div className="flex items-center space-x-8 pt-6">
            {[
              { href: "https://www.linkedin.com/in/aymen-kamel-b135a3301/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/aymen-kamel", icon: Github, label: "GitHub" }, 
              { href: "https://www.facebook.com/aymen.kamel.535740/", icon: Facebook, label: "Facebook" }
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl bg-card/50 border border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm"
                aria-label={`${label} Profile`}
              >
                <Icon size={24} className="text-primary group-hover:text-accent transition-colors duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;