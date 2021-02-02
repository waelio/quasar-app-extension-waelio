<template>
  <q-page padding class="flex flex-start justify-around">
    <h1 class="text-center text-h2 q-mt-md q-mb-xs text-wrap full-width">{{ $t("navigation.AboutPageTitle") }}</h1>
    <section>
      <p class="text-h6 text-justify q-px-sm">
        {{$t('about.para1',this.includedTranslations)}}
      </p>
    </section>
  </q-page>
</template>
<script>
import { meta } from 'waelio-utils'
export default {
  name: "AboutUs",
  data() {
    return {
      metaTags: {
        title: `${this.$config.get("app:businessName")} | ${this.$t('navigation.AboutPageTitle')}`,
        description:this.$config.get("app:businessDescription"),
        url: this.$config.get("app:businessDomain"),
        image: this.$config.get("app:businessImage")
      }
    };
  },
  meta
};
</script>
