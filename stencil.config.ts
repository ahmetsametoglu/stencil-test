import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'client-component',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: './output/dist',
    },
    {
      type: 'docs-readme',
      dir: './output/docs',
    },
    {
      type: 'www',
      dir: './output/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
