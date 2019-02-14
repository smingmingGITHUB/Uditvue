import Vue from 'vue'
import Router from 'vue-router'
// import MapP from './components/Map.vue'
// import MaskMap from './components/MaskMap.vue'
import HelloWorld from './components/HelloWorld.vue'
// 异步按需加载
const MapP = resolve => require(['./components/Map.vue'], resolve) 
const MaskMap = resolve => require(['./components/MaskMap.vue'], resolve)
const T1 = resolve => require(['./components/Test1.vue'], resolve)

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'map',
      component: MapP
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
      component: MaskMap
    }
  ]
})
