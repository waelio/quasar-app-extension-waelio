<template>
  <q-layout view="hHh LpR fFf" ref="layout" id="main-layout">
    <q-header
      elevated
      :class="$q.dark.isActive ? 'bg-accent' : 'bg-primary'"
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
          {{ siteT }}
          <q-tooltip>
            {{ siteT }}
          </q-tooltip>
        </q-toolbar-title>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            square
            dense
            text-color="white"
            :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
            @click="$q.fullscreen.toggle()"
          />
          <q-btn
            dense
            square
            :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
            aria-label="Menu"
            @click="$q.dark.toggle()"
          >
            <q-tooltip>
              {{ $t("general.lightMode") }}
            </q-tooltip>
          </q-btn>
          <q-fab
            v-model="fab2"
            vertical-actions-align="left"
            padding="xs"
            square
            icon="lock_open"
            direction="down"
            v-touch-pan.prevent.mouse="moveFab"
            title="Authenticate"
            class="q-mx-xs"
          >
            <q-fab-action
              padding="3px"
              external-label
              color="blue"
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
        </div>
      </q-toolbar>
      <q-toolbar class="text-white" v-if="$q.platform.is.desktop">
        <q-tabs
          v-model="tab"
          inline-label
          dense
          shrink
          narrow-indicator
          align="center"
        >
          <q-tab
            v-for="link in linksData"
            v-show="!link.disabled"
            :key="link.link"
            :name="link.link"
            content-class="q-mx-md q-px-xs"
            :icon="link.icon"
            :label="$t(link.title)"
            ripple
            size="sm"
            ><q-tooltip>{{ $t(link.title) }}</q-tooltip></q-tab
          >
        </q-tabs>
      </q-toolbar>
    </q-header>
    <!-- Drawer-->
    <NavigationDrawer
      v-if="$q.platform.is.mobile"
      ref="drawer"
      :toggleNavDrawer="leftDrawerOpen"
      :side="'left'"
    ></NavigationDrawer>
    <q-footer
      v-model="footer"
      v-if="$q.platform.is.desktop"
      reveal
      elevated
      bordered
      :class="$q.dark.isActive ? 'bg-accent' : 'bg-primary'"
    >
      <q-toolbar class="text-primary">
        <q-toolbar-title class="text-white">
          {{ siteT }}
        </q-toolbar-title>
        <q-btn
          class="text-body2 text-grey-2 q-pa-xs q-mx-xs"
          v-for="link in linksBasics"
          v-show="!link.disabled"
          :key="link.title"
          :to="link.link"
          :icon="link.icon"
          size="sm"
          ripple
        >
          <q-tooltip>
            {{ $t(link.title) }}
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-footer>
    <!-- Container -->
    <q-page-container ref="pageContainer">
      <router-view class="scroll" />
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="fabPos"
        v-touch-pan.prevent.mouse="moveFab"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>
<script>
import NavigationDrawer from "components/NavigationDrawer";
import { mapGetters } from "vuex";
export default {
  name: "MainLayout",
  components: { NavigationDrawer },
  data() {
    return {
      leftDrawer: false,
      fab2: false,
      fabPos: [18, 18],
      draggingFab: false,
      tab: "/",
      footer: "",
      leftDrawerOpen: false
    };
  },
  methods: {
    UpdateDrawerStatus(value) {
      this.leftDrawerOpen = value;
    },
    onClick() {
      console.log("Clicked on a fab action");
    },
    moveFab(ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true;

      this.fabPos = [this.fabPos[0] - ev.delta.x, this.fabPos[1] - ev.delta.y];
    }
  },
  computed: {
    ...mapGetters(["linksData", "Site", "linksBasics", "languages", "Site"]),
    siteT() {
      return this.$t("general.SiteTitle", {
        name: this.businessName
      });
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
