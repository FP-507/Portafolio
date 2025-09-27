import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// GitHub Pages configuration with PWA
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: 'auto',
      base: '/Portafolio/',
      scope: '/Portafolio/',
      manifest: {
        name: 'Fidel Pizart - Backend Developer Portfolio',
        short_name: 'FP Portfolio',
        description: 'Portfolio profesional de desarrollador backend especializado en Python, FastAPI y bases de datos',
        theme_color: '#3b82f6',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/Portafolio/',
        start_url: '/Portafolio/',
        id: '/Portafolio/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', 
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        navigateFallback: '/Portafolio/index.html',
        navigateFallbackDenylist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'external-images',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
              }
            }
          }
        ]
      }
    })
  ],
  base: '/Portafolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
