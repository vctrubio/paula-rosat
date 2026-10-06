import type { IllustrationId } from "@/content/map.es";

export function illustrationSource(id: IllustrationId) {
  return `/illustrations/${id}.png`;
}
