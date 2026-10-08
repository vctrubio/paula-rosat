import type { IllustrationId } from "@/content/map-layout";

export function illustrationSource(id: IllustrationId) {
  return `/illustrations/${id}.webp`;
}
