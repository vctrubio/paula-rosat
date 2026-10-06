import type { ReactNode } from "react";

type ScrollSlideProps = {
  id: "about" | "mapa" | "proceso";
  number: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export function ScrollSlide({ id, number, label, children, className = "" }: ScrollSlideProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-slide ${className}`}>
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-6 py-8 sm:px-12 sm:py-10 lg:px-20">
        <p className="eyebrow flex items-center gap-4 text-ink-muted"><span className="text-rose">{number} / 03</span>{label}</p>
        <div className="flex flex-1 flex-col justify-center py-10 sm:py-12">{children}</div>
      </div>
    </section>
  );
}
