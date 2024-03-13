<template>
	<view class="banner">
		<swiper class="swiper" circular :indicator-dots="true" :autoplay="true">
			<template v-for='item in banners' :key='item'>
				<swiper-item @click="handleItemClick(item)">
					<image class="swiper-item" :src='item.url' mode='widthFix'></image>
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
		.swiper-item {
			width: 140%;
		}
	}
</style>