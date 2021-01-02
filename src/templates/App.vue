<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { meta } from 'waelio-utils'
export default {
  name: 'App',
  beforeUpdate(){
    const TestMode = JSON.parse(this.$q.localStorage.getItem('darkMode'))
    if(!TestMode){
      this.$q.localStorage.set('darkMode', JSON.stringify('auto'))
    }
    else {
      this.$q.dark.set(TestMode)
    }
    const TestLocale = JSON.parse(this.$q.localStorage.getItem('locale'))
    if(!TestLocale){
      this.$q.localStorage.set('locale', JSON.stringify('en'))
    }
    else if(TestLocale && Object.keys(TestLocale).length && TestLocale.key){
      this.$i18n.locale = TestLocale.key
      this.$store.getters.languages.forEach( lng => {
        document.querySelector('body').classList.remove(lng.key)
      })
      document.body.className += ' '+ TestLocale.key
    }
  },
  data(){
    return {
      metaTags: {
        title: 'Test_App',
        description: 'Specializing production of Web Apps, Hybrid Apps & Native Apps. As well as Branding, SEO & Online Marketing.',
        url: 'https://TestApp.COM',
        image: 'nwm_logo.png'
      }
    }
  },
  meta
}
</script>
