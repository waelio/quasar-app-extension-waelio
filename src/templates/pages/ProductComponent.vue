<template>
  <div class="q-pa-md" v-if="Product">
    <q-card class="my-card">
      <q-parallax
        :src="Product.image && 'https://cdn.quasar.dev/img/parallax1.jpg'"
        :height="150"
      />
      <q-card-section>
        <div class="text-h6">{{ Product.name || 'N/A' }}</div>
        <div class="text-subtitle2">{{Product.details || 'N/A'}}</div>
        <div class="text-subtitle2">{{Product.price || 'N/A'}}</div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'ProductComponent',
  props: ['Product']
}
</script>
<style>
</style>