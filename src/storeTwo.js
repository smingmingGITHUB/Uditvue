import Vue from 'vue'
import Vuex from 'vuex'
import { loginByUsername, logout, listUserInfo } from '@/api/login'
import {
  getToken,
  setToken,
  removeToken,
  getUserInfo,
  setUserInfo,
  removeUserInfo,
  getRoles,
  setRoles,
  removeRoles,
  getPermiss,
  setPermiss,
  removePermiss
} from '@/utils/auth'

Vue.use(Vuex)

// 声明数据存储对象
const state = {
  myname: 'Emergency-Server-Zhongshan',
  user: {
    token: getToken(),
    roles: getRoles(),
    permmissions: getPermiss(),
    info: getUserInfo()
  },
  accumulativeInfo: {},
  wasteData: {},
  listGIS: {},
  wasteRecyceTrend: {},
  wastePickle: {}
}

// mutations是固定的写法，意思是改变的，要改变state的数值的方法，必须写在mutations里就可以了
const mutations = {
  SET_TOKEN: (state, token) => {
    state.user.token = token
  },
  SET_ROLES: (state, roles) => {
    state.user.roles = roles
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.user.permissions = permissions
  },
  SET_USER_INFO: (state, userInfo) => {
    state.user.info = userInfo
  },
  setAccumulativeInfo: (state, data) => {
    state.accumulativeInfo = data
  },
  setWasteData: (state, data) => {
    state.wasteData = data
  },
  setListGIS: (state, data) => {
    state.listGIS = data
  },
  setWasteRecyceTrend: (state, data) => {
    state.wasteRecyceTrend = data
  },
  setWastePickle: (state, data) => {
    state.wastePickle = data
  }
}

// getter提供获取数据值
const getters = {
  getToken(state) {
    return state.user.token
  },
  getUserInfo(state) {
    return state.user.info
  },
  getRoles(state) {
    return state.user.roles
  },
  getPermissions(state) {
    return state.user.permmissions
  },
  getAccumulativeInfo(state) {
    return state.accumulativeInfo
  },
  getWasteData(state) {
    return state.wasteData
  },
  getListGIS: (state) => {
    return state.listGIS
  },
  getWasteRecyceTrend: (state) => {
    return state.wasteRecyceTrend
  },
  getWastePickle: (state) => {
    return state.wastePickle
  }
}

// actions异步修改状态,actions是可以调用Mutations里的方法的
const actions = {
  // 用户名登录
  login({ commit }, userInfo) {
    console.log('login')
    const username = userInfo.username.trim()
    return new Promise((resolve, reject) => {
      loginByUsername(username, userInfo.password)
        .then(response => {
          const data = response
          if (data.code === 200) {
            commit('SET_TOKEN', data.data)
            setToken(data.data)
            listUserInfo(state.token)
              .then(response => {
                if (!response.data) {
                  // 由于mockjs 不支持自定义状态码只能这样hack
                  reject('error')
                }
                const data = response.data
                if (data.roles) {
                  // 验证返回的roles是否是一个非空数组
                  commit('SET_ROLES', data.roles)
                  setRoles(data.roles)
                } else {
                  reject(new Error('getInfo: roles must be a non-null array !'))
                }
                if (data.permissions) {
                  // 验证返回的permissions是否是一个非空数组
                  commit('SET_PERMISSIONS', data.permissions)
                  setPermiss(data.permissions)
                } else {
                  reject(
                    new Error('getInfo: permissions must be a non-null array !')
                  )
                }
                let userInfo = {
                  address: data.address,
                  area: data.area,
                  bigAvator: data.bigAvator,
                  birthday: data.birthday,
                  cnName: data.cnName,
                  email: data.email,
                  gender: data.gender,
                  id: data.id,
                  introduce: data.introduce,
                  phone: data.phone,
                  smallAvator: data.smallAvator,
                  username: data.username
                }
                commit('SET_USER_INFO', userInfo)
                setUserInfo(userInfo)
                resolve(response)
                location.href = './home.html'
              })
              .catch(error => {
                reject(error)
              })
          }
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 登出
  LogOut({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_PERMISSIONS', [])
          commit('SET_USER_INFO', [])
          removeToken()
          removePermiss()
          removeRoles()
          removeUserInfo()
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 前端 登出
  FedLogOut({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_PERMISSIONS', [])
      commit('SET_USER_INFO', [])
      removeToken()
      removePermiss()
      removeRoles()
      removeUserInfo()
      resolve()
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
