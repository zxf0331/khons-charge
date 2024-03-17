<template>
	<view class="home">
		<view class="top">
			<view class="search">
				<view class="city" @click="chooseCity">
					<text class="current_city">成都</text>
					<i class="iconfont icon-triangle"></i>
				</view>
				<uni-search-bar 
					class="search_bar" 
					placeholder="输入目的地/电站名称" 
					radius="20"
					bgColor="#ffffff" 
					readonly 
					@tap="searchBarClick"/>
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
	
	function searchBarClick() {
		uni.navigateTo({
			url: '/pages/search/search'
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
				@include normalFlex();
				align-items: center;
				padding: 0 20rpx;
				
				.city {
					@include normalFlex();
					flex: 1;
					.icon-triangle {
						padding-top: 4rpx;
						font-size: 32rpx;
					}
				}
				.search_bar {
					flex: 5.5; 
				}
			}
			.banner {
				padding: 20rpx;
			}
		}

	}
</style>