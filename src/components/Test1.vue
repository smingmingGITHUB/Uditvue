<template>
  <div id="app">
    <h1>高德地图组建案例</h1>
    <h1>js条件筛选过滤器</h1>
    <h1>vuex全局变量存取</h1>
    <h1>vue-js-cookie缓存</h1>
    <h1>vue-layer组件弹框</h1>
    <h1>element-ui</h1>
    <h1>vue-lazyload懒加载插件</h1>
    <h1>阿里图标库icon的引用</h1>
    <el-button type="success" @click="layer">layer</el-button>
    <input v-model="getToken">
    <i class="iconfont icon-yuming"></i>
    <i class="iconfont icon-ios-airplane"></i>
    <br>
    <!-- <img src="require(public/images/123.png)" /> -->
    <img v-lazy="imgUrl" width="600px">
  </div>
</template>
<script>
// import ff from 'public/images/app.svg'
import ff from '../../public/images/123.png'
import Vue from 'vue'
import { Button } from 'element-ui'
import MaskMap from './MaskMap'
import { get } from 'vue-js-cookie'
import '../assets/download/font_1042070_fc84o1wmlun/iconfont.css' // 阿里项目图标库
import { mapMutations, mapGetters } from 'vuex' // 存-取

Vue.component(Button.name, Button)
/*eslint-disable */
export default {
  name: '',
  data() {
    return {
      name: '',
      imgUrl: ff,
      fetterData: [
        { name: 'a', num: 14 },
        { name: 'b', num: 13 },
        { name: 'c', num: 12 }
      ],
      list: ['1112', '555555']
    }
  },
  // 组件名称
  components: {},
  computed: { ...mapGetters(['getToken']) }, // 取
  mounted() {
    this.$nextTick(() => {
      this.filter()
      this.getCont()
      console.log('cookie缓存:' + get().Token)
    })
  },
  /*eslint-disable */
  methods: {
    ...mapMutations(['SET_TOKEN']), // 存
    getCont() {
      let _this = this
      _this.SET_TOKEN('1236')
    },
    //条件筛选过滤器
    filter() {
      let fetter = (cont, data) => {
        return data.filter(item => {
          return Object.keys(cont).every(key => {
            return String(item[key]).toLowerCase().includes(
              String(cont[key]).trim().toLowerCase()
            )
          })
        })
      }
      // 数组
      let condition = '1'
      let list = fetter(condition, this.list)
      // 对象 
      let cons = { name: 'a'}
      let obj = fetter(cons, this.fetterData)
      console.log(list)
      console.log(obj)
      console.log(list + '>>>>>>>' + JSON.parse(JSON.stringify(obj))[0].name)
    },
    // 组件弹出框
    layer() {
      this.$layer.iframe({
        content: {
          content: MaskMap, //传递的组件对象
          parent: this,//当前的vue对象
          data: {}//props 默认多传递一个layerid《layer.close(layerid)》
        },
        area: ['800px', '600px'],
        title: 'layer'
      });
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  width: 100vw;
  height: 90vh;
  // background: 
}
</style>

