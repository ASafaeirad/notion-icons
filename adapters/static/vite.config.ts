import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';
import { extendConfig } from '@builder.io/qwik-city/vite';
import baseConfig from '../../vite.config';

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ['@qwik-city-plan'],
      },
      outDir: './docs'
    },
    plugins: [
      staticAdapter({
        origin: 'https://asafaeirad.github.io/notion-icons/',
      }),
    ],
  };
});
