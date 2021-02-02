"strict";
import { isObject, merge, get, find, values } from "lodash";
import { dom } from "quasar";
const { ready } = dom;

export default {
  data() {
    return {
      localeName: this.$config.get(`localeName`)
    };
  },
  methods: {
    /** Start Entry HERE */

    verifyLocale() {
      // 1. CHECK: Config locale
      const configLocale = this.$config.get(`settings:${this.localeName}`);
      // 2. CHECK: If we have a saved locale
      // console.log("configLocale", configLocale);
      const isStorageLocale = this.$config.storage().has(this.localeName);
      // 2.1: CASE: Locale Exists in Storage
      if (isStorageLocale) {
        // 2.1.0 Get the storage locale
        let storageLocale = this.$config.storage().get(this.localeName);
        // 2.1.1 Sniff locale isoName from the storage locale
        const isoName = this.sniffIsoNameFrom(JSON.parse(storageLocale));
        // 2.1.1.0 Check if the locale is an enabled locale
        if (this.isIsoName(isoName)) {
          // assign the new locale to the site and refresh the data
          this.language = isoName;
          return true;
          // 2.1.1.1 Check if the config has enabled locale
        } else if (configLocale && this.isIsoName(configLocale)) {
          // assign the new locale to the site and refresh the data
          this.language = configLocale;
          return true;
        }
      }
      // 2.2: CASE: Locale Does Not Exist in Storage
      else {
        // assign the reload
        this.language = this.$q.lang.getLocale();
      }
    },
    // Change html.body class according to lang class
    updateBodyClass(needle) {
      ready(() => {
        this.languageKeys.forEach(lng => {
          document.querySelector("body").classList.remove(lng);
          document.querySelector("body").classList.remove(lng.split("-")[0]);
        });
        document.body.className += ` ${needle}`;
        return true;
      });
    },
    trimLang(lang) {
      return lang && JSON.parse(JSON.stringify(lang.split("-")[0]));
    },
    isNothing(payload) {
      switch (typeof payload) {
        case "string":
          return Boolean(!this.isIsoName(payload));
        case "object":
          return Boolean(!payload.isoName);
        default:
          return true;
      }
    },
    isIsoName(isoName) {
      return this.languageKeys.includes(isoName);
    },
    isNativeName(nativeName) {
      return this.languageNames.includes(nativeName);
    },
    sniffIsoNameFrom(payload) {
      if (!payload) {
        return false;
      }
      let isoName =
        typeof payload === "string" && this.isIsoName(payload)
          ? payload
          : isObject(payload) &&
            payload.isoName &&
            this.isIsoName(payload.isoName)
          ? payload.isoName
          : false;
      return isoName;
    },
    langOptions() {
      return this.languages.map(lang => ({
        isoName: lang.isoName,
        nativeName: lang.nativeName
      }));
    }
  },
  computed: {
    language: {
      get: function() {
        return this.$store.getters.language;
      },
      set: function(payload) {
        const gotLocale = this.$store.dispatch(
          "importLang",
          this.sniffIsoNameFrom(payload)
        );
        gotLocale
          .then(content => JSON.stringify(content))
          .then(content => JSON.parse(content))
          .then(content => {
            if (content) {
              this.$i18n.locale = content && content.default.isoName;
              this.updateBodyClass(content.default.isoName);
              return content.default;
            }
          })
          .catch(error => {
            console.error("error", error);
          });
      }
    },
    languages() {
      return this.$store.getters.languages;
    },
    isoName() {
      return this.language.isoName;
    },
    nativeName() {
      return this.language.nativeName;
    },
    LangTitle() {
      return this.$t("general.setLocale") + " -  " + this.nativeName;
    },
    ConfigInitialized() {
      return Boolean(Object.keys(this.$config.getAll()).length);
    },
    includedTranslations() {
      return {
        name: this.businessName,
        url: this.businessDomain
      };
    },
    configClient() {
      return this.$config.getItem("client");
    },
    businessName() {
      return this.$config.get("app:businessName");
    },
    businessDomain() {
      return this.$config.get("app:businessDomain");
    },
    labels() {
      return {
        LangSelect: this.$t("general.languages"),
        LangTitle: this.$t("general.setLocale") + " -  " + this.nativeName
      };
    },
    languageKeys() {
      return this.languages.map(lang => lang.isoName);
    },
    languageNames() {
      return this.languages.map(lang => lang.nativeName);
    },

    LangsLabel() {
      return this.$tc("general.languages");
    },
    // Store languages
    languages() {
      return this.$store.getters.languages;
    },
    // Returns Language from LocalStorage or Boolean
    isSavedLang() {
      return this.$config.storage().has("locale")
        ? JSON.parse(JSON.stringify(this.$config.storage().get("locale")))
        : false;
    }
  }
};
