export default {
  data() {
    return {
      mode: this.$q.localStorage.has("darkMode")
        ? JSON.parse(JSON.stringify(this.$q.localStorage.getItem("darkMode")))
        : "auto"
    };
  },
  methods: {
    verifyMode() {
      if (!this.$q.localStorage.has("darkMode")) {
        this.$q.localStorage.set("darkMode", JSON.stringify("auto"));
      } else {
        const savedMode = JSON.parse(
          JSON.stringify(this.$q.localStorage.getItem("darkMode"))
        );
        this.mode = savedMode;
      }
    }
  },
  computed: {
    modes() {
      return [
        { value: "dark", label: this.$t("general.dark") },
        { value: "light", label: this.$t("general.light") },
        { value: "auto", label: this.$t("general.auto") }
      ];
    },
    currentMode() {
      return JSON.parse(this.$q.localStorage.getItem("darkMode"));
    }
  },
  watch: {
    mode(newMode) {
      switch (newMode) {
        case "dark":
          this.$q.dark.set(true);
          this.$q.localStorage.set("darkMode", JSON.stringify(true));
          break;
        case "light":
          this.$q.dark.set(false);
          this.$q.localStorage.set("darkMode", JSON.stringify(false));
          break;
        case "auto":
          this.$q.dark.set("auto");
          this.$q.localStorage.set("darkMode", JSON.stringify("auto"));
          break;
        default:
          this.$q.dark.set("auto");
          break;
      }
    }
  }
};
