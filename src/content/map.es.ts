// Fuente editorial en español. Traducción mediante i18n en una fase posterior.
export const mapContent = {
  title: "Cómo trabajo",
  introduction: "Leer el territorio para percibir las relaciones que lo conforman y encontrar formas de traducirlo para poder compartirlo.",
  center: ["Percibir", "relaciones"],
  centerCaptionLines: ["La red de vínculos", "entre lo material,", "lo vivo y lo cultural."],
  mobileHint: "Desliza el mapa para explorar sus relaciones.",
  diagramDescription: "Percibir relaciones ocupa el centro de un círculo con la frase la red de vínculos entre lo material, lo vivo y lo cultural. Territorio se bifurca hacia Materia y Conocimiento; una ruta continúa hacia Experiencia y la otra hacia Transformación. Ambas se reúnen en Compartir. Líneas más sutiles conectan el círculo central con cada ámbito. Cada dibujo enlaza con su paso en la elaboración.",
  nodes: [
    { id: "territorio", title: "Territorio", captionLines: ["Observar, escuchar,", "habitar, cosechar."], description: "Montaña, sol, río y aire. El suelo, el clima, los aromas, los ecosistemas, la cultura, los productores y las estaciones dan contexto a la materia.", x: 500, y: 145 },
    { id: "materia", title: "Materia", captionLines: ["Entrar en relación con su carácter,", "sus percepciones sensoriales", "y el ecosistema al que pertenece."], description: "Conocer su carácter, sus ciclos y su función en el ecosistema. Las raíces y las hojas conectan agua, suelo, aire y luz: una imagen de la fotosíntesis y de la vida.", x: 175, y: 380 },
    { id: "conocimiento", title: "Conocimiento", captionLines: ["Integrar saberes para obrar."], description: "Observar, probar, recordar y volver a hacer. Reunir experiencia, investigación, botánica, saberes tradicionales, cultivo, recolección, técnica y análisis sensorial.", x: 825, y: 380 },
    { id: "transformacion", title: "Transformación", captionLines: ["Elegir el gesto que permite expresar", "el carácter de la materia.", "La técnica al servicio del producto."], description: "Macerar, destilar, extraer, fermentar, concentrar, combinar y conservar. Elegir el gesto que permite expresar el carácter de la materia.", x: 825, y: 720 },
    { id: "experiencia", title: "Experiencia", captionLines: ["Sensaciones. Lo que permanece", "en el cuerpo y el tiempo."], description: "El resultado se vuelve sensación: aroma, sabor, temperatura, textura y persistencia. Despierta recuerdos y abre nuevas preguntas.", x: 175, y: 720 },
    { id: "compartir", title: "Compartir", captionLines: ["El espacio donde sucede el intercambio.", "Reciprocidad."], description: "Cinco manos sostienen un mismo hilo que las conecta. La esencia está en el encuentro, la comunidad, la colaboración y el intercambio de saberes. Compartir da sentido a la elaboración.", x: 500, y: 935 },
  ],
} as const;

export type MapNodeId = (typeof mapContent.nodes)[number]["id"];
export type IllustrationId = MapNodeId | "relaciones";

export const elaborationContent = {
  title: "Helado de mora y enebro",
  introduction: "Elaborar un sabor que nace de un territorio y sus relaciones.",
  steps: [
    { id: "territorio", title: "Territorio", subtitle: "Todo empieza por escuchar un lugar.", body: "Observar el paisaje, el suelo, el agua, la luz y la estación. En el ejemplo, la mora y el enebro se encuentran en un mismo entorno: ese vínculo es el punto de partida." },
    { id: "materia", title: "Materia", subtitle: "Conocer antes de intervenir.", body: "La mora aporta dulzor, jugosidad y notas silvestres. Habla del sotobosque húmedo y fértil mediterráneo. El enebro sugiere notas aromáticas, resinosas y de bosque. Pertenece a la parte seca y soleada del mismo bosque. Dos expresiones de un mismo ecosistema que,  a través de los sentidos, permiten percibir el paisaje en toda su amplitud, revelando sus distintas capas." },
    { id: "conocimiento", title: "Conocimiento", subtitle: "El tiempo también es un ingrediente.", body: "Observar, ensayar, registrar y volver a probar. Poner en diálogo los saberes tradicionales, la botánica, la técnica y la experiencia sensorial para comprender la materia." },
    { id: "relaciones", title: "Relaciones", subtitle: "Encontrar el hilo que las une.", body: "La propuesta relaciona la dulzura de la mora con el carácter aromático del enebro. El territorio orienta la combinación; las pruebas permiten afinar su equilibrio." },
    { id: "transformacion", title: "Transformación", subtitle: "Extraer para expresar.", body: "La referencia propone destilar las bayas de enebro para obtener un hidrolato e integrarlo en un helado de mora. Ajustar textura, dulzor y equilibrio aromático al servicio de la materia." },
    { id: "experiencia", title: "Experiencia", subtitle: "El paisaje se convierte en sensación.", body: "La intención es un helado cremoso donde convivan la fruta y las notas del bosque, con un final fresco y persistente. Lo que importa es lo que despierta: sensaciones, recuerdos y curiosidad." },
    { id: "compartir", title: "Compartir", subtitle: "La elaboración encuentra su sentido en los demás.", body: "Llevarlo a la mesa, escuchar a quien lo prueba y compartir lo aprendido. La experiencia de los demás devuelve preguntas al territorio: el recorrido vuelve a empezar." },
  ],
} as const;
