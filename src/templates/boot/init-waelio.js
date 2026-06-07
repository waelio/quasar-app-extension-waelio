import { waelioConfig } from 'src/utils/waelioConfig'
import { createStore } from '@waelio/ustore'

const storage = createStore('waelio-app')

export default ({ app }) => {
  app.config.globalProperties.$config = waelioConfig
  app.config.globalProperties.$storage = storage
  app.provide('config', waelioConfig)
  app.provide('storage', storage)
}

const config = waelioConfig

export { config, storage }
