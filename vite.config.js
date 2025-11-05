// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Ensure proper SPA fallback
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    }
  },
  // Important for client-side routing
  server: {
    historyApiFallback: true,
    origin: 'http://localhost:5173'
  },
  // Set base path if deploying to subdirectory
  base: './'
})