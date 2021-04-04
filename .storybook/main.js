module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ],
  webpackFinal: async (config, { configType }) => {
    const isProduction = configType === 'PRODUCTION';

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: isProduction
                ? '[hash:base64:8]'
                : '[path][name]__[local]--[hash:base64:5]'
            },
            sourceMap: !isProduction,
            importLoaders: 1,
          }
        },
        'sass-loader'
      ]
    });

    config.module.rules.push({
      test: /\.tsx?$/,
      use: require.resolve('babel-loader')
    });

    config.resolve.extensions.push('.ts', '.tsx', '.json');

    return config;
  }
}