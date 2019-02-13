import request from '../utils/request'
import qs from 'qs' // 拼接对象属性成字符串（{name： '张三', age: '14'} => name=张三&age=14）

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/guest/webSignIn',
    method: 'post',
    data: qs.stringify(data)
  })
}

export function logout() {
  return request({
    url: '/home/logout',
    method: 'get'
  })
}

export function listUserInfo() {
  return request({
    url: '/home/listUserInfo',
    method: 'get'
  })
}

// 传统的请求方法
// axios.get('/user', {
//   params: {
//     ID: 12345
//   }
// })
// .then(function (response) {
//   console.log(response)
// })
// .catch(function (error) {
//   console.log(error)
// })

// axios.post('/user', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// })
// .then(function (response) {
//   console.log(response)
// })
// .catch(function (error) {
//   console.log(error)
// })