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
        title: 'North West Meta | Our Products',
        description: 'Specializing production of Web Apps, Hybrid Apps & Native Apps. As well as Branding, SEO & Online Marketing.',
        url: 'https://northwestmeta.com/products',
        image: 'nwm_logo.png'
      }
    }
  },
  meta
}
</script>

<style>
</style>