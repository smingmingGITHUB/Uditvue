import cookies from 'vue-js-cookie'

const token = 'Token'

export function get() {
  return cookies.get(token)
}

export function set(data) {
  return cookies.set(token, data)
}

export function remove() {
  return cookies.remove(token)
}