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
    function menuItemClick(index) {
      emits("menuItemClick", index);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.menu, (item, index, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => menuItemClick(index), item),
            d: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/khons-charge/components/menu-card/menu-card.vue"]]);
wx.createComponent(Component);
