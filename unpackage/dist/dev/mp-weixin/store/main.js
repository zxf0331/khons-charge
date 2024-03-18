"use strict";
const common_vendor = require("../common/vendor.js");
const useMainStore = common_vendor.defineStore(
  "main",
  () => {
    const currentCity = common_vendor.ref("成都");
    function setCity(newCity) {
      currentCity.value = newCity;
    }
    return {
      currentCity,
      setCity
    };
  },
  {
    unistorage: true
    // 开启后对 state 的数据读写都将持久化
  }
);
exports.useMainStore = useMainStore;
