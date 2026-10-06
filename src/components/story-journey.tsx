"use client";

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { JourneyNavigation } from "@/components/journey-navigation";

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
    const portrait = about?.querySelector<HTMLElement>(".portrait");
    let frame = 0;
    function updateActive() {
      frame = 0;
      const threshold = navigation!.offsetHeight + 100;
      const distance = window.innerHeight - container!.getBoundingClientRect().top;
      // Keep the reversible sketch animation in view as the map covers the portrait.
      // Screen-percentage delays can make it redraw entirely behind the map.
      let nameGone = false;
      if (portrait && sections[0]) {
        const bounds = portrait.getBoundingClientRect();
        const mapTop = sections[0].getBoundingClientRect().top;
        const start = bounds.bottom + bounds.height * 0.2;
        const end = bounds.top + bounds.height * 0.25;
        const progress = Math.max(0, Math.min(1, (start - mapTop) / Math.max(1, start - end)));
        about?.style.setProperty("--portrait-erase", String(progress));
        // Start erasing the name as the portrait reaches the end of its erasure.
        const nameStart = end + bounds.height * 0.18;
        const nameProgress = Math.max(0, Math.min(1, (nameStart - mapTop) / Math.max(1, bounds.height * 0.25)));
        about?.style.setProperty("--portrait-name-erase", String(nameProgress));
        nameGone = nameProgress >= 1;
      }
      const entered = distance > 1;
      setVisible(nameGone);
      // Use document flow distances, not the moving positions of sticky sheets.
      const scroll = window.scrollY;
      const containerTop = container!.getBoundingClientRect().top + scroll;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      let sectionStart = containerTop - navigation!.offsetHeight;
      const clamp = (value: number) => Math.max(0, Math.min(1, value));
      navigation!.style.setProperty("--progress-about", String(clamp(scroll / Math.max(1, sectionStart))));
      sections.forEach((section, index) => {
        const nextStart = sectionStart + section.offsetHeight;
        const sectionEnd = index === sections.length - 1 ? maxScroll : Math.min(nextStart, maxScroll);
        const progress = clamp((scroll - sectionStart) / Math.max(1, sectionEnd - sectionStart));
        navigation!.style.setProperty(`--progress-${section.id}`, String(progress));
        sectionStart = nextStart;
      });
      let current = entered ? "mapa" : "about";
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
    if (portrait) observer.observe(portrait);
    sections.forEach((section) => observer.observe(section));
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", scheduleActive, { passive: true });
    return () => {
      about?.style.removeProperty("--portrait-erase");
      about?.style.removeProperty("--portrait-name-erase");
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
      <JourneyNavigation navRef={nav} active={active} visible={visible} onNavigate={navigate} />
      {children}
    </div>
  );
}
