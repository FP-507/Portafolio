# Guía de Deployment para el Portafolio

## Opción 1: Vercel (Recomendado ⭐)

### Pasos para Deploy en Vercel:

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con tu cuenta de GitHub

2. **Conectar repositorio**
   - Haz clic en "New Project"
   - Conecta tu repositorio de GitHub
   - Selecciona este proyecto

3. **Configuración automática**
   - Vercel detectará automáticamente que es un proyecto Vite
   - Los ajustes por defecto funcionarán perfectamente

4. **Deploy automático**
   - Cada push a main/master deployará automáticamente
   - URL personalizada disponible

### URL final: `https://tu-portfolio.vercel.app`

---

## Opción 2: Netlify

### Pasos para Deploy en Netlify:

1. **Crear cuenta en Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Regístrate con GitHub

2. **New Site from Git**
   - Conecta tu repositorio
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Configuración para React Router**
   - Crear archivo `public/_redirects` con:
     ```
     /*    /index.html   200
     ```

---

## Opción 3: GitHub Pages

### Pasos para GitHub Pages:

1. **Instalar gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Agregar scripts en package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Configurar base en vite.config.js**
   ```js
   export default defineConfig({
     base: '/nombre-del-repositorio/',
     // ... resto de configuración
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

---

## Variables de Entorno para EmailJS

Para que el formulario de contacto funcione, necesitas configurar:

### En Vercel:
- Ve a Project Settings → Environment Variables
- Agrega:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`

### En Netlify:
- Ve a Site Settings → Build & Deploy → Environment Variables
- Agrega las mismas variables

---

## Optimizaciones Pre-Deploy

- ✅ Build exitoso
- ✅ Imágenes optimizadas
- ✅ Lazy loading implementado
- ✅ Bundle splitting automático
- ✅ CSS optimizado

## Métricas Esperadas

- **Performance**: 95+ (Lighthouse)
- **Accessibility**: 100 (Lighthouse)
- **Best Practices**: 100 (Lighthouse)
- **SEO**: 90+ (Lighthouse)

## Dominios Personalizados

Una vez deployado, puedes configurar dominios personalizados:
- `tu-nombre.dev`
- `portfolio.tu-dominio.com`

¡Tu portafolio está listo para ser deployado! 🚀