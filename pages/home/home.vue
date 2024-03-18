<template>
	<view class="home">
		<view class="top">
			<!-- 搜索栏 -->
			<view class="search">
				<view class="city" @click="chooseCity">
					<text class="current_city">{{ mainStore.currentCity }}</text>
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
			<!-- 轮播图 -->
			<home-banner :banners="banners"></home-banner>
		</view>
		<menu-card :menu='menu'></menu-card>
		<!-- 列表区域 -->
		<view class="charge_station">
			<view class="top_area">
				<view class="title">附近充电站</view>
				<view class="mode">地图模式</view>
			</view>
			<!-- 充电站列表 -->
			<station-list></station-list>
		</view>
		<!-- 自定义tabar -->
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
	import { useMainStore } from '@/store/main.js'
	
	const mainStore = useMainStore()
	
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
	// 轮播图模拟数据
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
	
	// 菜单数据
		const menu = [
			{
				img: '/static/images/menu/scan.png',
				title: '我要充电'
			},
			{
				img: '/static/images/menu/wallet.png',
				title: '我要充值'
			}
		]
</script>

<style lang="scss">
	// 重写菜单组件样式
	::v-deep .menu-card {
		justify-content: start;
		.menu-item {
			margin-left: 40rpx;
		}
	}
	
	.home {
		.top {
			background-image: linear-gradient(to bottom, #e0ecfc, #fcfdff);

			.search {
				@include normalFlex();
				align-items: center;
				padding: 0 20rpx;
				
				.city {
					@include normalFlex( $justify: center);
					flex: 1;
					.current_city {
						font-size: 28rpx;
					}
					.icon-triangle {
						padding-top: 4rpx;
						font-size: 32rpx;
					}
				}
				.search_bar {
					flex: 4.7; 
				}
			}
			.banner {
				padding: 20rpx;
			}
		}
		
		.charge_station {
			margin: 0 40rpx;
			.top_area {
				@include normalFlex()
			}
		}

	}
</style>