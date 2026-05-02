const {
  DEFAULT_TEMPLATE_VARIANT,
  getTemplateVariantChoices,
} = require("./template-manifest");

async function detectHostTypescript(api) {
  if (!api || typeof api.hasTypescript !== "function") {
    return false;
  }

  try {
    return await api.hasTypescript();
  } catch (error) {
    return false;
  }
}

module.exports = async function (api) {
  const hostHasTypescript = await detectHostTypescript(api);

  return [
    {
      name: "templateVariant",
      type: "list",
      message: "Choose the Waelio starter you want to install:",
      default:
        hostHasTypescript === true ? "legacy-ts" : DEFAULT_TEMPLATE_VARIANT,
      choices: getTemplateVariantChoices(),
    },
  ];
};
