<template>
  <q-item>
    <q-item-section avatar @click.prevent="triggerSelect">
      <q-icon name="language" />
    </q-item-section>
    <q-item-section v-if="languages">
      <lang-select>
        <q-tooltip>
          {{ LangsLabel }}
        </q-tooltip>
      </lang-select>
    </q-item-section>
  </q-item>
</template>
<script>
import LangSelect from "components/LangSelect.vue";
export default {
  name: "LanguageSwitcher",
  components: {LangSelect},
  methods: {
    triggerSelect() {
      this.$refs.LangSelect.showPopup();
    }
  },
  computed: {
    LangsLabel() {
      return this.$tc("general.languages");
    }
  }
};
</script>
