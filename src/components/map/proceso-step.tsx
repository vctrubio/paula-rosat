import type { procesoContent } from "@/content/map.es";
import { BotanicalIllustration } from "./botanical-illustration";
import { HighlightedTitle } from "./highlighted-title";

type Step = (typeof procesoContent.steps)[number];

export function ProcesoStep({ step, index }: { step: Step; index: number }) {
  return (
    <li id={`proceso-${step.id}`} className="proceso-step">
      <span className="step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <BotanicalIllustration id={step.id} title={step.title} className="step-illustration" showTitle={false} />
      <div className="step-copy">
        <h3>
          <span className="sr-only">{step.title}</span>
          <svg viewBox="0 0 320 48" className="block w-full max-w-80" aria-hidden="true">
            <HighlightedTitle title={step.title} x={Math.max(150, step.title.length * 13) / 2 + 8} y={34} width={Math.max(150, step.title.length * 13)} />
          </svg>
        </h3>
        <p className="mt-3 font-display text-3xl leading-tight">{step.subtitle}</p>
        <p className="mt-4 max-w-md text-sm leading-7 text-ink-muted sm:text-base sm:leading-8">{step.body}</p>
      </div>
    </li>
  );
}
