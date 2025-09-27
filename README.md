# 📱 Portfolio - Fidel Pizart

Portfolio profesional de desarrollador backend con funcionalidades PWA (Progressive Web App).

## 🚀 Características Principales

- ✅ **React 18** con Hooks modernos
- ✅ **Vite** para build ultra-rápido 
- ✅ **PWA completa** - Instalable como app nativa
- ✅ **Tailwind CSS** para diseño responsive
- ✅ **Framer Motion** para animaciones fluidas
- ✅ **React Router** para SPA routing
- ✅ **EmailJS** para formulario de contacto funcional
- ✅ **Service Worker** para funcionalidad offline
- ✅ **Dark/Light Mode** automático
- ✅ **Blog System** completo con MDX
- ✅ **SEO optimizado** para buscadores

## 🛠️ Tecnologías

- **React 18** - Librería de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Librería de animaciones
- **Lucide React** - Iconos SVG optimizados

## 📁 Estructura del proyecto

```
src/
├── components/          # Componentes de React
│   ├── Navbar.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección hero
│   ├── About.jsx       # Sección sobre mí
│   ├── Projects.jsx    # Sección de proyectos
│   ├── Contact.jsx     # Sección de contacto
│   ├── Footer.jsx      # Pie de página
│   └── ErrorBoundary.jsx # Manejo de errores
├── context/            # Context API
│   └── AppContext.jsx  # Estado global de la app
├── hooks/              # Custom hooks
│   └── useLocalStorage.js # Hook para localStorage
├── index.css           # Estilos de Tailwind
├── main.jsx           # Punto de entrada
└── Portfolio.jsx      # Componente principal
```

## 🎯 Mejoras implementadas

### 1. **Gestión de Estado Global**
- Context API para evitar prop drilling
- Estados persistentes en localStorage
- Funciones optimizadas con useCallback

### 2. **Accesibilidad (a11y)**
- ARIA labels descriptivos
- Navegación por teclado completa
- Focus management mejorado
- Roles semánticos apropiados

### 3. **Performance**
- React.memo para componentes optimizados
- useCallback para funciones estables
- Lazy loading de preferencias del sistema

### 4. **UX/UI Mejorado**
- Cierre de menú con Escape o click fuera
- Animaciones suaves y consistentes
- Feedback visual mejorado en botones
- Estados de hover y focus bien definidos

### 5. **Robustez del Código**
- Error Boundaries para manejo de errores
- Validación y manejo seguro de localStorage
- Detección automática del tema del sistema
- Estructura semántica HTML mejorada

## ⚙️ Instalación y Comandos

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm run dev
```

### 3. Generar build de producción
```bash
npm run build
```

### 4. Preview del build local
```bash
npm run serve
```

## 🌐 Deploy Manual a GitHub Pages

### Método Simple (Recomendado)

1. **Genera el build:**
   ```bash
   npm run build
   ```

2. **Sube a GitHub:**
   - Crea un repositorio llamado "Portafolio" en GitHub
   - Sube TODOS los archivos del proyecto (incluido src/, public/, package.json, etc.)
   - Ve a **Settings → Pages**
   - Selecciona **"GitHub Actions"** como fuente
   - GitHub detectará automáticamente que es un proyecto Vite/React

3. **Tu sitio estará disponible en:**
   ```
   https://tu-usuario.github.io/Portafolio/
   ```

### Configuración Personalizada

Si necesitas cambiar el nombre del repositorio, edita `vite.config.js`:

```javascript
// Para repositorio diferente
base: '/mi-nuevo-nombre/'

// Para repositorio principal (username.github.io)
base: '/'
```

## 📱 Responsive Design

- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints**: Responsive en tablets y desktop
- **Touch Friendly**: Botones y elementos táctiles apropiados

## 🌐 Soporte de navegadores

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 🔧 Configuración

El proyecto usa:
- **PostCSS** para procesamiento de CSS
- **Autoprefixer** para compatibilidad de navegadores
- **Tailwind CSS** para estilos utilitarios
- **ESLint** para linting de código

## 📄 Licencia

© 2025 Fidel Pizart. Todos los derechos reservados.