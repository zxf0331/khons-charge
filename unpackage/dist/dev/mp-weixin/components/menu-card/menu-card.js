"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "menu-card",
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  emits: ["menuItemClick"],
  setup(__props, { emit: emits }) {
    function menuItemClick(index, item) {
      emits("menuItemClick", index);
      if (item.action && item.action === "scanCode") {
        common_vendor.index.scanCode({
          success: (res) => {
            console.log("扫描结果：", res);
          },
          fail: () => {
            common_vendor.index.showToast({
              title: "扫描失败",
              icon: "none"
            });
          }
        });
      } else if (item.pagePath) {
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
        a: common_vendor.f(__props.menu, (item, index, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => menuItemClick(index, item), item.title),
            d: item.title
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/components/menu-card/menu-card.vue"]]);
wx.createComponent(Component);
