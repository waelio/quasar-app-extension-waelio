
module.exports = function (api, ctx) {
  api.extendQuasarConf((conf, api) => {
    conf.boot.push('~quasar-app-extension-waelio/src/boot/init-waelio.js')

  })
};
