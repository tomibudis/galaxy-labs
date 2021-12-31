import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import copy from 'rollup-plugin-copy';
import path from 'path';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const root = process.platform === 'win32' ? path.resolve('/') : '/';

/**
 * Externals
 * @type {(id: string) => void}
 */
const external = (id) => {
  return !id.startsWith('.') && !id.startsWith(root);
};

const input = './src/index.ts';

const getBabelOptions = ({ useESModules }) => ({
  exclude: '**/node_modules/**',
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  runtimeHelpers: true,
  plugins: [['@babel/plugin-transform-runtime', { useESModules }]],
});

const getSharedRollupPlugins = ({ extractCSS }) => [
  nodeResolve({
    extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
    dedupe: ['react', 'react-dom'],
  }),
  postcss({
    extract: extractCSS,
    inject: extractCSS,
    minimize: true,
  }),
  copy({
    targets: [
      { src: ['./src/assets/font/*'], dest: 'lib' },
      { src: 'LICENSE', dest: 'lib' },
      { src: 'README.md', dest: 'lib' },
      {
        src: 'package.json',
        dest: 'lib',
        transform: (content) => {
          const {
            scripts,
            devDependencies,
            husky,
            release,
            engines,
            ...keep
          } = JSON.parse(content.toString());
          return JSON.stringify(keep, null, 2);
        },
      },
    ],
  }),
  terser({
    output: {
      comments: false,
    },
  }),
];

const cjs = [
  {
    input,
    output: {
      file: `lib/${pkg.name}.cjs`,
      format: 'cjs',
    },
    external,
    plugins: [
      babel(getBabelOptions({ useESModules: false })),
      ...getSharedRollupPlugins({ extractCSS: false }),
    ],
  },
];

const esm = [
  {
    input,
    external,
    output: {
      file: `lib/${pkg.name}.esm.js`,
      format: 'esm',
    },
    plugins: [
      babel(getBabelOptions({ useESModules: true })),
      ...getSharedRollupPlugins({
        extractCSS: `styles.css`,
      }),
      filesize(),
    ],
  },
];

let config;
switch (process.env.BUILD_ENV) {
  case 'cjs':
    config = cjs;
    break;
  case 'esm':
    config = esm;
    break;
  default:
    config = cjs.concat(esm);
}

module.exports = config;
