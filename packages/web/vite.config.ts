import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/**
 * @see  https://vitejs.dev/config/
 */
export default defineConfig({
  resolve: {
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@' : path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/css/theme/variables.scss";` 
      }
    }
  },
  plugins: [react()]
})
