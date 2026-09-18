import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import SpidermanEffects from "@/components/SpidermanEffects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-red-500/30 selection:text-red-400 spidey-web-overlay relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      
      {/* Spider-Man Interactive Canvas & Character Widget */}
      <SpidermanEffects />

      {/* Footer */}
      <footer className="py-8 border-t border-primary/10 text-center text-xs text-muted-foreground bg-background/80 backdrop-blur-md">
        <div className="container-custom">
          <p>© {new Date().getFullYear()} Aymen Kamel — Full-Stack & AI Engineer. With Great Code Comes Great Responsibility! 🕷️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
