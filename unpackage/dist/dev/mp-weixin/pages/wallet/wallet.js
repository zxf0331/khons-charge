"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "wallet",
  setup(__props) {
    common_vendor.onMounted(() => {
      common_vendor.index.setNavigationBarColor({
        frontColor: "#000000",
        backgroundColor: "#e0ecfc"
      });
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/pages/wallet/wallet.vue"]]);
wx.createPage(MiniProgramPage);
