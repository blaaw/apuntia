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
