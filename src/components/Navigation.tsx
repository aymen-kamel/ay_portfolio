import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import ResumeModal from "./ResumeModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const navLinks = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Expérience", href: "#experience" },
    { label: "Projets", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Compétences", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.slice(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-black/20">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Brand Logo */}
            <a href="#hero" className="relative group flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-xl font-bold text-gradient">AK</span>
              </div>
              <div className="hidden sm:block text-left">
                <h2 className="text-lg font-bold text-foreground leading-none">Aymen Kamel</h2>
                <span className="text-xs text-primary font-medium">AI & Full-Stack Engineer</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`nav-link text-sm ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Actions: Resume Modal Button */}
            <div className="flex items-center space-x-3">
              <Button
                onClick={() => setIsResumeOpen(true)}
                className="hero-button bg-primary/20 text-primary border-primary/40 hover:bg-primary/30 px-4 py-2 text-xs sm:text-sm font-semibold flex items-center gap-2"
              >
                <FileText className="h-4 w-4 text-accent" />
                <span>Voir le CV</span>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden bg-primary/10 border border-primary/20 hover:border-primary/40 rounded-xl p-2.5 text-primary"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isOpen && (
            <div className="lg:hidden pb-6 pt-2 backdrop-blur-2xl border-t border-primary/10 animate-fadeIn">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`nav-link text-left text-base ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Interactive Resume View Dialog */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navigation;