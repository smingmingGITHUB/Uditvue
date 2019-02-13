import Vue from 'vue'
import App from './App.vue'
import router from './router'
import layer from 'vue-layer'
import store from './store'
import '../src/assets/styles/layer.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.prototype.$layer = layer(Vue)
Vue.config.productionTip = false
// Vue.prototype.$layer = layer(Vue, {
//   msgtime: 3,//目前只有一项，即msg方法的默认消失时间，单位：秒
// });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
