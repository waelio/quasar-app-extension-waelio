<template>
  <q-drawer
    bordered
    persistent
    v-model="drawerActive"
    :width="drawerWidth"
    :breakpoint="drawerBreakPoint"
    :side="side"
    :dark="$q.dark.isActive"
    @mouseover="miniActive = false"
    @mouseout="miniActive = true"
    @hover="miniActive = false"
    @mini-state="onMiniState"
    :mini="miniActive"
    behavior="desktop"
    class="d-grid"
  >
    <q-scroll-area class="fit">
      <q-list>
        <q-item-label header class="text-grey-8">
          {{ $t("general.navigationLinks") }}
        </q-item-label>
        <EssentialLink
          v-for="(link, index) in linksBasics"
          :key="link.title"
          v-bind="link"
          :title="link.title"
          :index="index"
          :separator="link.separator"
          :alt="$t(link.title)"
        >
          <q-separator :key="'sep' + index" />
        </EssentialLink>
        <EssentialLink
          v-for="(link, index) in linksData"
          :key="link.title"
          v-bind="link"
          :title="link.title"
          :index="index"
          :separator="link.separator"
          :alt="$t(link.title)"
        >
          <q-separator :key="'sep' + index" />
        </EssentialLink>
        <LanguageSwitcher />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<script>
import EssentialLink from 'components/EssentialLink'
import LanguageSwitcher from 'components/LanguageSwitcher'
import { mapGetters } from 'vuex'
import { throttle } from 'quasar'
export default {
  name: 'NavigationDrawer',
  components: { EssentialLink, LanguageSwitcher },
  props: {
    side: {
      required: false,
      default: 'left'
    },
    toggleNavDrawer: {
      default: false
    }
  },
  created () {
    this.miniActive = throttle(this.miniActive, 500)
  },
  data () {
    return {
      drawerWidth: 200,
      drawerBreakPoint: 900,
      drawerActive: true,
      miniActive: true
    }
  },
  methods: {
    onDrawerMini (value) {
      this.miniIsActive = value
    },
    onNavigationDrawer (value) {
      this.drawerActive = value
    },
    onMiniToggle () {
      console.log('onMiniToggle()')
      return (this.drawerState = 1)
    },
    onMiniState (value) {
      this.miniIsActive = value
    },
    miniController (state) {
      switch (state) {
        case 'auto':
          return this.setAuto()
        case 'mini':
          return this.setMini()
        case 'expanded':
          return this.setExpanded()
        default:
          return this.setAuto()
      }
    }
  },
  computed: {
    ...mapGetters(['linksData', 'linksBasics']),
    screen () {
      return this.$vault.get('env:screen')
    }
  },
  watch: {
    toggleNavDrawer (payload) {
      this.drawerActive = payload
    },
    drawerState (payload) {
      this.miniController(payload)
    }
  }
}
</script>
<style lang="scss">
.d-grid {
  display: grid;
}
.d-contents {
  display: contents;
}
</style>
