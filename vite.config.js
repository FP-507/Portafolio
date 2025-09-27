import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cambia "portfolio" por el nombre de tu repo en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
