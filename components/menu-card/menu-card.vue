<template>
	<view class="menu-card">
		<template v-for="(item, index) in menu" :key="item">
			<view class="menu-item" @click="menuItemClick(index)">
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
	
	function menuItemClick(index) {
		emits('menuItemClick', index)
	}
	
	
</script>

<style lang="scss">
	.menu-card {
		@include normalFlex($justify: space-around);
		margin: 30rpx;
		border-radius: $gRadius;
		border:  $gBorder;
		box-shadow: $gShadow;
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