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
        num: 525.36
      },
      {
        itemName: "优惠券(张)",
        num: 5
      },
      {
        itemName: "我的积分",
        num: 0
      }
    ];
    function setClick() {
      emits("setClick");
    }
    function walletItemClick(index) {
      emits("walletItemClick", index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(setClick),
        c: common_vendor.f(wallet, (item, index, i0) => {
          return {
            a: common_vendor.t(item.num),
            b: common_vendor.t(item.itemName),
            c: common_vendor.o(($event) => walletItemClick(index), item),
            d: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/pages/user/cpns/UserInfo.vue"]]);
wx.createComponent(Component);
