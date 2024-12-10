import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  },
  server: {
    port: 3000
  },
  css: {
    postcss: {
      plugins: [autoprefixer]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:map";
          @use "@/assets/styles/base/variables.scss" as *;
        `
      }
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
