
const { existsSync } = require('fs')

function extendConf(conf) {
  conf.boot.push("~quasar-app-extension-waelio/src/boot/register.js");
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
  // mixins
  conf.pages.push("./src/mixins/LangMixin.js");
  // components
  conf.pages.push("./src/components/Component.vue");
  // pages
  conf.pages.push("./src/pages/AboutUs.vue");
  conf.pages.push("./src/pages/ContactUs.vue");
  conf.pages.push("./src/pages/Privacy.vue");
  conf.pages.push("./src/pages/Terms.vue");
  conf.pages.push("./src/pages/Settings.vue");
}
module.exports = function (api) {
  api.compatibleWith('@quasar/app', '^1.0.0 || ^2.0.0')
  api.render("./templates/components");
  api.render("./templates/pages");
  // api.render("./src/pages/ContactUs.vue");
  // api.render("./src/pages/Privacy.vue");
  // api.render("./src/pages/Terms.vue");
  // api.render("./src/pages/Settings.vue");

  api.extendQuasarConf(extendConf);
};
