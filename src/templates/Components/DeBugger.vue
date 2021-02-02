<template>
  <q-no-ssr v-if="debug">
    <q-splitter v-model="splitterModel1" style="height: 400px">
      <template v-slot:before>
        <div class="q-pa-md">
          <div class="text-h4 text-center q-mb-md q-mx-auto">Package.Json</div>
          <q-separator />
          <pre>{{ Site }}</pre>
        </div>
      </template>
      <template v-slot:after>
        <q-splitter v-model="splitterModel2" style="height: 400px">
          <template v-slot:before>
            <div class="q-pa-md">
              <div class="text-h4 text-center q-mb-md q-mx-auto">
                Quasar.cof.js
              </div>
              <q-separator />
              <pre>{{ APP() }}</pre>
            </div>
          </template>
          <template v-slot:after>
            <div class="q-pa-md">
              <div class="text-h4 text-center q-mb-md q-mx-auto">
                Local $Vault
              </div>
              <q-separator />
              <pre>{{ Config }}</pre>
            </div>
          </template>
        </q-splitter>
      </template>
    </q-splitter>
  </q-no-ssr>
</template>
<script>
export default {
  name: "DeBugger",
  created() {},
  data() {
    return {
      debug: this.$config.get("client:debug"),
      splitterModel1: 30,
      splitterModel2: 35
    };
  },
  methods: {
    APP() {
      return this.$q;
    },
    Config() {
      return this.$config.get("client")
    }
  },
  computed: {
    siteT() {
      return this.$t("general.SiteTitle", { name: "this.config.businessName" });
    },
    Site() {
      return this.$store.getters.Site;
    }
  }
};
</script>

<style></style>
