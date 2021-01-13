require = require('esm')(module);
// const { routes } = require('./src/router/index.ts');
const SitemapPlugin = require('sitemap-webpack-plugin').default

const routes = [
  {path:'/cat-website/'},
  {path:'/cat-website/#/category/5'},
  {path:'/cat-website/#/category/15'},
  {path:'/cat-website/#/category/1'},
  {path:'/cat-website/#/category/14'},
  {path:'/cat-website/#/category/2'},
  {path:'/cat-website/#/category/4'},
  {path:'/cat-website/#/category/7'},
  {path:'/cat-website/#/random'}
]

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: '/cat-website/',
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: 'https://linhnguyen-511.github.io',
        paths: routes,
        options: {
          filename: 'map.xml',
          lastmod: true,
          changefreq: 'monthly',
          priority: 0.4
        }
      })
    ]
  }
}
