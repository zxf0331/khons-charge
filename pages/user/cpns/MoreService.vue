<template>
	<view class="more-service">
		<uni-card class="card" title="更多服务">
			<template #default>
				<view class="card-info">
					<template v-for="(item, index) in menu">
						<view class="menu-item" @click="moreServItemClick(index)">
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
	import { defineEmits } from 'vue'
	
	const emits = defineEmits(['moreServItemClick'])
	
	function moreServItemClick(index) {
		emits('moreServItemClick', index)
	}
	
	// 模拟数据
	const menu = [
		{
			img: '/static/images/menu/message.png',
			title: '消息中心'
		},
		{
			img: '/static/images/menu/mycar.png',
			title: '我的车辆'
		},
		{
			img: '/static/images/menu/contactus.png',
			title: '联系我们'
		},
		{
			img: '/static/images/menu/feedback.png',
			title: '我的反馈'
		},

	]
</script>

<style lang="scss">
	.more-service {
		.card-info {
			@include normalFlex($justify: flex-start);
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