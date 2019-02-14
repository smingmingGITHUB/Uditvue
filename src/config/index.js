let baseURLCfg =
  process.env.NODE_ENV === 'development'
    ? require('./dev.env')
    : require('./pro.env')

let baseURL = baseURLCfg.default.baseURL
let webSocketurl = baseURLCfg.default.webSocketURL

export default baseURL
export const webSocketURL = webSocketurl
