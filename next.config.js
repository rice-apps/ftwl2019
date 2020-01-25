// next.config.js
const repoNameURIPrefix = process.env.NODE_ENV === 'production' ? '/ftwl2019' : '';
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
module.exports = withCSS(
  withImages({
    webpack(config, options) {
      return config;
    },
    assetPrefix: repoNameURIPrefix,
    env: {
      linkPrefix: repoNameURIPrefix,
    },
    generateBuildId: async () => 'current',
  })
);
