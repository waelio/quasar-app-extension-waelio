function isInitWaelioBootEntry(entry) {
  if (typeof entry === "string") {
    return entry === "init-waelio";
  }

  return entry && typeof entry === "object" && entry.path === "init-waelio";
}

module.exports = function (api) {
  api.extendQuasarConf((conf) => {
    if (Array.isArray(conf.boot) === false) {
      conf.boot = [];
    }

    if (conf.boot.some(isInitWaelioBootEntry) === false) {
      conf.boot.push({ path: "init-waelio", server: false });
    }
  });
};
