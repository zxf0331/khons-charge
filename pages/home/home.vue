<template>
	<view class="">
		<view>首页</view>
		<cc-myTabbar :tabBarShow="0"></cc-myTabbar>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady() {
			uni.hideTabBar()
		},
		methods: {
			
		}
	}
</script>

<style>

</style>