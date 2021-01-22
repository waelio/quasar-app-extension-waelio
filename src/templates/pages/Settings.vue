<template>
  <q-page padding class="q-gutter-md">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
        :label="$t('general.lightMode')"
      >
        <q-card>
          <q-card-section>
            <q-option-group
              inline
              v-model="mode"
              :options="modes"
              color="primary"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        expand-separator
        icon="language"
        :label="labels().LangTitle"
      >
        <q-card>
          <q-card-section>
            <q-select
              v-model="language"
              behavior="menu"
              :options="langOptions()"
              :label="$t('general.languages')"
              options-cover
              borderless
              emit-value
              map-options
              transition-show="flip-up"
              transition-hide="flip-down"
              class="full-width"
              style="min-width: 150px"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        expand-separator
        icon="cloud_download"
        :label="'v' + $store.getters.version + ' ' + $t('general.CheckUpdates')"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <q-btn
              ripple
              stretch
              icon="cloud_download"
              :class="$q.dark.isActive ? 'bg-secondary' : 'bg-primary'"
              text-color="white"
              :label="
                'v' + $store.getters.version + ' ' + $t('general.CheckUpdates')
              "
              @click="checkForUpdates"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>
<script>
/* eslint-disable no-template-curly-in-string */
import { Notify } from "quasar";
import LangMixin from "src/mixins/LangMixin";
import ModeMixin from "src/mixins/ModeMixin";
import { meta } from "waelio-utils";
export default {
  name: "SettingsPage",
  mixins: [LangMixin, ModeMixin],
  data() {
    return {
      store: this.$vault,
      metaTags: {
        title: `${this.$t("general.SiteTitle")} | ${this.$t("navigation.SettingsPageTitle")}`,
        description:"Specializing production of Web Apps, Hybrid Apps & Native Apps. As well as Branding, SEO & Online Marketing.",
        url: `https://${this.$t("general.SiteDomain")}}`,
        image: "nwm_logo.png"
      }
    };
  },
  meta,
  methods: {
    checkForUpdates() {
      Notify.create({
        message: this.$t("general.fetchingUpdates"),
        color: "warning",
        icon: "cloud_download",
        closeBtn: "Update",
        timeout: 10000,
        onDismiss() {
          location.reload(true);
        }
      });
    }
  }
};
</script>