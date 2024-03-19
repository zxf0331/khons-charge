"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_menu_card2 = common_vendor.resolveComponent("menu-card");
  const _easycom_cc_myTabbar2 = common_vendor.resolveComponent("cc-myTabbar");
  (_easycom_menu_card2 + _easycom_cc_myTabbar2)();
}
const _easycom_menu_card = () => "../../components/menu-card/menu-card.js";
const _easycom_cc_myTabbar = () => "../../uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.js";
if (!Math) {
  (UserInfo + _easycom_menu_card + MyCar + MoreService + _easycom_cc_myTabbar)();
}
const UserInfo = () => "./cpns/UserInfo.js";
const MyCar = () => "./cpns/MyCar.js";
const MoreService = () => "./cpns/MoreService.js";
const __default__ = {
  onReady() {
    common_vendor.index.hideTabBar();
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "user",
  setup(__props) {
    common_vendor.onMounted(() => {
      common_vendor.index.setNavigationBarColor({
        frontColor: "#000000",
        backgroundColor: "#e0ecfc"
      });
    });
    function handleSetClick() {
      console.log("设置按钮被点击了");
    }
    function handleWalletItemClick(index) {
      console.log("walletItem被点击了：", index);
    }
    function handleMenuItemClick(index) {
      console.log("menuItem被点击了：", index);
    }
    function handleAddCarClick() {
      console.log("点击了添加爱车");
    }
    function handleServiceClick(index) {
      console.log("更多服务被点击了：", index);
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
        a: common_vendor.o(handleSetClick),
        b: common_vendor.o(handleWalletItemClick),
        c: common_vendor.o(handleMenuItemClick),
        d: common_vendor.p({
          menu
        }),
        e: common_vendor.o(handleAddCarClick),
        f: common_vendor.o(handleServiceClick),
        g: common_vendor.p({
          tabBarShow: 2
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
