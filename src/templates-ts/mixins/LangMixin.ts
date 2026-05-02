'strict'

import { dom } from 'quasar'

const { isObject } = require('lodash')
const { ready } = dom

const LangMixin: Record<string, any> = {
    data() {
        return {
            localeName: this.$config.get('localeName')
        }
    },
    methods: {
        verifyLocale() {
            const configLocale = this.$config.get(`settings:${this.localeName}`)
            const isStorageLocale = this.$config.storage().has(this.localeName)

            if (isStorageLocale) {
                const storageLocale = this.$config.storage().get(this.localeName)
                const isoName = this.sniffIsoNameFrom(JSON.parse(storageLocale))

                if (this.isIsoName(isoName)) {
                    this.language = isoName
                    return true
                } else if (configLocale && this.isIsoName(configLocale)) {
                    this.language = configLocale
                    return true
                }
            } else {
                this.language = this.$q.lang.getLocale()
            }
        },
        updateBodyClass(needle: string) {
            ready(() => {
                this.languageKeys.forEach((lng: string) => {
                    document.querySelector('body')?.classList.remove(lng)
                    document.querySelector('body')?.classList.remove(lng.split('-')[0])
                })

                document.body.className += ` ${needle}`
                return true
            })
        },
        trimLang(lang: string) {
            return lang && JSON.parse(JSON.stringify(lang.split('-')[0]))
        },
        isNothing(payload: any) {
            switch (typeof payload) {
                case 'string':
                    return Boolean(!this.isIsoName(payload))
                case 'object':
                    return Boolean(!payload.isoName)
                default:
                    return true
            }
        },
        isIsoName(isoName: string) {
            return this.languageKeys.includes(isoName)
        },
        isNativeName(nativeName: string) {
            return this.languageNames.includes(nativeName)
        },
        sniffIsoNameFrom(payload: any) {
            if (!payload) {
                return false
            }

            const isoName =
                typeof payload === 'string' && this.isIsoName(payload)
                    ? payload
                    : isObject(payload) &&
                        payload.isoName &&
                        this.isIsoName(payload.isoName)
                        ? payload.isoName
                        : false

            return isoName
        },
        langOptions() {
            return this.languages.map((lang: any) => ({
                isoName: lang.isoName,
                nativeName: lang.nativeName
            }))
        }
    },
    computed: {
        language: {
            get: function () {
                return this.$store.getters.language
            },
            set: function (payload: any) {
                const gotLocale = this.$store.dispatch(
                    'importLang',
                    this.sniffIsoNameFrom(payload)
                )

                gotLocale
                    .then((content: any) => JSON.stringify(content))
                    .then((content: string) => JSON.parse(content))
                    .then((content: any) => {
                        if (content) {
                            this.$i18n.locale = content && content.default.isoName
                            this.updateBodyClass(content.default.isoName)
                            return content.default
                        }
                    })
                    .catch((error: unknown) => {
                        console.error('error', error)
                    })
            }
        },
        languages() {
            return this.$store.getters.languages
        },
        isoName() {
            return this.language.isoName
        },
        nativeName() {
            return this.language.nativeName
        },
        LangTitle() {
            return this.$t('general.setLocale') + ' -  ' + this.nativeName
        },
        ConfigInitialized() {
            return Boolean(Object.keys(this.$config.getAll()).length)
        },
        includedTranslations() {
            return {
                name: this.businessName,
                url: this.businessDomain
            }
        },
        configClient() {
            return this.$config.getItem('client')
        },
        businessName() {
            return this.$config.get('app:businessName')
        },
        businessDomain() {
            return this.$config.get('app:businessDomain')
        },
        labels() {
            return {
                LangSelect: this.$t('general.languages'),
                LangTitle: this.$t('general.setLocale') + ' -  ' + this.nativeName
            }
        },
        languageKeys() {
            return this.languages.map((lang: any) => lang.isoName)
        },
        languageNames() {
            return this.languages.map((lang: any) => lang.nativeName)
        },
        LangsLabel() {
            return this.$tc('general.languages')
        },
        isSavedLang() {
            return this.$config.storage().has('locale')
                ? JSON.parse(JSON.stringify(this.$config.storage().get('locale')))
                : false
        }
    }
}

export default LangMixin
