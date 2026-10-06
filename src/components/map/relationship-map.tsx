import { mapContent } from "@/content/map.es";

const spokes = [
  "M 498 404 Q 492 332 500 287",
  "M 369 454 Q 324 423 295 420",
  "M 631 454 Q 675 425 702 421",
  "M 635 576 Q 671 621 704 644",
  "M 365 576 Q 326 617 297 644",
  "M 500 638 Q 507 737 500 811",
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
            <path d="M345 520C337 454 400 407 499 403C591 403 658 449 655 521C655 590 592 638 502 638C410 642 344 590 345 520Z" fill="var(--color-paper)" stroke="var(--color-olive)" strokeOpacity=".45" strokeDasharray="2 5" />
            <text x="500" y="492" textAnchor="middle" className="map-center-title">
              <tspan x="500">{mapContent.center[0]}</tspan><tspan x="500" dy="36">{mapContent.center[1]}</tspan>
            </text>
            <text x="500" y="563" textAnchor="middle" className="map-center-description">
              <tspan x="500">{mapContent.centerDescription[0]}</tspan><tspan x="500" dy="23">{mapContent.centerDescription[1]}</tspan>
            </text>
          </g>
          {mapContent.nodes.map((node) => (
            <a key={node.id} href={`#elaboracion-${node.id}`} className="map-node" aria-label={`${node.title}: ${node.description}`}>
              <title>{node.description}</title>
              <g transform={`translate(${node.x - 150} ${node.y - 112})`}>
                <image href={`/illustrations/${node.id}.svg`} width="300" height="225" />
                <text x="150" y="251" textAnchor="middle" className="illustration-title">{node.title}</text>
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
