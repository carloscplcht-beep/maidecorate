import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFile);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE_PATH || '/maidecorate/',
    plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(currentDir, 'index.html'),
          philosophy: resolve(currentDir, 'nuestra-filosofia/index.html'),
          cosmetics: resolve(currentDir, 'cosmetica-natural/index.html'),
          recommendations: resolve(currentDir, 'mis-recomendaciones/index.html'),
          buy: resolve(currentDir, 'como-comprar/index.html'),
          advisor: resolve(currentDir, 'asesor-ia-de-productos/index.html'),
          contact: resolve(currentDir, 'contacto/index.html'),
          about: resolve(currentDir, 'sobre-maite/index.html'),
          legal: resolve(currentDir, 'aviso-legal/index.html'),
          privacy: resolve(currentDir, 'privacidad/index.html'),
          cookies: resolve(currentDir, 'cookies/index.html'),
          affiliate: resolve(currentDir, 'afiliacion/index.html')
        }
      }
    }
  };
});
