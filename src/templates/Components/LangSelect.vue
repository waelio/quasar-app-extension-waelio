<template>
  <q-select
    ref="LangSelect"
    v-model="language"
    behavior="menu"
    :options="langOptions()"
    :label="LangsLabel"
    options-cover
    stack-label
    borderless
    emit-value
    option-label="nativeName"
    option-Value="isoName"
    map-options
    style="min-width: 150px"
  />
</template>
<script>
export default {
  name: "LangSelect",
  methods: {
    triggerSelect() {
      this.$refs.LangSelect.showPopup();
    }
  }
};
</script>

<style></style>
