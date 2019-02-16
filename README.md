# uditvue

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
需下载
npm install babel-plugin-transform-remove-console --save-dev
在vue.config.js配置路径
baseUrl
vue

### Run your tests
```

npm run test

```

### Lints and fixes files
```

npm run lint

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#全局安装
npm install -g @vue/cli

#检测安装
vue -V

#创建项目
vue create 项目名称

npm install vue-lazyload --save-dev 懒加载插件

npm install --save xlsx file-saver 导出excel

    src源代码目录:
        api: 存放网络请求接口配置,建议分模块文件.user为user.js,login为login.js,
        比如示例test模块为test.js
        assets: 会经webpack处理的图片,通常开发的图片不推荐存放在这,存放到/public/images/下.
        components: 公用的组件
        config: 网络URL路径配置,开发会读取dev.env.js,生产读取pro.env.js
        index: 默认的页面
        utils: 工具类,比如已经封装好的request.js网络请求封装工具类
        store.js: vuex存储数据的store,可以在各个页面中共用
        
fcitx -r 重启Ubuntu内部程序

功能说明在test1.vue中，我比较懒就不在这里记录了
```
