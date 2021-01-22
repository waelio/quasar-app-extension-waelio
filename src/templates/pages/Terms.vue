<template>
  <q-page padding class="fit scroll q-px-md" id="terms_page">
    <h1 class="text-h2"><strong>{{$t('navigation.TermsPageTitle')}}</strong></h1>
    <p class="text-justify">{{ $t('terms.caption') }}</p>
    <p class="text-justify">{{$t('terms.para1')}}</p>
    <p class="text-justify">{{$t('terms.para2')}}</p>
    <p class="text-justify">{{$t('terms.para3')}}</p>
    <h3><strong>{{$t('terms.Cookies')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para4')}}</p>
    <p class="text-justify">{{$t('terms.para5')}}</p>
    <h3><strong>{{$t('terms.Licence')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para6')}}</p>
    <p class="text-justify">{{$t('terms.para7')}}</p>
    <ul>
      <li>{{$t('terms.li1')}}</li>
      <li>{{$t('terms.li2')}}</li>
      <li>{{$t('terms.li3')}}</li>
      <li>{{$t('terms.li4')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para8')}}</p>
    <p class="text-justify">{{$t('terms.para9')}}</p>
    <p class="text-justify">{{$t('terms.para10')}}</p>
    <p class="text-justify">{{$t('terms.para11')}}</p>
    <ul>
      <li>{{$t('terms.li5')}}</li>
      <li>{{$t('terms.li6')}}</li>
      <li>{{$t('terms.li7')}}</li>
      <li>{{$t('terms.li8')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para12')}}</p>
    <h3><strong>{{$t('terms.para13')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para14')}}</p>
    <ul>
      <li>{{$t('terms.li9')}}</li>
      <li>{{$t('terms.li10')}}</li>
      <li>{{$t('terms.li11')}}</li>
      <li>{{$t('terms.li12')}}</li>
      <li>{{$t('terms.li13')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para17')}}</p>
    <p class="text-justify">{{$t('terms.para15')}}</p>
    <ul>
      <li>{{$t('terms.li14')}}</li>
      <li>{{$t('terms.li15')}}</li>
      <li>{{$t('terms.li16')}}</li>
      <li>{{$t('terms.li17')}}</li>
      <li>{{$t('terms.li18')}}</li>
      <li>{{$t('terms.li19')}}</li>
      <li>{{$t('terms.li20')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para16')}}</p>
    <p class="text-justify">{{$t('terms.para17')}}</p>
    <p class="text-justify">{{$t('terms.para18')}}</p>
    <p class="text-justify">{{$t('terms.para19')}}</p>
    <ul>
      <li>{{$t('terms.li21')}}</li>
      <li>{{$t('terms.li22')}}</li>
      <li>{{$t('terms.li23')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para20')}}</p>
    <h3><strong>{{$t('terms.iFrames')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para21')}}</p>
    <h3><strong>{{$t('terms.Liability')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para22')}}</p>
    <h3><strong>{{$t('terms.Reservation')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para23')}}</p>
    <h3><strong>{{$t('terms.Removal')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para24')}}</p>
    <p class="text-justify">{{$t('terms.para25')}}</p>
    <h3><strong>{{$t('terms.Disclaimer')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para26')}}</p>
    <ul>
      <li>{{$t('terms.li24')}}</li>
      <li>{{$t('terms.li25')}}</li>
      <li>{{$t('terms.li26')}}</li>
      <li>{{$t('terms.li27')}}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para27')}}</p>
    <p class="text-justify">{{$t('terms.para28')}}</p>
  </q-page>
</template>
<script>
/* eslint-disable no-template-curly-in-string */
const defaultName = 'TestApp'
const defaultUrl = 'TestApp.COM'
import { meta } from 'waelio-utils'
export default {
  name: 'Terms',
  props:{
    companyName:{
      type: String,
      default: defaultName
    },
    companyUrl: {
      type: String,
      default: defaultUrl
    }
  },
  data(){
    return {
      metaTags: {
        title: `${defaultName} | ${this.$t('navigation.TermsPageTitle')}`,
        description: 'Specializing production of Web Apps, Hybrid Apps & Native Apps. As well as Branding, SEO & Online Marketing.',
        url: `https://${app.$defaultUrl}`,
        image: 'nwm_logo.png'
      }
    }
  },
  meta
}
</script>
