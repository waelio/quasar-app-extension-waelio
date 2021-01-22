import Vue from 'vue'
import axios from 'axios'
import { Cookies } from 'quasar'

Vue.mixin({
  beforeCreate () {
    const options = this.$options
    if (options.axios) {
      this.$axios = options.axios
    } else if (options.parent) {
      this.$axios = options.parent.$axios
    }
  }
})

export default function ({ app, store, ssrContext }) {
  let instance = axios.create({
    baseURL: 'https://api.example.com'
  })

  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies

  instance.interceptors.request.use(config => {
    let token = cookies.get('token')
    if (token) {
      config.headers.Authorization = `bearer ${token}`
    }
    return config;
  }, error => {
    return Promise.reject(error)
  })

  app.axios = instance
  store.$axios = instance
}