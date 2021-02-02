/* eslint-disable no-eval */
import languages from 'quasar/lang/index.json'
import { config } from 'boot/init-waelio'
import { merge, values, keyBy } from 'lodash'
import Translations from 'src/i18n'
import { Quasar } from 'quasar'

const lngModule = {
  namespaced: false,
  strict: true,
  state: {
    language: Quasar.lang, // Quasar BuiltIn Language
    quasarLanguages: languages, // Quasar BuiltIn Languages
    userTranslations: Translations,
    moduleLanguages: [
      { isoName: 'en-us', enabled: true, more: { flag: '🇺🇸', color: 'white' } },
      { isoName: 'ru', enabled: true, more: { flag: '🇷🇺', color: 'white' } },
      { isoName: 'he', enabled: true, more: { flag: '🇮🇱', color: 'white' } },
      { isoName: 'ar', enabled: true, more: { flag: '🇯🇴', color: 'white' } }
    ] // Module Languages - User can extend language properties
  },
  mutations: {
    SET_LANG (state, lang) {
      const storageName = config.get('localeName')
      state.language.set(lang && lang.default)
      const newLang = {
        ...merge(eval(state.language), eval(this.getters.currentUserLanguage), {
          messages: state.userTranslations[[lang.default.isoName]]
        })
      }
      state.language.set(newLang)
      if (config.storage().has(storageName)) {
        config.storage().remove(storageName)
      }
      config.storage().set(storageName, JSON.stringify(state.language))
    }
  },
  actions: {
    importLang ({ commit }, lang) {
      if (!lang) {
        console.error('bad lang', lang)
        return false
      }
      return import(
        /* webpackInclude: /[a-z]+\.js$/ */
        'quasar/lang/' + lang
      )
        .then(content => JSON.stringify(content))
        .then(content => JSON.parse(content))
        .then(lng => {
          commit('SET_LANG', lng)
          return lng
        })
    }
  },
  getters: {
    mergedLanguages (state, getters) {
      return values(
        merge(
          keyBy(state.quasarLanguages, 'isoName'),
          keyBy(state.moduleLanguages, 'isoName')
        ),
        'isoName'
      )
    },
    langList (state, getters) {
      // Languages Available <--
      return getters.mergedLanguages.filter(lng => lng.enabled === true)
    },
    languages (state, getters) {
      return getters.langList.filter(lng => lng.enabled === true)
    },
    currentUserLanguage (state, getters) {
      return getters.langList.find(lng => lng.isoName === Quasar.lang.isoName)
    },
    userTranslations (state) {
      return state.userTranslations
    },
    currentTranslation (state, getters) {
      return {
        ...{ messages: getters.userTranslations[[Quasar.lang.isoName]] }
      }
    },
    systemLanguages (state) {
      return state.quasarLanguages
    },
    language (state, getters) {
      return state.language
    }
  }
}

export default lngModule
