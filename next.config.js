// next.config.js
const isProduction = process.env.NODE_ENV === 'production';
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
module.exports = withCSS(
  withImages({
    webpack(config, options) {
      return config;
    },
    assetPrefix: isProduction ? '/ftwl2019' : '',
    publicRuntimeConfig: {
      // used in '/components/Link.js/', for more details go to the component itself
      linkPrefix: isProduction ? '/ftwl2019' : '',
    },
  })
);
