import { mapContent } from "@/content/map.es";
import { illustrationSource } from "./illustration-source";
import { MapConnections } from "./map-connections";
import { BranchingCenter } from "./branching-center";

export function RelationshipMap({ hideText = false }: { hideText?: boolean }) {
  return (
    <figure className="relationship-map">
      <p className="mb-4 text-center text-xs text-ink-muted sm:hidden">{mapContent.mobileHint}</p>
      <div className="map-scroll" tabIndex={0} role="region" aria-label={mapContent.title}>
        <svg viewBox="0 0 1000 1180" className="relationship-web" role="group" aria-labelledby="relationship-map-title relationship-map-description">
          <title id="relationship-map-title">{mapContent.title}</title>
          <desc id="relationship-map-description">{mapContent.diagramDescription}</desc>
          <MapConnections />
          <g className="map-center">
            <BranchingCenter />
            <text x="500" y="490" textAnchor="middle" className="map-center-title">{mapContent.center[0].toLocaleUpperCase("es")}</text>
            <text x="500" y="525" textAnchor="middle" className="map-center-title">{mapContent.center[1].toLocaleUpperCase("es")}</text>
            {mapContent.centerCaptionLines.map((line, index) => (
              <text key={line} x="500" y={562 + index * 19} textAnchor="middle" className="map-center-caption">{line}</text>
            ))}
          </g>
          {mapContent.nodes.map((node) => (
            <a key={node.id} href={`#elaboracion-${node.id}`} className="map-node" aria-label={`${node.title}: ${node.captionLines.join(" ")}`}>
              <g transform={`translate(${node.x - 150} ${node.y - 112})`}>
                <image href={illustrationSource(node.id)} data-art-src={illustrationSource(node.id)} className="art-image" width="300" height="225" />
                {!hideText && <text x="150" y="260" textAnchor="middle" className="map-node-title">{node.title.toLocaleUpperCase("es")}</text>}
                {!hideText && node.captionLines.map((line, index) => (
                  <text key={`${node.id}-${index}`} x="150" y={285 + index * 19} textAnchor="middle" className="map-node-caption">{line}</text>
                ))}
              </g>
            </a>
          ))}
        </svg>
      </div>
      <figcaption className="sr-only">{mapContent.diagramDescription}</figcaption>
    </figure>
  );
}
