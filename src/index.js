const chalk = require('chalk');
const system = require("system-commands");
system("npm install chalk")
  .then((output) => {
    console.log(chalk.green(output));
  })
  .catch((error) => {
    console.log(chalk.red(error));
});
module.exports = function (api) {
};
