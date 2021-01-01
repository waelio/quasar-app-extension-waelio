
function extendConf (conf) {
}
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
  conf.pages.push("~quasar-app-extension-waelio/src/mixins/LangMixin.js");
  // components
  conf.pages.push("~quasar-app-extension-waelio/src/components/Component.vue");
  // pages
  conf.pages.push("~quasar-app-extension-waelio/src/pages/AboutUs.vue");
  conf.pages.push("~quasar-app-extension-waelio/src/pages/ContactUs.vue");
  conf.pages.push("~quasar-app-extension-waelio/src/pages/Privacy.vue");
  conf.pages.push("~quasar-app-extension-waelio/src/pages/Terms.vue");
  conf.pages.push("~quasar-app-extension-waelio/src/pages/Settings.vue");
}

module.exports = function (api) {
  api.compatibleWith("quasar", "^1.1.1");
  api.compatibleWith("@quasar/app", "^1.1.0 || ^2.0.0");
    api.extendQuasarConf(extendConf)
};
