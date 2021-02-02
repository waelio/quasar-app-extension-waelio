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
              v-model="currentMode"
              :options="modesLabelOptions"
              :color="$q.dark.isActive ? 'secondary' : 'primary'"
              :dark="$q.dark.isActive"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        expand-separator
        icon="language"
        :label="labels.LangTitle"
      >
        <q-card>
          <q-card-section>
            <lang-select>
              <q-tooltip>
                {{ $t("general.languages") }}
              </q-tooltip>
            </lang-select>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <q-expansion-item
        expand-separator
        icon="cloud_download"
        :label="
          'v' + $store.getters.Site.version + ' ' + $t('general.CheckUpdates')
        "
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
import LangSelect from "components/LangSelect";
import { meta } from "waelio-utils";
export default {
  name: "SettingsPage",
  components: { "lang-select": LangSelect },
  data() {
    return {
      store: this.$vault,
      metaTags: {
        title: `${this.$config.get("client:app:businessName")} | ${this.$t(
          "navigation.SettingsPageTitle"
        )}`,
        description:this.$config.get("client:app:businessDescription"),
        url: this.$config.get("client:app:businessDomain"),
        image: this.$config.get("client:app:businessImage")
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
          location.reload();
        }
      });
    }
  }
};
</script>
