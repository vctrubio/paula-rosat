import { getTranslations } from "next-intl/server";

const layouts = {
  plants: { image: "/illustrations/landing/plant-life.svg", notes: [{ x: 34, y: 208 }, { x: 330, y: 315 }, { x: 38, y: 555 }] },
  underground: { image: "/illustrations/landing/roots-mycelium.svg", notes: [{ x: 20, y: 293 }, { x: 355, y: 398 }, { x: 45, y: 552 }] },
};
type Story = { number: string; eyebrow: string; title: string; description: string; annotations: { text: string }[]; caption: string; closing: string };

export async function BotanicalStory({ kind }: { kind: keyof typeof layouts }) {
  const t = await getTranslations("Ecosystems");
  const story: Story = {
    number: t(`${kind}.number`),
    eyebrow: t(`${kind}.eyebrow`),
    title: t(`${kind}.title`),
    description: t(`${kind}.description`),
    annotations: t.raw(`${kind}.annotations`),
    caption: t(`${kind}.caption`),
    closing: t(`${kind}.closing`),
  };
  const layout = layouts[kind];
  const headingId = `landing-story-${kind}`;

  return (
    <article className={`botanical-story botanical-story--${kind}`} aria-labelledby={headingId}>
      <div className="botanical-story-heading">
        <p className="botanical-story-eyebrow"><span>{story.number}</span> {story.eyebrow}</p>
        <h3 id={headingId}>{story.title}</h3>
      </div>
      <figure>
        <svg viewBox="0 0 440 650" className="botanical-story-drawing" role="img" aria-labelledby={`${headingId}-description`}>
          <title id={`${headingId}-description`}>{story.description}</title>
          <image href={layout.image} width="440" height="650" />
          {story.annotations.map((note, index) => (
            <text key={note.text} x={layout.notes[index].x} y={layout.notes[index].y} className="botanical-annotation">{note.text}</text>
          ))}
        </svg>
        <figcaption className="botanical-story-caption">
          <p>{story.caption}</p>
          <p className="botanical-story-closing">{story.closing}</p>
        </figcaption>
      </figure>
    </article>
  );
}
