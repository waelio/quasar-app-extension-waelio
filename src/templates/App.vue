<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { meta } from "waelio-utils";
import LangMixin from "src/mixins/LangMixin";
import ModeMixin from "src/mixins/ModeMixin";
import googleOneTap from "src/Utils/google-one-tap";
export default {
  name: 'App',
  mixins: [LangMixin, ModeMixin],
  mounted() {
    this.verifyLocale();
    this.verifyMode();
    let { google } = this.$vault.getClientVars().default.Credentials;
    this.$vault.set("google", google)
    const options = {
      client_id: google.clientId, // required
      auto_select: true, // optional
      cancel_on_tap_outside: false
    };
    googleOneTap(options, payload => {
      console.log(payload);
      this.$store.dispatch("updateUser", payload);
    });
  },
  data(){
    return {
      metaTags: {
        title: this.$t('general.SiteTitle'),
        description: 'Specializing production of Web Apps, Hybrid Apps & Native Apps. As well as Branding, SEO & Online Marketing.',
        url: 'https://' + this.app.$defaultUr,
        image: 'nwm_logo.png'
      }
    }
  },
  meta
}
</script>
