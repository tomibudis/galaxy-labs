module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  typescript: {
    reactDocgen: 'react-docgen',
  },
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
                : '[path][name]__[local]--[hash:base64:5]',
            },
            sourceMap: !isProduction,
            importLoaders: 1,
          },
        },
        'sass-loader',
      ],
    });

    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 60,
            mimetype: 'application/font-ttf',
            name: '[name].[ext]',
          },
        },
      ],
    });

    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.tsx?$/,
      use: require.resolve('babel-loader'),
    });

    config.resolve.extensions.push('.ts', '.tsx', '.json');

    return config;
  },
};
