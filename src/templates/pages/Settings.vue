
<template>
  <q-page padding class="q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="flex flex-row">
        <div class="q-py-md full-width text-center text-bold text-h5">
          {{ $t("general.setLocale") }}
        </div>
        <q-select
          v-model="language"
          behavior="menu"
          :options="languages"
          option-value="item.key"
          options-cover
          :label="$t('general.languages')"
          label-slot
          borderless
          emit-value
          map-options
          transition-show="flip-up"
          transition-hide="flip-down"
          class="full-width"
          style="min-width: 150px"
        />
      </q-card-section>
      <q-separator />
      <q-card-actions vertical align="center">
        <div class="q-py-md full-width text-center text-bold text-h5">
          {{ $t("general.lightMode") }}
        </div>
        <q-option-group inline v-model="mode" :options="modes" color="primary" />
      </q-card-actions>
      <q-separator />
      <q-card-actions vertical align="center" class="q-py-md">
        <q-btn
          ripple
          stretch
          icon="cloud_download"
          :class="$q.dark.isActive ? 'bg-secondary' : 'bg-primary'"
          text-color="white"
          :label="'v' + $store.getters.version + ' ' + $t('general.CheckUpdates')"
          @click="checkForUpdates"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>
<script>
/* eslint-disable no-template-curly-in-string */
import { Notify } from "quasar";
import { mapGetters } from "vuex";
export default {
  name: "SettingsPage",
  props:{
    companyName:{
      type: String,
      required: true,
      default: 'NorthWestMeta'
    },
    companyUrl: {
      type: String,
      required: true,
      default: 'northwestmeta.com'
    }
  },
  data() {
    return {
      mode: JSON.parse(this.$q.localStorage.getItem("darkmode")),
      language: JSON.parse(this.$q.localStorage.getItem("locale")) || (this.languages && this.languages[0]),
      rss: "",
      metaTags: {
        title: `${this.companyName} | ${$t('navigation.TermsPageTitle')}`,
        description: 'Specializing production of Web Apps, Hybrid Apps & Native Apps. As well as Branding, SEO & Online Marketing.',
        url: `https://${this.companyUrl}`,
        image: 'nwm_logo.png'
      }
    };
  },
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
        },
      });
    },
  },
  computed: {
    ...mapGetters(["languages"]),
    modes() {
      return [
        { value: "dark", label: this.$t("general.dark") },
        { value: "light", label: this.$t("general.light") },
        { value: "auto", label: this.$t("general.auto") },
      ];
    },
    currentMode() {
      return JSON.parse(this.$q.localStorage.getItem("darkmode"));
    },
  },
  watch: {
    language(locale) {
      this.$q.localStorage.set("locale", JSON.stringify(locale));
      this.$i18n.locale = locale.key;
    },
    mode(newMode) {
      switch (newMode) {
        case "dark":
          this.$q.dark.set(true);
          this.$q.localStorage.set("darkmode", JSON.stringify(true));
          break;
        case "light":
          this.$q.dark.set(false);
          this.$q.localStorage.set("darkmode", JSON.stringify(false));
          break;
        case "auto":
          this.$q.dark.set("auto");
          this.$q.localStorage.set("darkmode", JSON.stringify("auto"));
          break;
        default:
          this.$q.dark.set("auto");
          break;
      }
    },
    currentMode(mode) {
      if (!mode) {
        this.$q.localStorage.set("darkmode", JSON.stringify("auto"));
      }
    },
  },
  I18n: {
    messages: {
      en:{
        general:{
          Home:"Home",
          SiteTitle: `${this.companyName}`,
          CurrentVersion: "Current Version",
          setLocale:"Set Default Language",
          CheckUpdates:"Fetch Updates",
          Services:"Services",
          fetchingUpdates:"Get Updates",
          languages:"Languages",
          dark:"dark",
          light:"light",
          auto:"auto",
          lightMode:"Change Light Mode"
        },
      },
      ru:{
        general: {
          Home: "Домой",
          SiteTitle: `${this.companyName}`,      
          CurrentVersion: "Текущая версия",
          setLocale: "Задать язык по умолчанию",
          CheckUpdates: "Загрузить обновления",
          Services: "Услуги",
          fetchingUpdates: "Получить обновления",
          languages: "Языки",
          dark: "темный",
          light: "Лёгкая",
          auto: "автоматически",
          lightMode: "Изменить режим света"
        },
      },
      ar:{
        general: {
          Home: "الصفحة الرئيسية",
          SiteTitle: "شمال غرب ميتا",
          CurrentVersion: "النسخة الحالية",
          setLocale: "تحديد اللغة المفترضة",
          CheckUpdates: "احضار التعديلات",
          Services: "الخدمات",
          fetchingUpdates: "الحصول على التحديثات",
          languages: "اللغات",
          dark: "الظلام",
          light: "ضوء",
          auto: "آلي",
          lightMode: "تغيير نمط الاضاءة"
        },
      },
      he:{  
        general: {
          Home: "בית",
          SiteTitle: "צפון מערב Meta",
          CurrentVersion: "גרסה נוכחית",
          setLocale: "הגדרת ' שפת ברירת מחדל '",
          CheckUpdates: "השגת עדכונים",
          Services: "שירותים",
          fetchingUpdates: "קבלת עדכונים",
          languages: "שפות",
          dark: "אפל",
          light: "אור",
          auto: "אוטומטי",
          lightMode: "שינוי מצב אור"
        },
      }
    }
  }
};
</script>

<style></style>
