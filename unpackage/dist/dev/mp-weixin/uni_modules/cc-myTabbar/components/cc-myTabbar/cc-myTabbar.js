"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      TabBarList: [
        {
          index: 0,
          name: "首页",
          img: "/static/images/tabbar/home.png",
          acImg: "/static/images/tabbar/home_select.png"
        },
        {
          index: 1,
          name: "扫码充电",
          img: "/static/images/tabbar/scaner.png",
          acImg: "/static/images/tabbar/scaner.png"
        },
        {
          index: 2,
          name: "我的",
          img: "/static/images/tabbar/mine.png",
          acImg: "/static/images/tabbar/mine_act.png"
        }
      ],
      codeheight: 0,
      isOverall: 0,
      phoneModel: ""
    };
  },
  props: {
    tabBarShow: {
      type: Number,
      default: 0
    }
  },
  // mounted() {
  // 	try {
  // 	    const res = uni.getSystemInfoSync();
  // 			let that = this;
  // 	    // 获取系统信息
  // 	    uni.getSystemInfo({
  // 	    	success(res) {
  // 	    		console.log(res.brand) //手机牌子
  // 	    		console.log(res.model) //手机型号
  // 	    		console.log(res.screenWidth) //屏幕宽度
  // 	    		console.log(res.screenHeight) //屏幕高度
  // 					that.codeheight = Math.round(res.screenHeight);
  // 					that.phoneModel =res.model
  // 					if(res.model.search('iPhone')){
  // 						that.isOverall = 0;
  // 					}else if(Math.round(res.screenHeight)>740){
  // 					 that.isOverall = 1;
  // 					}
  // 					console.log(that.isOverall);
  // 	    	}
  // 	    });
  // 	} catch (e) {
  // 	    // error
  // 	}
  // },
  methods: {
    /**
     * @param {Object} item
     * @param {Number} index
     */
    onTabBar(item, index) {
      switch (index) {
        case 0:
          common_vendor.index.switchTab({
            url: "/pages/home/home"
          });
          break;
        case 1:
          common_vendor.index.scanCode({
            success: (res) => {
              console.log("扫描结果：", res);
            },
            fail: () => {
              common_vendor.index.showToast({
                title: "扫描失败",
                icon: "none"
              });
            }
          });
          break;
        case 2:
          common_vendor.index.switchTab({
            url: "/pages/user/user"
          });
          break;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.TabBarList, (item, index, i0) => {
      return {
        a: item.acImg,
        b: $props.tabBarShow === index,
        c: index == 1 ? "60px" : "24px",
        d: index == 1 ? "50%" : "0px",
        e: index == 1 ? "0 0 12px rgba(25, 255, 255, 0.7)" : "none",
        f: item.img,
        g: $props.tabBarShow != index,
        h: index == 1 ? "60px" : "24px",
        i: index == 1 ? "50%" : "0px",
        j: index == 1 ? "0 0 12px rgba(25, 255, 255, 0.7)" : "none",
        k: common_vendor.t(item.name),
        l: $props.tabBarShow === index ? 1 : "",
        m: index == 1 ? "4px" : "0px",
        n: common_vendor.o(($event) => $options.onTabBar(item, index), index),
        o: index == 1 ? "-18px" : "0px",
        p: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-61f40987"], ["__file", "D:/khons-charge/uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue"]]);
wx.createComponent(Component);
