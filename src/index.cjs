module.exports = function (api) {
  api.compatibleWith('quasar', '^1.1.1')
  api.compatibleWith('@quasar/app', '^1.1.0 || ^2.0.0')

  api.extendQuasarConf(extendConf)
}
function extendConf (conf) {
  conf.boot.push('~quasar-app-extension-waelio/src/boot/register.js')
  conf.build.transpileDependencies.push(/quasar-app-extension-waelio[\\/]src/)
}
