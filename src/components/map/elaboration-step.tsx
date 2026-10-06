import type { elaborationContent } from "@/content/map.es";
import { BotanicalIllustration } from "./botanical-illustration";

type Step = (typeof elaborationContent.steps)[number];

export function ElaborationStep({ step, index }: { step: Step; index: number }) {
  return (
    <li id={`elaboracion-${step.id}`} className="elaboration-step">
      <span className="step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <BotanicalIllustration id={step.id} title={step.title} className="step-illustration" />
      <div className="step-copy">
        <h3 className="sr-only">{step.title}</h3>
        <p className="font-display text-3xl leading-tight sm:text-4xl">{step.subtitle}</p>
        <p className="mt-4 max-w-md text-sm leading-7 text-ink-muted sm:text-base sm:leading-8">{step.body}</p>
      </div>
    </li>
  );
}
