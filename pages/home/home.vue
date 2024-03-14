<template>
	<view class="home">
		<view class="top">
			<view class="search">
				<button type="default" @click="chooseCity">选择城市</button>
				<uni-search-bar placeholder="输入目的地/电站名称" bgColor="#ffffff" readonly />
			</view>
			<home-banner :banners="banners"></home-banner>
		</view>
		<cc-myTabbar :tabBarShow="0"></cc-myTabbar>
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
	import HomeBanner from './cpns/HomeBanner.vue'

	onMounted(() => {
		uni.setNavigationBarColor({
			frontColor: '#000000',
			backgroundColor: '#e0ecfc'
		})
	})
	
	function chooseCity() {
		uni.navigateTo({
			url: '/pages/city/city'
		})
	}
	// 模拟数据
	const banners = [
		{
			url: '/static/images/banner/banner1.jpg'
		},
		{
			url: '/static/images/banner/banner2.jpg'
		},
		{
			url: '/static/images/banner/banner3.jpg'
		}
	]
</script>

<style lang="scss">
	.home {
		.top {
			background-image: linear-gradient(to bottom, #e0ecfc, #fcfdff);

			.search {
				
			}
			.banner {
				padding: 20rpx;
			}
		}

	}
</style>