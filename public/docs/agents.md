# Instrucciones para el agente Agentes.md - Apuntia

## Propósito
Este archivo contiene instrucciones y directrices para el agente de IA que trabaja en el proyecto Apuntia. Está ubicado en `public/docs/agents.md` y debe consultarse antes de comenzar cualquier tarea de desarrollo o documentación.

## Convenciones de documentación

### Archivo readme.md
- Se encuentra en la raíz del proyecto (`./readme.md`).
- Documenta el propósito general, la estructura actual y los avances realizados.
- Cada vez que se añada una nueva funcionalidad o cambio significativo, se debe actualizar este fichero.
- Formato: Markdown con secciones claras.

### Estructura del proyecto
- El proyecto tiene una arquitectura de "scaffolding" inicial muy básica.
- Las landing pages por rol (admin, estudiante, profesor) están en `pages/landing/`.
- La página principal es `index.html` con un formulario de login básico.
- Los estilos viven en `styles/` y el JavaScript en `src/`.
- La configuración Docker está en la raíz (`docker-compose.yml`, `Dockerfile`, `nginx.conf`).

### Flujo de trabajo esperado
1. **Explorar**: Revisar la estructura actual y el readme.md.
2. **Implementar**: Añadir funcionalidades solicitadas (autenticación, subida de archivos, etc.).
3. **Documentar**: Actualizar readme.md con los cambios realizados.
4. **Guardar instrucciones**: Cualquier nueva regla o patrón debe añadirse a agents.md.
5. **Commit**: Realizar un commit con los cambios después de cada bloque significativo de trabajo.

### Directrices de estilo
- HTML y CSS deben ser sencillos y bonitos: planos, estéticos, minimalistas y funcionales.
- No usar colores chocantes ni bordes super redondeados.
- **Paleta principal: #8789c0, #45f0df, #c2cae8, #8380b6, #111d4a, blanco y negro.**
- **Usar #111d4a (navy oscuro) y blanco como colores principales de texto** para garantizar legibilidad y contraste suficiente.
- **Principio de contraste:** Siempre verificar que el texto sobre el fondo tenga una razón de contraste mínima 4.5:1 (normal text) o 3:1 (large text). El combo #111d4a sobre fondo blanco es 8.5:1, ideal.
- **Diseño light-friendly:** Preferir fondos claros (#f8f9fa o blanco) para reducir la fatiga visual. Los fondos oscuros (#111d4a) solo usarse para acentos o modo nocturno opcional.
- **Aplicar la paleta con criterio, "a tiro" prohibido:** Cada color tiene un rol definido:
  - `#111d4a`: texto principal, headings, bordes sutiles
  - `#45f0df` (cyan): botones de acción primaria, enlaces de acento
  - `#c2cae8` (lavanda claro): fondos de inputs o áreas secundarias
  - `#8380b6` (morado apagado): hover states, bordes activos
  - `#8789c0` (lila medio): secundario, estados disabled o etiquetas
  - Blanco: fondos limpios, espacio negativo
  - Negro: solo si es necesario para texto sobre fondos muy claros
- **Nunca combinar colores "a ciegas":** Si dudas, usa el contraste #111d4a sobre blanco o fondo claro con texto #111d4a. Es la combinación más segura y profesional.
- **Evitar bordes super redondeados:** `border-radius: 0` o como máximo 2px para mantener el estilo flat.
- **Estados interactivos:** Hover, focus y active deben usar colores de la paleta, no colores al azar. El focus state debe tener outline o box-shadow con un color de la paleta para accesibilidad.
- **Transiciones suaves:** Todos los cambios de color/background deben tener `transition: background 0.2s, color 0.2s` o similar para evitar cambios bruscos.

### Restricciones
- No borrar ni modificar archivos existentes sin documentar el cambio en readme.md.
- Mantener la coherencia en la estructura de carpetas y nombres de archivos.
- Todas las nuevas páginas/componentes deben seguir el patrón de nombrado actual.

### Próximas tareas por definir
- Implementar sistema de login con roles diferenciados.
- Crear formularios de subida de apuntes.
- Añadir base de datos o almacenamiento para los archivos.
- Implementar lógica de pago para clases.