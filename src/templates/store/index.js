import Vue from "vue"
import Vuex from "vuex"
import packJson from "../../package.json"
Vue.use(Vuex)

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      Package: packJson,
      langList: [
        { key: "en", value: "English",   label: "English",  direction: 'ltr'},
        { key: "ru",    value: "русский",   label: "русский",  direction: 'ltr' },
        { key: "he",    value: "עברית",     label: "עברית",   direction: 'rtl' },
        { key: "ar",    value: "العربية",   label: "العربية", direction: 'rtl' }
      ],
      linksData: [
        // {
        //   title: 'navigation.AuthPageTitle',
        //   caption: 'navigation.AuthPageCaption',
        //   icon: 'admin_panel_settings',
        //   link: '/auth'
        // },
        {
          title: 'navigation.AboutPageTitle',
          caption: 'navigation.AboutPageCaption',
          icon: 'store',
          link: '/about'
        },
        {
          title: 'navigation.ContactPageTitle',
          caption: 'navigation.ContactPageCaption',
          icon: 'contact_page',
          link: '/contact'
        },
          {
          title: 'navigation.TermsPageTitle',
          caption: 'navigation.TermsPageCaption',
          icon: 'description',
          link: '/terms'
        },
        {
          title: 'navigation.PrivacyPageTitle',
          caption: 'navigation.PrivacyPageCaption',
          icon: 'policy',
          link: '/privacy'
        },
        {
          title: 'navigation.SettingsPageTitle',
          caption: 'navigation.SettingsPageCaption',
          icon: 'settings',
          link: '/settings'
        }
      ]
    },
    modules: { },
    getters: {
      version(state) {
        return state.Package.version
      },
      languages(state){
        return state.langList
      },
      linksData(state){
        return state.linksData
      }
    },
    strict: process.env.DEBUGGING
  })

  return Store
}
