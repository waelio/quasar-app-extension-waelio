const { exec } = require("child_process");
const system = require("system-commands");
const chalk = require('chalk');

module.exports = function (api) {
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

  // Finalizing
  console.log(chalk.white.bgOrange("Attempting Dependencies ...") + chalk.white.bgGreen("npm install --force --save emailjs-com universal-config waelio-utils "));
  var installCommand = "npm install --force --save emailjs-com universal-config waelio-utils";
  system(installCommand)
    .then((output) => {
      console.log(chalk.green(output));
    })
    .catch((error) => {
      console.log(chalk.red(error));
    });
  console.log(chalk.white.bgOrange("Attempting Dependencies ...") + chalk.white.bgGreen("npm install --force -D sitemap-webpack-plugin copy-webpack-plugin workbox-webpack-plugin"));
  var installDev = "npm install --force -D sitemap-webpack-plugin copy-webpack-plugin workbox-webpack-plugin";
  system(installDev)
    .then((output) => {
      console.log(chalk.green(output));
    })
    .catch((error) => {
      console.log(chalk.red(error));
    });
  console.log(chalk.white.bgBlue("If Needed-RUN: npm install sitemap-webpack-plugin --save-dev"));
  console.log(chalk.white.bgBlue("If Needed-RUN: npm install copy-webpack-plugin --save-dev"));
  console.log(chalk.green("Running ... bash ./.bashrc"));
  system(". ./.bashrc")
    .then((output) => {
      console.log(chalk.green(output));
    })
    .catch((error) => {
      console.log(chalk.red(error));
    });
  console.log(chalk.green('Running ... eslint --ext .js,.vue ./ "--fix"'));
  system("eslint --ext .js,.vue ./ '--fix'")
    .then((output) => {
      console.log(chalk.green(output));
    })
    .catch((error) => {
      console.log(chalk.red(error));
    });

  console.log(chalk.white.bgYellow("To reinstall try:")+chalk.white.bgGreen("quasar ext invoke waelio"));
  console.log(chalk.white.bgYellow('If Linting fails, try ')+ chalk.white.bgGreen('eslint --ext .js,.vue ./ "--fix"'));
  console.log( 
    chalk.white.bgYellow("Test by running bash command: ")
    ,chalk.white.bgGreen("ll")
    ,chalk.white(" or ")
    ,chalk.white.bgGreen("dev")
  );

  api.onExitLog("Installing ... ");
};
