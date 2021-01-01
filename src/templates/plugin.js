import { version } from '../package.json'
import Component from './templates/components/Component'
import Lang from './templates/Lang'
export {
  version,
  Component,
}

export default {
  version,
  Component,

  install (Vue) {
    Vue.component(Component.name, Component)
    Vue.store.registerModule('lang', Lang)
  }
}
