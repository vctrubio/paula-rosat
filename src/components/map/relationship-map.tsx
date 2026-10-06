import { mapContent } from "@/content/map.es";
import { HighlightedTitle } from "./highlighted-title";

const spokes = [
  "M 498 378 Q 492 357 500 337",
  "M 369 454 Q 324 423 295 420",
  "M 631 454 Q 675 425 702 421",
  "M 635 576 Q 671 621 704 644",
  "M 365 576 Q 326 617 297 644",
  "M 500 665 Q 507 737 500 811",
];

const perimeter = [
  "M 355 160 Q 166 166 167 259",
  "M 650 164 Q 832 175 834 260",
  "M 889 497 Q 932 544 889 605",
  "M 751 843 Q 707 923 653 939",
  "M 349 940 Q 276 920 251 846",
  "M 105 603 Q 73 545 112 497",
];

export function RelationshipMap() {
  return (
    <figure className="relationship-map">
      <p className="mb-4 text-center text-xs text-ink-muted sm:hidden">{mapContent.mobileHint}</p>
      <div className="map-scroll" tabIndex={0} role="region" aria-label={mapContent.title}>
        <svg viewBox="0 0 1000 1100" className="relationship-web" role="group" aria-labelledby="relationship-map-title relationship-map-description">
          <title id="relationship-map-title">{mapContent.title}</title>
          <desc id="relationship-map-description">{mapContent.diagramDescription}</desc>
          <defs>
            <radialGradient id="map-portrait-fade">
              <stop offset="0" stopColor="white" />
              <stop offset="0.62" stopColor="white" />
              <stop offset="1" stopColor="black" />
            </radialGradient>
            <mask id="map-portrait-mask" maskUnits="userSpaceOnUse" x="345" y="365" width="310" height="310">
              <circle cx="500" cy="520" r="150" fill="url(#map-portrait-fade)" />
            </mask>
            <marker id="web-arrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
              <path d="M2 2L10 6L2 10" fill="none" stroke="currentColor" strokeWidth="1.1" />
            </marker>
          </defs>
          <g fill="none" stroke="currentColor" strokeWidth="1.1" className="text-olive/50">
            {perimeter.map((d) => <path key={d} d={d} markerEnd="url(#web-arrow)" />)}
            {spokes.map((d) => <path key={d} d={d} markerStart="url(#web-arrow)" markerEnd="url(#web-arrow)" />)}
            <path d="M316 284Q502 233 686 285M704 834Q499 883 297 835" strokeDasharray="2 9" opacity=".35" />
          </g>
          <g className="map-center">
            <image
              href="/portraits/paula-alambic.svg"
              x="345" y="365" width="310" height="310"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#map-portrait-mask)"
              opacity="0.24"
              aria-hidden="true"
            />
            <HighlightedTitle title={mapContent.center[0]} x={500} y={510} width={155} className="map-center-title" />
            <HighlightedTitle title={mapContent.center[1]} x={500} y={550} width={180} className="map-center-title" />
          </g>
          {mapContent.nodes.map((node) => (
            <a key={node.id} href={`#elaboracion-${node.id}`} className="map-node" aria-label={`${node.title}: ${node.description}`}>
              <title>{node.description}</title>
              <g transform={`translate(${node.x - 150} ${node.y - 112})`}>
                <HighlightedTitle title={node.title} x={150} y={20} width={Math.max(150, node.title.length * 13)} />
                <image href={`/illustrations/${node.id}.svg`} y="34" width="300" height="225" />
                <text x="150" y="278" textAnchor="middle" className="map-node-caption">{node.caption}</text>
              </g>
            </a>
          ))}
        </svg>
      </div>
      <figcaption className="sr-only">{mapContent.diagramDescription}</figcaption>
    </figure>
  );
}
