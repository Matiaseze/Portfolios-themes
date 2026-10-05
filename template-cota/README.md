# Cota

Template de portfolio para perfiles técnicos, hecho con Astro, Tailwind, GSAP (ScrollTrigger + SplitText), Lenis y PhotoSwipe.

Estética de plano técnico: gris papel, negro tinta, acento amarillo, titulares en mayúsculas apretadas, etiquetas monoespaciadas y rejilla discontinua de fondo.

## Usar el template

1. Copia esta carpeta como `portfolio-<nombre>` junto a `docker-compose.yml`.
2. Añade su servicio en el compose (carpeta, puerto del host y volumen de `node_modules` propios).
3. Edita el contenido en `src/data/site.ts`. Todos los textos están ahí.

## Estructura

```text
src/
├── data/site.ts          contenido del sitio
├── scripts/motion.ts     Lenis + registro de plugins de GSAP
├── scripts/animations.ts animaciones por atributo data-*
├── styles/global.css     tokens de color y tipografía
├── components/           secciones (Hero, About, Areas, Projects, Process, Experience, Contact)
└── components/ui/        Button, SectionHeader, GridLines
```

## Animaciones por atributo

| Atributo              | Efecto                                                  |
| :-------------------- | :------------------------------------------------------ |
| `data-split`          | texto que sube línea a línea (`="chars"`: letra a letra) |
| `data-blur`           | palabras que aparecen desenfocadas                      |
| `data-scrub`          | palabras que se iluminan con el scroll                  |
| `data-reveal`         | bloque que sube con fade                                |
| `data-reveal-stagger` | lo mismo, escalonado por hijo                           |
| `data-counter="12"`   | contador animado (`data-suffix` opcional)               |
| `data-parallax="0.1"` | desplazamiento vertical con el scroll                   |

Con `prefers-reduced-motion` las animaciones se desactivan y el contenido se muestra sin ocultar.

## Acerca de

### Origen e inspiración

Este template fue creado desde cero. Su estética está inspirada en el sitio de demostración [bark-co.vercel.app](https://bark-co.vercel.app/), que se usó solo como referencia visual general: tipo de paleta, jerarquía tipográfica y patrones de maquetación.

- No se copió ni se incluye código, texto, imagen ni ningún otro archivo de ese sitio ni de la plantilla en la que se basa. Todo el código y el contenido de este repositorio son propios.
- Los derechos sobre el diseño original pertenecen a sus autores. Este proyecto no tiene relación con ellos ni cuenta con su respaldo.
- Si los autores consideran que algún elemento afecta sus derechos, pueden abrir un issue en este repositorio y se modificará o retirará.

### Uso no comercial

Este tema es de uso personal. Se utiliza como base para armar portfolios de personas particulares y **no se vende, no se licencia ni se ofrece como producto comercial**.

### Contenido de ejemplo

Los nombres, proyectos, instituciones, empresas, correos y cifras que aparecen en `src/data/site.ts` son ficticios y solo sirven de ejemplo. Cualquier parecido con personas u organizaciones reales es casual.

Quien use el tema para un portfolio es responsable de tener los derechos sobre el contenido que agregue (textos, fotografías, logos, documentos).

### Licencias de terceros

Cada dependencia mantiene su propia licencia, y sus nombres y marcas pertenecen a sus respectivos titulares.

| Dependencia                 | Licencia                                                                  |
| :-------------------------- | :------------------------------------------------------------------------ |
| Astro                       | MIT                                                                       |
| Tailwind CSS                | MIT                                                                       |
| Lenis                       | MIT                                                                       |
| PhotoSwipe                  | MIT                                                                       |
| GSAP (ScrollTrigger, SplitText) | [Licencia estándar de GSAP](https://gsap.com/standard-license) (gratuita, con condiciones propias) |
| Inter Tight, Space Mono     | SIL Open Font License 1.1 (vía Fontsource)                                |