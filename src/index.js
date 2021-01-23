const chalk = require("chalk");
const system = require("system-commands");

system("npm --save -D install chalk")
  .then((output) => {
    console.log(chalk.green(output));
  })
  .catch((error) => {
    console.log(chalk.red(error));
  });
  system("npm --save -D install chalk")
  .then((output) => {
    console.log(chalk.green(output));
  })
  .catch((error) => {
    console.log(chalk.red(error));
  });

console.log(chalk.yellow("Attempting Dependencies ...") + chalk.green("npm install --force --save emailjs-com universal-config waelio-utils "));
var installCommand = "npm i --force --save emailjs-com universal-config waelio-utils";
system(installCommand)
  .then((output) => {
    console.log(chalk.green(output));
  })
  .catch((error) => {
    console.log(chalk.red(error));
  });
console.log(chalk.yellow("Attempting Dependencies ...") + chalk.green("npm install --force -D sitemap-webpack-plugin copy-webpack-plugin workbox-webpack-plugin"));
var installDev = "npm i --force -D sitemap-webpack-plugin copy-webpack-plugin workbox-webpack-plugin";
system(installDev)
  .then((output) => {
    console.log(chalk.green(output));
  })
  .catch((error) => {
    console.log(chalk.red(error));
  });

module.exports = function (api) {};
