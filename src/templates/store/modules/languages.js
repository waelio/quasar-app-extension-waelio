import languages from "quasar/lang/index.json";
import { uniq, values, merge, keyBy, reject, find, findIndex } from 'lodash'

const langBase = [
  {isoName: "en-us",  flag:'🇺🇸' ,isRTL: false}, 
  {isoName: "ru",     flag:'🇷🇺' ,isRTL: false},
  {isoName: "he",     flag:'🇮🇱' ,isRTL: true},
  {isoName: "ar",     flag:'🇯🇴' ,isRTL: true} 
]
const langBaseCopy = uniq(values(merge( keyBy(languages,'isoName'), keyBy(langBase, 'isoName')),'isoName'))
const lngModule = {
  namespaced: false,
  state: {
    sysLangs: languages,
    myLanguages:langBase,
    langList: reject(langBaseCopy, function (cop){ return find(langBase, cop.flag )})
  },
  mutations: {
    fillLanguages(state, payload){
      console.log('payload', payload)
      const I = findIndex(state.langList, payload.key)
      console.log('state.langList[I]', state.langList[I])
      state.langList[I] = payload.value
    }
  },
  getters: {
      languages(state){
        return state.langList
      },
      myLanguages(state){
        return state.myLanguages
      },
      systemLanguages(state){
        return state.sysLangs
      }
    },
}


export default lngModule