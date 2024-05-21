import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/rewact-entry.js`,
        chunkFileNames: `assets/rewact-chunk.js`,
        assetFileNames: `assets/rewact.[ext]`
      }
    }
  }
})
