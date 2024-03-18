import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
	// 当前城市
	const currentCity = ref('成都')
	
	function setCity(newCity) {
		currentCity.value = newCity
	}
	
	return {
		currentCity,
		setCity
	}
},
  {
    unistorage: true, // 开启后对 state 的数据读写都将持久化
  },
)