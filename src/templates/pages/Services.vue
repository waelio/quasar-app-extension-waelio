<template>
  <q-page padding class="q-gutter-md q-mb-xl"  style="height:1000px">
    <h1 class="text-center text-h2 q-mx-auto q-my-sm text-wrap full-width q-px-sm">{{$t('general.Services')}}</h1>
    <service v-for="(service,i) in services" :key="i" :name="service.name" class="q-my-lg q-px-md" :Service="service" />
  </q-page>
</template>
<script>
import { meta } from 'waelio-utils'
import ServiceComponent from 'src/components/ServiceComponent'
import { mapGetters } from 'vuex'
export default {
  name: 'Services',
  components: {
    'Service':ServiceComponent
  },
  data(){
    return {
      autoplay: 5000,
      slide: 'Branding',      
      metaTags: {
        title: `${this.$config.get("app:businessName")} | ${this.$t('navigation.ServicesPageTitle')}`,
        description:this.$config.get("app:businessDescription"),
        url: this.$config.get("app:businessDomain"),
        image: this.$config.get("app:businessImage")
      }
    }
  },  
  meta,
  computed: {
    ...mapGetters( 'services',['services'])
  }
}
</script>

<style>
</style>