const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  baseUrl: './' , // type:{string} default:'/'
  devServer: { // 地址配置与config中的开发地址相同 上线时也要和部署的服务区地址（域名）同步
    port: 8081, // 端口号
    host: '192.168.100.106',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // proxy: {
    //   '/api': {
    //     target: '<url>', // '192.168.100.106:8081'
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '/foo': {
    //     target: '<other_url>' 
    //   }
    // }, // 配置多个代理
  },
  // 多页面配置
  // pages: {
  //   index: {
  //     // 页面的入口文件
  //     entry: 'src/main.js',
  //     // 页面的模板文件
  //     template: 'public/index.html',
  //     // build 生成的文件名称  例： dist/index.html
  //     filename: 'index.html'
  //   },
  //   // template 默认会去找 public/subpage.html 页面，如果找不到会使用 public/index.html 文件
  //   // 输出文件会默认的推断为 subpage.html
  //   // home: 'src/home/main.js'
  // },

  productionSourceMap: false,
  lintOnSave: true,
  // 路径代理
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