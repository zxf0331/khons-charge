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
				<uni-section title="附近充电站" type="line"></uni-section>
				<view class="mode">
					<i class="iconfont icon-map"></i>
					<text class="mode">地图模式</text>
				</view>
			</view>
			<template v-for="itemInfo in stationList" :key="itemInfo.name">
				<charge-list :stationInfo="itemInfo"></charge-list>
			</template>
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
		
		// 模拟充电站列表数据
		const stationList = [
			{
				img: '/static/images/station_1.jpg',
				name: '东方丽景充电站',
				address: '四川省成都市锦江区海桐街354号',
				elec_charge: '0.6',
				serv_charge: '0.1',
				free: '8',
				total: '20',
				type: '慢充'
			},
			{
				img: '/static/images/station_2.jpg',
				name: '环球中心充电站',
				address: '四川省成都市武侯区环球东路',
				elec_charge: '0.65',
				serv_charge: '0.2',
				free: '18',
				total: '20',
				type: '快充'
			},
			{
				img: '/static/images/station_3.jpg',
				name: '成都中国核动力润诚达快充站',
				address: '四川省成都市武侯区白云街55号',
				elec_charge: '0.8',
				serv_charge: '0.1',
				free: '2',
				total: '15',
				type: '快充'
			},
			{
				img: '/static/images/station_4.jpg',
				name: '润诚达武侯万达充电站',
				address: '四川省成都市武侯区聚龙路372号',
				elec_charge: '0.6',
				serv_charge: '0.1',
				free: '4',
				total: '12',
				type: '慢充'
			}
		]
</script>

<style lang="scss">
	// 重写菜单组件样式
	// ::v-deep .menu-card {
	// 	justify-content: space-around;

	// }
	
	//修改uni-section组件默认padding
	::v-deep .uni-section-header {
		padding: 0 20rpx !important;
	}
	
	::v-deep .uni-section {
		background-color: #f5f5f5;
	}
	
	.home {
		padding-bottom: 210rpx; 
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
			margin: 0 30rpx;
			.top_area {
				@include normalFlex();
				font-size: $gFontSize;
				.mode {
					@include normalFlex();
					align-items: center;
					.icon-map {
						margin-right: 4rpx;
					}
				}
			}
		}

	}
</style>