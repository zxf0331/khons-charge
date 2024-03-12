<template>
	<view class="menu-card">
		<template v-for="(item, index) in menu" :key="item">
			<view class="menu-item" @click="">
				<image class="image" :src="item.img" mode="widthFix"></image>
				<text class="title">{{ item.title }}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
	// 模拟数据
	const menu = [
		{
			img: '/static/images/menu/order.png',
			title: '我的订单'
		},
		{
			img: '/static/images/menu/favor.png',
			title: '我的订单'
		},
		{
			img: '/static/images/menu/order.png',
			title: '我的订单'
		},
		{
			img: '/static/images/menu/favor.png',
			title: '站点收藏'
		},
	]
</script>

<style lang="scss">
	.menu-card {
		@include normalFlex($justify: space-around);
		margin: 20rpx;
		border-radius: 26rpx;
		border:  1px solid #DCDCDC;
		box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 3px 1px;
		padding: 20rpx 0;
		.menu-item {
			@include normalFlex(column, $justify: space-around);
			align-items: center;
			.image {
				width: 70rpx;
				height: 70rpx;
			}
			.title {
				margin-top: 8rpx;
				font-size: $gFontSize;
				color: $gFontColor;
			}
		}
	}
</style>