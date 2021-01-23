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
### Join me at [Discord's quasar-app-extension-waelio](https://discord.gg/Y5TtR24X)
### If you have any questions, ideas or simply want to help please email me at wahbehw@gmail.com 

<a href="https://www.buymeacoffee.com/waeliocom" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50px" width="250px"></a>


### Fast Scaffolding with `1` step
Make sure you have
* i18n 
* vuex
#
The Setup is straight forward:
Chang these 2 lines in the new boos file `init-waelio.js`
```javascript
// Company Name
app.defaultName = 'CHANGE_IN_BOOT' 
// Company domain, not the whole url
app.defaultUrl = 'CHANGE_IN_BOOT'
```
#
> I use this extension generates the default structure for most of my apps. 
> 
> The Idea is fast prototyping in order to provide fast solution.
> 
> This Extension to override the `Sh#t` out of the existing Quasar App.

````diff
- BACKUP YOUR FILES FIRST IF USING ON AN EXISTING PROJECT
- This Extension will OVERRIDES the following:

- src/pages
+ src/pages/AboutUs.vue
+ src/pages/ContactUs.vue
+ src/pages/Privacy.vue
+ src/pages/Terms.vue
+ src/Settings.vue
  
- src/components
+ src/components/LanguageSwitcher.vue
+ src/EssentialLink.vue
+ src/ProductComponent.vue
+ src/ServiceComponent.vue

- config
+ config/dev.js
+ config/client.js
+ config/server.js

- src/mixins
+ src/mixins/LangMixin.js
+ src/mixins/ModeMixin.js
  
- src/boots
+ src/boot/axios.js
+ src/boot/i18n.js
+ src/boot/init-waelio.js
  
- src/i18n FOLDER
+ src/i18n/index.js
+ src/i18n/messages/en-us.json
+ src/i18n/messages/ru.json
+ src/i18n/messages/ar.json
+ src/i18n/messages/he.json
  
- src/App.vue
+ src/App.vue  
  
- src/Layouts
+ src/layouts/MainLayout.vue
  
- src/store
+ src/store/index.js
+ src/store/modules/languages.js
+ src/store/modules/services.js
  
- src/routes
+ src/router/routes.js

-src/utils --Temp @TODO Relocate to waelio-utils
+ src/utils/google-one-tap.js
````
<h3>
Last but not least ...

```diff
- Will REPLACE quasar.conf.js 🤦‍♂️
```
</h3>

#
A Quasar App Extension
# Install
```bash
quasar ext add waelio
```
Quasar CLI will retrieve it from the NPM registry and install the extension to your project.

You might have to RUN: 
```bash
npm install sitemap-webpack-plugin --save-dev
npm install copy-webpack-plugin --save-dev
```

Double Check the `quasar.conf.js` configuration

**Make Sure you have _`i18n`_ installed**

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
If you appreciate the work that went into this App Extension, please consider [donating to Waelio](https://paypal.me/waelio).

<a href="https://www.buymeacoffee.com/waeliocom" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="40px" width="200px"></a>