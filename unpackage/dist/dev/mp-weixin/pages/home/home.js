"use strict";
const common_vendor = require("../../common/vendor.js");
const store_main = require("../../store/main.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_menu_card2 = common_vendor.resolveComponent("menu-card");
  const _easycom_charge_list2 = common_vendor.resolveComponent("charge-list");
  const _easycom_cc_myTabbar2 = common_vendor.resolveComponent("cc-myTabbar");
  (_easycom_uni_search_bar2 + _easycom_menu_card2 + _easycom_charge_list2 + _easycom_cc_myTabbar2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_menu_card = () => "../../components/menu-card/menu-card.js";
const _easycom_charge_list = () => "../../components/charge-list/charge-list.js";
const _easycom_cc_myTabbar = () => "../../uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.js";
if (!Math) {
  (_easycom_uni_search_bar + HomeBanner + _easycom_menu_card + _easycom_charge_list + _easycom_cc_myTabbar)();
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
    const stationList = [
      {
        img: "/static/images/station_1.jpg",
        name: "东方丽景充电站",
        address: "四川省成都市锦江区海桐街354号",
        elec_charge: "0.6",
        serv_charge: "0.1",
        free: "8",
        total: "20",
        type: "慢充"
      },
      {
        img: "/static/images/station_2.jpg",
        name: "环球中心充电站",
        address: "四川省成都市武侯区环球东路",
        elec_charge: "0.65",
        serv_charge: "0.2",
        free: "18",
        total: "20",
        type: "快充"
      },
      {
        img: "/static/images/station_3.jpg",
        name: "成都中国核动力润诚达快充站",
        address: "四川省成都市武侯区白云街55号",
        elec_charge: "0.8",
        serv_charge: "0.1",
        free: "2",
        total: "15",
        type: "快充"
      },
      {
        img: "/static/images/station_4.jpg",
        name: "润诚达武侯万达充电站",
        address: "四川省成都市武侯区聚龙路372号",
        elec_charge: "0.6",
        serv_charge: "0.1",
        free: "4",
        total: "12",
        type: "慢充"
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
        g: common_vendor.f(stationList, (itemInfo, k0, i0) => {
          return {
            a: "62bf4a9a-3-" + i0,
            b: common_vendor.p({
              stationInfo: itemInfo
            }),
            c: itemInfo.name
          };
        }),
        h: common_vendor.p({
          tabBarShow: 0
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
