import WaelioMixin from 'src/mixins/WaelioMixin'
import { waelioConfig } from 'src/utils/waelioConfig'

const storage = require('store2')

export default function ({ app, store, Vue }: { app: any, store: any, Vue: any }): void {
    app.storage = storage
    app.config = waelioConfig

    store.$config = waelioConfig

    Vue.prototype.$config = waelioConfig
    Vue.prototype.$storage = storage

    Vue.mixin(WaelioMixin)
}

const config = waelioConfig

export { config, storage }
