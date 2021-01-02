const { existsSync } = require("fs")
const { exec } = require("child_process");

module.exports = function (api) {
  api.compatibleWith("@quasar/app", "^1.0.0 || ^2.0.0")
  // App
  api.renderFile("./templates/App.vue", "src/App.vue")

  // Pages
  api.renderFile("./templates/pages/AboutUs.vue", "src/pages/AboutUs.vue")
  api.renderFile("./templates/pages/ContactUs.vue", "src/pages/ContactUs.vue")
  api.renderFile("./templates/pages/Privacy.vue", "src/pages/Privacy.vue")
  api.renderFile("./templates/pages/Terms.vue", "src/pages/Terms.vue")
  api.renderFile("./templates/pages/Settings.vue", "src/pages/Settings.vue")

  // mixins
  api.renderFile("./templates/mixins/LangMixin.js", "src/mixins/LangMixin.js")

  // components
  api.renderFile("./templates/components/EssentialLink.vue", "src/components/EssentialLink.vue")
  api.renderFile("./templates/components/LanguageSwitcher.vue", "src/components/LanguageSwitcher.vue")

  // layouts
  api.renderFile("./templates/layouts/MainLayout.vue", "src/layouts/MainLayout.vue")

  // boot
  api.renderFile("./templates/boot/i18n.js", "src/boot/i18n.js")
  api.renderFile("./templates/boot/register-waelio-ext.js", "src/boot/register.js")

  // Store
  api.renderFile("./templates/store/index.js", "src/store/index.js")

  // Routes
  api.renderFile("./templates/router/routes.js", "src/router/routes.js")

  // i18n
  api.renderFile("./templates/i18n/ar.json", "src/i18n/ar.json")
  api.renderFile("./templates/i18n/he.json", "src/i18n/he.json")
  api.renderFile("./templates/i18n/ru.json", "src/i18n/ru.json")
  api.renderFile("./templates/i18n/en.json", "src/i18n/en.json")
  api.renderFile("./templates/i18n/index.js", "src/i18n/index.js")
  
  // config
  api.renderFile("./templates/quasar.conf.js", "src/quasar.conf.js")

  // bash
  api.renderFile("./templates/.bashrc", "src/.bashrc")

  // Bye
  api.onExitLog('For more ... help try quasar ext invoke waelio')
  api.onExitLog('Running ... bash ./src/.bashrc')
  exec("bash ./src/.bashrc", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
  api.onExitLog('Test by running bash command: ll ')
  api.onExitLog('If nothing try ```bash ./src/.bashrc```')

  api.onExitLog('Running ... eslint --ext .js,.vue ./ "--fix"')
  exec("eslint --ext .js,.vue ./ '--fix'", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
  api.onExitLog('If everything is red :| try ```eslint --ext .js,.vue ./ "--fix"```')

}
