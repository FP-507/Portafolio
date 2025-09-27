import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [{
          urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'external-images',
            expiration: { maxEntries: 20, maxAgeSeconds: 604800 }
          }
        }]
      },
      manifest: {
        name: 'Fidel Pizart - Backend Developer Portfolio',
        short_name: 'FP Portfolio',
        description: 'Portfolio profesional de desarrollador backend',
        theme_color: '#3b82f6',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  base: '/Portafolio/',
  build: {
    outDir: 'dist',
    minify: 'terser'
  },
  server: {
    port: 3000,
    open: true
  }
})
