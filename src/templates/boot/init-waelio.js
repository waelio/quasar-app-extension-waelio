import Vue from "vue";
import * as storage from 'store2'

import WaelioMixin from "src/mixins/WaelioMixin";
import waelioConfig from 'src/utils/waelioConfig'


export default ({ app, Vue }) => {
  app.storage = storage;
  app.config = waelioConfig;

  Vue.prototype.$config = waelioConfig;
  Vue.prototype.$storage = storage;

  Vue.mixin(WaelioMixin);

};
const config = waelioConfig
export { config, storage };