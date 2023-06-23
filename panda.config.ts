import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: { value: 'rgb(255, 214, 103)' },
          highlight: { value: '#2b2a2a' },
          dark: { value: '#191919' },
        },
      },
    },
  },
  outdir: './src/panda',
});
