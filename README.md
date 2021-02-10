Quasar App Extension waelio
===
## Install - Quasar Framework
```bash
quasar ext add waelio
```


```diff
- Warning: Better start with a clean slate.
+ Ideas appreciated!
``` 
### Help/Questions/Suggestions? Find me at [Discord's quasar-app-extension-waelio](https://discord.gg/Y5TtR24X)
### If you prefer email, please email me at wahbehw@gmail.com 

#
A Quasar App Extension

I created this App Extension to help users scaffold their projects. The code is downloaded straight into your project, change the it as you please, take parts or whole, whatever you like. I suggest you start on a blank slate/new project.

Included:
* About us
* Contact us
* T&C
* Privacy page
* Settings Page
* i18n + 4 initial languages [en, ar, he, ru]
* SEO ready
* Meta Ready
* Notifications ready
* Services page/Demo
* Products page
* Config - NEW 

#
# How to Install
Quasar App
```bash
quasar ext add waelio
```
Quasar or Vue App
```bash
npm i quasar-app-extension-waelio
```
Quasar CLI will retrieve it from the NPM registry and install the extension to your project.

I am using an npm package called [store2](https://www.npmjs.com/package/store2). I am growing found it, docs for it can be found [Here.](https://github.com/nbubna/store#readme)

You might have to RUN (again): 
```bash
npm install store2 --save
npm install sitemap-webpack-plugin --save-dev
```

Double Check the `quasar.conf.js` configuration

**Make Sure you have _`i18n`_ installed**

#
The Setup is straight forward:
The Extension will create a folder in the root of the app, `/config`. I already added some default settings 
change the following in `/config/client.js`:
```javascript
  app: {
    businessName: "MyTest App", // Here
    businessDomain: "www.testapp.com", // Here DOMAIN
    businessAddress: "Test 123, Test TS 12345", // Not used
    businessEmail: "test@test.com", // not used
    businessImage:  "https://pbs.twimg.com/media/B6dQuW5IIAIgHCO?format=jpg&name=medium", // Here
    businessDescription: "Nostrud reprehenderit laboris sunt irure fugiat sit tempor." // Here
  },
```
#
Changes To to the current app. 

```diff
- BACKUP YOUR FILES FIRST IF USING ON AN EXISTING PROJECT
+ This Extension will OVERRIDES the following:

** Added new feature in order to save values outside the app scope.
** Switched to using new lighter storage called **store2. 
** I have not used the full potential of the config yet, but it's a start.

 `/config` (Config Folder)
+ config/client
+ config/dev.js
+ config/prod.js
+ config/server.js

`src/boots` (Boot Files)
+ src/boot/axios.js
+ src/boot/i18n.js
+ src/boot/init-waelio.js

`src/components` (Components Folder)
+ src/components/LanguageSwitcher.vue
+ src/EssentialLink.vue
+ src/ProductComponent.vue
+ src/ServiceComponent.vue

`src/pages` (Pages Folder)
+ src/pages/AboutUs.vue
+ src/pages/ContactUs.vue
+ src/pages/Error404.vue
+ src/pages/Privacy.vue
+ src/pages/Products.vue
+ src/pages/Services.vue
+ src/Settings.vue
+ src/pages/Terms.vue
  
`src/mixins` (Mixins)
+ src/mixins/LangMixin.js
+ src/mixins/ModeMixin.js
+ src/mixins/WaelioMixin.js

`src/i18n` (Translations Folder)
English, Russian Arabic & Hebrew ~🕊️
+ src/i18n/index.js
+ src/i18n/messages/en-us.json
+ src/i18n/messages/ru.json
+ src/i18n/messages/ar.json
+ src/i18n/messages/he.json
  
`src/App.vue` 
+ src/App.vue  
  
`src/Layouts` (Override old one)
+ src/layouts/MainLayout.vue
  
`src/store` (Index and Modules)
+ src/store/index.js
+ src/store/modules/languages.js
+ src/store/modules/navigation.js
+ src/store/modules/services.js
  
`src/routes` (Updating Routes)
+ src/router/routes.js

Last but not least ...
+ Will REPLACE quasar.conf.js 🤦‍♂️

```



 #### Don't forget to generate your icons, I already added the [icongenie](https://quasar.dev/icongenie/command-list) profile, just run:
 ```bash
 icongenie g icongenie-Profile.json
 ```



### Try this nifty tip:
```bash
bash ./.bashrc
```
OR
```bash
. ./.bashrc
```

Than enjoy these shortcuts:
```bash
ll='ls -w'
dev='quasar dev'
pwa='quasar dev -m pwa'
ssr='quasar dev -m ssr'
ios='quasar dev -m ios'
android='quasar dev -m android'
bdev='quasar build -m spa'
bpwa='quasar build -m pwa'
bssr='quasar build -m ssr'
nextp='npm verion patch'
nextm='npm verion minor'
nextmj='npm verion major'
npub='npm publish'
ypub='yarn publish'
linta='eslint --ext .js,.vue ./ "--fix"'
```
## Test your bash type `dev` in your terminal
```bash
dev # will run the command quasar dev 
```

# Uninstall
I Have not tried it yet, might work.
```bash
quasar ext remove waelio
```
# Donate
If you appreciate the work that went into this App Extension, and time I saved you, please consider [donating to Waelio](https://paypal.me/waelio).

<a href="https://www.buymeacoffee.com/waeliocom" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="40px" width="200px"></a>