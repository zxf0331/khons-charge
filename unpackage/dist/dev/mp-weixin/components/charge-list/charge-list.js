"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_line_progress2 = common_vendor.resolveComponent("uv-line-progress");
  _easycom_uv_line_progress2();
}
const _easycom_uv_line_progress = () => "../../uni_modules/uv-line-progress/components/uv-line-progress/uv-line-progress.js";
if (!Math) {
  _easycom_uv_line_progress();
}
const _sfc_main = {
  __name: "charge-list",
  props: {
    stationInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const percentage = common_vendor.computed(() => props.stationInfo.free / props.stationInfo.total * 100);
    return (_ctx, _cache) => {
      return {
        a: __props.stationInfo.img,
        b: common_vendor.t(__props.stationInfo.name),
        c: common_vendor.t(__props.stationInfo.address),
        d: common_vendor.t(__props.stationInfo.elec_charge),
        e: common_vendor.t(__props.stationInfo.serv_charge),
        f: common_vendor.t(__props.stationInfo.free),
        g: common_vendor.t(__props.stationInfo.total),
        h: common_vendor.t(__props.stationInfo.type),
        i: common_vendor.p({
          height: "8",
          showText: false,
          percentage: common_vendor.unref(percentage),
          activeColor: "#3c9cff",
          inactiveColor: "#E0E0E0"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/khons-charge/components/charge-list/charge-list.vue"]]);
wx.createComponent(Component);
