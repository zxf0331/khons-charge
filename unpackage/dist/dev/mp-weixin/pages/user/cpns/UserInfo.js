"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  __name: "UserInfo",
  emits: ["setClick", "walletItemClick"],
  setup(__props, { emit: emits }) {
    const wallet = [
      {
        itemName: "余额(元)",
        num: 525.36,
        pagePath: "/pages/wallet/wallet"
      },
      {
        itemName: "等级",
        num: 1
      },
      {
        itemName: "我的积分",
        num: 0
      }
    ];
    function setClick() {
      emits("setClick");
    }
    function walletItemClick(index, item) {
      emits("walletItemClick", index);
      if (item.pagePath) {
        common_vendor.index.navigateTo({
          url: item.pagePath
        });
      } else {
        common_vendor.index.showToast({
          title: "功能正在开发中...",
          icon: "none"
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(setClick),
        c: common_vendor.f(wallet, (item, index, i0) => {
          return {
            a: common_vendor.t(item.num),
            b: common_vendor.t(item.itemName),
            c: common_vendor.o(($event) => walletItemClick(index, item), item),
            d: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/pages/user/cpns/UserInfo.vue"]]);
wx.createComponent(Component);
