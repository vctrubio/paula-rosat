# El mapa de Paula Rosat

Documento de trabajo en español. Reúne el concepto, las referencias, los textos y las decisiones de representación del mapa y de la sección Proceso. Las traducciones vendrán después, mediante i18n.

## Fuentes

- [Notas manuscritas de Paula](docs/references/mapa-manuscrito.jpg).
- [Imagen del documento generado a partir de las notas](docs/references/mapa-referencia.jpg). La referencia recibida es una imagen, no un archivo PDF editable.
- [Mapa conceptual actualizado aportado por Paula](docs/references/mapa-conceptual-actual.png), fuente de los títulos, los textos breves y la disposición de las conexiones de esta iteración.
- [Composición circular del centro](docs/references/map-center-type.png) y [referencia de anillos orgánicos](docs/references/map-center-ornament.png), aportadas para sustituir la imagen del alambique en el mapa.
- Indicaciones de Paula transmitidas en la conversación: territorio con montaña, sol y río; planta con raíces y hojas; conocimiento como experiencia, tiempo y práctica; transformación mediante un alambique; experiencia como resultado; compartir como esencia de la vida y gesto de cuidado.

Las imágenes de referencia se conservan en el repositorio como documentación. La web utiliza ilustraciones propias, no las imágenes completas.

## Idea central

> Leer el territorio para percibir las relaciones que lo conforman y encontrar formas de traducirlo para poder compartirlo.

El centro es **Percibir relaciones**: entre territorio, materia, personas, técnica y cultura. La práctica de Paula conecta esas dimensiones. El mapa es una red viva; la experiencia vuelve a transformar la manera de observar y conocer.

Compartir no es un añadido al final: da sentido al trabajo. Una elaboración se completa en el encuentro, en lo que alguien siente al probarla y en lo que devuelve a los demás.

## Estructura de la web

Se mantienen las tres secciones en este orden: Sobre mí, Mapa, Proceso.

- **Sobre mí:** retrato SVG dentro del óvalo, nombre curvado encima y selector de cuatro idiomas debajo. Sin barra de navegación.
- **Mapa:** red de seis ámbitos alrededor de Percibir relaciones. Cada ilustración muestra debajo su título en mayúsculas y su frase breve, sin trazo resaltador; dos recorridos orgánicos parten de Territorio y se unen en Compartir.
- **Proceso:** recorrido de arriba abajo. Cada paso reutiliza la misma ilustración del mapa. En pantallas amplias, dibujo y explicación comparten una fila; la secuencia de pasos siempre es vertical.

El mapa funciona como entrada a Proceso: cada nodo enlaza con el paso correspondiente. Los dos recorridos inferiores llegan hasta las hebras ocres sostenidas por las manos de Compartir, sin puntas de flecha. En pantallas estrechas se conserva la red y se permite desplazarla horizontalmente para explorar las ilustraciones. Proceso se adapta a una columna.

No se han añadido mapas geográficos, ubicaciones, servicios comerciales ni datos biográficos.

## Los seis ámbitos

### Territorio

**Texto breve:** Observar, escuchar, habitar, cosechar.

**Contenido:** suelo, clima, paisaje, aromas, ecosistemas, cultura, productores, temporalidad y relaciones humanas. Leer un lugar implica atender tanto a sus condiciones materiales como a quienes lo habitan.

**Dibujo:** composición compacta del referente elegido: sol ocre pequeño sobre tres picos angulares, una ladera roja, nieve crema, planos arcilla y pinos oscuros en el borde inferior. Conserva su silueta libre y la textura de impresión; el cielo y el espacio alrededor son transparentes. La corriente del mapa parte de debajo del dibujo y se bifurca hacia los dos lados.

**Archivo:** `public/illustrations/territorio.png`. Ilustración con textura y fondo transparente, compartida por Mapa y Proceso.

### Materia

**Texto breve:** Entrar en relación con su carácter, sus percepciones sensoriales y el ecosistema al que pertenece.

**Contenido:** carácter, cualidades, ciclos, función en el ecosistema, relaciones y usos tradicionales. La ilustración condensa la planta, la luz y el agua en un símbolo.

**Dibujo:** una planta en negativo dentro de un triángulo del ocre del sol de Territorio. Debajo, gotas o semillas en la tinta oscura de sus pinos descienden hasta una sola forma. La imagen reúne planta, luz, agua y materia en un símbolo sencillo.

**Precisión conceptual:** el símbolo reúne luz, planta y agua de forma poética, no como esquema químico. Si el texto futuro explica la fotosíntesis, debe distinguir luz, agua y dióxido de carbono de la liberación de oxígeno.

**Archivo:** `public/illustrations/materia.png`.

### Conocimiento

**Texto breve:** Integrar saberes para obrar.

**Contenido:** observación, investigación, botánica, saberes tradicionales, cultivo y recolección, técnica, formulación y análisis sensorial. También ensayo, registro, memoria y repetición. El conocimiento se desarrolla en la práctica.

**Dibujo:** ojo abierto en un tono arcilla apagado tomado de las montañas de Territorio, con iris radiante y marcas irregulares alrededor. Expresa la observación atenta como comienzo del conocimiento; su textura evoca una impresión hecha a mano.

**Archivo:** `public/illustrations/conocimiento.png`.

### Transformación

**Texto breve:** Elegir el gesto que permite expresar el carácter de la materia. La técnica al servicio del producto.

**Contenido:** macerar, destilar, extraer, fermentar, concentrar, combinar y conservar. Elegir técnicas según lo que la materia puede expresar, respetando sus características.

**Dibujo:** una cerilla encendida de trazo suelto. La llama crece en capas de ocre, arcilla y rosa apagado alrededor de un centro claro, mientras la cabeza carbonizada y el tallo quedan en tinta oliva y madera cálida. El fuego funciona como símbolo del momento en que la materia cambia, sin representar una técnica concreta.

**Archivo:** `public/illustrations/transformacion.png`.

### Experiencia

**Texto breve:** Sensaciones. Lo que permanece en el cuerpo y el tiempo.

**Contenido:** sensación, aroma, temperatura, memoria, sabor, textura y persistencia. Qué recuerdo despierta; qué sucede en el cuerpo; qué queda después de probarlo.

**Dibujo:** apunte de helado con cuatro pinceladas superpuestas en ocre, arcilla, oliva y rosa mora, tomadas de la paleta de la web. El cucurucho queda reducido a unas pocas líneas de tinta, sin trama realista. Los bordes sueltos de pigmento evocan el sabor, la textura y el recuerdo como una experiencia sensible.

**Archivo:** `public/illustrations/experiencia.png`.

### Compartir

**Texto breve:** El espacio donde sucede el intercambio. Reciprocidad.

**Contenido:** comunidad, colaboración, intercambio de saberes, cosechas, trabajos colectivos y espacios compartidos. Escuchar a quien prueba la elaboración también forma parte del proceso.

**Dibujo:** cinco manos entran desde distintos lados y sostienen un hilo ocre continuo que se cruza en el centro. Las manos alternan tinta oliva, arcilla y rosa apagado de la paleta de la web. El gesto colectivo representa la colaboración, el intercambio y la red de vínculos; la composición es una interpretación original de la referencia aportada.

**Archivo:** `public/illustrations/compartir.png`.

## Relaciones de la red

El centro «Percibir relaciones» recupera la frase «La red de vínculos entre lo material, lo vivo y lo cultural». Seis enlaces finos lo relacionan con los ámbitos sin pasar por los textos. El río de Territorio se bifurca en dos recorridos visuales:

- Territorio → Materia → Experiencia → Compartir. La corriente se vuelve gotas y luego trazos de helado.
- Territorio → Conocimiento → Transformación → Compartir. Las lágrimas del ojo se calientan y llegan a la llama de la cerilla.

Los dos recorridos terminan en hilos ocres que se unen a las manos de Compartir. Los tramos laterales se separan de las descripciones y rodean Materia y Conocimiento por fuera. Cada tramo tiene un dibujo propio, con la misma familia de trazos, colores y puntas. Es una lectura poética, no una secuencia rígida; el recorrido práctico de Proceso mantiene su orden. Compartir devuelve nuevas preguntas al territorio aunque ese retorno no se dibuja todavía.

## Proceso: helado de mora y enebro

Ejemplo tomado del documento de referencia. Se utiliza como narración conceptual: aún no hay una receta validada, cantidades, fotografías propias ni resultados documentados de Paula. No presentarlo como un proyecto realizado sin confirmación.

**Introducción:** Un sabor que nace de un territorio y sus relaciones.

| Paso | Título | Intención |
| --- | --- | --- |
| 01 | Territorio | Observar paisaje, suelo, agua, luz y estación. |
| 02 | Materia | Reconocer carácter, cualidades y ciclos de la mora y el enebro. |
| 03 | Conocimiento | Observar, ensayar, registrar y volver a probar. |
| 04 | Relaciones | Explorar el encuentro entre dulzor frutal y notas aromáticas de bosque. |
| 05 | Transformación | Explorar la destilación del enebro y la integración del hidrolato en el helado. |
| 06 | Experiencia | Buscar textura cremosa, equilibrio aromático y persistencia; escuchar qué despierta. |
| 07 | Compartir | Llevarlo a la mesa, compartir lo aprendido y recoger nuevas preguntas. |

### Texto de cada paso

**Territorio — Todo empieza por escuchar un lugar.** Observar el paisaje, el suelo, el agua, la luz y la estación. En el ejemplo, la mora y el enebro se encuentran en un mismo entorno: ese vínculo es el punto de partida.

**Materia — Conocer antes de intervenir.** La mora aporta dulzor, jugosidad y fruta de temporada. El enebro sugiere notas aromáticas, resinosas y de bosque. Mirar la planta entera, de las raíces a las hojas, y reconocer sus ciclos.

**Conocimiento — El tiempo también es un ingrediente.** Observar, ensayar, registrar y volver a probar. Poner en diálogo los saberes tradicionales, la botánica, la técnica y la experiencia sensorial para comprender la materia.

**Relaciones — Encontrar el hilo que las une.** La propuesta relaciona la dulzura de la mora con el carácter aromático del enebro. El territorio orienta la combinación; las pruebas permiten afinar su equilibrio.

**Transformación — Extraer para expresar.** La referencia propone destilar las bayas de enebro para obtener un hidrolato e integrarlo en un helado de mora. Ajustar textura, dulzor y equilibrio aromático al servicio de la materia.

**Experiencia — El paisaje se convierte en sensación.** La intención es un helado cremoso donde convivan la fruta y las notas del bosque, con un final fresco y persistente. Lo que importa es lo que despierta: sensaciones, recuerdos y curiosidad.

**Compartir — La elaboración encuentra su sentido en los demás.** Llevarlo a la mesa, escuchar a quien lo prueba y compartir lo aprendido. La experiencia de los demás devuelve preguntas al territorio: el recorrido vuelve a empezar.

El paso Relaciones utiliza `public/illustrations/relaciones.webp`, con versiones PNG y SVG: una estampa vertical ocre de dos rodajas de cítrico, una en positivo y otra en negativo, unidas por un tallo y una división ondulada. No tiene marco; los segmentos irregulares, la ligera inclinación y la silueta orgánica le dan un carácter más libre. La fuente editable está en `docs/artwork/relaciones-mark.svg`; los espacios sin tinta son transparentes. El nombre y la explicación siguen en la maquetación de Proceso. No añade un séptimo ámbito exterior al mapa; desarrolla el concepto central dentro del ejemplo.

## Lenguaje visual

- Dibujos originales y reutilizables. Los seis ámbitos del mapa y Relaciones utilizan imágenes transparentes con textura pictórica.
- Contornos irregulares y curvas suaves, con aspecto de estudio a mano.
- Poca saturación: tinta verde oliva, papel cálido, lavados vegetales, cobre y rosa seco.
- Profundidad mediante superposición, planos de paisaje, perspectiva, elipses, nervaduras y tramas finas.
- Las seis ilustraciones del mapa son PNG transparentes. El título central y los títulos opcionales siguen como texto SVG editable para permitir la futura traducción.
- Tipografía actual: Cormorant Garamond. No se ha añadido una fuente nueva.
- Los textos accesibles describen los nodos; los dibujos repetidos del recorrido son decorativos y sus títulos también aparecen como encabezados para lectores de pantalla.

## Organización de archivos

| Archivo | Responsabilidad |
| --- | --- |
| `src/content/map.es.ts` | Textos españoles, ámbitos y pasos del ejemplo. |
| `src/components/map/relationship-map.tsx` | Red SVG, conexiones, títulos y enlaces a los pasos. |
| `src/components/map/map-connections.tsx` | Corrientes, gotas, llama e hilos que unen los seis ámbitos. |
| `src/components/map/botanical-illustration.tsx` | Marco SVG reutilizable para ilustración y título. |
| `src/components/map/proceso-step.tsx` | Un paso de la secuencia vertical. |
| `src/components/sections/map-section.tsx` | Composición de la sección Mapa. |
| `src/components/sections/proceso-section.tsx` | Composición de la sección Proceso. |
| `public/illustrations/` | Un dibujo SVG y seis PNG compartidos. |
| `src/app/globals.css` | Tipografía SVG, red y recorrido vertical adaptable. |

## Idiomas

Por indicación del usuario, este contenido se prepara primero en español. Las dos secciones declaran `lang="es"` aunque se cambie el idioma del resto de la web. No se han inventado traducciones ni duplicado este contenido en los cuatro diccionarios.

En la siguiente fase, mover los textos aprobados a los diccionarios de next-intl y sustituir la fuente española por claves de traducción. Conservar los identificadores de los nodos y las rutas de las ilustraciones: las mismas sirven en español, inglés, francés y catalán. Revisar entonces la longitud de los títulos y su espacio dentro de los SVG.

## Símbolo elegido: La esencia

Se ha elegido la propuesta 05: una gota sólida con una hoja recortada en su interior. Se utiliza únicamente el símbolo, sin el nombre debajo.

- Archivo activo: `src/app/icon.svg`.
- Icono de pestaña para Brave y los demás navegadores, mediante la convención de iconos de Next.js.
- Tinta oliva sobre pestañas claras y papel cálido sobre pestañas oscuras; fondo transparente.
- Título de pestaña: **Paula Rosat**, igual en los cuatro idiomas y en la página de desarrollo.
- La galería de propuestas se ha retirado de `/dev`, junto con sus componentes y las alternativas descartadas.
- La imagen OG definitiva sigue pendiente; las composiciones anteriores eran maquetas.

## Pendiente de confirmar con las siguientes notas

- Si el ejemplo de mora y enebro representa una elaboración real o solo ilustra el método.
- El territorio concreto y la identificación de las plantas si el ejemplo se documenta.
- La redacción final en la voz de Paula.
- La traducción de los textos aprobados a los otros tres idiomas.

## Restricción de trabajo vigente

No ejecutar la app, build, lint ni pruebas hasta que el usuario lo pida. Esta iteración se entrega como edición de archivos; no se ha comprobado en el navegador. No crear otro commit sin una nueva indicación.

## Retrato de Paula

El óvalo de la portada utiliza `public/portraits/paula-sketch-v2.svg`, la segunda interpretación de la fotografía de Paula. La ilustración se generó con la herramienta integrada de imágenes y se convirtió en trazados SVG mediante separación de colores y Potrace. El original de mayor detalle se conserva en `docs/artwork/paula-sketch-v2.png`; el prompt y el proceso están documentados en `docs/artwork/portrait-v2.md`.

La dirección es un retrato de lápiz y tinta suave, con proporciones fieles a la referencia, cabello recogido y ojos avellana con reflejos ámbar. La conversión vectorial simplifica la textura del original. El componente `src/components/portrait.tsx` conserva el recorte ovalado, el nombre curvado y las posiciones existentes.

Las descripciones accesibles están en los cuatro diccionarios. Se ha revisado la ilustración independiente; no se ha ejecutado la aplicación, build, lint ni pruebas del proyecto.

## Cierre pendiente

Se ha eliminado el pie anterior, su componente, estilos y traducciones. El nuevo cierre se diseñará a partir de las próximas indicaciones. Los datos de contacto permanecen en `src/config/site.ts`.

## Actualización del centro y los títulos del mapa

El centro muestra «PERCIBIR RELACIONES» y «La red de vínculos entre lo material, lo vivo y lo cultural» dentro de una red circular de ramas finas dibujada en SVG, inspirada en la referencia aportada. Las ramas crecen hacia fuera y dejan espacio para el texto. El círculo no tiene relleno: el fondo del mapa queda visible detrás del texto. No hay imagen raster ni resaltador.

Los títulos de los seis ámbitos aparecen en mayúsculas y a menor tamaño debajo de cada imagen, seguidos de los textos del nuevo mapa de referencia en dos o tres líneas cuando hace falta, sin resaltador. `hideText` permanece disponible en el componente, desactivado por defecto. Las etiquetas accesibles leen el título y el texto visible; las descripciones ampliadas siguen en los datos. Los enlaces del mapa terminan en el borde del círculo. Proceso mantiene los títulos y las explicaciones de los pasos.

## Último ajuste de la portada

El selector de idiomas de Sobre mí queda comentado temporalmente, tanto en el import como en el JSX. `ShortBio`, en `src/components/short-bio.tsx`, muestra debajo del retrato el texto provisional exacto solicitado: «Hola! me gusta mucho mi nuevo novio, dijo paula a mama.» El componente declara español como idioma.

El nombre curvado utiliza Cormorant Garamond en cursiva de peso 500, con mayor tamaño y espaciado más compacto, para una firma más expresiva. El estilo se encuentra en `.portrait-name`.

## Marco circular del centro

«Percibir relaciones» ya no utiliza PNG. El círculo y los dos anillos interiores son elementos SVG editables en `src/components/map/relationship-map.tsx`; el texto se coloca dentro. La ilustración anterior del alambique solo se conserva en `docs/artwork/alambique-center.png`.

La ilustración anterior de Paula junto al alambique permanece archivada en `docs/artwork/paula-alambic.png`, `docs/artwork/paula-alambic.md` y `public/portraits/paula-alambic.svg`. No se ha ejecutado la aplicación, build ni lint.

## Portada como umbral: lo visible y lo invisible

En pantallas de al menos 1200 px, dos láminas botánicas flanquean el retrato. Por debajo de ese ancho se ocultan por completo mediante CSS. No se añaden elementos de navegación.

### Izquierda — Aprender de lo vivo

`public/illustrations/landing/plant-life.svg` es un dibujo vectorial original: sol, una rama continua con hojas nervadas, flor abierta, abeja, fruto, una ramita aromática y una gota. La lectura va de la luz y el crecimiento a la observación de la materia y su esencia. Las líneas de llamada acompañan tres gestos: **observar, reconocer, extraer**.

Texto: «Mirar una hoja, reconocer un aroma, llevar un descubrimiento a la cocina.» Cierre: «La curiosidad empieza aquí.»

La composición evoca la práctica de Paula con plantas, aromas y cocina; no presenta una especie identificada ni atribuye hechos biográficos nuevos.

### Derecha — Conocer es conectar

`public/illustrations/landing/roots-mycelium.svg` muestra un brote sobre el suelo, hongos, raíces de distintos grosores y una red fina de micelio. Una hoja caída sugiere el paso del tiempo. Las líneas de llamada acompañan **escuchar, vincular, compartir**.

Texto: «Bajo lo que vemos hay tiempo y relaciones. Aprender también es escuchar y compartir.» Cierre: «Nada crece a solas.»

La red sirve como metáfora visual de relaciones y conocimiento. Es una ilustración narrativa, no un diagrama científico de intercambios entre especies concretas.

### Composición y tipografía

- Componente compartido: `src/components/landing/botanical-story.tsx`.
- Textos españoles editables: `src/content/landing.es.ts`.
- Retrato en el centro, con las dos láminas a los lados; proporciones adaptables sin posiciones absolutas superpuestas a la cara.
- Nombre sobre una curva más ancha: radio horizontal de 245 unidades SVG, letras de 70 unidades, Cormorant Garamond cursiva de peso 700 y espaciado de 0.055 em.
- Se conserva el retrato elegido y el texto provisional de ShortBio. El selector de idiomas sigue comentado.

### Paso a las otras secciones

La portada usa `position: sticky` dentro de `main`. Mapa y Proceso comparten `.story-pages`, una capa opaca con mayor orden de apilamiento, borde superior suavemente redondeado y sombra discreta. Al desplazar la página, esa capa pasa por encima de la portada; al volver hacia arriba, la descubre de nuevo. El pie tiene su propio fondo opaco.

El desplazamiento es nativo, sin interceptar rueda, teclado o gestos y sin animaciones JavaScript. Se retira el ajuste magnético de scroll para mantener continuo el paso entre capas. En ventanas de hasta 620 px de alto o cuando se solicita movimiento reducido, la portada vuelve al flujo normal para conservar la lectura completa.

No se ha ejecutado la aplicación, build, lint ni pruebas para este cambio.

## Comparación tipográfica: estilo serigrafía

La página `/dev` ya no incluye la barra superior con Paula Rosat ni el selector de idiomas. En `/dev#fonts` se comparan cuatro fuentes: **Fraunces 900**, **Caprasimo**, **Bevan** y **Archivo Black**. Cada muestra contiene el nombre curvado, «Percibir relaciones», una frase corta y caracteres acentuados.

Las familias se cargan con `next/font` dentro del componente de desarrollo `src/components/dev/font-specimens.tsx`. No se aplican a la portada hasta que Paula confirme una dirección. Fraunces es la primera propuesta por su carácter orgánico; las demás exploran una presencia más redonda, de sello o de cartel. Esta comparación se centra en la forma de las letras; no añade textura artificial de impresión.

No se ha ejecutado la app, build ni lint.

## Ecosistemas: sección independiente

«Lo visible» y «Lo invisible» salen de la portada. Ahora forman `EcosystemSection`, en `src/components/sections/ecosystem-section.tsx`, inmediatamente después de Proceso y antes del pie. El archivo de página solo compone las secciones. Las dos historias se muestran lado a lado desde 768 px y una debajo de otra en móvil; ya no están limitadas a escritorio. La portada vuelve a contener únicamente el retrato, el nombre y ShortBio.
