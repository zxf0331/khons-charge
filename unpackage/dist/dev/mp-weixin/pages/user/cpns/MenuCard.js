"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "MenuCard",
  emits: ["menuItemClick"],
  setup(__props, { emit: emits }) {
    function menuItemClick(index) {
      emits("menuItemClick", index);
    }
    const menu = [
      {
        img: "/static/images/menu/order.png",
        title: "我的订单"
      },
      {
        img: "/static/images/menu/statistics.png",
        title: "充电数据"
      },
      {
        img: "/static/images/menu/charging.png",
        title: "即插即充"
      },
      {
        img: "/static/images/menu/favor.png",
        title: "站点收藏"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(menu, (item, index, i0) => {
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/pages/user/cpns/MenuCard.vue"]]);
wx.createComponent(Component);
