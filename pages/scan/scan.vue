<template>
	<view class="">
		<view>scan</view>
		<cc-myTabbar :tabBarShow="1"></cc-myTabbar>
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

<style lang="scss">

</style>
