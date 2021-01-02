const { existsSync } = require("fs")

module.exports = function (api) {
  api.compatibleWith("@quasar/app", "^1.0.0 || ^2.0.0")
  // Pages
  api.renderFile("./templates/pages/AboutUs.vue", "src/pages/AboutUs.vue")
  api.renderFile("./templates/pages/ContactUs.vue", "src/pages/ContactUs.vue")
  api.renderFile("./templates/pages/Privacy.vue", "src/pages/Privacy.vue")
  api.renderFile("./templates/pages/Terms.vue", "src/pages/Terms.vue")
  api.renderFile("./templates/pages/Settings.vue", "src/pages/Settings.vue")
  // mixins
  api.renderFile("./templates/mixins/LangMixin.js", "src/mixins/LangMixin.js")
  // components
  api.renderFile("./templates/components/Component.vue", "src/components/Component.vue")
  api.renderFile("./templates/components/EssentialLink.vue", "src/components/EssentialLink.vue")
  api.renderFile("./templates/components/LanguageSwitcher.vue", "src/components/LanguageSwitcher.vue")
  // layouts
  api.renderFile("./templates/layouts/MainLayout.vue", "src/layouts/MainLayout.vue")
  // boot
  api.renderFile("./templates/boot/register-waelio-ext.js", "src/boot/register.js")
  // Store
  api.renderFile("./templates/store/index.js", "src/store/index.js")
  // config
  api.renderFile("./templates/quasar.conf.js", "src/quasar.conf.js")

}
