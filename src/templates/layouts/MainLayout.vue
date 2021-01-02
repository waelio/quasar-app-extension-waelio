<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated :class="$q.dark.isActive ? 'bg-secondary':'bg-primary'">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-separator dark vertical inset />
        <q-toolbar-title @click="$router.push('/', () => {})" class="cursor-pointer">
          {{$t('general.SiteTitle')}}
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          :icon="$q.dark.isActive ? 'light_mode':  'dark_mode'"
          aria-label="Menu"
          @click="$q.dark.toggle()"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :side="langDirection"
      :breakpoint="500"
      content-class="dark"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item-label
            header
            class="text-grey-8"
          >
            {{$t('general.navigationLinks')}}
          </q-item-label>
          <EssentialLink
            v-for="link in linksData"
            :key="link.title"
            v-bind="link"
          />  
          <LanguageSwitcher @CloseLeftDrawer="UpdateDrawerStatus" />
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view  />
    </q-page-container>
  </q-layout>
</template>
<script>
import EssentialLink from 'components/EssentialLink'
import LanguageSwitcher from 'components/LanguageSwitcher'
import { mapGetters } from 'vuex'
import { meta } from 'waelio-utils'
export default {
  name: 'MainLayout',
  components: { EssentialLink, LanguageSwitcher },
  data () {
    return {
      leftDrawerOpen: false,
      lngDirections:[{}]
    }
  },
  meta,
  methods: {
    UpdateDrawerStatus(value){
      this.leftDrawerOpen = value
    }
  },
  computed: {
    ...mapGetters(['linksData','languages']),
    langDirection(){
      let res
      this.languages.forEach(language => {
        if(language.key === this.$i18n.locale){
          res= language.direction[0] === 'l' ? 'left' : 'right'
        }
      })
      return res

    }
  }
}
</script>
