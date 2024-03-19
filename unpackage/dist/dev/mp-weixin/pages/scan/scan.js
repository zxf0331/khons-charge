"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onReady() {
    common_vendor.index.hideTabBar();
  },
  methods: {}
};
if (!Array) {
  const _easycom_cc_myTabbar2 = common_vendor.resolveComponent("cc-myTabbar");
  _easycom_cc_myTabbar2();
}
const _easycom_cc_myTabbar = () => "../../uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.js";
if (!Math) {
  _easycom_cc_myTabbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      tabBarShow: 1
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/khons-charge/pages/scan/scan.vue"]]);
wx.createPage(MiniProgramPage);
