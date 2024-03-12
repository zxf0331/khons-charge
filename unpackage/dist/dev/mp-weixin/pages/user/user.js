"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_cc_myTabbar2 = common_vendor.resolveComponent("cc-myTabbar");
  _easycom_cc_myTabbar2();
}
const _easycom_cc_myTabbar = () => "../../uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.js";
if (!Math) {
  (UserInfo + MenuCard + _easycom_cc_myTabbar)();
}
const UserInfo = () => "./cpns/UserInfo.js";
const MenuCard = () => "./cpns/MenuCard.js";
const __default__ = {
  onReady() {
    common_vendor.index.hideTabBar();
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "user",
  setup(__props) {
    function handleSetClick() {
      console.log("设置按钮被点击了");
    }
    function handleWalletItemClick(index) {
      console.log("walletItem被点击了：", index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(handleSetClick),
        b: common_vendor.o(handleWalletItemClick),
        c: common_vendor.p({
          tabBarShow: 2
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
