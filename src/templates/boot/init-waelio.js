import WaelioMixin from "src/mixins/WaelioMixin";
import { waelioConfig } from 'src/utils/waelioConfig.js'
import * as storage from 'store2'

export default ({ app,store, Vue }) => {
  app.storage = storage;
  app.config = waelioConfig;

  store.$config = waelioConfig

  Vue.prototype.$config = waelioConfig;
  Vue.prototype.$storage = storage;

  Vue.mixin(WaelioMixin);
};
const config = waelioConfig
export { config, storage };