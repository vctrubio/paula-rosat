// Textos de la sección de ecosistemas en español, pendientes de traducción.
export const landingStories = {
  plants: {
    number: "I",
    eyebrow: "Lo visible",
    title: "Aprender de lo vivo.",
    image: "/illustrations/landing/plant-life.svg",
    description: "Sol, hojas con nervaduras, una abeja, flores, frutos y una gota: un recorrido desde la luz hasta la esencia de las plantas.",
    annotations: [
      { text: "observar", x: 34, y: 208 },
      { text: "reconocer", x: 330, y: 315 },
      { text: "extraer", x: 38, y: 555 },
    ],
    caption: "Mirar una hoja, reconocer un aroma, llevar un descubrimiento a la cocina.",
    closing: "La curiosidad empieza aquí.",
  },
  underground: {
    number: "II",
    eyebrow: "Lo invisible",
    title: "Conocer es conectar.",
    image: "/illustrations/landing/roots-mycelium.svg",
    description: "Un brote, hongos y un corte de suelo revelan raíces ramificadas y una fina red de micelio. Una imagen de los vínculos y del tiempo que sostiene lo que crece.",
    annotations: [
      { text: "escuchar", x: 20, y: 293 },
      { text: "vincular", x: 355, y: 398 },
      { text: "compartir", x: 45, y: 552 },
    ],
    caption: "Bajo lo que vemos hay tiempo y relaciones. Aprender también es escuchar y compartir.",
    closing: "Nada crece a solas.",
  },
} as const;
