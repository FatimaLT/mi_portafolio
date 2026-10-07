# Bitácora de Decisiones Técnicas y de Diseño

En este documento se registran las decisiones clave tomadas durante el desarrollo del portafolio.

## 1. Arquitectura de Estilos CSS
- **Decisión:** Mantener una estructura de estilos dividida en `estilos.css` y `responsive.css`.
- **Justificación:** Permite mantener separada la maquetación base de las reglas de adaptabilidad para dispositivos móviles (`@media queries`), reduciendo la complejidad de mantenimiento y garantizando una carga limpia y rápida.

## 2. Variables CSS (`:root`)
- **Decisión:** Implementar variables para colores, tipografías y transiciones.
- **Justificación:** Facilita la personalización global de la interfaz y simplifica la implementación del modo oscuro/claro sin duplicar reglas en CSS.

## 3. Accesibilidad y Semántica HTML
- **Decisión:** Utilizar etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) e incluir atributos ARIA donde corresponde.
- **Justificación:** Garantiza la navegabilidad con teclado y compatibilidad con lectores de pantalla, logrando una puntuación de 100 en Accesibilidad.

## 4. JavaScript Ligero y Nativo
- **Decisión:** Utilizar JavaScript Vanilla (sin librerías externas) para el menú hamburguesa y el selector de tema.
- **Justificación:** Minimiza los tiempos de carga, evita dependencias innecesarias y maximiza la velocidad de ejecución.