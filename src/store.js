import Vue from 'vue'
import Vuex from 'vuex'
import { set } from './utils/cookies'

Vue.use(Vuex)

// 声明数据存储对象
const state = {
  myname: 'bzsite',
  user: {
    token: '1456'
  }
}
// mutations是固定的写法，意思是改变的，要改变state的数值的方法，必须写在mutations里就可以了
const mutations = {
  SET_TOKEN: (state, token) => {
    state.user.token = token
    set(token)
  }
}

// getter提供获取数据值
const getters = {
  getToken(state) {
    return state.user.token
  }
}

// actions异步修改状态,actions是可以调用Mutations里的方法的
const actions = {
  // 用户名登录
  // login({ commit }, userInfo) {
  // },
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})