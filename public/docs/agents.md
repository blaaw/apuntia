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
- Paleta de colores para todo el proyecto: #8789c0, #45f0df, #c2cae8, #8380b6, #111d4a, blanco y negro.

### Restricciones
- No borrar ni modificar archivos existentes sin documentar el cambio en readme.md.
- Mantener la coherencia en la estructura de carpetas y nombres de archivos.
- Todas las nuevas páginas/componentes deben seguir el patrón de nombrado actual.

### Próximas tareas por definir
- Implementar sistema de login con roles diferenciados.
- Crear formularios de subida de apuntes.
- Añadir base de datos o almacenamiento para los archivos.
- Implementar lógica de pago para clases.