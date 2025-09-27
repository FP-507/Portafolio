# Portfolio - Fidel Pizart

Un portfolio personal moderno construido con React, Vite y Tailwind CSS.

## 🚀 Características

- ✅ **Modo oscuro/claro** con detección automática del sistema
- ✅ **Multiidioma** (Inglés/Español)
- ✅ **Persistencia de preferencias** en localStorage
- ✅ **Diseño responsivo** optimizado para móviles
- ✅ **Animaciones suaves** con Framer Motion
- ✅ **Accesibilidad mejorada** (ARIA labels, navegación por teclado)
- ✅ **Manejo de errores** con Error Boundaries
- ✅ **Optimización de rendimiento** con React.memo y useCallback

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

## 🚀 Comandos disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Deploy a GitHub Pages
npm run deploy
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