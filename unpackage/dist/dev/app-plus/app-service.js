if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$6 = {
    data() {
      return {
        TabBarList: [
          {
            index: 0,
            name: "首页",
            img: "/static/images/tabbar/home.png",
            acImg: "/static/images/tabbar/home_act.png"
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
    // 	    		__f__('log','at uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue:59',res.brand) //手机牌子
    // 	    		__f__('log','at uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue:60',res.model) //手机型号
    // 	    		__f__('log','at uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue:61',res.screenWidth) //屏幕宽度
    // 	    		__f__('log','at uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue:62',res.screenHeight) //屏幕高度
    // 					that.codeheight = Math.round(res.screenHeight);
    // 					that.phoneModel =res.model
    // 					if(res.model.search('iPhone')){
    // 						that.isOverall = 0;
    // 					}else if(Math.round(res.screenHeight)>740){
    // 					 that.isOverall = 1;
    // 					}
    // 					__f__('log','at uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue:70',that.isOverall);
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
            uni.switchTab({
              url: "/pages/home/home"
            });
            break;
          case 1:
            uni.switchTab({
              url: "/pages/scan/scan"
            });
            break;
          case 2:
            uni.switchTab({
              url: "/pages/user/user"
            });
            break;
        }
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page-total" }, [
      vue.createElementVNode("view", { class: "tab-list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.TabBarList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "list",
              onClick: ($event) => $options.onTabBar(item, index),
              style: vue.normalizeStyle({ marginTop: index == 1 ? "-18px" : "0px" }),
              key: index
            }, [
              vue.withDirectives(vue.createElementVNode("image", {
                src: item.acImg,
                mode: "widthFix",
                style: vue.normalizeStyle({ width: index == 1 ? "60px" : "24px", borderRadius: index == 1 ? "50%" : "0px", boxShadow: index == 1 ? "0 0 12px rgba(25, 255, 255, 0.7)" : "none" })
              }, null, 12, ["src"]), [
                [vue.vShow, $props.tabBarShow === index]
              ]),
              vue.withDirectives(vue.createElementVNode("image", {
                src: item.img,
                mode: "widthFix",
                style: vue.normalizeStyle({ width: index == 1 ? "60px" : "24px", borderRadius: index == 1 ? "50%" : "0px", boxShadow: index == 1 ? "0 0 12px rgba(25, 255, 255, 0.7)" : "none" })
              }, null, 12, ["src"]), [
                [vue.vShow, $props.tabBarShow != index]
              ]),
              vue.createCommentVNode(" background: (index == 1) ?  'red' : '' "),
              vue.createElementVNode(
                "text",
                {
                  class: vue.normalizeClass({ "action": $props.tabBarShow === index }),
                  style: vue.normalizeStyle({ marginTop: index == 1 ? "4px" : "0px" })
                },
                vue.toDisplayString(item.name),
                7
                /* TEXT, CLASS, STYLE */
              )
            ], 12, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2], ["__scopeId", "data-v-61f40987"], ["__file", "D:/khons-charge/uni_modules/cc-myTabbar/components/cc-myTabbar/cc-myTabbar.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$5 = {
    data() {
      return {};
    },
    onReady() {
      uni.hideTabBar();
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cc_myTabbar = resolveEasycom(vue.resolveDynamicComponent("cc-myTabbar"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
      vue.createElementVNode("view", null, "首页"),
      vue.createVNode(_component_cc_myTabbar, { tabBarShow: 0 })
    ]);
  }
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["__file", "D:/khons-charge/pages/home/home.vue"]]);
  const _imports_0 = "/static/images/avatar.png";
  const _sfc_main$4 = {
    __name: "UserInfo",
    emits: ["setClick", "walletItemClick"],
    setup(__props, { emit: emits }) {
      const wallet = [
        {
          itemName: "余额(元)",
          num: 525.36
        },
        {
          itemName: "优惠券(张)",
          num: 5
        },
        {
          itemName: "我的积分",
          num: 0
        }
      ];
      function setClick() {
        emits("setClick");
      }
      function walletItemClick(index) {
        emits("walletItemClick", index);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "userinfo" }, [
          vue.createElementVNode("view", { class: "info-top" }, [
            vue.createElementVNode("view", { class: "info" }, [
              vue.createElementVNode("image", {
                class: "avatar",
                src: _imports_0,
                mode: ""
              }),
              vue.createElementVNode("view", { class: "userdetail" }, [
                vue.createElementVNode("text", { class: "username" }, "用户名"),
                vue.createElementVNode("text", null, "155****1558")
              ])
            ]),
            vue.createElementVNode("view", { class: "set" }, [
              vue.createElementVNode("i", {
                class: "iconfont icon-set",
                style: { "font-size": "48rpx" },
                onClick: setClick
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "info-bottom" }, [
            vue.createElementVNode("view", { class: "wallet" }, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(wallet, (item, index) => {
                  return vue.createElementVNode("view", {
                    key: item,
                    class: "wallet-item",
                    onClick: ($event) => walletItemClick(index)
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "item-num" },
                      vue.toDisplayString(item.num),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "item-name" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "item-name" },
                        vue.toDisplayString(item.itemName),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("i", { class: "iconfont icon-right-arrow" })
                    ])
                  ], 8, ["onClick"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])
        ]);
      };
    }
  };
  const UserInfo = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-23f92721"], ["__file", "D:/khons-charge/pages/user/cpns/UserInfo.vue"]]);
  const _sfc_main$3 = {
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
        return vue.openBlock(), vue.createElementBlock("view", { class: "menu-card" }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(menu, (item, index) => {
              return vue.createElementVNode("view", {
                key: item,
                class: "menu-item",
                onClick: _cache[0] || (_cache[0] = () => {
                })
              }, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: item.img,
                  mode: "widthFix"
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  { class: "title" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                )
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const MenuCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ecdae198"], ["__file", "D:/khons-charge/pages/user/cpns/MenuCard.vue"]]);
  const __default__ = {
    onReady() {
      uni.hideTabBar();
    }
  };
  const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__, {
    __name: "user",
    setup(__props) {
      vue.onMounted(() => {
        uni.setNavigationBarColor({
          frontColor: "#000000",
          backgroundColor: "#e0ecfc"
        });
      });
      function handleSetClick() {
        formatAppLog("log", "at pages/user/user.vue:31", "设置按钮被点击了");
      }
      function handleWalletItemClick(index) {
        formatAppLog("log", "at pages/user/user.vue:36", "walletItem被点击了：", index);
      }
      return (_ctx, _cache) => {
        const _component_cc_myTabbar = resolveEasycom(vue.resolveDynamicComponent("cc-myTabbar"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
          vue.createVNode(UserInfo, {
            onSetClick: handleSetClick,
            onWalletItemClick: handleWalletItemClick
          }),
          vue.createVNode(MenuCard),
          vue.createVNode(_component_cc_myTabbar, { tabBarShow: 2 })
        ]);
      };
    }
  });
  const PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "D:/khons-charge/pages/user/user.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    onReady() {
      uni.hideTabBar();
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_cc_myTabbar = resolveEasycom(vue.resolveDynamicComponent("cc-myTabbar"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
      vue.createElementVNode("view", null, "scan"),
      vue.createVNode(_component_cc_myTabbar, { tabBarShow: 1 })
    ]);
  }
  const PagesScanScan = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/khons-charge/pages/scan/scan.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/user/user", PagesUserUser);
  __definePage("pages/scan/scan", PagesScanScan);
  const _sfc_main = {
    onLaunch() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/khons-charge/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
