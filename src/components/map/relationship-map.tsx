import { getLocale, getTranslations } from "next-intl/server";
import { mapPositions, type MapNodeId } from "@/content/map-layout";

type MapNode = { id: MapNodeId; title: string; captionLines: string[]; description: string };
import { illustrationSource } from "./illustration-source";
import { MapConnections } from "./map-connections";
import { BranchingCenter } from "./branching-center";

export async function RelationshipMap({ hideText = false }: { hideText?: boolean }) {
  const [t, locale] = await Promise.all([getTranslations("Map"), getLocale()]);
  const nodes = t.raw("nodes") as MapNode[];
  const center = t.raw("center") as string[];
  const captions = t.raw("centerCaptionLines") as string[];
  return (
    <figure className="relationship-map">
      <div className="map-frame">
        <svg viewBox="0 0 1000 1180" className="relationship-web" role="group" aria-labelledby="relationship-map-title relationship-map-description">
          <title id="relationship-map-title">{t("title")}</title>
          <desc id="relationship-map-description">{t("diagramDescription")}</desc>
          <MapConnections />
          <g className="map-center">
            <BranchingCenter />
            <text x="500" y="490" textAnchor="middle" className="map-center-title">{center[0].toLocaleUpperCase(locale)}</text>
            <text x="500" y="525" textAnchor="middle" className="map-center-title">{center[1].toLocaleUpperCase(locale)}</text>
            {captions.map((line, index) => (
              <text key={line} x="500" y={562 + index * 19} textAnchor="middle" className="map-center-caption">{line}</text>
            ))}
          </g>
          {nodes.map((node) => (
            <a key={node.id} href={`#proceso-${node.id}`} className="map-node" aria-label={`${node.title}: ${node.captionLines.join(" ")}`}>
              <g transform={`translate(${mapPositions[node.id].x - 150} ${mapPositions[node.id].y - 112})`}>
                <image href={illustrationSource(node.id)} data-art-src={illustrationSource(node.id)} className="art-image" width="300" height="225" />
                {!hideText && <text x="150" y="260" textAnchor="middle" className="map-node-title">{node.title.toLocaleUpperCase(locale)}</text>}
                {!hideText && node.captionLines.map((line, index) => (
                  <text key={`${node.id}-${index}`} x="150" y={285 + index * 19} textAnchor="middle" className="map-node-caption">{line}</text>
                ))}
              </g>
            </a>
          ))}
        </svg>
      </div>
      <figcaption className="sr-only">{t("diagramDescription")}</figcaption>
    </figure>
  );
}
