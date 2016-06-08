// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    // 这里是生产路径, 有时候需要可以通过 index.html 访问, 所以需要相对路径
    productionSourceMap: true,
    // gzip off by default as many popular static hosts such as
    // surge or netlify already gzip all static assets for you
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    assetsPublicPath: '/', // 这里是开发路径
    env: require('./dev.env'),
    port: 8080,
    proxyTable: {}
  }
}
