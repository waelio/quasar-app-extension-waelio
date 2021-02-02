import Vue from "vue";
import Vuex from "vuex";
import packJson from "../../package.json";
import services from "./modules/services";
import lngModule from "./modules/languages";
import navModule from './modules/navigation'
Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      Package: packJson
    },
    modules: {
      services,
      lngModule,
      navModule
    },
    getters: {
      Site(state) {
        return {
          productName: state.Package.productName,
          description: state.Package.description,
          version: state.Package.version
        };
      }
    },
    strict: process.env.DEBUGGING
  });

  return Store;
}
