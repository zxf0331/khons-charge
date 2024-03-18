"use strict";
const common_vendor = require("../../common/vendor.js");
const store_main = require("../../store/main.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_menu_card2 = common_vendor.resolveComponent("menu-card");
  const _easycom_station_list2 = common_vendor.resolveComponent("station-list");
  const _easycom_cc_myTabbar2 = common_vendor.resolveComponent("cc-myTabbar");
  (_easycom_uni_search_bar2 + _easycom_menu_card2 + _easycom_station_list2 + _easycom_cc_myTabbar2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_menu_card = () => "../../components/menu-card/menu-card.js";
const _easycom_station_list = () => "../../components/station-list/station-list.js";
const _easycom_cc_myTabbar = () => "../../uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.js";
if (!Math) {
  (_easycom_uni_search_bar + HomeBanner + _easycom_menu_card + _easycom_station_list + _easycom_cc_myTabbar)();
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
    const mainStore = store_main.useMainStore();
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
    const menu = [
      {
        img: "/static/images/menu/scan.png",
        title: "我要充电"
      },
      {
        img: "/static/images/menu/wallet.png",
        title: "我要充值"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(mainStore).currentCity),
        b: common_vendor.o(chooseCity),
        c: common_vendor.o(searchBarClick),
        d: common_vendor.p({
          placeholder: "输入目的地/电站名称",
          radius: "20",
          bgColor: "#ffffff",
          readonly: true
        }),
        e: common_vendor.p({
          banners
        }),
        f: common_vendor.p({
          menu
        }),
        g: common_vendor.p({
          tabBarShow: 0
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
