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
    function chooseCity() {
      common_vendor.index.navigateTo({
        url: "/pages/city/city"
      });
    }
    function searchBarClick() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    }
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
        a: common_vendor.o(chooseCity),
        b: common_vendor.o(searchBarClick),
        c: common_vendor.p({
          placeholder: "输入目的地/电站名称",
          radius: "20",
          bgColor: "#ffffff",
          readonly: true
        }),
        d: common_vendor.p({
          banners
        }),
        e: common_vendor.p({
          tabBarShow: 0
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/khons-charge/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
