"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "MenuCard",
  setup(__props) {
    const menu = [
      {
        img: "/static/images/menu/order.png",
        title: "我的订单"
      },
      {
        img: "/static/images/menu/favor.png",
        title: "我的订单"
      },
      {
        img: "/static/images/menu/order.png",
        title: "我的订单"
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
            c: common_vendor.o(() => {
            }, item),
            d: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/pages/user/cpns/MenuCard.vue"]]);
wx.createComponent(Component);
