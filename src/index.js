const chalk = require('chalk');
system("npm install chalk")
  .then((output) => {
    console.log(chalk.green(output));
  })
  .catch((error) => {
    console.log(chalk.red(error));
});
module.exports = function (api) {
};
