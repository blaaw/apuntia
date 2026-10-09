# Apuntia - Web App de Apuntes

## Descripción general
**Apuntia** es una web application individual para la gestión de apuntes y clases particulares. El plataforma conecta a estudiantes y profesores con las siguientes funcionalidades:

### Roles de usuario

- **Estudiantes**: Pueden descargar apuntes gratuitos subidos por los profesores.
- **Profesores**: Pueden subir apuntes gratis y dar clases de pago.
- **Administradores**: Cuentas detrás que gestionan el negocio (validación de cuentas, cobros, etc.).

### Arquitectura actual
El proyecto tiene las siguientes partes:
- **Landing pages**: una por rol (admin, estudiante, profesor).
- **index.html**: Página principal, corresponde al login.
- **Configuración Docker y nginx**: `docker-compose.yml`, `Dockerfile`, `nginx.conf`.

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
│       ├── admin.html         # Landing para administradores
│       ├── estudiante.html  # Landing para estudiantes
│       └── profesor.html    # Landing para profesores
├── public/
│   └── docs/                # ← Documentación para agentes (generada por ti)
├── src/
│   └── login.js             # JavaScript de conexión inicial
└── styles/
    └── login.css            # Estilos base (reset CSS)
```

### Colaboración con IA
Este proyecto está siendo desarrollado de forma individual, con opencode actuando como copilota principalmente para:
- **Documentación**: Generación y mantenimiento de archivos README, agents.md y otros documentos técnicos.
- **Automatización de tareas repetitivas**: Operaciones de git (commits, status, diffs), creación de archivos de configuración, y tareas de scaffolding básicas.
- **Asistente de desarrollo**: Ayuda con estructuras de código, estilos CSS iniciales, y patrones de implementación.

**Decisiones principales, estructura y lógica de negocio** las toma el usuario dueño del proyecto, incluyendo:
- La idea general y el concepto del negocio
- La estructura de roles (estudiante/profesor/admin)
- La lógica de funcionamiento y características prioritarias
- El código funcional implementado

El rol del copilota es acelerar la documentación y tareas repetitivas, mientras que la visión, toma de decisiones y código principal corresponden al desarrollador humano.
