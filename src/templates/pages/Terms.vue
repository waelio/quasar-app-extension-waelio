<template>
  <q-page padding class="fit scroll q-px-md" id="terms_page">
    <h1 class="text-h2"><strong>{{$t('navigation.TermsPageTitle')}}</strong></h1>
    <p class="text-justify">{{ $t('terms.caption', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para1', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para2', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para3', this.includedTranslations ) }}</p>
    <h3><strong>{{$t('terms.Cookies')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para4', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para5', this.includedTranslations ) }}</p>
    <h3><strong>{{$t('terms.Licence')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para6', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para7', this.includedTranslations ) }}</p>
    <ul>
      <li>{{$t('terms.li1', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li2', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li3', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li4', this.includedTranslations ) }}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para8', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para9', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para10', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para11', this.includedTranslations ) }}</p>
    <ul>
      <li>{{$t('terms.li5', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li6', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li7', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li8', this.includedTranslations ) }}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para12', this.includedTranslations ) }}</p>
    <h3><strong>{{$t('terms.para13')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para14', this.includedTranslations ) }}</p>
    <ul>
      <li>{{$t('terms.li9', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li10', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li11', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li12', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li13', this.includedTranslations ) }}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para17', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para15', this.includedTranslations ) }}</p>
    <ul>
      <li>{{$t('terms.li14', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li15', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li16', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li17', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li18', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li19', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li20', this.includedTranslations ) }}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para16', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para17', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para18', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para19', this.includedTranslations ) }}</p>
    <ul>
      <li>{{$t('terms.li21', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li22', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li23', this.includedTranslations ) }}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para20', this.includedTranslations ) }}</p>
    <h3><strong>{{$t('terms.iFrames')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para21', this.includedTranslations ) }}</p>
    <h3><strong>{{$t('terms.Liability')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para22', this.includedTranslations ) }}</p>
    <h3><strong>{{$t('terms.Reservation')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para23', this.includedTranslations ) }}</p>
    <h3><strong>{{$t('terms.Removal')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para24', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para25', this.includedTranslations ) }}</p>
    <h3><strong>{{$t('terms.Disclaimer')}}</strong></h3>
    <p class="text-justify">{{$t('terms.para26', this.includedTranslations ) }}</p>
    <ul>
      <li>{{$t('terms.li24', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li25', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li26', this.includedTranslations ) }}</li>
      <li>{{$t('terms.li27', this.includedTranslations ) }}</li>
    </ul>
    <p class="text-justify">{{$t('terms.para27', this.includedTranslations ) }}</p>
    <p class="text-justify">{{$t('terms.para28', this.includedTranslations ) }}</p>
  </q-page>
</template>
<script>
import { meta } from "waelio-utils";
export default {
  name: 'Terms',
  data(){
    return {
      metaTags: {
        title: `${this.$config.get("client:app:businessName")} | ${this.$t('navigation.TermsPageTitle')}`,
        description:this.$config.get("client:app:businessDescription"),
        url: this.$config.get("client:app:businessDomain"),
        image: this.$config.get("client:app:businessImage")
      }
    }
  },
  meta,
  computed:{

  }
}
</script>
