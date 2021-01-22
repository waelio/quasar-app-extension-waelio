<template >
<div v-if="!disabled">
  <q-item clickable :to="link">
    <q-item-section avatar v-if="icon"><q-icon :name="icon" /></q-item-section>
    <q-item-section>
      <q-item-label>{{ $t(title) }}</q-item-label>
      <q-item-label caption class="ellipsis">{{ $t(caption) }}</q-item-label>
    </q-item-section>
    <q-tooltip>{{ $t(title) }}</q-tooltip>
  </q-item>
   <q-separator :key="'sep' + index" v-if="separator" />
</div>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    },
    separator: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
