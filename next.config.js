// next.config.js
const prod = process.env.NODE_ENV === 'production';
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
module.exports = withCSS(
  withImages({
    webpack(config, options) {
      return config;
    },
    'process.env.BACKEND_URL': prod ? '/ftwl2019' : '',
  })
);
