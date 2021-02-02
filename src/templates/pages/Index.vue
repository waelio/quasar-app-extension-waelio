<template>
  <q-page class="flex flex-center column justify-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >     -->

    <q-btn
      v-for="color in colors"
      :key="color"
      rounded
      dark
      class="text-white q-mx-auto q-my-sm"
      :color="color"
      >{{ color }}</q-btn
    >
    
  </q-page>
</template>
<script>
import { meta, snakeToCamel } from "waelio-utils";
export default {
  name: "PageIndex",
  data() {
    return {
      colors: [
        "primary",
        "secondary",
        "accent",
        "dark",
        "positive",
        "negative",
        "info",
        "warning"
      ],
      metaTags: {
        title: `${this.$config.get("app:businessName")} | ${this.$t(
          "navigation.HomePageTitle"
        )}`,
        description: this.$config.get("app:businessDescription"),
        url: this.$config.get("app:businessDomain"),
        image: this.$config.get("app:businessImage")
      }
    };
  },
  meta,
  methods:{
    snakeToCamel
  }
};
</script>
<style lang="scss"></style>
