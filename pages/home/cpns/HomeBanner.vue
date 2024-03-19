<template>
	<view class="banner">
		<swiper class="swiper" circular :indicator-dots="true" :autoplay="true">
			<template v-for='item in banners' :key='item'>
				<swiper-item @click="handleItemClick(item)">
					<image class="swiper-item" :src='item.url' mode="aspectFill"></image>
				</swiper-item>
			</template>
		</swiper>
	</view>
</template>

<script setup>
	defineProps({
		banners: {
			type: Array,
			default: () => []
		}
	})
</script>

<style lang="scss">
	.banner {
		.swiper {
			height: 240rpx;
		}
		.swiper-item {
		    width: 100%; 
		    height: 100%; 
		  }
	}
</style>