# Fidel Pizart · Portafolio

Portafolio profesional de **Fidel Pizart**, desarrollador Python en Colón, Panamá: aplicaciones web, análisis de datos y diseño web.

**[Ver el portafolio en vivo →](https://fp-507.github.io/Portafolio/)**

## Qué contiene

- **13 proyectos** filtrables por área (análisis de datos, programación y diseño web), con enlaces al código y a las demos en vivo.
- **Certificaciones** (Microsoft Excel Expert y Associate, Cisco Python Essentials 1 y 2, Ciberseguridad, Desarrollo con IA y TOEIC B2), logros, experiencia y voluntariado.
- Ruta de aprendizaje respaldada por proyectos y una línea de tiempo por meses.
- **Bilingüe**: selector español / inglés, que usa el idioma del navegador si el visitante no eligió ninguno.

## Tecnología

HTML, CSS y JavaScript puro, sin frameworks ni paso de compilación. Publicado con GitHub Pages.

- Temas claro y oscuro con tokens CSS.
- Traducciones con atributos `data-i18n` y un diccionario por idioma en `script.js`.
- Animaciones de entrada con `IntersectionObserver`, que respetan `prefers-reduced-motion`.
- Menú que resalta la sección visible según la posición de scroll.
- Diseño responsive con menú hamburguesa en tablets y celulares.

## Estructura

```
index.html   contenido y secciones
styles.css   estilos, temas y diseño responsive
script.js    idioma, tema, animaciones, filtros y navegación
assets/      logo, íconos e insignias de certificaciones
```

## Ejecutarlo en local

```bash
python -m http.server 8000
```

Luego abre <http://localhost:8000>.
