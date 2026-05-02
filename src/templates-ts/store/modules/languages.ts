/* eslint-disable no-eval */
const languages = require('quasar/lang/index.json')
const { merge, values, keyBy } = require('lodash')

import { config } from 'boot/init-waelio'
import Translations from 'src/i18n'
import { Quasar } from 'quasar'

const lngModule: any = {
    namespaced: false,
    strict: true,
    state: {
        language: Quasar.lang,
        quasarLanguages: languages,
        userTranslations: Translations,
        moduleLanguages: [
            { isoName: 'en-us', enabled: true, more: { flag: '🇺🇸', color: 'white' } },
            { isoName: 'ru', enabled: true, more: { flag: '🇷🇺', color: 'white' } },
            { isoName: 'he', enabled: true, more: { flag: '🇮🇱', color: 'white' } },
            { isoName: 'ar', enabled: true, more: { flag: '🇯🇴', color: 'white' } }
        ]
    },
    mutations: {
        SET_LANG(state: any, lang: any) {
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
        importLang({ commit }: { commit: Function }, lang: string) {
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
        mergedLanguages(state: any) {
            return values(
                merge(
                    keyBy(state.quasarLanguages, 'isoName'),
                    keyBy(state.moduleLanguages, 'isoName')
                ),
                'isoName'
            )
        },
        langList(state: any, getters: any) {
            return getters.mergedLanguages.filter((lng: any) => lng.enabled === true)
        },
        languages(state: any, getters: any) {
            return getters.langList.filter((lng: any) => lng.enabled === true)
        },
        currentUserLanguage(state: any, getters: any) {
            return getters.langList.find((lng: any) => lng.isoName === Quasar.lang.isoName)
        },
        userTranslations(state: any) {
            return state.userTranslations
        },
        currentTranslation(state: any, getters: any) {
            return {
                messages: getters.userTranslations[[Quasar.lang.isoName]]
            }
        },
        systemLanguages(state: any) {
            return state.quasarLanguages
        },
        language(state: any) {
            return state.language
        }
    }
}

export default lngModule
