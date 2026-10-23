import { useEffect } from "react";

/**
 * useScrollReveal
 * High-performance, zero-dependency scroll reveal system powered by native IntersectionObserver.
 * Observes all elements with the `.editorial-reveal` class and triggers cinematic reveals.
 * Respects `prefers-reduced-motion` for accessibility.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Respect user accessibility settings
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      document.querySelectorAll(".editorial-reveal").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Unobserve once revealed so animation only plays once cleanly
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1,
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(".editorial-reveal:not(.is-revealed)");
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    // In case DOM nodes render asynchronously or tab/content changes
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
