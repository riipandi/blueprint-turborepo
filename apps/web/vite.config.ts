import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'pathe'
import { isProduction } from 'std-env'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: { port: 3000, strictPort: true, host: false },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  publicDir: resolve('public'),
  optimizeDeps: {
    // Do not optimize internal workspace dependencies.
    exclude: ['@repo/ui-react'],
  },
  build: {
    emptyOutDir: true,
    minify: isProduction,
    cssMinify: isProduction,
    chunkSizeWarningLimit: 1024 * 4,
    reportCompressedSize: false,
    outDir: resolve('dist'),
    rollupOptions: {
      input: { app: resolve('index.html') },
    },
    terserOptions: { format: { comments: false } },
  },
  esbuild: { legalComments: 'inline' },
})
