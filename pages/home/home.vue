<template>
	<view class="home">
		<view class="top">
			<view class="search">
				<uni-search-bar placeholder="站点查询" bgColor="#ffffff" readonly />
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