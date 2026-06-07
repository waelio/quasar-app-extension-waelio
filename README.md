# Quasar App Extension Waelio

[![npm version](https://img.shields.io/npm/v/quasar-app-extension-waelio?label=version)](https://www.npmjs.com/package/quasar-app-extension-waelio)
[![weekly downloads](https://img.shields.io/npm/dw/quasar-app-extension-waelio)](https://www.npmjs.com/package/quasar-app-extension-waelio)
[![license](https://img.shields.io/npm/l/quasar-app-extension-waelio)](LICENSE)

Scaffold a production-ready Quasar + Vue 3 starter powered by the **@waelio ecosystem** — with local state, messaging, i18n, full page scaffold, and TypeScript support, all wired up from the start.

## Why use it

- Ready-made pages: home, about, contact, products, services, privacy, terms, settings, and 404
- Built-in i18n with English, Arabic, Hebrew, and Russian
- Local state management via **[@waelio/ustore](https://waelio.com/packages/@waelio%2Fustore)** (replaces `store2`)
- Utility helpers via **[@waelio/utils](https://waelio.com/packages/@waelio%2Futils)**
- Event messaging via **[@waelio/messaging](https://waelio.com/packages/@waelio%2Fmessaging)**
- Quasar boot files, Pinia-compatible store modules, layouts, components, and app config
- Sitemap, robots, and SEO meta starters
- Choice between a **JavaScript starter** and a **TypeScript-ready starter**

## Install

```bash
quasar ext add waelio
```

During installation you can choose one of these starters:

- **JavaScript starter** — the stable default with the current Waelio structure.
- **TypeScript-ready starter** — same structure with typed core boot, router, and config files.

## What's new in v0.2.0

- 🔄 Replaced `store2` → `@waelio/ustore` for local state management
- 🔄 Replaced `waelio-utils` → `@waelio/utils` for modern ESM utilities
- ➕ Added `@waelio/messaging` for cross-component event passing
- 🗑️ Removed `emailjs-com`, `lodash`, `copy-webpack-plugin`, `sitemap-webpack-plugin`
- ⚡ Modernized boot files to Vue 3 / Quasar 2+ patterns (no more `Vue.prototype`)
- 📦 Updated `vue-i18n` to v9, `axios` to v1.7+
- 🔧 Requires Node ≥ 18 and npm ≥ 9

## Good to know before installing

This extension writes scaffold files directly into your app.

Best used when:
- Starting a fresh Quasar project, or
- Working from a branch where overwriting scaffold files is safe

The **TypeScript-ready starter** works best when the host Quasar project already has TypeScript enabled.

## What gets generated

- `config/*`
- `public/robots.txt` and `public/sitemap.xml`
- `src/App.vue`
- `src/boot/init-waelio.*` — wires up `@waelio/ustore` and app config
- `src/boot/axios.*` and `src/boot/i18n.*`
- `src/components/*`
- `src/i18n/*`
- `src/layouts/MainLayout.vue`
- `src/pages/*`
- `src/router/routes.*`
- `src/store/*`
- `src/utils/waelioConfig.*`
- `quasar.conf.js`

Dependencies added to your project:

| Package | Purpose |
|---------|---------|
| `@waelio/ustore` | Local state & storage management |
| `@waelio/utils` | TypeScript utility helpers |
| `@waelio/messaging` | Cross-component event bus |
| `axios` | HTTP client |
| `vue-i18n` | Internationalization |

## First things to customize

After install:

1. Update your business details in `config/client.js`
2. Review `quasar.conf.js`
3. Adjust routes, branding, and starter content to fit your app
4. Update the sitemap base URL and PWA manifest values

For app icons, the repo includes an [IconGenie](https://quasar.dev/icongenie/command-list) profile:

```bash
icongenie g icongenie-Profile.json
```

## Common commands

```bash
# Run the scaffold again
quasar ext invoke waelio

# Remove the extension
quasar ext remove waelio
```

## @waelio ecosystem

This extension is part of the **@waelio** family of focused npm packages:

- [@waelio/ustore](https://waelio.com/packages/@waelio%2Fustore) — local state management
- [@waelio/utils](https://waelio.com/packages/@waelio%2Futils) — TypeScript utilities
- [@waelio/messaging](https://waelio.com/packages/@waelio%2Fmessaging) — event messaging
- [@waelio/sync](https://waelio.com/packages/@waelio%2Fsync) — edge sync layer
- [@waelio/realdb](https://waelio.com/packages/@waelio%2Frealdb) — reactive local database

## Help and feedback

- GitHub Issues: [quasar-app-extension-waelio/issues](https://github.com/waelio/quasar-app-extension-waelio/issues)
- Email: wahbehw@gmail.com
- Package stats: [waelio.com/packages/quasar-app-extension-waelio](https://waelio.com/packages/quasar-app-extension-waelio)

If this extension saved you time, consider [donating to Waelio](https://paypal.me/waelio).
