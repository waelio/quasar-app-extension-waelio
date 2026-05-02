const {
  DEFAULT_TEMPLATE_VARIANT,
  SHARED_TEMPLATE_FILES,
  TEMPLATE_VARIANTS,
  resolveTemplateVariant,
} = require("./template-manifest");

const APP_DEPENDENCIES = {
  "emailjs-com": "^2.6.4",
  store2: "^2.14.4",
  axios: "^1.16.0",
  "waelio-utils": "^1.1.12",
  lodash: "^4.18.1",
  "vue-i18n": "^8.28.2",
};

const APP_DEV_DEPENDENCIES = {
  "copy-webpack-plugin": "6.3.2",
  "sitemap-webpack-plugin": "^1.0.0",
};

function renderTemplateFiles(api, files, scope) {
  files.forEach((file) => {
    api.renderFile(file.source, file.target, scope);
  });
}

async function detectHostTypescript(api) {
  if (typeof api.hasTypescript !== "function") {
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
  const requestedVariant = resolveTemplateVariant(
    api.prompts && api.prompts.templateVariant
      ? api.prompts.templateVariant
      : hostHasTypescript === true
        ? "legacy-ts"
        : DEFAULT_TEMPLATE_VARIANT,
  );
  const selectedVariant = TEMPLATE_VARIANTS[requestedVariant];
  const scope = {
    hostHasTypescript,
    isTypeScript: requestedVariant === "legacy-ts",
    prompts: api.prompts || {},
    templateVariant: requestedVariant,
  };

  renderTemplateFiles(api, SHARED_TEMPLATE_FILES, scope);
  renderTemplateFiles(api, selectedVariant.files, scope);

  api.extendPackageJson({
    dependencies: APP_DEPENDENCIES,
    devDependencies: APP_DEV_DEPENDENCIES,
  });

  if (typeof api.setPersistentConf === "function") {
    api.setPersistentConf({
      templateVariant: requestedVariant,
    });
  }

  api.onExitLog(`[waelio] Installed ${selectedVariant.label}.`);
  api.onExitLog(
    "[waelio] Re-run the scaffold at any time with: quasar ext invoke waelio",
  );
  api.onExitLog(
    "[waelio] Review quasar.conf.js before building, especially routes, sitemap base URL and PWA metadata.",
  );

  if (requestedVariant === "legacy-ts" && hostHasTypescript !== true) {
    api.onExitLog(
      "[waelio] TypeScript-ready files were generated. For the smoothest experience, start from a Quasar project with TypeScript enabled.",
    );
  }
};
