module.exports = function () {
  return [
    {
      name: 'name',
      type: 'input',
      required: true,
      message: 'Configure: Quasar CLI Extension name (Waelio)',
    },
    {
      name: 'preset',
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [
        {
          name: 'Install script',
          value: 'install'
        },
        {
          name: 'Prompts script',
          value: 'prompts'
        },
        {
          name: 'Uninstall script',
          value: 'uninstall'
        }
      ]
    }
  ]
}
