# 🚀 Portfolio Profesional - Cyberpunk Theme

Portfolio profesional para desarrollador Full Stack con estética futurista/cyberpunk, desarrollado con Angular, TypeScript y SCSS.

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## ✨ Características

- 🎨 **Diseño Cyberpunk/Futurista** con efectos neón y animaciones
- 🌙 **Tema Oscuro/Claro** con toggle accesible y transiciones suaves
- 📱 **Diseño Responsive** (Mobile-first)
- ♿ **Accesible** con ARIA labels y navegación por teclado
- 🎬 **Animaciones** con efectos glitch, typing, parallax y más
- 🔧 **Preparado para Spline** - Contenedores listos para objetos 3D
- 📝 **Componentes Modulares** y código limpio

## 📋 Secciones

1. **Hero** - Presentación con efecto glitch y typing
2. **Sobre Mí** - Información personal y biografía
3. **Habilidades** - Stack tecnológico con barras de progreso animadas
4. **Proyectos** - Grid de proyectos con filtros y modales
5. **Experiencia** - Timeline futurista de experiencia laboral
6. **Educación** - Formación académica y certificaciones
7. **Blog** - Estructura preparada para artículos
8. **Contacto** - Formulario con validaciones y información de contacto

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio.git

# Entrar al directorio
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

## 📦 Scripts Disponibles

```bash
npm start       # Servidor de desarrollo (http://localhost:4200)
npm run build   # Compilar para producción
npm run watch   # Compilar con observación de cambios
```

## 🎨 Personalización

### Información Personal

Actualiza los archivos de los componentes en `src/app/features/`:

1. **home.component.ts** - Nombre y descripción principal
2. **about.component.ts** - Biografía, datos personales e intereses
3. **skills.component.ts** - Tecnologías y niveles
4. **projects.component.ts** - Lista de proyectos
5. **experience.component.ts** - Experiencia laboral
6. **education.component.ts** - Educación y certificaciones
7. **contact.component.ts** - Información de contacto

### Redes Sociales

Edita `src/app/shared/components/social-links/social-links.component.ts`:

```typescript
readonly socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/tu-usuario',
    // ...
  },
  // Añadir más...
];
```

### Colores y Temas

Modifica las variables en `src/styles/_variables.scss`:

```scss
// Colores Neón
$color-neon-green: #00ff88;
$color-neon-blue: #00d4ff;
$color-neon-cyan: #00ffff;
$color-neon-purple: #b000ff;
$color-neon-pink: #ff00ff;
```

### CV

Reemplaza el archivo `src/assets/cv/cv.pdf` con tu CV real.

## 🎮 Integración con Spline (3D)

El proyecto está preparado para integrar objetos 3D de Spline:

1. Instala el runtime:
```bash
npm install @splinetool/runtime
```

2. Edita `src/app/shared/components/spline-container/spline-container.component.ts`

3. Descomenta el código de integración y añade tu URL de Spline

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── core/
│   │   └── services/
│   │       ├── theme.service.ts      # Gestión de temas
│   │       └── scroll.service.ts     # Navegación por scroll
│   ├── shared/
│   │   └── components/
│   │       ├── navbar/               # Barra de navegación
│   │       ├── footer/               # Pie de página
│   │       ├── theme-toggle/         # Switch de tema
│   │       ├── social-links/         # Enlaces a redes
│   │       ├── loader/               # Indicador de carga
│   │       └── spline-container/     # Contenedor para 3D
│   └── features/
│       ├── home/                     # Sección Hero
│       ├── about/                    # Sobre mí
│       ├── skills/                   # Habilidades
│       ├── projects/                 # Proyectos
│       ├── experience/               # Experiencia
│       ├── education/                # Educación
│       ├── blog/                     # Blog
│       └── contact/                  # Contacto
├── assets/
│   ├── images/                       # Imágenes
│   ├── icons/                        # Iconos
│   ├── cv/                          # CV en PDF
│   └── fonts/                       # Fuentes locales
└── styles/
    ├── _variables.scss              # Variables
    ├── _mixins.scss                 # Mixins
    ├── _animations.scss             # Animaciones
    └── _themes.scss                 # Temas claro/oscuro
```

## 🌐 Despliegue

### Netlify

1. Conecta tu repositorio en Netlify
2. Configura:
   - Build command: `npm run build`
   - Publish directory: `dist/portfolio`

### Vercel

1. Importa el proyecto en Vercel
2. Framework Preset: Angular
3. Deploy

### GitHub Pages

```bash
npm run build
# Sube el contenido de dist/portfolio a gh-pages
```

## 🔧 Requisitos

- Node.js 18.x o superior
- npm 9.x o superior
- Angular CLI 21.x

## 📝 Licencia

MIT License - Siéntete libre de usar este proyecto como base para tu portfolio.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o PR para sugerencias.

---

Desarrollado con ❤️ y mucho ☕
