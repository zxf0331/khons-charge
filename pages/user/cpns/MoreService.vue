<template>
	<view class="more-service">
		<uni-card class="card" title="更多服务">
			<template #default>
				<view class="card-info">
					<template v-for="(item, index) in menu">
						<view class="menu-item" >
							<image class="image" :src="item.img" mode="widthFix"></image>
							<text class="title">{{ item.title }}</text>
						</view>
					</template>
				</view>
			</template>
		</uni-card>
	</view>
</template>

<script setup>
	// 模拟数据
	const menu = [
		{
			img: '/static/images/menu/order.png',
			title: '充电数据'
		},
		{
			img: '/static/images/menu/favor.png',
			title: '开具发票'
		},
		{
			img: '/static/images/menu/order.png',
			title: '开票历史'
		},
		{
			img: '/static/images/menu/favor.png',
			title: '即插即充'
		},
		{
			img: '/static/images/menu/order.png',
			title: '联系我们'
		},
		{
			img: '/static/images/menu/favor.png',
			title: '我的车辆'
		},
		{
			img: '/static/images/menu/order.png',
			title: '我的反馈'
		},
		{
			img: '/static/images/menu/favor.png',
			title: '消息中心'
		}
	]
</script>

<style lang="scss">
	.more-service {
		.card-info {
			@include normalFlex();
			flex-wrap: wrap;
			.menu-item {
				@include normalFlex(column, $justify: space-around);
				align-items: center;
				width: 25%;
				padding-bottom: 40rpx;
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
	}
</style>