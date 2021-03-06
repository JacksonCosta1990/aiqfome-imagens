const webpack = require('webpack')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/aiqfome-imagens/' : '/',

  transpileDependencies: [
    'vuetify'
  ],

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.browser': 'true'
      }),
    ]
  },

  assetsDir: 'assets',
  outputDir: 'docs'
}
