<template>
  <q-item>
    <q-item-section avatar @click.prevent="triggerSelect">
      <q-icon name="language" />
    </q-item-section>
    <q-item-section v-if="languages">
      <q-select
        ref="LangSelect"
        v-model="language"
        behavior="menu"
        :options="langOptions()"
        :label="$tc('general.languages')"
        options-cover
        stack-label
        borderless
        emit-value
        map-options
        style="min-width: 150px"
      >
        <q-tooltip>
          {{ $t("general.languages") }}
        </q-tooltip>
      </q-select>
    </q-item-section>
  </q-item>
</template>
<script>
import LangMixin from "src/mixins/LangMixin";
export default {
  name: "LanguageSwitcher",
  mixins: [LangMixin],
  methods:{
    triggerSelect(){
      this.$refs.LangSelect.showPopup();
    }
  }
};
</script>