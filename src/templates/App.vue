<template>
  <div id="q-app">
    <router-view />
    <DeBugger />
  </div>
</template>
<script>
import { meta} from "waelio-utils";
import DeBugger from "./components/DeBugger";
export default {
  components: { DeBugger },
  name: "App",
  mounted() {
    this.verifyLocale();
    this.verifyMode();
  },
  data() {
    return {
      metaTags: {
        title: this.$config.get("app:businessName"),
        description:this.$config.get("app:businessDescription"),
        url: this.$config.get("app:businessDomain"),
        image: this.$config.get("app:businessImage")
      },
      meta
    };
  },
  computed: {
    listeners() {
      return this.$listeners;
    }
  }
};
</script>
