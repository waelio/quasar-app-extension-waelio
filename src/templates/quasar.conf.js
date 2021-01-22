const path = require('path');
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const CopyPlugin = require("copy-webpack-plugin");
const Paths = [
  { path: '/' },
  { path: '/about' },
  { path: '/contact' },
  { path: '/services' },
  { path: '/products' },
  { path:'/privacy'},
  { path:'/terms'}
]
module.exports = function (/* ctx */) {
  return {
    supportTS: false,
    preFetch: true,
    boot: ["i18n", "axios", 
    {path: 'init-waelio', server: false}],
    css: ["app.scss"],
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      "roboto-font", // optional, you are not bound to it
      "material-icons", // optional, you are not bound to it
    ],
    build: {
      vueRouterMode: "history", // available values: 'hash', 'history'
      transpile: true,
      preloadChunks: true,
      gzip: true,
      // rtl: false,
      // showProgress: false,
      // analyze: true,
      // extractCSS: false,
      // transpileDependencies: [],
      // https://quasar.dev/quasar-cli/handling-webpack
      extendWebpack(cfg) {
        cfg.module.rules.push(
          {
            enforce: "pre",
            test: /\.(js|vue)$/,
            loader: "eslint-loader",
            exclude: /node_modules/,
          },
          {
            resourceQuery: /blockType=i18n/,
            type: 'javascript/auto',
            use: [
              { loader: '@kazupon/vue-i18n-loader' },
              { loader: 'yaml-loader' }
            ]
          }
        )
        cfg.plugins.push(
          new SitemapPlugin({
            base: "https://TestApp.COM",
            paths:Paths,
            options:{
              filename: "sitemap.xml",
              lastmod: true,
              changefreq: "weekly",
              priority: 0.8
            }
          }))
          cfg.plugins.push(
          new CopyPlugin({
            patterns: [
              { from: path.resolve(__dirname, 'sitemap.xml'),    to: path.resolve(__dirname,'dist/pwa/public') },
              { from: path.resolve(__dirname, 'robots.txt'),     to: path.resolve(__dirname,'dist/pwa/public') },
              { from: path.resolve(__dirname, 'sitemap.xml'),    to: path.resolve(__dirname,'public') },
              { from: path.resolve(__dirname, 'robots.txt'),     to: path.resolve(__dirname,'public') }
            ]
          })
        )
      },
    },
    devServer: {
      https: false,
      port: 8080,
      open: false,
    },
    framework: {
      iconSet: "material-icons", // Quasar icon set
      lang: "en-us", // Quasar language pack
      config: {
         screen: {
          bodyClasses: true
        },
        dark: 'auto', // or Boolean true/false
        cordova: {
          // add the dynamic top padding on iOS mobile devices
          iosStatusBarPadding: true,

          // Quasar handles app exit on mobile phone back button.
          backButtonExit: true,
          // disables Quasar's back button management.
          backButton: true
        }    
      },      
      // Possible values for "importStrategy":
      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: "auto",
      // components: [],
      // directives: [],
      plugins: ['Notify', 'Loading', 'Dialog', 'Meta', 'Cookies', 'LocalStorage', 'SessionStorage']
    },
    animations: "all", // --- includes all animations
    //animations: [],
    ssr: {
      pwa: false,
    },
    pwa: {
      workboxPluginMode: "GenerateSW", // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true
      }, // only for GenerateSW
      cacheExt: 'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
      manifest: {
        name: `Test_App Solutions`,
        short_name: `NorthWest Meta`,
        description: `Online Solutions Provider`,
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#4200f8",
        images:[
          {
            src:'https://cdn.quasar.dev/img/parallax1.jpg',
            type: "image/jpg",
          }
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
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/android-icon-36x36.png",
            sizes: "36x36",
            type: "image/png",
            density: "0.75"
          },
          {
            src: "icons/android-icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            density: "1.0"
          },
          {
            src: "icons/android-icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            density: "1.5"
          },
          {
            src: "icons/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            density: "2.0"
          },
          {
            src: "icons/android-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            density: "3.0"
          },
          {
            src: "icons/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            density: "4.0"
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
        appBundleId: 'com.TestApp.app',
        appCategoryType: 'public.app-category.business',
        osxSign: true,
        darwinDarkModeSupport: true,
        protocol: 'myapp://path'
        // Windows only
        // win32metadata: { ... }
      },
      builder: {
        appId: "com.TestApp.app",
      },
      nodeIntegration: true,
      extendWebpack(/* cfg */) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },
    },
  };
};
