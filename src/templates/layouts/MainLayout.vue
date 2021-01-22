<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      :class="$q.dark.isActive ? 'bg-dark' : 'bg-primary'"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          v-if="$q.platform.is.mobile"
        />
        <q-separator dark vertical inset v-if="$q.platform.is.mobile" />
        <q-toolbar-title
          @click="$router.push('/', () => {})"
          class="cursor-pointer"
        >
          {{ $t("general.SiteTitle") }}
          <q-tooltip>
          {{ $t("general.SiteTitle") }}
        </q-tooltip>
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="settings_brightness"
          aria-label="Menu"
          @click="$q.dark.toggle()"
        >
        <q-tooltip>
          {{$t('general.lightMode')}}
        </q-tooltip>
        </q-btn>
        <q-fab
          v-model="fab2"
          vertical-actions-align="left"
          :color="$q.dark.isActive ? 'secondary' : 'primary'"
          padding="sm"
          icon="lock_open"
          direction="down"
          v-touch-pan.prevent.mouse="moveFab"
          title="Authenticate"
        >
          <q-fab-action
            padding="3px"
            external-label
            color="primary"
            @click="onClick"
            icon="fab fa-facebook"
            label="Facebook"
          />
          <q-fab-action
            padding="3px"
            external-label
            color="red"
            @click="onClick"
            icon="fab fa-google"
            label="Google"
          />
          <q-fab-action
            padding="3px"
            external-label
            color="grey-7"
            @click="onClick"
            icon="fab fa-apple"
            label="Apple"
          />  
        </q-fab>
      </q-toolbar>
      <q-toolbar class="text-white" v-if="$q.platform.is.desktop" >
        <q-tabs
          v-model="tab"
          stretch
          inline-label
          narrow-indicator
          align="center"
          :class="$q.dark.isActive ? 'bg-secondary' : 'bg-primary'"
        >
          <q-tab
            v-for="link in linksData"
            v-show="!link.disabled"
            :key="link.link"
            :name="link.link"
            :icon="link.icon"
            :label="$t(link.title)"
          ><q-tooltip>{{$t(link.title)}}</q-tooltip></q-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-if="$q.platform.is.mobile"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :side="langDirection"
      :breakpoint="500"
      :class="$q.dark.isActive ? 'bg-secondary' : 'bg-primary'"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item-label header class="text-grey-8">
            {{ $t("general.navigationLinks") }}
          </q-item-label>
          <EssentialLink
            v-for="link in linksData"
            :key="link.title"
            v-bind="link"
          />
          <EssentialLink
            v-for="link in linksBasics"
            :key="link.title"
            v-bind="link"
          />
          <LanguageSwitcher @CloseLeftDrawer="UpdateDrawerStatus" />
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-footer
      v-model="footer"
      v-if="$q.platform.is.desktop"
      reveal
      elevated
      bordered
      :class="$q.dark.isActive ? 'bg-secondary' : 'bg-primary'"
    >
      <q-toolbar class="text-primary">
        <q-toolbar-title class="text-white">
          {{ $t("general.SiteTitle") }}
        </q-toolbar-title>
        <q-btn
          class="text-body2 text-grey-2 q-pa-xs"
          v-for="link in linksBasics"
          v-show="!link.disabled"
          :key="link.title"
          :to="link.link"
          :icon="link.icon"
          size="xs"
          dense
        >
          <q-tooltip>
            {{ $t(link.title) }}
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import EssentialLink from "components/EssentialLink";
import LanguageSwitcher from "components/LanguageSwitcher";
import { mapGetters } from "vuex";
import { meta } from "waelio-utils";
export default {
  name: "MainLayout",
  components: { EssentialLink, LanguageSwitcher },
  data() {
    return {
      fab2: false,
      fabPos: [18, 18],
      draggingFab: false,
      tab: "/",
      footer: "",
      leftDrawerOpen: false,
      lngDirections: [{}]
    };
  },
  meta,
  methods: {
    UpdateDrawerStatus(value) {
      this.leftDrawerOpen = value;
    },
    onClick() {
      console.log("Clicked on a fab action");
    },
    moveFab(ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true;

      this.fabPos = [this.fabPos[0] + ev.delta.x, this.fabPos[1] + ev.delta.y];
    }
  },
  computed: {
    ...mapGetters(["linksData","Site", "linksBasics", "languages"]),
    langDirection() {
      let res;
      this.languages.forEach(language => {
        if (language.key === this.$i18n.locale) {
          res = language.direction[0] === "l" ? "left" : "right";
        }
      });
      return res;
    }
  },
  watch: {
    tab(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    }
  }
};
</script>