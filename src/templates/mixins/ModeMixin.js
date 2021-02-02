"strict";

import { resetString, reParseString } from "waelio-utils";
export default {
  data() {
    return {
      ModeLoaded: false,
      modeName: this.$config.get("modeName"),
      MyLightMode: 0
    };
  },
  methods: {
    verifyMode() {
      // console.log('modeName', this.modeName)
      // 1. CHECK: Config mode
      const configMode = this.$config.get(`settings:darkMode`);
      // console.log("configMode", configMode);
      // 2. CHECK: If we have a saved mode
      const storageGotMode = this.getStorageMode();
      // console.log("storageGotMode", storageGotMode);
      // 2.1: CASE: Mode Exists in Storage
      if (storageGotMode && this.isMode(storageGotMode)) {
        // this.$watch('MyLightMode', this.dataWatcher);
        this.currentMode = storageGotMode.value;
        // this.ModeLoaded =true;
      }
      // 2.2: CASE: mode Does Not Exist in Storage use config
      else if (configMode && this.isMode(configMode)) {
        this.$watch("MyLightMode", this.dataWatcher);
        this.currentMode = configMode;
        // this.ModeLoaded =true;
      } else {
        this.$watch("MyLightMode", this.consoleOut);
        this.currentMode = "auto";
      }
    },
    consoleOut(something) {
      console.log("something", something);
    },
    getStorageMode() {
      return this.$config.storage().has(this.modeName)
        ? JSON.parse(this.$config.storage().get(this.modeName))
        : false;
    },
    isMode(state) {
      return state && state.value
        ? Boolean(this.modesKeys.includes(state.value))
        : false;
    },
    mapModeValue(value) {
      return this.modes[value];
    },
    getFreshMode() {
      try {
        let test = this.getStorageMode();
        if (test) {
          test = test;
          return test;
        }
        return 0;
      } catch (error) {
        return console.error(error);
      }
    }
  },
  computed: {
    //     this.$config.storage().set(this.modeName, JSON.stringify(check));
    //     this.$q.dark.set(check.value);
    modesKeys() {
      return this.modes.map(mode => mode.value);
    },
    modesLabelOptions() {
      return this.modes.map(mode => ({
        label: mode.label,
        value: mode.value
      }));
    },
    modes() {
      return [
        { key: 0, value: "auto", label: this.$t("general.auto") },
        { key: 1, value: "true", label: this.$t("general.dark") },
        { key: 2, value: "false", label: this.$t("general.light") }
      ];
    },
    currentMode: {
      get: function() {
        return this.$q.dark.mode.toString();
      },
      set: function(newMode) {
        // console.log("newMode", newMode);
        const check = this.modes.find(
          mode =>
            mode.value.toString().toLowerCase() ===
            newMode.toString().toLowerCase()
        );
        // console.log("check", check);
        if (!check || !check.value) return false;
        this.$config.storage().set(this.modeName, JSON.stringify(check));
        check.value =
          check.value.toString() === "true"
            ? true
            : check.value === "false"
            ? false
            : "auto";
        // console.log("check", check);
        this.$q.dark.set(check.value);
      }
    }
  }
};
