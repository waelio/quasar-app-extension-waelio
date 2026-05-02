import Vue from 'vue'
import Vuex from 'vuex'

import services from './modules/services'
import lngModule from './modules/languages'
import navModule from './modules/navigation'

const packJson = require('../../package.json')

Vue.use(Vuex)

export default function () {
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
            Site(state: any) {
                return {
                    productName: state.Package.productName,
                    description: state.Package.description,
                    version: state.Package.version
                }
            }
        },
        strict: Boolean(process.env.DEBUGGING)
    })

    return Store
}
