import Vue from 'vue'
import Router from 'vue-router'
// import MapP from './components/Map.vue'
// import MaskMap from './components/MaskMap.vue'
// 异步按需加载
const MapP = resolve => require(['./components/Map.vue'], resolve) 
// 异步按需加载
const MaskMap = function(resolve) {
  return require(['./components/MaskMap.vue'], resolve)
}
// 非按需加载
import HelloWorld from './components/HelloWorld.vue'
const T1 = require(['./components/Test1.vue'])

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'map',
      component: MapP,
      meta:{keepAlive: false} // false 不缓存，true 缓存
    },
    {
      path: '/T1',
      name: 'T1',
      component: T1
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: HelloWorld
    }
    ,
    {
      path: '/maskMap',
      name: 'maskMap',
      component: MaskMap,
      meta:{keepAlive: true}
    }
  ]
})
