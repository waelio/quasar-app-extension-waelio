
module.exports = function (api, ctx) {
  api.extendQuasarConf((conf, api) => {
    conf.boot.push('~quasar-app-extension-waelio/src/templates/boot/init-waelio.js')

  })
};
