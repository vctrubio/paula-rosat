const illustrationIds = [
  "territorio",
  "materia",
  "conocimiento",
  "transformacion",
  "experiencia",
  "compartir",
  "relaciones",
] as const;

export const artworkSources = [
  "/portraits/paula-sketch-v2.webp",
  ...illustrationIds.map((id) => `/illustrations/${id}.webp`),
];
