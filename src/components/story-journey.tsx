"use client";

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/config/site";

const stops = [
  { id: "about", label: siteConfig.name },
  { id: "map", label: "Mapa" },
  { id: "elaborate", label: "Elaborar" },
];

export function StoryJourney({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLElement>(null);
  const [active, setActive] = useState("about");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = root.current;
    const navigation = nav.current;
    if (!container || !navigation) return;
    const sections = Array.from(container.querySelectorAll<HTMLElement>(":scope > section"));
    const about = document.getElementById("about");
    let frame = 0;
    function updateActive() {
      frame = 0;
      const threshold = navigation!.offsetHeight + 100;
      const distance = window.innerHeight - container!.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(1, distance / (window.innerHeight * 0.3)));
      about?.style.setProperty("--portrait-erase", String(progress));
      const entered = distance > 1;
      setVisible(entered);
      let current = entered ? "map" : "about";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
      }
      setActive(current);
    }
    function scheduleActive() {
      if (!frame) frame = requestAnimationFrame(updateActive);
    }
    function measure() {
      const height = navigation!.offsetHeight;
      container!.style.setProperty("--journey-height", `${height}px`);
      for (const section of sections) {
        // Tall sheets only pin when their bottom reaches the viewport bottom.
        section.style.setProperty("--sheet-top", `${Math.min(height, window.innerHeight - section.offsetHeight)}px`);
      }
      scheduleActive();
    }
    const observer = new ResizeObserver(measure);
    observer.observe(navigation);
    sections.forEach((section) => observer.observe(section));
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", scheduleActive, { passive: true });
    return () => {
      about?.style.removeProperty("--portrait-erase");
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", scheduleActive);
    };
  }, []);

  function navigate(event: MouseEvent<HTMLAnchorElement>, id: string) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const container = root.current;
    const target = document.getElementById(id);
    if (!container || !target) return;
    event.preventDefault();
    // Use flow offsets; a pinned sheet's current bounding box is not its start.
    const top = id === "about" ? 0 : container.getBoundingClientRect().top + window.scrollY + target.offsetTop - (nav.current?.offsetHeight ?? 0);
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
  }

  return (
    <div ref={root} className="story-pages">
      <nav ref={nav} className="journey-nav" data-visible={visible} inert={!visible} aria-hidden={!visible} aria-label="Recorrido" lang="es">
        <ol>
          {stops.map((stop, index) => (
            <li key={stop.id}>
              <a href={`#${stop.id}`} aria-current={active === stop.id ? "location" : undefined} onClick={(event) => navigate(event, stop.id)}>
                {index === 0 && <BrandMark className="h-6 w-6 shrink-0 text-olive" />}
                <span className={index === 0 ? "journey-brand" : undefined}>{stop.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      {children}
    </div>
  );
}
