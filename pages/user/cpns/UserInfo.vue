<template>
	<view class="userinfo">
		<view class="info-top">
			<view class="info">
				<image class="avatar" src="@/static/images/avatar.png" mode=""></image>
				<view class="userdetail">
					<text class="username">用户名</text>
					<text>155****1558</text>
				</view>
			</view>
			<view class="set">
				<i class="iconfont icon-set" style="font-size: 48rpx;" @click="setClick"></i>
			</view>
		</view>
		<view class="info-bottom">
			<view class="wallet">
				<template v-for="(item, index) in wallet" :key="item">
					<view class="wallet-item" @click="walletItemClick(index, item)">
						<view class="item-num"> {{ item.num }}</view>
						<view class="item-name">
							<text class="item-name">{{ item.itemName }}</text>
							<i class="iconfont icon-right-arrow"></i>
						</view>
					</view>
				</template>
			</view>
		</view>
	</view>
</template>


<script setup>
	import { defineEmits } from 'vue'
	
	// 模拟数据
	const wallet = [
		{
			itemName: "余额(元)",
			num: 525.36,
			pagePath: '/pages/wallet/wallet'
		},
		{
			itemName: "等级",
			num: 1
		},
		{
			itemName: "我的积分",
			num: 0
		}
	]
	
	const emits = defineEmits(['setClick', 'walletItemClick'])
	
	// 点击设置按钮
	function setClick() {
		emits('setClick')
	}
	
	// 点击item
	function walletItemClick(index, item) {
		emits('walletItemClick', index)
		if(item.pagePath) {
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

<style lang='scss'>

	.userinfo {
		background-image: $gBgImage;
		.info-top{
			@include normalFlex();
			padding: 20rpx;
			
			.info {
				@include normalFlex();
			
				.avatar {
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
					margin-right: 20rpx;
				}
			
				.userdetail {
					@include normalFlex(column, space-around);
			
					text {
						margin: 4rpx 0;
					}
			
					.username {
						font-size: 36rpx;
						font-weight: $gFontWeight;
					}
				}
			}
			
			.set {
				@include normalFlex();
				position: absolute;
				right: 20rpx;
				top: 20rpx
			}
		}
		
		.info-bottom {
			margin-top: 16rpx;
			padding-bottom: 30rpx;
			.wallet {
				@include normalFlex($justify: space-around);	
							
				.wallet-item {
					.item-num {
						text-align: center;
						font-size: 40rpx;
						font-weight: $gFontWeight;
					}
					.item-name {
						margin-top: 4rpx;
						font-size: $gFontSize;
						color: $gFontColor;
						.icon-right-arrow {
							display: inline;
							font-size: $gFontSize;
						}
					}

				}
			}
		}
	}
</style>