const { existsSync } = require("fs");

function extendConf(conf) {
}
module.exports = function (api) {
  api.compatibleWith("@quasar/app", "^1.0.0 || ^2.0.0");

  // Install Pages
  api.renderFile("./templates/pages/AboutUs.vue", "src/pages/AboutUs.vue");
  api.renderFile("./templates/pages/ContactUs.vue", "src/pages/ContactUs.vue");
  api.renderFile("./templates/pages/Privacy.vue", "src/pages/Privacy.vue");
  api.renderFile("./templates/pages/Terms.vue", "src/pages/Terms.vue");
  api.renderFile("./templates/pages/Settings.vue", "src/pages/Settings.vue");
  // mixins
  api.renderFile("./templates/mixins/LangMixin.js", "src/mixins/LangMixin.js");
  // components
  api.renderFile("./templates/components/Component.vue", "src/components/Component.vue");
  // boot
  api.renderFile("./templates/boot/register-waelio-ext.js", "src/boot/register.js");
  
  api.registerCommand('console', ({ args, params }) => {
    . .~/.bashrc
  })
  if (existsSync(api.resolve.app('router/routes.js'))) {
    const routes = require('src/router/routes.js')
    console.log(routes)
  }
  api.extendQuasarConf((conf, api) => {
    conf.boot.push("register");
    conf.build.transpileDependencies.push(/quasar-app-extension-waelio[\\/]src/);
    conf.framework.config.dark = "auto";
    conf.framework.plugins.push("Notify", "Loading", "Dialog", "Meta", "Cookies", "LocalStorage", "SessionStorage");
    conf.build.vueRouterMode = "history";
    conf.extendPackageJson({
      scripts: {
        spa: "quasar dev -m spa",
        pwa: "quasar dev -m pwa",
        ssr: "quasar dev -m ssr",
        ios: "quasar dev -m ios",
        android: "quasar dev -m android",
        nextPatch: "npm version patch"
      }
    });
  });
};
