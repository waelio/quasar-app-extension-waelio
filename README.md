Quasar App Extension waelio
===

```diff
- Warning: If not Broken now it might become soon. But not for long.
+ 60+ commits in the first 72 hours
- However, No Warranties!
``` 
If you have any questions email me @ wahbehw@gmail.com

<a href="https://www.buymeacoffee.com/waeliocom" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="40px" width="200px"></a>


### Finally No more repetitive tasks!! `1` step `scaffolding`
#

> This extension generates the default structure for most of my apps. 
> 
> The Idea is fast prototyping in order to provide fast solution.
> 
> This Extension to override the `Sh#t` out of the existing Quasar App.

````diff
- BACKUP YOUR FILES!!!
- OVERRIDES:

- src/pages
+ src/pages/AboutUs.vue
+ src/pages/ContactUs.vue
+ src/pages/Privacy.vue
+ src/pages/Terms.vue
+ src/Settings.vue
  
- src/components
+ src/components/LanguageSwitcher.vue
+ src/EssentialLink.vue
  
- src/mixins
+ src/mixins/LangMixin.js
  
- src/boots
+ src/boot/register.js (unused)
  
- src/i18n FOLDER! 
+ src/i18n/index.js
+ src/i18n/en.json
+ src/i18n/ru.json
+ src/i18n/ar.json
+ src/i18n/he.json
  
- src/App.vue
+ src/App.vue  
  
- src/Layouts
+ src/layouts/MainLayout.vue
  
- src/store
+ src/store/index.js
  
- src/routes
+ src/router/routes.js
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
nextp   #npm version patch
nextm   #npm version minor
nextmj  #npm version major
dev     #quasar dev
pwa     #quasar dev -m pwa
ssr     #quasar dev -m ssr
ios     #quasar dev -m ios
android #quasar dev -m android

linta   #eslint --ext .js,.vue ./ "--fix"

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