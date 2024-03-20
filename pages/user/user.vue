<template>
	<view class="user">
		<user-info @setClick='handleSetClick' @walletItemClick='handleWalletItemClick'></user-info>
		<menu-card :menu='menu' @menuItemClick='handleMenuItemClick'></menu-card>
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
	
	// 模拟数据
	const menu = [
		{
			img: '/static/images/menu/order.png',
			title: '我的订单'
		},
		{
			img: '/static/images/menu/statistics.png',
			title: '充电数据'
		},
		{
			img: '/static/images/menu/charging.png',
			title: '即插即充'
		},
		{
			img: '/static/images/menu/favor.png',
			title: '站点收藏'
		}
	]
</script>

<style lang="scss">

 	.user {
 		padding-bottom: 180rpx; 
		
 	}
</style>
