<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 路由前进与后退组件是否缓存 -->
    <keep-alive>
      <router-view v-if="!$route.meta.keepAlive" :content="content" @childContent="getChildContend"/>
    </keep-alive>
     <router-view v-if="$route.meta.keepAlive" :content="content" @childContent="getChildContend"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  data() {
    return {
      name: 'App',
      content: '我是被传递给子组件'
    }
  },
  /* eslint-disable */
  methods: {
    getChildContend(data) {
      console.log(data)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
