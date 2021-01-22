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
        title: 'North West Meta | Our Services',
        description: 'Specializing production of Web Apps, Hybrid Apps & Native Apps. As well as Branding, SEO & Online Marketing.',
        url: 'https://northwestmeta.com/services',
        image: 'nwm_logo.png'
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