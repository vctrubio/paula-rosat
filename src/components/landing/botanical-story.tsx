import { landingStories } from "@/content/landing.es";

export function BotanicalStory({ kind }: { kind: keyof typeof landingStories }) {
  const story = landingStories[kind];
  const headingId = `landing-story-${kind}`;

  return (
    <article lang="es" className={`botanical-story botanical-story--${kind}`} aria-labelledby={headingId}>
      <div className="botanical-story-heading">
        <p className="botanical-story-eyebrow"><span>{story.number}</span> {story.eyebrow}</p>
        <h3 id={headingId}>{story.title}</h3>
      </div>
      <figure>
        <svg viewBox="0 0 440 650" className="botanical-story-drawing" role="img" aria-labelledby={`${headingId}-description`}>
          <title id={`${headingId}-description`}>{story.description}</title>
          <image href={story.image} width="440" height="650" />
          {story.annotations.map((note) => (
            <text key={note.text} x={note.x} y={note.y} className="botanical-annotation">{note.text}</text>
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
