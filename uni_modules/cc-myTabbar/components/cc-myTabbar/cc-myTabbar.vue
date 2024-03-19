<template>
	<view class="page-total">
		<view class="tab-list">
			<view class="list" v-for="(item,index) in TabBarList" 
			@click="onTabBar(item,index)" :style="{marginTop: (index == 1) ?  '-18px' : '0px'}"
			:key="index">
				<image class="img" :src="item.acImg" mode="widthFix" v-show="tabBarShow === index" :style="{width: (index == 1) ?  '60px' : '24px',borderRadius: (index == 1) ?  '50%' : '0px', boxShadow: (index == 1) ? '0 0 12px rgba(25, 255, 255, 0.7)' : 'none'}"></image>
				<image class="img" :src="item.img" mode="widthFix" v-show="tabBarShow != index" :style="{width: (index == 1) ?  '60px' : '24px',borderRadius: (index == 1) ?  '50%' : '0px', boxShadow: (index == 1) ? '0 0 12px rgba(25, 255, 255, 0.7)' : 'none'}"></image>
				
				<!-- background: (index == 1) ?  'red' : '' -->
				<text  :class="{'action':tabBarShow===index}" :style="{marginTop: (index == 1) ?  '4px' : '0px'}">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabBarList:[
					{
						index: 0,
						name: '首页',
						img: '/static/images/tabbar/home.png',
						acImg: '/static/images/tabbar/home_select.png'
					},
					{
						index: 1,
						name: '扫码充电',
						img: '/static/images/tabbar/scaner.png',
						acImg: '/static/images/tabbar/scaner.png'
					},
					{
						index: 2,
						name: '我的',
						img: '/static/images/tabbar/mine.png',
						acImg: '/static/images/tabbar/mine_act.png'
					}
				],
				codeheight: 0,
				isOverall: 0,
				phoneModel: '',
			};
		},
		props:{
			tabBarShow: {
				type: Number,
				default: 0,
			}
		},
		// mounted() {
		// 	try {
		// 	    const res = uni.getSystemInfoSync();
		// 			let that = this;
		// 	    // 获取系统信息
		// 	    uni.getSystemInfo({
		// 	    	success(res) {
		// 	    		console.log(res.brand) //手机牌子
		// 	    		console.log(res.model) //手机型号
		// 	    		console.log(res.screenWidth) //屏幕宽度
		// 	    		console.log(res.screenHeight) //屏幕高度
		// 					that.codeheight = Math.round(res.screenHeight);
		// 					that.phoneModel =res.model
		// 					if(res.model.search('iPhone')){
		// 						that.isOverall = 0;
		// 					}else if(Math.round(res.screenHeight)>740){
		// 					 that.isOverall = 1;
		// 					}
		// 					console.log(that.isOverall);
		// 	    	}
		// 	    });
		// 	} catch (e) {
		// 	    // error
		// 	}
		// },
		methods:{
			/**
			 * @param {Object} item
			 * @param {Number} index
			 */
			onTabBar(item,index){
				// this.tabBarShow = index;
				switch (index){
					case 0:
						uni.switchTab({
							url:'/pages/home/home'
						})
						break;
					case 1:
						uni.switchTab({
							url:'/pages/scan/scan'
						})
						break;
					case 2:
						uni.switchTab({
							url:'/pages/user/user'
						})
						break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'cc-myTabbar.scss';
</style>
