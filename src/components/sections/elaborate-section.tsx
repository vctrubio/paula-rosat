import { elaborationContent } from "@/content/map.es";
import { ElaborationStep } from "@/components/map/elaboration-step";
import { IllustratedHeading } from "@/components/map/illustrated-heading";

export function ElaborateSection() {
  return (
    <section id="elaborate" lang="es" aria-labelledby="elaborate-title" className="scroll-slide flex-col px-6 py-16 sm:px-12 sm:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <IllustratedHeading id="elaborate-title">{elaborationContent.title}</IllustratedHeading>
        <p className="mt-8 font-display text-4xl italic text-rose sm:text-5xl">{elaborationContent.subtitle}</p>
        <p className="mt-4 text-sm leading-7 text-ink-muted">{elaborationContent.introduction}</p>
      </header>
      <ol className="elaboration-journey mx-auto mt-12 w-full max-w-4xl sm:mt-20">
        {elaborationContent.steps.map((step, index) => <ElaborationStep key={step.id} step={step} index={index} />)}
      </ol>
      <div className="mx-auto mt-12 max-w-xl text-center">
        <p className="font-display text-2xl italic leading-relaxed text-rose sm:text-3xl">{elaborationContent.principle}</p>
      </div>
    </section>
  );
}
