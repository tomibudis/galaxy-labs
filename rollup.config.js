import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import filesize from 'rollup-plugin-filesize';
import path from 'path';

import pkg from './package.json';

const root = process.platform === 'win32' ? path.resolve('/') : '/';

/**
 * Externals
 * @type {(id: string) => void}
 */
const external = (id) => {
  return !id.startsWith('.') && !id.startsWith(root);
};

const input = './src/index.js';

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
    modules: true,
    minimize: true,
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
