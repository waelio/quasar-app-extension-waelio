const { existsSync } = require("fs");
const { exec } = require("child_process");

module.exports = function(api) {

  // boot
  api.renderFile("./templates/boot/axios.js", "src/boot/axios.js");
  api.renderFile("./templates/boot/i18n.js", "src/boot/i18n.js");
  api.renderFile("./templates/boot/init-waelio.js", "src/boot/init-waelio.js");

  // components
  api.renderFile("./templates/components/EssentialLink.vue", "src/components/EssentialLink.vue");
  api.renderFile("./templates/components/LanguageSwitcher.vue", "src/components/LanguageSwitcher.vue");
  api.renderFile("./templates/components/ProductComponent.vue", "src/components/ProductComponent.vue");
  api.renderFile("./templates/components/ServiceComponent.vue", "src/components/ServiceComponent.vue");

  //config
  api.renderFile("./templates/config/dev.js", "src/config/dev.js");
  api.renderFile("./templates/config/client.js", "src/config/client.js");
  api.renderFile("./templates/config/server.js", "src/config/server.js");

  // i18n
  api.renderFile("./templates/i18n/messages/en-us.js", "src/i18n/messages/en-us.js");
  api.renderFile("./templates/i18n/messages/ru.js", "src/i18n/messages/ru.js");
  api.renderFile("./templates/i18n/messages/he.js", "src/i18n/messages/he.js");
  api.renderFile("./templates/i18n/messages/ar.js", "src/i18n/messages/ar.js");
  api.renderFile("./templates/i18n/index.js", "src/i18n/index.js");

  // layouts
  api.renderFile("./templates/layouts/MainLayout.vue", "src/layouts/MainLayout.vue");

  // mixins
  api.renderFile("./templates/mixins/LangMixin.js", "src/mixins/LangMixin.js");
  api.renderFile("./templates/mixins/ModeMixin.js", "src/mixins/ModeMixin.js");

  // Pages
  api.renderFile("./templates/pages/AboutUs.vue", "src/pages/AboutUs.vue");
  api.renderFile("./templates/pages/ContactUs.vue", "src/pages/ContactUs.vue");
  api.renderFile("./templates/pages/Privacy.vue", "src/pages/Privacy.vue");
  api.renderFile("./templates/pages/Products.vue", "src/pages/Products.vue");
  api.renderFile("./templates/pages/Services.vue", "src/pages/Services.vue");
  api.renderFile("./templates/pages/Settings.vue", "src/pages/Settings.vue");
  api.renderFile("./templates/pages/Terms.vue", "src/pages/Terms.vue");

  //pwa
  api.renderFile("./templates/pwa/register-service-worker.js", "src-pwa/register-service-worker.js");

  // Routes
  api.renderFile("./templates/router/routes.js", "src/router/routes.js");

  // Store
  api.renderFile("./templates/store/index.js", "src/store/index.js");
  api.renderFile("./templates/store/modules/languages.js", "src/store/modules/languages.js");
  api.renderFile("./templates/store/modules/services.js", "src/store/modules/services.js");

  //Utils
  api.renderFile("./templates/utils/google-one-tap.js", "src/utils/google-one-tap.js");

  // App
  api.renderFile("./templates/App.vue", "src/App.vue");

  // Others
  api.renderFile("./templates/.bashrc", ".bashrc");
  api.renderFile("./templates/.editorconfig", ".editorconfig");

  //Extras
  api.renderFile("./templates/budget.json", "budget.json"); //Lighthouse_Config
  api.renderFile("./templates/Profile.json", "Profile.json"); //IconGenie Profile
  api.renderFile("./templates/icongenie-Profile.json", "icongenie-Profile.json"); //IconGenie Profile
  api.renderFile("./templates/robots.txt", "robots.txt"); //Google Crawlers
  api.renderFile("./templates/sitemap.xml", "sitemap.xml"); //Sitemap

  // config
  api.renderFile("./templates/quasar.conf.js", "quasar.conf.js");

  // Bye
  api.onExitLog("RUN: npm install sitemap-webpack-plugin --save-dev");
  api.onExitLog("---");
  api.onExitLog("RUN: npm install copy-webpack-plugin --save-dev");
  api.onExitLog("---");
  api.onExitLog("Running ... bash ./src/.bashrc");
  api.onExitLog("---");
  api.onExitLog('Running ... eslint --ext .js,.vue ./ "--fix"');
  api.onExitLog("...");
    exec("npm install --save waelio-utils universal-config sitemap-webpack-plugin copy-webpack-plugin", (error, stdout, stderr) => {
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
  exec(". ./.bashrc", (error, stdout, stderr) => {
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

  api.onExitLog("For help try quasar ext invoke waelio");
  api.onExitLog("---");
  api.onExitLog('If everything is red :| try: <eslint --ext .js,.vue ./ "--fix">');
  api.onExitLog("---");
  api.onExitLog("Test by running bash command: ll OR dev ");
  api.onExitLog("---");
  api.onExitLog("If nothing works try: <bash ./src/.bashrc>");
};
