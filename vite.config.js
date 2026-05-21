import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('images.js') || id.includes('sellerPhoto') || id.includes('siteImages')) return 'product-images'
          if (id.includes('node_modules/react')) return 'vendor'
        },
      },
    },
  },
})
