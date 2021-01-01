module.exports = function (api) {
  api.compatibleWith('quasar', '^1.1.1')
  api.compatibleWith('@quasar/app', '^1.1.0 || ^2.0.0')

  // api.extendQuasarConf(extendConf)
  api.framework.config.dark = 'auto'
  api.framework.plugins.push('Notify', 'Loading', 'Dialog', 'Meta', 'Cookies', 'LocalStorage', 'SessionStorage') 
  api.build.vueRouterMode = 'history'
  api.extendPackageJson({
    scripts: {
      'spa': 'quasar dev -m spa',
      'pwa': 'quasar dev -m pwa',
      'ssr': 'quasar dev -m ssr',
      'ios': 'quasar dev -m ios',
      'android': 'quasar dev -m android',
      'nextPatch': 'npm version patch',
    }
  })
  api.pages.push('~quasar-app-extension-waelio/src/components/Component.vue')
  api.pages.push('~quasar-app-extension-waelio/src/pages/AboutUs.vue')
  api.pages.push('~quasar-app-extension-waelio/src/pages/ContactUs.vue')
  api.pages.push('~quasar-app-extension-waelio/src/pages/Privacy.vue')
  api.pages.push('~quasar-app-extension-waelio/src/pages/Terms.vue')
  api.pages.push('~quasar-app-extension-waelio/src/pages/Settings.vue')

  api.boot.push('~quasar-app-extension-waelio/src/boot/register.js')
  api.build.transpileDependencies.push(/quasar-app-extension-waelio[\\/]src/)
}
function extendConf (conf) {
  conf.boot.push('~quasar-app-extension-waelio/src/boot/register.js')
  conf.build.transpileDependencies.push(/quasar-app-extension-waelio[\\/]src/)
}
