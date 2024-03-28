"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const uni_modules_piniaPluginUnistorage_index = require("./uni_modules/pinia-plugin-unistorage/index.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/user/user.js";
  "./pages/city/city.js";
  "./pages/search/search.js";
  "./pages/wallet/wallet.js";
}
const _sfc_main = {
  onLaunch() {
    console.log("App Launch");
  },
  onShow() {
    console.log("App Show");
  },
  onHide() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  const store = common_vendor.createPinia();
  store.use(uni_modules_piniaPluginUnistorage_index.createUnistorage());
  app.use(store);
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
