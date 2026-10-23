import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ResumeModal from "./ResumeModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.links.home, href: "#hero" },
    { label: t.nav.links.work, href: "#projects" },
    { label: t.nav.links.expertise, href: "#expertise" },
    { label: t.nav.links.journey, href: "#experience" },
    { label: t.nav.links.about, href: "#about" },
    { label: t.nav.links.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "expertise", "experience", "about", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/85 backdrop-blur-xl border-b border-[rgba(242,238,230,0.08)] transition-all duration-300">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Monogram Brand */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#hero");
              }}
              className="group flex items-baseline gap-2 cursor-pointer"
            >
              <span className="font-editorial text-2xl md:text-3xl font-bold tracking-tight text-[#F2EEE6] group-hover:text-[#F2EEE6]/90 transition-colors">
                AK<span className="text-[#702C3B]">.</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`font-sans transition-colors duration-200 tracking-wide text-xs uppercase font-medium ${
                      isActive
                        ? "text-[#F2EEE6] font-semibold"
                        : "text-[#96918E] hover:text-[#F2EEE6]"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Actions: Language Switcher & Resume */}
            <div className="flex items-center space-x-5">
              {/* Language Switcher [FR / EN] */}
              <div className="flex items-center space-x-1.5 text-xs font-mono tracking-widest border border-[rgba(242,238,230,0.1)] rounded-full px-2.5 py-1 bg-[#191719]/60">
                <button
                  type="button"
                  onClick={() => setLanguage("fr")}
                  className={`transition-colors px-1 py-0.5 rounded ${
                    language === "fr"
                      ? "text-[#F2EEE6] font-bold"
                      : "text-[#96918E] hover:text-[#F2EEE6]"
                  }`}
                  aria-label="Passer en Français"
                >
                  FR
                </button>
                <span className="text-[rgba(242,238,230,0.2)]">|</span>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`transition-colors px-1 py-0.5 rounded ${
                    language === "en"
                      ? "text-[#F2EEE6] font-bold"
                      : "text-[#96918E] hover:text-[#F2EEE6]"
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </div>

              {/* Resume Trigger */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsResumeOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-sans tracking-wide bg-transparent border-[rgba(242,238,230,0.18)] hover:border-[rgba(242,238,230,0.4)] text-[#F2EEE6] hover:bg-[rgba(242,238,230,0.04)] px-4 py-2 rounded-full transition-all"
              >
                <span>{t.nav.viewResume}</span>
                <ArrowUpRight size={13} className="text-[#96918E]" />
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-[#F2EEE6] hover:text-[#F2EEE6]/80 focus:outline-none"
                aria-label="Menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {isOpen && (
            <div className="md:hidden py-6 border-t border-[rgba(242,238,230,0.08)] bg-[#111111]/95 backdrop-blur-2xl animate-fade-in-up">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-left font-sans text-sm uppercase tracking-wider text-[#96918E] hover:text-[#F2EEE6] transition-colors py-1"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-[rgba(242,238,230,0.08)] flex justify-start">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsOpen(false);
                      setIsResumeOpen(true);
                    }}
                    className="w-full justify-between text-xs font-sans tracking-wide border-[rgba(242,238,230,0.2)] text-[#F2EEE6] rounded-full"
                  >
                    <span>{t.nav.viewResume}</span>
                    <ArrowUpRight size={14} />
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navigation;
