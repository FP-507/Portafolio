# 🚀 Guía de Deploy Manual a GitHub Pages

## 📋 Pasos para subir tu portfolio a GitHub:

### 1. **Crear repositorio en GitHub**
- Ve a https://github.com
- Clic en "New repository"
- Nombre: `Portafolio` (o el que prefieras)
- ✅ Public
- ✅ Add a README file
- Clic "Create repository"

### 2. **Subir archivos del proyecto**

**Opción A: Usando GitHub Desktop (Más Fácil)**
1. Descarga GitHub Desktop
2. Clone tu repositorio
3. Copia TODOS los archivos de este proyecto a la carpeta clonada
4. Commit y Push

**Opción B: Usando Git (Línea de comandos)**
```bash
git clone https://github.com/TU-USUARIO/Portafolio.git
cd Portafolio
# Copia todos los archivos del proyecto aquí
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### 3. **Activar GitHub Pages**
1. Ve a tu repositorio en GitHub
2. Clic en **Settings** (pestaña superior)
3. Scroll down hasta **Pages** (menú izquierdo)
4. En **Source** selecciona: **"GitHub Actions"**
5. GitHub detectará automáticamente tu proyecto Vite/React

### 4. **¡Listo!** 
Tu portfolio estará disponible en:
```
https://TU-USUARIO.github.io/Portafolio/
```

---

## 🛠️ Si necesitas cambiar el nombre del repositorio:

1. **Cambia el nombre en GitHub:**
   - Settings → General → Repository name

2. **Actualiza vite.config.js:**
   ```javascript
   // Si tu repo se llama "mi-portfolio"
   base: '/mi-portfolio/'
   
   // Si tu repo se llama igual que tu username
   base: '/'
   ```

3. **Regenera el build:**
   ```bash
   npm run build
   ```

4. **Sube los cambios a GitHub**

---

## ⚡ Build incluido

Este proyecto ya tiene el build generado en la carpeta `dist/`. GitHub Pages lo detectará automáticamente.

**Archivos importantes incluidos:**
- ✅ `dist/` - Build de producción
- ✅ `public/404.html` - Para SPA routing
- ✅ PWA icons y manifest
- ✅ Service Worker para offline
- ✅ Configuración optimizada

---

## 🔧 Troubleshooting

**❌ Página en blanco:**
- Verifica que el `base` en vite.config.js coincida con tu repo
- Limpia caché (Ctrl+F5)
- Espera 2-3 minutos

**❌ 404 en rutas:**
- Asegúrate que `404.html` esté en `public/`
- Verifica que GitHub Pages esté usando "GitHub Actions"

**❌ PWA no instala:**
- Usa HTTPS (GitHub Pages lo provee automáticamente)
- Verifica que los iconos estén en `public/`