import Vue from 'vue'
import Router from 'vue-router'
import MapP from './components/Map.vue'
import MaskMap from './components/MaskMap.vue'
import HelloWorld from './components/HelloWorld.vue'
import T1 from './components/Test1.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/map',
      name: 'map',
      component: MapP
    },
    {
      path: '/',
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
