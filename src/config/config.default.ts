/**
 * 默认本地开发配置
 */
export default class Config {
  env = process.env.VUE_APP_MODE
  // 基础路由 /app/
  BASE_ROUTE = process.env.VUE_APP_BASE_ROUTE
  // 静态资源路径
  BASE_URL = process.env.VUE_APP_BASE_URL
  // 后端API
  API = process.env.VUE_APP_BASE_ROUTE + 'api'
}
