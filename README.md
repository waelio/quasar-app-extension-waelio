# Quasar App Extension Waelio

Scaffold a content-ready Quasar starter with pages, i18n, configuration, SEO helpers, and an optional TypeScript-ready core.

This extension is designed for developers who want to spin up a real app structure quickly, then customize it instead of assembling the basics from scratch.

## Why people use it

- ready-made starter pages: home, about, contact, products, services, privacy, terms, settings, and 404
- built-in i18n starter with English, Arabic, Hebrew, and Russian
- Quasar boot files, store modules, layouts, components, and app config scaffolding
- sitemap, robots, and meta-related starter pieces
- choice between a **JavaScript starter** and a **TypeScript-ready starter**

## Install

```bash
quasar ext add waelio
```

During installation you can choose one of these starters:

- **JavaScript starter** — the stable default with the current Waelio structure.
- **TypeScript-ready starter** — the same structure with typed core boot, store, router, mixin, and config files.

## Good to know before installing

This extension writes scaffold files directly into your app.

It is best used when:

- starting a fresh Quasar project, or
- working from a backup / branch where overwriting scaffold files is safe

The **TypeScript-ready starter** works best when the host Quasar project already has TypeScript enabled.

## What gets generated

The scaffold adds or updates these areas of your app:

- `config/*`
- `public/robots.txt` and `public/sitemap.xml`
- `src/App.vue`
- `src/boot/*`
- `src/components/*`
- `src/i18n/*`
- `src/layouts/MainLayout.vue`
- `src/mixins/*`
- `src/pages/*`
- `src/router/routes.*`
- `src/store/*`
- `src/utils/waelioConfig.*`
- `quasar.conf.js`

It also adds the dependencies required by the generated files:

- `axios`
- `copy-webpack-plugin`
- `emailjs-com`
- `lodash`
- `sitemap-webpack-plugin`
- `store2`
- `vue-i18n`
- `waelio-utils`

## First things to customize

After install, start here:

1. Update your business details in `config/client.js`
2. Review `quasar.conf.js`
3. Adjust routes, branding, and starter content to fit your app
4. Update the sitemap base URL and PWA manifest values

If you want app icons, the repo includes an [IconGenie](https://quasar.dev/icongenie/command-list) profile:

```bash
icongenie g icongenie-Profile.json
```

## Common commands

Run the scaffold again:

```bash
quasar ext invoke waelio
```

Remove the extension:

```bash
quasar ext remove waelio
```

## Compatibility and direction

- The **JavaScript starter** is the safest choice for users who want the current structure exactly as it is.
- The **TypeScript-ready starter** adds typed core files without changing the overall scaffold layout.
- A separate **modern Vue 3 / Quasar 2+ track** is the next planned evolution, rather than silently changing the current starter.

## Roadmap

- keep the current starter stable for existing users
- improve generated docs and upgrade guidance
- add a modern Vue 3 / Quasar 2+ starter track
- tighten uninstall and migration paths

## Help and feedback

- Discord: [quasar-app-extension-waelio](https://discord.gg/Y5TtR24X)
- Email: wahbehw@gmail.com

If this extension saved you time, consider [donating to Waelio](https://paypal.me/waelio).
