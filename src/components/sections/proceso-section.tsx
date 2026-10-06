import { procesoContent } from "@/content/map.es";
import { ProcesoStep } from "@/components/map/proceso-step";
import { IllustratedHeading } from "@/components/map/illustrated-heading";

export function ProcesoSection() {
  return (
    <section id="proceso" lang="es" aria-labelledby="proceso-title" className="scroll-slide flex-col px-4 py-16 sm:px-10 sm:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <IllustratedHeading id="proceso-title">{procesoContent.title}</IllustratedHeading>
        <p className="mx-auto mt-5 max-w-xl font-display text-xl leading-relaxed sm:text-2xl">{procesoContent.introduction}</p>
      </header>
      <ol className="proceso-journey mx-auto mt-12 w-full max-w-4xl sm:mt-20">
        {procesoContent.steps.map((step, index) => <ProcesoStep key={step.id} step={step} index={index} />)}
      </ol>
    </section>
  );
}
