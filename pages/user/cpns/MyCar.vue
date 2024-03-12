<template>
	<view class="mycar">
		<uni-card class="card" title="我的爱车">
			<template #default>
				<view class="card-info">
					<view class="add-image" @click="addCarClick">
						<image src="@/static/images/add.png" mode="widthFix"></image>
					</view>
					<view class="text">
						<view class="title">认证爱车</view>
						<text>添加车牌后，驶出停车场将自动为您减免停车费</text>
					</view>
				</view>
			</template>
		</uni-card>
	</view>
</template>

<script setup>
	import { defineEmits } from 'vue'
	
	const emits = defineEmits(['addCarClick'])
	
	function addCarClick() {
		emits('addCarClick')
	}
</script>

<style lang="scss">
	::v-deep .uni-card {
		border-radius: 26rpx;
	}

	.mycar {

		.card-info {
			@include normalFlex();
			align-items: center;
			.add-image {
				image {
					width: 120rpx;
				}
			}

			.text {
				margin-left: 16rpx;
				.title {
					font-size: 32rpx;
					font-weight: 500;
				}
			}
		}
	}
</style>