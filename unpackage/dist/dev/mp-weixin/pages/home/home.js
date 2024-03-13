"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_cc_myTabbar2 = common_vendor.resolveComponent("cc-myTabbar");
  (_easycom_uni_search_bar2 + _easycom_cc_myTabbar2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_cc_myTabbar = () => "../../uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.js";
if (!Math) {
  (_easycom_uni_search_bar + HomeBanner + _easycom_cc_myTabbar)();
}
const HomeBanner = () => "./cpns/HomeBanner.js";
const __default__ = {
  onReady() {
    common_vendor.index.hideTabBar();
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "home",
  setup(__props) {
    common_vendor.onMounted(() => {
      common_vendor.index.setNavigationBarColor({
        frontColor: "#000000",
        backgroundColor: "#e0ecfc"
      });
    });
    const banners = [
      {
        url: "/static/images/banner/banner1.jpg"
      },
      {
        url: "/static/images/banner/banner2.jpg"
      },
      {
        url: "/static/images/banner/banner3.jpg"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          placeholder: "站点查询",
          bgColor: "#ffffff",
          readonly: true
        }),
        b: common_vendor.p({
          banners
        }),
        c: common_vendor.p({
          tabBarShow: 0
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
