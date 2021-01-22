import Vue from 'vue'
import { Screen } from 'quasar'
import config from "universal-config";
config.setEnvironment('client')
config.set('env:debug', false)
config.set('env:screen', Screen)

Vue.prototype.$vault = config

export default ({ app, store, ssrContext }) => {
  app.vault = config
  app.defaultName = 'CHANGE_IN_BOOT' // CHange This
  app.defaultUrl = 'CHANGE_IN_BOOT'// CHange This
}
