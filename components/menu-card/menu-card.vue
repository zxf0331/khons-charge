<template>
	<view class="menu-card">
		<template v-for="(item, index) in menu" :key="item.title">
			<view class="menu-item" @click="menuItemClick(index, item)">
				<image class="image" :src="item.img" mode="widthFix"></image>
				<text class="title">{{ item.title }}</text>
			</view>
		</template>
	</view>
</template>

<script setup>
	import { defineEmits } from 'vue'
	
	defineProps({
		menu: {
			type: Array,
			default: () => []
		}
	})
	
	const emits = defineEmits(['menuItemClick'])
	
	function menuItemClick(index, item) {
		emits('menuItemClick', index)
		if(item.action && item.action === 'scanCode') {
			// 执行扫码操作
			uni.scanCode({
				success: (res) => {
					console.log('扫描结果：', res)
					// TODO 后续处理
					
				},
				fail: () => {
					uni.showToast({
						title: '扫描失败',
						icon: 'none'
					})
				}
			})
		}
		else if(item.pagePath) {
			uni.navigateTo({
				url: item.pagePath
			})
		} else {
			uni.showToast({
				title: '功能正在开发中...',
				icon: 'none'
			})
		}
	}
	
	
</script>

<style lang="scss">
	.menu-card {
		@include normalFlex($justify: space-around);
		margin: $gMargin;
		border-radius: $gRadius;
		border:  $gBorder;
		box-shadow: $gShadow;
		background-color: #ffffff;
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