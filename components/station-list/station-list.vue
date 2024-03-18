<template>
	<view class="station_list">
		<view class="img">
			<image src="../../static/uni.png" mode=""></image>
		</view>
		<view class="content">
			<view class="name">东湖公园2号站点</view>
			<view class="address">锦江区大慈寺路48-1号</view>
			<view class="price">
				<text>电费：0.6元/度   </text>
				<text>服务费：0.1元</text>
			</view>
			<view class="status">
				<view class="station_info">
					<text>忙/闲：5/5</text>
					<text>慢充</text>
				</view>
				<view class="distance">
					<i class="iconfont icon-navigation"></i>
					<text>288m</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss">
.station_list {
	@include normalFlex();
	border: $gBorder;
	border-radius: $gRadius;
	box-shadow: $gShadow;
	height: 200rpx;
	padding: 20rpx;
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
			font-weight: 600;
			margin-bottom: 4rpx;
		}
		.address {
			font-size: 24rpx;
			color: #666666;
			margin-bottom: 6rpx;
		}
		.price {
			font-size: 24rpx;
			color: red;
			margin-bottom: 8rpx;
		}
		.status {
			@include normalFlex();
			font-size: 24rpx;
			.distance {
				@include normalFlex($justify: center);
				border-radius: 18rpx;
				background-color: #e7eef6;
				padding: 2rpx;
				.icon-navigation {
					color: #3b82fc;
					font-size: 40rpx;
				}
				text {
					font-size: $gFontSize;
				}
			}
			
		}

	}
}
</style>