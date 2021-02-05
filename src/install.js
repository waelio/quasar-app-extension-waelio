const chalk = require("chalk");
const { exec } = require("child_process");

function RunCommand(installCommand) {
  return exec(installCommand, (error, stdout, stderr) => {
    if (error) {
      console.log(chalk.red(error));
      return error;
    }
    if (stderr) {
      console.log(chalk.green(stderr));
      return;
    }
    console.log(chalk.green(stderr));
  });
}

var installCommand = "npm i --save emailjs-com store2 waelio-utils";
var installDev = "npm i -D sitemap-webpack-plugin copy-webpack-plugin@6.3.2";
console.log(chalk.yellow("Attempting Dependencies: ") + chalk.green(installCommand));
console.log(chalk.yellow("Attempting DevDependencies:") + chalk.green(installDev));
RunCommand("npm install -D chalk");

module.exports = function (api) {
  //config
  api.renderFile("./templates/config/client.js", "config/client.js");
  api.renderFile("./templates/config/dev.js", "config/dev.js");
  api.renderFile("./templates/config/prod.js", "config/prod.js");
  api.renderFile("./templates/config/server.js", "config/server.js");
  api.renderFile("./templates/utils/WaelioConfig.js", "src/utils/WaelioConfig.js");

  // i18n
  api.renderFile("./templates/i18n/messages/enUs.js", "src/i18n/messages/enUs.js");
  api.renderFile("./templates/i18n/messages/ru.js", "src/i18n/messages/ru.js");
  api.renderFile("./templates/i18n/messages/he.js", "src/i18n/messages/he.js");
  api.renderFile("./templates/i18n/messages/ar.js", "src/i18n/messages/ar.js");
  api.renderFile("./templates/i18n/index.js", "src/i18n/index.js");
  // Store
  api.renderFile("./templates/store/index.js", "src/store/index.js");
  api.renderFile("./templates/store/modules/languages.js", "src/store/modules/languages.js");
  api.renderFile("./templates/store/modules/services.js", "src/store/modules/services.js");
  api.renderFile("./templates/store/modules/navigation.js", "src/store/modules/navigation.js");
  // mixins
  api.renderFile("./templates/mixins/LangMixin.js", "src/mixins/LangMixin.js");
  api.renderFile("./templates/mixins/ModeMixin.js", "src/mixins/ModeMixin.js");
  api.renderFile("./templates/mixins/WaelioMixin.js", "src/mixins/WaelioMixin.js");
  // boot
  api.renderFile("./templates/boot/axios.js", "src/boot/axios.js");
  api.renderFile("./templates/boot/i18n.js", "src/boot/i18n.js");
  api.renderFile("./templates/boot/init-waelio.js", "src/boot/init-waelio.js");
  // config
  api.renderFile("./templates/quasar.conf.js", "quasar.conf.js");
  // components
  api.renderFile("./templates/components/DeBugger.vue", "src/components/DeBugger.vue");
  api.renderFile("./templates/components/EssentialLink.vue", "src/components/EssentialLink.vue");
  api.renderFile("./templates/components/LangSelect.vue", "src/components/LangSelect.vue");
  api.renderFile("./templates/components/LanguageSwitcher.vue", "src/components/LanguageSwitcher.vue");
  api.renderFile("./templates/components/NavigationDrawer.vue", "src/components/NavigationDrawer.vue");
  api.renderFile("./templates/components/ProductComponent.vue", "src/components/ProductComponent.vue");
  api.renderFile("./templates/components/ServiceComponent.vue", "src/components/ServiceComponent.vue");
  // Pages
  api.renderFile("./templates/pages/AboutUs.vue", "src/pages/AboutUs.vue");
  api.renderFile("./templates/pages/ContactUs.vue", "src/pages/ContactUs.vue");
  api.renderFile("./templates/pages/Error404.vue", "src/pages/Error404.vue");
  api.renderFile("./templates/pages/Index.vue", "src/pages/Index.vue");
  api.renderFile("./templates/pages/Privacy.vue", "src/pages/Privacy.vue");
  api.renderFile("./templates/pages/Products.vue", "src/pages/Products.vue");
  api.renderFile("./templates/pages/Services.vue", "src/pages/Services.vue");
  api.renderFile("./templates/pages/Settings.vue", "src/pages/Settings.vue");
  api.renderFile("./templates/pages/Terms.vue", "src/pages/Terms.vue");
  // Public
  api.renderFile("./templates/public/robots.txt", "public/robots.txt");
  api.renderFile("./templates/public/sitemap.xml", "public/sitemap.xml");

  // Routes
  api.renderFile("./templates/router/routes.js", "src/router/routes.js");
  // layouts
  api.renderFile("./templates/layouts/MainLayout.vue", "src/layouts/MainLayout.vue");

  //pwa
  api.renderFile("./templates/pwa/register-service-worker.js", "src-pwa/register-service-worker.js");

  // App
  api.renderFile("./templates/App.vue", "src/App.vue");

  // Others
  api.renderFile("./templates/.bashrc", ".bashrc");
  api.renderFile("./templates/.editorconfig", ".editorconfig");

  //Extras
  api.renderFile("./templates/icongenie-Profile.json", "icongenie-Profile.json"); //IconGenie Profile
  api.renderFile("./templates/budget.json", "budget.json"); //Lighthouse_Config
  api.renderFile("./templates/Profile.json", "Profile.json"); //IconGenie Profile
  api.renderFile("./templates/robots.txt", "robots.txt"); //Google Crawlers
  api.renderFile("./templates/sitemap.xml", "sitemap.xml"); //Sitemap

  // Finalizing
  api.onExit("If Needed-RUN: npm install sitemap-webpack-plugin --save-dev");
  api.onExit("If Needed-RUN: npm install copy-webpack-plugin --save-dev");
  api.onExit("Running ... bash ./.bashrc");
  api.onExit('Running ... eslint --ext .js,.vue ./ "--fix"');

  api.onExit(chalk.yellow("To reinstall try: ") + chalk.green("quasar ext invoke waelio"));
  api.onExit(chalk.yellow("If Linting fails, try ") + chalk.green('eslint --ext .js,.vue ./ "--fix"'));
  api.onExit(chalk.yellow("Test by running bash command: "), chalk.green("ll"), chalk.white(" or "), chalk.green("dev"));

  api.onExitLog("Installing ... ");
  RunCommand(installCommand);
  RunCommand(installDev);
  api.onExitLog("Linting ... ");
  RunCommand(`eslint --ext .js,.vue ./ "--fix"`);
  api.onExitLog("Bash ... ");
  RunCommand(`bash ./.bashrc`);
};
