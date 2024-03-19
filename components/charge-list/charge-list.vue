<template>
	<view class="station_list">
		<view class="img">
			<image :src="stationInfo.img" mode=""></image>
		</view>
		<view class="content">
			<view class="name">{{ stationInfo.name }}</view>
			<view class="address">{{ stationInfo.address }}</view>
			<view class="price">
				<view class="elec_charge">
					电费：
					<text>{{ stationInfo.elec_charge }}</text>
					元/度
				</view>
				<view class="serv_charge">
					服务费：
					<text>{{ stationInfo.serv_charge }}</text>
					元
				</view>
			</view>
			<view class="status">
				<view class="station_info">
					<text style="margin-right: 20rpx;">空闲{{ stationInfo.free }}/{{ stationInfo.total }}</text>
					<text>{{ stationInfo.type }}</text>
					<uv-line-progress
						class="progress"
					    height="8"
					    :showText="false"
					    :percentage="percentage"
					    activeColor="#3c9cff"
					    inactiveColor="#E0E0E0"
					>
					</uv-line-progress>
				</view>
				<view class="distance">
					<i class="iconfont icon-navigation"></i>
					<text>3km</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { computed } from 'vue'
	
	const props = defineProps({
		stationInfo: {
			type: Object,
			default: () => {}
		}
	})
	
	const percentage = computed(() => (props.stationInfo.free / props.stationInfo.total)*100) 
	

</script>

<style lang="scss">
.station_list {
	@include normalFlex();
	border: $gBorder;
	border-radius: $gRadius;
	box-shadow: $gShadow;
	background-color: #ffffff;
	height: 200rpx;
	padding: 20rpx;
	margin-top: 20rpx;
	.img {
		flex: 1;
		image{
			width: 200rpx;
			height: 200rpx;
			border-radius: $gRadius;
		}
	}
	.content {
		flex: 2.5;
		margin-left: 16rpx;	
		.name {
			font-size: 32rpx;
			font-weight: $gFontWeight;
			margin-bottom: 4rpx;
		}
		.address {
			font-size: 24rpx;
			color: #999999;
			margin-bottom: 8rpx;
		}
		.price {
			@include normalFlex( $justify: flex-start);
			font-size: 24rpx;
			margin-bottom: 8rpx;
			text {
				font-size: $gFontSize;
				font-weight: $gFontWeight;
				color: red
			}
			.elec_charge {
				margin-right: 20rpx;
			}

		}
		.status {
			@include normalFlex();
			font-size: 24rpx;
			.station_info {
				.progress {
					margin-top: 8rpx;
				}
			}
			.distance {
				@include normalFlex($justify: center);
				align-items: center;
				border-radius: 16rpx;
				background-color: #ecf4fe;
				color: #3c9cff;
				padding: 0 8rpx;
				.icon-navigation {
					font-size: 40rpx;
				}
				text {
					font-size: $gFontSize;
					font-weight: $gFontWeight;
				}
			}
			
		}

	}
}
</style>