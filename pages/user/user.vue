<template>
	<view class="user">
		<user-info @setClick='handleSetClick' @walletItemClick='handleWalletItemClick'></user-info>
		<menu-card @menuItemClick='handleMenuItemClick'></menu-card>
		<my-car @addCarClick='handleAddCarClick'></my-car>
		<more-service @moreServItemClick='handleServiceClick'></more-service>
		<cc-myTabbar :tabBarShow="2"></cc-myTabbar>
	</view>
</template>

<script>
	export default {
		onReady() {
			uni.hideTabBar()
		}
	}
</script>

<script setup>
	import { onMounted } from 'vue'
	import UserInfo from './cpns/UserInfo.vue'
	import MenuCard from './cpns/MenuCard.vue'
	import MyCar from './cpns/MyCar.vue'
	import MoreService from './cpns/MoreService.vue'
	
	onMounted(() => {
		uni.setNavigationBarColor({
			frontColor: '#000000',
			backgroundColor: '#e0ecfc'
		})
	})
	
	// 点击设置按钮
	function handleSetClick() {
		console.log("设置按钮被点击了");
	}
	
	// 点击钱包子项
	function handleWalletItemClick(index) {
		console.log("walletItem被点击了：", index);
	}
	
	// 点击菜单子项
	function handleMenuItemClick(index) {
		console.log("menuItem被点击了：", index);
	}
	
	// 点击添加爱车
	function handleAddCarClick() {
		console.log("点击了添加爱车");
	}
	
	// 点击更多服务子项
	function handleServiceClick(index) {
		console.log("更多服务被点击了：", index);
	}
</script>

<style lang="scss">
 	.user {
 		padding-bottom: 240rpx; 
		
 	}
</style>
