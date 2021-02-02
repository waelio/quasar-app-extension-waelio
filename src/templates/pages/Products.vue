<template>
  <q-page padding class="flex flex-center flex-col">
    <h1 class="text-center text-h2 q-mx-auto text-wrap full-width q-px-sm">{{ $t('navigation.ProductsPageTitle') }}</h1>
  </q-page>
</template>
<script>
import { meta } from 'waelio-utils'
export default {
  name: 'Products',
    data(){
    return {
      metaTags: {
        title: `${this.$config.get("app:businessName")} | ${this.$t('navigation.ProductsPageTitle')}`,
        description:this.$config.get("app:businessDescription"),
        url: this.$config.get("app:businessDomain"),
        image: this.$config.get("app:businessImage")
      }
    }
  },
  meta
}
</script>
<style>
</style>