const SHARED_TEMPLATE_FILES = [
  { source: "./templates/config/client.js", target: "config/client.js" },
  { source: "./templates/config/dev.js", target: "config/dev.js" },
  { source: "./templates/config/prod.js", target: "config/prod.js" },
  { source: "./templates/config/server.js", target: "config/server.js" },
  {
    source: "./templates/i18n/messages/enUs.js",
    target: "src/i18n/messages/enUs.js",
  },
  {
    source: "./templates/i18n/messages/ru.js",
    target: "src/i18n/messages/ru.js",
  },
  {
    source: "./templates/i18n/messages/he.js",
    target: "src/i18n/messages/he.js",
  },
  {
    source: "./templates/i18n/messages/ar.js",
    target: "src/i18n/messages/ar.js",
  },
  {
    source: "./templates/Components/DeBugger.vue",
    target: "src/components/DeBugger.vue",
  },
  {
    source: "./templates/Components/EssentialLink.vue",
    target: "src/components/EssentialLink.vue",
  },
  {
    source: "./templates/Components/LangSelect.vue",
    target: "src/components/LangSelect.vue",
  },
  {
    source: "./templates/Components/LanguageSwitcher.vue",
    target: "src/components/LanguageSwitcher.vue",
  },
  {
    source: "./templates/Components/NavigationDrawer.vue",
    target: "src/components/NavigationDrawer.vue",
  },
  {
    source: "./templates/Components/ProductComponent.vue",
    target: "src/components/ProductComponent.vue",
  },
  {
    source: "./templates/Components/ServiceComponent.vue",
    target: "src/components/ServiceComponent.vue",
  },
  { source: "./templates/pages/AboutUs.vue", target: "src/pages/AboutUs.vue" },
  {
    source: "./templates/pages/ContactUs.vue",
    target: "src/pages/ContactUs.vue",
  },
  {
    source: "./templates/pages/Error404.vue",
    target: "src/pages/Error404.vue",
  },
  { source: "./templates/pages/Index.vue", target: "src/pages/Index.vue" },
  { source: "./templates/pages/Privacy.vue", target: "src/pages/Privacy.vue" },
  {
    source: "./templates/pages/Products.vue",
    target: "src/pages/Products.vue",
  },
  {
    source: "./templates/pages/Services.vue",
    target: "src/pages/Services.vue",
  },
  {
    source: "./templates/pages/Settings.vue",
    target: "src/pages/Settings.vue",
  },
  { source: "./templates/pages/Terms.vue", target: "src/pages/Terms.vue" },
  { source: "./templates/public/robots.txt", target: "public/robots.txt" },
  { source: "./templates/public/sitemap.xml", target: "public/sitemap.xml" },
  {
    source: "./templates/layouts/MainLayout.vue",
    target: "src/layouts/MainLayout.vue",
  },
  {
    source: "./templates/pwa/register-service-worker.js",
    target: "src-pwa/register-service-worker.js",
  },
  { source: "./templates/App.vue", target: "src/App.vue" },
  { source: "./templates/.bashrc", target: ".bashrc" },
  { source: "./templates/.editorconfig", target: ".editorconfig" },
  {
    source: "./templates/icongenie-Profile.json",
    target: "icongenie-Profile.json",
  },
  { source: "./templates/budget.json", target: "budget.json" },
  { source: "./templates/Profile.json", target: "Profile.json" },
  { source: "./templates/robots.txt", target: "robots.txt" },
  { source: "./templates/sitemap.xml", target: "sitemap.xml" },
];

const TEMPLATE_VARIANTS = {
  "legacy-js": {
    label: "JavaScript starter",
    description: "Stable default scaffold with the current Waelio structure.",
    files: [
      {
        source: "./templates/utils/waelioConfig.js",
        target: "src/utils/waelioConfig.js",
      },
      { source: "./templates/i18n/index.js", target: "src/i18n/index.js" },
      { source: "./templates/store/index.js", target: "src/store/index.js" },
      {
        source: "./templates/store/modules/languages.js",
        target: "src/store/modules/languages.js",
      },
      {
        source: "./templates/store/modules/services.js",
        target: "src/store/modules/services.js",
      },
      {
        source: "./templates/store/modules/navigation.js",
        target: "src/store/modules/navigation.js",
      },
      {
        source: "./templates/mixins/LangMixin.js",
        target: "src/mixins/LangMixin.js",
      },
      {
        source: "./templates/mixins/ModeMixin.js",
        target: "src/mixins/ModeMixin.js",
      },
      {
        source: "./templates/mixins/WaelioMixin.js",
        target: "src/mixins/WaelioMixin.js",
      },
      { source: "./templates/boot/axios.js", target: "src/boot/axios.js" },
      { source: "./templates/boot/i18n.js", target: "src/boot/i18n.js" },
      {
        source: "./templates/boot/init-waelio.js",
        target: "src/boot/init-waelio.js",
      },
      {
        source: "./templates/router/routes.js",
        target: "src/router/routes.js",
      },
      { source: "./templates/quasar.conf.js", target: "quasar.conf.js" },
    ],
  },
  "legacy-ts": {
    label: "TypeScript-ready starter",
    description:
      "Same layout with typed core boot, store, router, mixin, and config files.",
    files: [
      {
        source: "./templates-ts/utils/waelioConfig.ts",
        target: "src/utils/waelioConfig.ts",
      },
      { source: "./templates-ts/i18n/index.ts", target: "src/i18n/index.ts" },
      { source: "./templates-ts/store/index.ts", target: "src/store/index.ts" },
      {
        source: "./templates-ts/store/modules/languages.ts",
        target: "src/store/modules/languages.ts",
      },
      {
        source: "./templates-ts/store/modules/services.ts",
        target: "src/store/modules/services.ts",
      },
      {
        source: "./templates-ts/store/modules/navigation.ts",
        target: "src/store/modules/navigation.ts",
      },
      {
        source: "./templates/store/store-flag.d.ts",
        target: "src/store/store-flag.d.ts",
      },
      {
        source: "./templates-ts/mixins/LangMixin.ts",
        target: "src/mixins/LangMixin.ts",
      },
      {
        source: "./templates-ts/mixins/ModeMixin.ts",
        target: "src/mixins/ModeMixin.ts",
      },
      {
        source: "./templates-ts/mixins/WaelioMixin.ts",
        target: "src/mixins/WaelioMixin.ts",
      },
      { source: "./templates-ts/boot/axios.ts", target: "src/boot/axios.ts" },
      { source: "./templates-ts/boot/i18n.ts", target: "src/boot/i18n.ts" },
      {
        source: "./templates-ts/boot/init-waelio.ts",
        target: "src/boot/init-waelio.ts",
      },
      {
        source: "./templates-ts/router/routes.ts",
        target: "src/router/routes.ts",
      },
      { source: "./templates/quasar.conf.js", target: "quasar.conf.js" },
    ],
  },
};

const DEFAULT_TEMPLATE_VARIANT = "legacy-js";

function resolveTemplateVariant(value) {
  return Object.prototype.hasOwnProperty.call(TEMPLATE_VARIANTS, value)
    ? value
    : DEFAULT_TEMPLATE_VARIANT;
}

function getTemplateVariantChoices() {
  return Object.entries(TEMPLATE_VARIANTS).map(([value, variant]) => ({
    name: `${variant.label} — ${variant.description}`,
    short: variant.label,
    value,
  }));
}

module.exports = {
  DEFAULT_TEMPLATE_VARIANT,
  SHARED_TEMPLATE_FILES,
  TEMPLATE_VARIANTS,
  getTemplateVariantChoices,
  resolveTemplateVariant,
};
