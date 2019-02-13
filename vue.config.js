const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  devServer: {
    open: true, //配置自动启动浏览器
  },
  pages: {
    index: {
      // 页面的入口文件
      entry: 'src/main.js',
      // 页面的模板文件
      template: 'public/index.html',
      // build 生成的文件名称  例： dist/index.html
      filename: 'index.html'
    },
    // template 默认会去找 public/subpage.html 页面，如果找不到会使用 public/index.html 文件
    // 输出文件会默认的推断为 subpage.html
    // home: 'src/home/main.js'
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('vue$', 'vue/dist/vue.esm.js')
  }
//      // 第三方插件配置
//  pluginOptions: {
//    'AMap': 'AMap',
//    'AMapUI': 'AMapUI'
//   // ...
//  }

}