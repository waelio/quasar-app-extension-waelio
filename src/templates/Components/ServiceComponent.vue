<template>
  <q-parallax :speed="0.5" :height="250" class="paralax_image" v-if="Service">
    <template v-slot:media>
      <img 
        :src="imageSrc" 
        :alt="Service.description"

        contain
      >
    </template>
    <div class="q-pa-sm bg-white rounded-borders" style="opacity:.7">
      <div class="text-h3 text-center text-primary">{{ $t(translateService(Service.name)) }}</div>
      <div class="text-h4 text-center text-primary">{{ $t(translateService((Service.description))) }}</div>
    </div>
  </q-parallax>
</template>
<script>
export default {
  name: 'ServiceComponent',
  props: ['Service'],
  computed: {
    imageSrc(){
      return this.Service && this.Service.image ? `https://northwestmeta.com/img/${this.Service.image}`:'https://cdn.quasar.dev/img/parallax1.jpg'
    },
  },
  methods: {
    translateService(payload){
      return `services.${payload}`
    }
  }
}
</script>
<style lang="scss">
 .service-card{
   width: 100%;
 }

</style>