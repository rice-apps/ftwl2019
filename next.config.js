// next.config.js
const debug = process.env.NODE_ENV !== 'production';
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
module.exports = withCSS(
  withImages({
    webpack(config, options) {
      return config;
    },
    assetPrefix: !debug ? '/Next-gh-page-example/' : '',
  })
);
