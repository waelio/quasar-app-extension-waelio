<template>
  <q-item>
    <q-item-section avatar>
      <q-icon name="language" />
    </q-item-section>
    <q-item-section>
      <q-select
        v-model="language"
        behavior="menu"
        :options="languages"
        label="Languages"
        option-value="item.key"
        options-cover
        stack-label
        borderless
        emit-value
        map-options
        style="min-width: 150px"
      />
    </q-item-section>
  </q-item>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LangSwitch',
  data () {
    return {
      language: JSON.parse(this.$q.localStorage.getItem('locale')) ||this.languages && this.languages[0]
    }
  },
  computed: {
    ...mapGetters(['languages'])
  },
  watch: {
    language(lang) {
      this.$i18n.locale = lang.key
      this.$q.localStorage.set('locale', JSON.stringify(lang))
      this.languages.forEach( lng => {
            document.querySelector('body').classList.remove(lng.key)
      })
      document.body.className += ' '+ lang.key
      if(this.$q.platform.is.mobile){
        this.$emit('CloseLeftDrawer', false)
      }
    }
  }
}
</script>

<style>

</style>