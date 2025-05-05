import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        // Remove the additionalData that was causing conflicts
        // additionalData: `$enable-deprecation-messages: false;`
        includePaths: ['node_modules']
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@features': path.resolve(__dirname, './src/features'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@core': path.resolve(__dirname, './src/core'),
      bootstrap: path.resolve(__dirname, 'node_modules/bootstrap')
    }
  }
})
