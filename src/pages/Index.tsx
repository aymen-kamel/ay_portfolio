import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionProgressNav from "@/components/SectionProgressNav";
import Projects from "@/components/Projects";
import EditorialBanner from "@/components/EditorialBanner";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();
  useScrollReveal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#111111] text-[#F2EEE6] selection:bg-[#702C3B]/40 selection:text-[#F2EEE6] relative font-sans">
      <Navigation />
      <SectionProgressNav />

      <main>
        {/* 01: Hero Section with Natural Portrait Blend & Burgundy Atmosphere */}
        <Hero />

        {/* 02: Selected Projects & Flagships (SmartPlayAI & MÉMORA) */}
        <Projects />

        {/* Transition Editorial Banner */}
        <EditorialBanner />

        {/* 03: Technical Expertise & Domains */}
        <Skills />

        {/* 04: Journey, Education & Certifications */}
        <Experience />

        {/* 05: Editorial Biography */}
        <About />

        {/* 06: Contact & Professional Links */}
        <Contact />
      </main>

      {/* Luxury Editorial Minimal Footer */}
      <footer className="py-12 border-t border-[rgba(242,238,230,0.08)] bg-[#0d0c0d] text-xs font-mono text-[#96918E]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="font-editorial text-xl font-bold text-[#F2EEE6]">
                AK<span className="text-[#8C374A]">.</span>
              </span>
              <span>—</span>
              <span className="text-[#F2EEE6]/80">Aymen Kamel</span>
              <span className="text-[rgba(242,238,230,0.2)]">|</span>
              <span>Sfax, Tunisie</span>
            </div>

            <p className="text-center md:text-right font-sans text-xs text-[#96918E]">
              {t.footer.rights}
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/aymen-kamel"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F2EEE6] transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/aymen-kamel-b135a3301/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F2EEE6] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:kamelaymen793@gmail.com"
                className="hover:text-[#F2EEE6] transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-1.5 rounded-full bg-[#191719] border border-[rgba(242,238,230,0.1)] text-[#F2EEE6] hover:text-[#8C374A] transition-colors ml-2 cursor-pointer"
                title="Haut de page"
              >
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
