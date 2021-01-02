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

  // New Bash Commands
  // api.registerCommand('console', ({ args, params }) => {
  //   api.renderFile("./templates/.bashrc", "src/.bashrc")
  //   //  bash ~/.bashrc
  // })
  //Add New Routes
  api.renderFile("./templates/router/routes.js", "src/router/routes.js")
  // Check Routes exists
  // if (existsSync(api.resolve.src('router/routes.js'))) {
  //   console.log('routes')
  // }

  //Extend Conf  
  try {
    api.extendQuasarConf((conf) => {
      conf.boot.push("register")
      conf.build.transpileDependencies.push(/quasar-app-extension-waelio[\\/]src/)
      conf.framework.config.dark = "auto"
      conf.framework.plugins.push("Notify", "Loading", "Dialog", "Meta", "Cookies", "LocalStorage", "SessionStorage")
      conf.build.vueRouterMode = "history"
      conf.extendPackageJson(
        {
          scripts: 
          {
            spa: "quasar dev -m spa",
            pwa: "quasar dev -m pwa",
            ssr: "quasar dev -m ssr",
            ios: "quasar dev -m ios",
            android: "quasar dev -m android",
            nextPatch: "npm version patch"
          }
        }
      )
    })
  }
  catch (error) {
    console.error('error', error)  
  }
}
