"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "MoreService",
  emits: ["moreServItemClick"],
  setup(__props, { emit: emits }) {
    function moreServItemClick(index) {
      emits("moreServItemClick", index);
    }
    const menu = [
      {
        img: "/static/images/menu/message.png",
        title: "消息中心"
      },
      {
        img: "/static/images/menu/mycar.png",
        title: "我的车辆"
      },
      {
        img: "/static/images/menu/contactus.png",
        title: "联系我们"
      },
      {
        img: "/static/images/menu/feedback.png",
        title: "我的反馈"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(menu, (item, index, i0) => {
          return {
            a: item.img,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => moreServItemClick(index))
          };
        }),
        b: common_vendor.p({
          title: "更多服务"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/khons-charge/pages/user/cpns/MoreService.vue"]]);
wx.createComponent(Component);
