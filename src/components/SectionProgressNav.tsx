import { useEffect, useState } from "react";

interface SectionItem {
  id: string;
  num: string;
  labelFr: string;
  labelEn: string;
}

const SECTIONS: SectionItem[] = [
  { id: "hero", num: "01", labelFr: "Accueil", labelEn: "Intro" },
  { id: "projects", num: "02", labelFr: "Projets", labelEn: "Work" },
  { id: "expertise", num: "03", labelFr: "Expertise", labelEn: "Expertise" },
  { id: "experience", num: "04", labelFr: "Parcours", labelEn: "Trajectory" },
  { id: "contact", num: "05", labelFr: "Contact", labelEn: "Contact" },
];

export const SectionProgressNav = () => {
  const [activeId, setActiveId] = useState<string>("hero");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 80);

      // Find current active section
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Progress navigation"
      className="hidden lg:flex fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-5 pointer-events-auto select-none"
    >
      <div className="flex flex-col items-end gap-3.5 bg-[#111111]/40 backdrop-blur-sm p-2 rounded-full border border-[rgba(242,238,230,0.04)]">
        {SECTIONS.map((section) => {
          const isActive = activeId === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="group flex items-center gap-2.5 text-right transition-all duration-300 py-0.5 focus:outline-none"
              title={`${section.num} — ${section.labelEn}`}
              aria-label={`Go to section ${section.num}`}
            >
              {/* Optional label reveal on hover */}
              <span
                className={`text-[10px] font-mono tracking-widest uppercase transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 ${
                  isActive ? "text-[#F2EEE6]" : "text-[#96918E]"
                }`}
              >
                {section.labelEn}
              </span>

              {/* Number indicator */}
              <span
                className={`text-xs font-mono tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-[#F2EEE6] font-semibold scale-110"
                    : "text-[#96918E]/50 group-hover:text-[#F2EEE6]/80"
                }`}
              >
                {section.num}
              </span>

              {/* Active dash / indicator */}
              <span
                className={`h-[1px] transition-all duration-300 ${
                  isActive
                    ? "w-4 bg-[#8C374A]"
                    : "w-2 bg-[rgba(242,238,230,0.15)] group-hover:w-3 group-hover:bg-[#96918E]"
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default SectionProgressNav;
