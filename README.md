# Apuntia - Web App de Apuntes

## Descripción general
**Apuntia** es una web application individual para la gestión de apuntes y clases particulares. El plataforma conecta a estudiantes y profesores con las siguientes funcionalidades:

### Roles de usuario

- **Estudiantes**: Pueden descargar apuntes gratuitos subidos por los profesores.
- **Profesores**: Pueden subir apuntes gratis y dar clases de pago.
- **Administradores**: Cuentas detrás que gestionan el negocio (validación de cuentas, cobros, etc.).

### Arquitectura actual
El proyecto está en una fase muy temprana de estructura/scaffolding. Actualmente incluye:

- **Frontend básico**: HTML estático con páginas para cada rol (landing pages vacías).
- **Estilos**: CSS minimalista (reset global).
- **Lógica JavaScript**: Archivo `src/login.js` con un `onload` básico que imprime "js connected".
- **Servicio backend/Docker**: Configuración nginx con `docker-compose.yml` y `Dockerfile` para despliegue rápido.

### Estructura de carpetas
```
apuntia/
├── .git/                      # Repositorio git
├── docker-compose.yml         # Servicios nginx para desarrollo
├── Dockerfile                 # Imagen nginx:alpine con configuración personalizada
├── nginx.conf               # Configuración de servidor nginx
├── index.html               # Página principal (login)
├── pages/
│   └── landing/
│       ├── admin.html         # Landing para administradores (vacío)
│       ├── estudiante.html  # Landing para estudiantes (vacío)
│       └── profesor.html    # Landing para profesores (vacío)
├── public/
│   └── docs/                # ← Documentación para agentes (generada por ti)
├── src/
│   └── login.js             # JavaScript de conexión inicial
└── styles/
    └── login.css            # Estilos base (reset CSS)
```

### Plan de desarrollo
Futuras iteraciones incluyen:
- Autenticación de roles (estudiante/profesor/admin).
- Subida y descarga de archivos (apuntes).
- Sistema de pagos para clases particulares.
- Panel de administración para gestionar cuentas.

### Próximos pasos (cuando tú indiques)
Vamos a ir añadiendo funcionalidades paso a paso y documentando los avances en `./readme.md`. También iré guardando instrucciones necesarias en `public/docs/agents.md`.