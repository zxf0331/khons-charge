"use strict";
const uni_modules_uvUiTools_libs_mixin_mpMixin = require("../../../uv-ui-tools/libs/mixin/mpMixin.js");
const uni_modules_uvUiTools_libs_mixin_mixin = require("../../../uv-ui-tools/libs/mixin/mixin.js");
const uni_modules_uvLineProgress_components_uvLineProgress_props = require("./props.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../../uv-ui-tools/libs/function/index.js");
require("../../../uv-ui-tools/libs/function/test.js");
require("../../../uv-ui-tools/libs/function/digit.js");
require("../../../uv-ui-tools/libs/util/route.js");
require("../../../uv-ui-tools/libs/function/debounce.js");
require("../../../uv-ui-tools/libs/function/throttle.js");
const _sfc_main = {
  name: "uv-line-progress",
  mixins: [uni_modules_uvUiTools_libs_mixin_mpMixin.mpMixin, uni_modules_uvUiTools_libs_mixin_mixin.mixin, uni_modules_uvLineProgress_components_uvLineProgress_props.props],
  data() {
    return {
      lineWidth: 0
    };
  },
  watch: {
    percentage(n) {
      this.resizeProgressWidth();
    }
  },
  computed: {
    progressStyle() {
      let style = {};
      style.width = this.lineWidth;
      style.backgroundColor = this.activeColor;
      style.height = this.$uv.addUnit(this.$uv.getPx(this.height));
      return style;
    },
    innserPercentage() {
      return this.$uv.range(0, 100, this.percentage);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$uv.sleep(20).then(() => {
        this.resizeProgressWidth();
      });
    },
    getProgressWidth() {
      return this.$uvGetRect(".uv-line-progress__background");
    },
    resizeProgressWidth() {
      this.getProgressWidth().then((size) => {
        const {
          width
        } = size;
        this.lineWidth = width * this.innserPercentage / 100 + "px";
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.s({
      backgroundColor: _ctx.inactiveColor,
      height: _ctx.$uv.addUnit(_ctx.$uv.getPx(_ctx.height))
    }),
    b: _ctx.showText && _ctx.percentage >= 10
  }, _ctx.showText && _ctx.percentage >= 10 ? {
    c: common_vendor.t($options.innserPercentage + "%")
  } : {}, {
    d: common_vendor.s($options.progressStyle),
    e: common_vendor.s(_ctx.$uv.addStyle(_ctx.customStyle))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-435a5d4d"], ["__file", "E:/khons-charge/uni_modules/uv-line-progress/components/uv-line-progress/uv-line-progress.vue"]]);
wx.createComponent(Component);
