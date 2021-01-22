<template>
  <q-page padding class="fit scroll q-px-md" id="privacy_page">
    <h1 class="text-h3 text-wrap">{{$t('navigation.PrivacyPageTitle')}}</h1>
    <p class="text-justify">{{$t('privacy.p1')}}</p>
    <p class="text-justify">{{$t('privacy.p2')}}<span @click="openURL.open(`mailto:info@${app.$defaultUrl}?subjuct=EMail%20from%20${app.$defaultUrl}`)">{{$t('privacy.here')}}</span></p>
    <p class="text-justify">{{$t('privacy.p3')}}</p>
    <h2 class="text-h3">{{$t('privacy.consent')}}</h2>
    <p class="text-justify">{{$t('privacy.p4')}}</p>
    <h2 class="text-h3">{{$t('privacy.collect')}}</h2>
    <p class="text-justify">{{$t('privacy.p5')}}</p>
    <p class="text-justify">{{$t('privacy.p6')}}<span @click="openURL.open(`mailto:info@${app.$defaultUrl}?subjuct=EMail%20from%20${app.$defaultUrl}`)">{{$t('privacy.here')}}</span></p>
    <p class="text-justify">{{$t('privacy.p7')}}</p>
    <h2 class="text-h3">{{$t('privacy.how')}}</h2>
    <p class="text-justify">{{$t('privacy.p8')}}</p>
    <ul>
      <li>{{$tc('privacy.p8ul1')}}</li>
      <li>{{$tc('privacy.p8ul2')}}</li>
      <li>{{$tc('privacy.p8ul3')}}</li>
      <li>{{$tc('privacy.p8ul4')}}</li>
      <li>{{$tc('privacy.p8ul5')}}</li>
      <li>{{$tc('privacy.p8ul6')}}</li>
      <li>{{$tc('privacy.p8ul7')}}</li>
    </ul>
    <h2 class="text-h3">{{$tc('privacy.log')}}</h2>
    <p>{{$tc('privacy.p10')}}</p>
    <h2 class="text-h3">{{ $tc('privacy.Advertising')}}</h2>
    <p>{{ $tc('privacy.p11') }}</p>
    <p>{{ $tc('privacy.p12') }}</p>
    <p>{{ $tc('privacy.p13') }}</p>
    <h2 class="text-h3">{{ $tc('privacy.third') }}</h2>
   <p>{{ $tc('privacy.p14') }}</p>
   <p>{{ $tc('privacy.p15') }}</p>
    <h2 class="text-h3">{{ $tc('privacy.ccpa') }}</h2>
    <p>{{ $tc('privacy.p16') }}</p>
    <p>{{ $tc('privacy.p17') }}</p>
    <p>{{ $tc('privacy.p18') }}</p>
    <p>{{ $tc('privacy.p19') }}</p>
    <p>{{ $tc('privacy.p20') }}</p>
    <h2 class="text-h3">{{ $tc('privacy.gdpr') }}</h2>
    <p>{{ $tc('privacy.p21') }}</p>
    <p>{{ $tc('privacy.p22') }}</p>
    <p>{{ $tc('privacy.p23') }}</p>
    <p>{{ $tc('privacy.p24') }}</p>
    <p>{{ $tc('privacy.p25') }}</p>
    <p>{{ $tc('privacy.p26') }}</p>
    <p>{{ $tc('privacy.p27') }}</p>
    <p>{{ $tc('privacy.p28') }}</p>
    <h2 class="text-h3">{{ $tc('privacy.children') }}</h2>
    <p>{{ $tc('privacy.p29') }}</p>
    <p>{{ $tc('privacy.p30') }}</p>
  </q-page>
</template>
<script>
/* eslint-disable no-template-curly-in-string */
import { meta } from 'waelio-utils'
// import { openURL } from 'quasar'
const defaultName = 'TestApp'
const defaultUrl = 'TestApp.COM'
export default {
  name: 'Privacy',
  props: {
    companyName: {
      type: String,
      default: defaultName
    },
    companyUrl: {
      type: String,
      default: defaultUrl
    }
  },
  data () {
    return {
      metaTags: {
        title: `${defaultName} | ${this.$t('navigation.PrivacyPageTitle')}`,
        description: 'Specializing production of Web Apps, Hybrid Apps & Native Apps. As well as Branding, SEO & Online Marketing.',
        // url: `https://${app.$defaultUrl}`,
        image: 'nwm_logo.png'
      }
    }
  },
  meta
}
</script>
