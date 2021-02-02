<template>
  <q-page padding class="fit scroll q-px-md" id="privacy_page">
    <h1 class="text-h3 text-wrap">{{ $t("navigation.PrivacyPageTitle")}}</h1>
    <p class="text-justify">
      {{ $t("privacy.p1", this.includedTranslations) }}
    </p>
    <p class="text-justify">
      {{ $t("privacy.p2", this.includedTranslations)
      }}<span
        @click="
          openURL.open(`mailto:info@${url}?subjuct=EMail%20from%20${url}`)
        "
        >{{ $t("privacy.here", this.includedTranslations) }}</span
      >
    </p>
    <p class="text-justify">
      {{ $t("privacy.p3", this.includedTranslations) }}
    </p>
    <h2 class="text-h3">
      {{ $t("privacy.consent", this.includedTranslations) }}
    </h2>
    <p class="text-justify">
      {{ $t("privacy.p4", this.includedTranslations) }}
    </p>
    <h2 class="text-h3">
      {{ $t("privacy.collect", this.includedTranslations) }}
    </h2>
    <p class="text-justify">
      {{ $t("privacy.p5", this.includedTranslations) }}
    </p>
    <p class="text-justify">
      {{ $t("privacy.p6", this.includedTranslations)
      }}<span
        @click="
          openURL.open(`mailto:info@${url}?subjuct=EMail%20from%20${url}`)
        "
        >{{ $t("privacy.here", this.includedTranslations) }}</span
      >
    </p>
    <p class="text-justify">
      {{ $t("privacy.p7", this.includedTranslations) }}
    </p>
    <h2 class="text-h3">{{ $t("privacy.how", this.includedTranslations) }}</h2>
    <p class="text-justify">
      {{ $t("privacy.p8", this.includedTranslations) }}
    </p>
    <ul>
      <li>{{ $tc("privacy.p8ul1", this.includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul2", this.includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul3", this.includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul4", this.includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul5", this.includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul6", this.includedTranslations) }}</li>
      <li>{{ $tc("privacy.p8ul7", this.includedTranslations) }}</li>
    </ul>
    <h2 class="text-h3">{{ $tc("privacy.log", this.includedTranslations) }}</h2>
    <p>{{ $tc("privacy.p10", this.includedTranslations) }}</p>
    <h2 class="text-h3">
      {{ $tc("privacy.Advertising", this.includedTranslations) }}
    </h2>
    <p>{{ $tc("privacy.p11", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p12", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p13", this.includedTranslations) }}</p>
    <h2 class="text-h3">{{ $tc("privacy.third", this.includedTranslations) }}</h2>
    <p>{{ $tc("privacy.p14", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p15", this.includedTranslations) }}</p>
    <h2 class="text-h3">{{ $tc("privacy.ccpa", this.includedTranslations) }}</h2>
    <p>{{ $tc("privacy.p16", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p17", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p18", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p19", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p20", this.includedTranslations) }}</p>
    <h2 class="text-h3">{{ $tc("privacy.gdpr", this.includedTranslations) }}</h2>
    <p>{{ $tc("privacy.p21", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p22", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p23", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p24", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p25", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p26", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p27", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p28", this.includedTranslations) }}</p>
    <h2 class="text-h3">{{ $tc("privacy.children", this.includedTranslations) }}</h2>
    <p>{{ $tc("privacy.p29", this.includedTranslations) }}</p>
    <p>{{ $tc("privacy.p30", this.includedTranslations) }}</p>
  </q-page>
</template>
<script>
import { meta } from "waelio-utils";
// import { openURL } from 'quasar'
export default {
  name: "Privacy",
  data() {
    return {
      metaTags: {
        title: `${this.$config.get("client:app:businessName")} | ${this.$t("navigation.PrivacyPageTitle")}`,
        description:this.$config.get("client:app:businessDescription"),
        url: this.$config.get("client:app:businessDomain"),
        image: this.$config.get("client:app:businessImage")
      }
    };
  },
  meta
};
</script>
