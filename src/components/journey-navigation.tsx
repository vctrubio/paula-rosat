"use client";

import Link from "next/link";
import type { CSSProperties, MouseEvent, Ref } from "react";
import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/config/site";

const stops = [
  { id: "about", label: siteConfig.name },
  { id: "mapa", label: "Mapa" },
  { id: "processo", label: "Processo" },
];

export function JourneyNavigation({ navRef, active, visible = true, onNavigate }: {
  navRef?: Ref<HTMLElement>;
  active?: string;
  visible?: boolean;
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>, id: string) => void;
}) {
  return (
    <nav ref={navRef} className="journey-nav" data-visible={visible} inert={!visible} aria-hidden={!visible} aria-label="Recorrido" lang="es">
      <ol>
        {stops.map((stop, index) => (
          <li key={stop.id} style={{ "--section-progress": `var(--progress-${stop.id}, 0)` } as CSSProperties}>
            <Link href={`/#${stop.id}`} aria-current={active === stop.id ? "location" : undefined} onClick={onNavigate ? (event) => onNavigate(event, stop.id) : undefined}>
              {index === 0 && <BrandMark className="h-6 w-6 shrink-0 text-olive" />}
              <span className={index === 0 ? "journey-brand" : undefined}>{stop.label}</span>
              <span className="journey-progress" aria-hidden="true"><span /></span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
