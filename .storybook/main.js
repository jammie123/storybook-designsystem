module.exports = {
  presets: [{
    name: 'storybook-addon-deps/preset',
    options: {
      exclude: /^@babel/
    }
  }],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
};

import '../src/global/global.scss';

const path = require('');

// blah blah code

module.exports = (baseConfig, env) => {

  // blah blah code

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./'),
  ];
}