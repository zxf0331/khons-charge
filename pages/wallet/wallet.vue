<template>
	<view class="wallet">
		<view class="wallet_card">
			<view class="balance">
				<text style="color: #f3f3f3; font-size: 24rpx;">余额(元)</text>
				<view class="money">
					<text class="num">45.00</text>
					<button class="pay" size="mini">充值</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { onMounted } from 'vue'
	
	onMounted(() => {
		uni.setNavigationBarColor({
			frontColor: '#000000',
			backgroundColor: '#e0ecfc'
		})
	})
</script>

<style lang="scss">
.wallet {
	.wallet_card {
		background-image: $gBgImage;
		padding: 30rpx;
		.balance {
			padding: 30rpx;
			border-radius: $gRadius;
			background-color: #0e75ee;
			.money {
				@include normalFlex();
				align-items: center;
				margin-top: 20rpx;
				width: 100%;
				.num {
					color: #fffefc;
					font-size: 60rpx;
					font-weight: 600;
				}
				.pay {
					border-radius: 60rpx;
					margin: 0 !important;
				}
		
			}
		}
	}
}
</style>
