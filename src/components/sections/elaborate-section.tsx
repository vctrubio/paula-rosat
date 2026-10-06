import { elaborationContent } from "@/content/map.es";
import { ElaborationStep } from "@/components/map/elaboration-step";
import { IllustratedHeading } from "@/components/map/illustrated-heading";

export function ElaborateSection() {
  return (
    <section id="proceso" lang="es" aria-labelledby="elaborate-title" className="scroll-slide flex-col px-4 py-16 sm:px-10 sm:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <IllustratedHeading id="elaborate-title">{elaborationContent.title}</IllustratedHeading>
        <p className="mx-auto mt-5 max-w-xl font-display text-xl leading-relaxed sm:text-2xl">{elaborationContent.introduction}</p>
      </header>
      <ol className="elaboration-journey mx-auto mt-12 w-full max-w-4xl sm:mt-20">
        {elaborationContent.steps.map((step, index) => <ElaborationStep key={step.id} step={step} index={index} />)}
      </ol>
    </section>
  );
}
