# cc-myTabbar

### 我的技术微信公众号

查看更多前端组件和框架信息，请关注我的技术微信公众号【前端组件开发】

![图片](https://i.postimg.cc/RZ0sjnYP/front-End-Component.jpg)


#### 使用方法 
```使用方法	
<!-- tabBarShow：显示第几个tabbar -->
<cc-myTabbar :tabBarShow="0"></cc-myTabbar>

<!-- 隐藏原生tabbar -->				
onReady() {
		uni.hideTabBar()
}

<!-- 页面距离底部140rpx(自定义tabbar的高度) -->
page {
		padding-bottom: 140rpx;
}
```

#### HTML代码实现部分
```html

<template>
	<view class="page">

		<!-- tabBarShow：显示第几个tabbar -->
		<cc-myTabbar :tabBarShow="0"></cc-myTabbar>

	</view>
</template>

<script>
	export default {
		
		data() {
			return {

			};
		},
		onReady() {
			uni.hideTabBar()
		},

		methods: {

		}
	}
</script>

<style scoped lang="scss">
	page {
		padding-bottom: 140rpx;

	}
</style>


```
