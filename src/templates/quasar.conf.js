const path = require("path");
const Paths = [
  { path: "/" },
  { path: "/about" },
  { path: "/contact" },
  { path: "/services" },
  { path: "/products" },
  { path: "/privacy" },
  { path: "/terms" },
];
module.exports = function (ctx) {
  return {
    // https://quasar.dev/quasar-cli/supporting-ts
    supportTS: false,

    // https://quasar.dev/quasar-cli/prefetch-feature
    preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/boot-files
    boot: ["i18n", "axios", { path: "init-waelio", server: false }],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: ["app.scss"],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      "fontawesome-v5",
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      "roboto-font", // optional, you are not bound to it
      "material-icons", // optional, you are not bound to it
    ],

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: "history", // available values: 'hash', 'history'

      transpile: true,

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      transpileDependencies: [],

      // rtl: false, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://quasar.dev/quasar-cli/handling-webpack
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /node_modules/,
        });
        const SitemapPlugin = require("sitemap-webpack-plugin").default;
        cfg.plugins.push(
          new SitemapPlugin({
            base: "https://yourapp.com",
            paths: Paths,
            options: {
              filename: "/sitemap.xml",
              lastmod: true,
              changefreq: "weekly",
              priority: 0.8,
            },
          })
        )
      },
    },

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8080,
      open: false, // opens browser window automatically
    },

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      iconSet: "material-icons", // Quasar icon set
      lang: "en-us", // Quasar language pack
      config: {
        dark: "auto", // or Boolean true/false
        screen: {
          bodyClasses: true,
        },
        cordova: {
          // add the dynamic top padding on iOS mobile devices
          iosStatusBarPadding: true,

          // Quasar handles app exit on mobile phone back button.
          // Requires Quasar v1.9.3+ for true/false, v1.12.6+ for '*' wildcard and array values
          backButtonExit: true,

          // On the other hand, the following completely
          // disables Quasar's back button management.
          // Requires Quasar v1.14.1+
          backButton: true,
        },
      },
      // Possible values for "importStrategy":
      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: "auto",

      // For special cases outside of where "auto" importStrategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: [
        "Notify",
        "Loading",
        "Dialog",
        "Meta",
        "Cookies",
        "LocalStorage",
        "SessionStorage",
        "AppFullscreen"
      ],
    },

    animations: "all", // --- includes all animations
    // https://quasar.dev/options/animations
    //animations: [],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: true,
      manualHydration: false, ///false, // (@quasar/app v1.4.2+) Manually hydrate the store
      componentCache: {}, // lru-cache package options,
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: "GenerateSW", // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true,
      }, // only for GenerateSW
      cacheExt:
        "js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3",
      manifest: {
        name: `App Name`,
        short_name: `App`,
        description: `Online Solutions Provider`,
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#4200f8",
        images: [
          {
            src: "https://cdn.quasar.dev/img/parallax1.jpg",
            type: "image/jpg",
          },
        ],
        icons: [
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            density: "2.0",
          }
        ],
      },
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: false,
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      bundler: "packager", // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        appBundleId: "",
        appCategoryType: "public.app-category.business",
        osxSign: true,
        darwinDarkModeSupport: true,
        protocol: "myapp://path",
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: "",
      },

      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,

      extendWebpack(/* cfg */) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },
    },
  };
};
