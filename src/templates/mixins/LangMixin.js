import { mapGetters } from "vuex";
import { findIndex } from "lodash";
import Translations from "src/i18n";
import { dom } from "quasar";
const { ready } = dom;

export default {
  data() {
    return {
      state: this.$i18n.locale,
      dump: null
    };
  },
  methods: {
    // Start Entry
    verifyLocale() {
      const testLocale = this.isSavedLang || this.$q.lang.getLocale();
      this.language = testLocale;
    },
    // Change html.body class according to lang class
    updateBodyClass(needle, haystack) {
      ready(() => {
        let clsName;
        haystack.forEach(lng => {
          clsName = lng.isoName.split("-")[0];
          document.querySelector("body").classList.remove(clsName);
        });
        document.body.className += ` ${needle}`;
        return true;
      });
    },
    // Import JSON File
    importLang(lang, Languages) {
      if (!this.isIsoName(lang)) return false;
      return import(
        /* webpackInclude: /[a-z0-9]+\.js$/ */
        "quasar/lang/" + lang
      ).then(lng => {
        this.$q.lang.set(lng.default);
        this.$i18n.locale = lng.default.isoName;
        return lng.default;
      });
    },
    // Remove "-" from string
    trimLang(lang) {
      return lang && JSON.parse(JSON.stringify(lang.split("-")[0]));
    },
    // Returns {className: ,langName: } from lang
    identifyLangType(lang) {
      let holdName = null;
      switch (true) {
        case this.isLocale(lang):
          holdName = lang.isoName;
          break;
        case this.isLocaleObject(lang):
          holdName = lang.default.isoName;
          break;
        case typeof lang === "string":
          holdName = lang;
          break;
      }
      return (
        this.isIsoName(holdName) && {
          className: this.trimLang(holdName),
          langName: JSON.parse(JSON.stringify(holdName))
        }
      );
    },
    // Check if lang is $q.lang
    isLocale(locale) {
      return Boolean(locale && locale.isoName);
    },
    // Check if lang is $q.lang file
    isLocaleObject(locale) {
      return Boolean(locale && locale.default && locale.default.isoName);
    },
    isNothing(payload) {
      switch (typeof payload) {
        case "string":
          return !this.isIsoName(payload);
          break;
        case "object":
          return !this.identifyLangType(payload);
          break;
        default:
          return true;
          break;
      }
    },
    isIsoName(isoName) {
      return this.languageKeys.includes(isoName);
    },
    isNativeName(nativeName) {
      return this.languageNames.includes(nativeName);
    },
    getStoreLanguageByNativeName(NativeName) {
      if (!NativeName) return false;
      return this.languages.filter(lan => lan.nativeName == NativeName);
    },
    getI18nLanguageByIsoName(isoName) {
      if (!isoName) return false;
      return Object.entries(this.localTranslations).find(
        lan => lan[0] == isoName
      );
    },
    labels() {
      return {
        LangSelect: this.$t("general.languages"),
        LangTitle:
          this.$t("general.setLocale") + " - < " + this.nativeName() + " >"
      };
    },
    isoName() {
      return this.language.nativeName;
    },
    nativeName() {
      return this.state.nativeName;
    },
    langOptions() {
      return this.$store.getters.languages.map(lang => ({
        label: lang.nativeName,
        value: lang.isoName
      }));
    }
  },
  computed: {
    languageKeys() {
      return this.languages.map(lang => lang.isoName);
    },
    languageNames() {
      return this.languages.map(lang => lang.nativeName);
    },
    localTranslations: {
      get: () => Translations,
      set: value => {
        console.log("localTranslations", value);
      }
    },
    translationColumns() {
      return Object.keys(Translations).map(trans => ({
        label: trans.toUpperCase(),
        name: trans,
        value: Object.keys(Translations[trans]),
        align: "center",
        field: "value",
        sortable: true
      }));
    },
    translationData() {
      const words = [];
      Object.entries(Translations).forEach(One => {
        Object.entries(One[1]).forEach(Title => {
          words.push({
            Title,
            ...JSON.parse(JSON.stringify(Title[1]))
          });
        });
      });
      return words;
    },
    translationMessages() {
      return this.translationColumns.map((value, index, key) => ({
        label: key,
        value: value,
        index
      }));
    },
    //Store languages
    languages() {
      return this.$store.getters.languages;
    },
    // Computed Language Getter/Setter
    language: {
      get() {
        return this.state;
      },
      set: function(lang) {
        console.assert(lang);
        const Languages = this.$store.getters.languages;
        const R = this.identifyLangType(lang);
        const LangFile = new Promise((resolve, reject) => {
          return resolve(this.importLang(R.langName, Languages));
        });
        LangFile.then(theFile => {
          let cb = false;
          console.log("this.isLocale(theFile)", this.isLocale(theFile));
          if (this.isLocale(theFile)) {
            this.updateBodyClass(R.className, Languages);
            const storeLang = this.getStoreLanguageByNativeName(
              theFile.nativeName
            ).length
              ? this.getStoreLanguageByNativeName(theFile.nativeName)[0]
              : null;
            const pluginLang = this.getI18nLanguageByIsoName(theFile.isoName)
              .length
              ? { ...this.getI18nLanguageByIsoName(theFile.isoName)[1] }
              : null;
            let result = { ...storeLang };
            result.messages = { ...theFile, ...pluginLang };
            result = JSON.stringify(result);
            this.$q.localStorage.set("locale", result);
            this.$vault.set("locale", result);
            this.state = JSON.parse(result);
            cb = this.state;
            return cb;
          } else {
            return cb;
          }
        });
      }
    },
    // Returns Language from LocalStorage or Boolean
    isSavedLang() {
      const StorageExists = this.$q.localStorage.has("locale"),
        StoragePayload = JSON.parse(
          JSON.stringify(
            this.$q.localStorage.getItem("locale")
          )
        );
      return StorageExists && StoragePayload && !this.isNothing(StoragePayload)
        ? JSON.parse(JSON.stringify(this.$q.localStorage.getItem("locale")))
        : false;
    }
  }
};
