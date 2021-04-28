module.exports = {
  presets: [
    ['@babel/preset-env', { loose: true }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  env: {
    test: {
      presets: [['@babel/preset-env', { loose: true, modules: 'commonjs' }]],
      plugins: ['@babel/plugin-transform-runtime'],
    },
    production: {
      plugins: ['transform-react-remove-prop-types'],
    },
  },
};
