export const mapPositions = {
  territorio: { x: 500, y: 145 },
  materia: { x: 175, y: 380 },
  conocimiento: { x: 825, y: 380 },
  transformacion: { x: 825, y: 720 },
  experiencia: { x: 175, y: 720 },
  compartir: { x: 500, y: 935 },
} as const;

export type MapNodeId = keyof typeof mapPositions;
export type IllustrationId = MapNodeId | "relaciones";

export type ProcessStep = {
  id: IllustrationId;
  title: string;
  subtitle: string;
  body: string;
};
