import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: {
        '@components': '/src/components',
        '@pages': '/src/pages',
        '@layouts': '/src/layouts',
        '@assets': '/src/assets',
        '@test': '/test',
        '@utils': '/src/utils',
        '@userAssets': '/src/userAssets',
        '@hooks': '/src/hooks',
      }
  }
})
