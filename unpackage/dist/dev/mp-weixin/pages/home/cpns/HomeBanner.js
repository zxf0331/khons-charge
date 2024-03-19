"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "HomeBanner",
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.banners, (item, k0, i0) => {
          return {
            a: item.url,
            b: common_vendor.o(($event) => _ctx.handleItemClick(item), item),
            c: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/khons-charge/pages/home/cpns/HomeBanner.vue"]]);
wx.createComponent(Component);
