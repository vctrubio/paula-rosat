// Fuente editorial en español. Traducción mediante i18n en una fase posterior.
export const mapContent = {
  title: "Mi mapa",
  introduction: "Leer el territorio para percibir las relaciones que lo conforman y encontrar formas de traducirlo para poder compartirlo.",
  center: ["Percibir", "relaciones"],
  mobileHint: "Desliza el mapa para explorar sus relaciones.",
  diagramDescription: "Una red de seis ámbitos alrededor de Percibir relaciones: territorio, materia y planta, conocimiento, transformación, compartir y experiencia. Todos dialogan con el centro y entre sí. Cada dibujo enlaza con su paso en la elaboración.",
  nodes: [
    { id: "territorio", title: "Territorio", caption: "Observar, escuchar, habitar.", description: "Montaña, sol, río y aire. El suelo, el clima, los aromas, los ecosistemas, la cultura, los productores y las estaciones dan contexto a la materia.", x: 500, y: 145 },
    { id: "materia", title: "Materia / planta", caption: "De la raíz a la hoja.", description: "Conocer su carácter, sus ciclos y su función en el ecosistema. Las raíces y las hojas conectan agua, suelo, aire y luz: una imagen de la fotosíntesis y de la vida.", x: 175, y: 380 },
    { id: "conocimiento", title: "Conocimiento", caption: "Aprender haciendo, con tiempo.", description: "Observar, probar, recordar y volver a hacer. Reunir experiencia, investigación, botánica, saberes tradicionales, cultivo, recolección, técnica y análisis sensorial.", x: 825, y: 380 },
    { id: "transformacion", title: "Transformación", caption: "La técnica escucha a la materia.", description: "Macerar, destilar, extraer, fermentar, concentrar, combinar y conservar. Elegir el gesto que permite expresar el carácter de la materia.", x: 825, y: 720 },
    { id: "experiencia", title: "Experiencia", caption: "Lo que permanece en el cuerpo.", description: "El resultado se vuelve sensación: aroma, sabor, temperatura, textura y persistencia. Despierta recuerdos y abre nuevas preguntas.", x: 175, y: 720 },
    { id: "compartir", title: "Compartir", caption: "Compartir es cuidar.", description: "Manos juntas que ofrecen frutos del bosque. La esencia está en el encuentro, la comunidad, la colaboración y el intercambio de saberes. Compartir da sentido a la elaboración.", x: 500, y: 935 },
  ],
} as const;

export type MapNodeId = (typeof mapContent.nodes)[number]["id"];
export type IllustrationId = MapNodeId | "relaciones";

export const elaborationContent = {
  title: "Elaborar",
  subtitle: "Helado de mora y enebro",
  introduction: "Un sabor que nace de un territorio y sus relaciones.",
  steps: [
    { id: "territorio", title: "Territorio", subtitle: "Todo empieza por escuchar un lugar.", body: "Observar el paisaje, el suelo, el agua, la luz y la estación. En el ejemplo, la mora y el enebro se encuentran en un mismo entorno: ese vínculo es el punto de partida." },
    { id: "materia", title: "Materia / planta", subtitle: "Conocer antes de intervenir.", body: "La mora aporta dulzor, jugosidad y fruta de temporada. El enebro sugiere notas aromáticas, resinosas y de bosque. Mirar la planta entera, de las raíces a las hojas, y reconocer sus ciclos." },
    { id: "conocimiento", title: "Conocimiento", subtitle: "El tiempo también es un ingrediente.", body: "Observar, ensayar, registrar y volver a probar. Poner en diálogo los saberes tradicionales, la botánica, la técnica y la experiencia sensorial para comprender la materia." },
    { id: "relaciones", title: "Relaciones", subtitle: "Encontrar el hilo que las une.", body: "La propuesta relaciona la dulzura de la mora con el carácter aromático del enebro. El territorio orienta la combinación; las pruebas permiten afinar su equilibrio." },
    { id: "transformacion", title: "Transformación", subtitle: "Extraer para expresar.", body: "La referencia propone destilar las bayas de enebro para obtener un hidrolato e integrarlo en un helado de mora. Ajustar textura, dulzor y equilibrio aromático al servicio de la materia." },
    { id: "experiencia", title: "Experiencia", subtitle: "El paisaje se convierte en sensación.", body: "La intención es un helado cremoso donde convivan la fruta y las notas del bosque, con un final fresco y persistente. Lo que importa es lo que despierta: sensaciones, recuerdos y curiosidad." },
    { id: "compartir", title: "Compartir", subtitle: "La elaboración encuentra su sentido en los demás.", body: "Llevarlo a la mesa, escuchar a quien lo prueba y compartir lo aprendido. La experiencia de los demás devuelve preguntas al territorio: el recorrido vuelve a empezar." },
  ],
} as const;
