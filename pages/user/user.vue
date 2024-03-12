<template>
	<view class="">
		<user-info @setClick='handleSetClick' @walletItemClick='handleWalletItemClick'></user-info>
		<menu-card ></menu-card>
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
	import UserInfo from './cpns/UserInfo.vue'
	import MenuCard from './cpns/MenuCard.vue'
	
	// 点击设置按钮
	function handleSetClick() {
		console.log("设置按钮被点击了");
	}
	
	// 点击钱包子项
	function handleWalletItemClick(index) {
		console.log("walletItem被点击了：", index);
	}
</script>

<style lang="scss">
 
</style>
