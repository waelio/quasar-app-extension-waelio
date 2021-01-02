module.exports = function () {
  return [
    {
      name: 'name',
      type: 'input',
      required: true,
      message: 'WARNING!!: This Extension Changes Pages/Components/Store/Mixins/Boots AND Quasar.CONF.js - Yours truly (Waelio)',
    },
    {
      name: 'preset',
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script - You better have backup!!',
          value: 'install'
        },
        {
          name: 'Prompts script - For show only',
          value: 'prompts'
        },
        {
          name: 'Uninstall script - Probably broken',
          value: 'uninstall'
        }
      ]
    }
  ]
}
