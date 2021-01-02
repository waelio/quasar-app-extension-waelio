<template>
  <q-page padding class="flex flex-start justify-around">
    <h1 class="text-center text-h2 q-mt-md q-mb-xs text-wrap full-width">{{ $t("navigation.AboutPageTitle") }}</h1>
    <section>
      <p class="text-h6 text-justify q-px-sm">
        {{$t('about.para1')}}
      </p>
    </section>
  </q-page>
</template>
<script>
/* eslint-disable no-template-curly-in-string */
import { meta } from 'waelio-utils'
export default {
  name: "AboutUs",
  data() {
    return {
      metaTags: {
        title: "Test_App | About US",
        description:
          "Specializing production of Web Apps, Hybrid Apps & Native Apps. As well as Branding, SEO & Online Marketing.",
        url: "https://TestApp.COM/about",
        image: "nwm_logo.png"
      }
    };
  },
  meta
};
</script>
