export default {
  namespaced: false,
  state: {
    language: { key: "en", value: "English", label: "English", direction: "ltr" },
    languages: [
      { key: "en", value: "English", label: "English", direction: "ltr" },
      { key: "ru", value: "русский", label: "русский", direction: "ltr" },
      { key: "he", value: "עברית", label: "עברית", direction: "rtl" },
      { key: "ar", value: "العربية", label: "العربية", direction: "rtl" }
    ]
  },
  mutations: {
    setLanguage(state, language){
      state.language = language
    },
    addLanguage(state, language){ 
      state.languages.push(language)
    },
    delLanguage(state, langKey){ 
      if(state.languages[key]) {
        del state.languages[key]
      }
    }
  },
  getters: {
    language(state){ return state.language}
    languages(state){ return state.languages}
  }
}