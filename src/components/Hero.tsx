import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, FileText, Sparkles, Code2, Brain, Award, Copy, Check } from "lucide-react";
import ResumeModal from "./ResumeModal";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kamelaymen793@gmail.com");
    setCopied(true);
    toast({
      title: "📋 Email copié !",
      description: "kamelaymen793@gmail.com a été copié dans le presse-papier."
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const stats = [
    { label: "Cycle Ingénieur", value: "IIT Sfax", icon: Brain },
    { label: "Spécialité", value: "IA & Full-Stack", icon: Code2 },
    { label: "National Award", value: "TSYP13 (3e place)", icon: Award },
    { label: "Certification", value: "NVIDIA DLI", icon: Sparkles }
  ];

  return (
    <>
      <section id="hero" className="section-padding pt-36 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background neon elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/10 via-accent/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="container-custom">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            {/* Avatar Profile Ring */}
            <div className="relative group cursor-pointer" onClick={() => setIsResumeOpen(true)}>
              <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-primary/40 group-hover:border-accent transition-colors duration-500 shadow-2xl">
                <img
                  src="/me.png"
                  alt="Aymen Kamel profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-full animate-pulse-glow border-2 border-accent/40"></div>
              <div className="absolute inset-[-12px] rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-2xl group-hover:opacity-100 opacity-70 transition-opacity"></div>
              
              <span className="absolute bottom-2 right-2 z-20 px-3 py-1 bg-background/90 border border-red-500/50 rounded-full text-xs font-semibold text-red-400 backdrop-blur-md flex items-center gap-1 shadow-lg shadow-red-500/20">
                <span className="text-yellow-400 animate-pulse font-bold">⚡🕷️</span> Open to Opportunities
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600/20 via-blue-600/20 to-primary/20 border border-red-500/40 text-red-400 text-xs sm:text-sm font-bold mb-2 shadow-lg">
                <span className="text-yellow-400">⚡</span>
                <span>Développeur IA & Full-Stack • Spider-Tech Enthusiast</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gradient">
                Aymen Kamel
              </h1>

              <p className="text-xl sm:text-2xl font-medium text-foreground/90 max-w-3xl mx-auto">
                Diplômé en Sciences Informatiques & Étudiant en Cycle Ingénieur à l'IIT Sfax
              </p>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Spécialisé en <span className="text-primary font-semibold">Computer Vision (YOLO, TrackNet)</span>, <span className="text-accent font-semibold font-medium">LLMs & RAG</span>, ainsi qu'en développement web moderne (<span className="text-foreground font-medium">React, FastAPI, NestJS</span>).
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-2">
              {stats.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div key={i} className="p-4 rounded-xl bg-card/40 border border-primary/15 backdrop-blur-md hover:border-primary/40 transition-colors">
                    <Icon size={20} className="text-accent mx-auto mb-1" />
                    <div className="text-base font-bold text-foreground">{st.value}</div>
                    <div className="text-xs text-muted-foreground">{st.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="https://drive.google.com/file/d/1SVmsOZSuEtvDWRZJbaE9K9z6dmwT8Tnb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="hero-button w-full sm:w-auto bg-primary/20 hover:bg-primary/30 text-primary border-primary/40 text-base font-semibold px-6 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger le CV
                </Button>
              </a>

              <Button
                onClick={() => setIsResumeOpen(true)}
                className="hero-button w-full sm:w-auto bg-accent/20 hover:bg-accent/30 text-accent border-accent/40 text-base font-semibold px-6 py-6"
              >
                <FileText className="mr-2 h-5 w-5" />
                Aperçu Interactif du CV
              </Button>

              <Button
                onClick={handleCopyEmail}
                variant="outline"
                className="w-full sm:w-auto border-primary/30 text-foreground hover:bg-primary/10 px-5 py-6 rounded-xl flex items-center justify-center gap-2"
              >
                {copied ? <Check className="h-5 w-5 text-emerald-400" /> : <Copy className="h-5 w-5 text-primary" />}
                <span>{copied ? "Copié !" : "Copier Email"}</span>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-6">
              {[
                { href: "https://github.com/aymen-kamel", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/aymen-kamel-b135a3301/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:kamelaymen793@gmail.com", icon: Mail, label: "Email" }
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3.5 rounded-xl bg-card/60 border border-primary/20 hover:border-primary/50 transition-all duration-300 backdrop-blur-md hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={22} className="text-primary group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Resume View Dialog */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Hero;