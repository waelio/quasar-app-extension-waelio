import Vue from 'vue'
import axios from 'axios'
import { Cookies } from 'quasar'

Vue.mixin({
    beforeCreate(this: any) {
        const options = this.$options as any

        if (options.axios) {
            this.$axios = options.axios
        } else if (options.parent) {
            this.$axios = options.parent.$axios
        }
    }
})

export default function ({ app, store, ssrContext }: { app: any, store: any, ssrContext?: any }): void {
    const instance = axios.create({
        baseURL: 'https://api.example.com'
    })

    const cookies = process.env.SERVER
        ? Cookies.parseSSR(ssrContext)
        : Cookies

    instance.interceptors.request.use((config: any) => {
        const token = cookies.get('token')

        if (token) {
            config.headers = config.headers || {}
            config.headers.Authorization = `bearer ${token}`
        }

        return config
    }, error => Promise.reject(error))

    app.axios = instance
    store.$axios = instance
}
