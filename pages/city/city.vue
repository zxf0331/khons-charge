<template>
    <view class="main-Location">
        <view class="Location-Letter">
            <view hover-class="Click-Latter" @tap="getLetter('ScrollTop')">*</view>
            <view v-for="(l,i) in LatterName" :key="i" hover-class="Click-Latter" @tap="getLetter(l)" :style="{'color': LetterId === l ? '#4662D9' : '#000'}">{{l}}</view>
        </view>
        <view class="ynq-AutoLocation u_flex jcsb">
            <view class="ynq-AutoAddress">
                <text class="ynq ynq-dizhi"></text>
                <text>当前定位：</text>
                <text>{{CityName}}</text>
            </view>
            <view class="ynq-ReLocation u_flex" @click="requestLocationPermission">
                <u-icon name="reload" color="#000"></u-icon>
                <text class="ml5">重新定位</text>
            </view>
        </view>
        <scroll-view scroll-y="true" class="ynq-ScrollView" :scroll-into-view="LetterId">
            <view class="ynq-HotCity" id="ScrollTop">
                <view class="ynq-HotCityTitle">
                    <text class="ynq ynq-fire"></text>
                    <text>热门城市</text>
                </view>
                <view class="ynq-HotCityList flex">
                    <text class="radius-3" @tap="getStorage(item)" v-for="(item,index) in HotCity" :key="index">{{item}}</text>
                </view>
            </view>
            <view class="ynq-CityList">
                <block v-for="(item,index) in CityList" :key="index">
                    <view class="ynq-CityLetter" :id="item.initial">{{item.initial}}</view>
                    <view class="ynq-CityLine">
                        <text @tap="getStorage(item_city.name)" v-for="(item_city,name_index) in item.list" :key="name_index">{{item_city.name}}</text>
                    </view>
                </block>
            </view>
        </scroll-view>
    </view>
</template>

<script>
import cityData from './city.json'
export default {
    data() {
        return {
            CityName: '北京',
            HotCity: ['北京', '深圳', '上海', '成都', '广州', '广东'],
            LatterName: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            CityList: cityData.city,
            LetterId: '',
        }
    },
    onLoad() {
        this.getCityName();
    },
    methods: {
        getLetter(name) {
            this.LetterId = name;
        },
        getStorage(Name) {
            uni.setStorage({
                key: 'City_Name',
                data: Name
            });
            this.CityName = Name;
            uni.navigateBack({
                url: '/pages/home/home'
            });
        },
        getCityName() {
            let _that = this;
            setTimeout(function() {
                uni.getStorage({
                    key: 'City_Name',
                    success(res) {
                        _that.CityName = res.data;
                    }
                });
            }, 500);
        },
        requestLocationPermission() {
        // #ifdef MP-WEIXIN
            uni.authorize({
                scope: 'scope.userLocation',
                success: () => {
                    this.getLocation();
                },
                fail: this.handleLocationPermissionDenied,
            });
            // #endif
            
            // #ifdef H5
            this.getLocation();
            // #endif
            
            // #ifdef APP-PLUS
            plus.geolocation.getCurrentPosition(this.getLocation, this.handleLocationPermissionDenied, {geocode: true});
            // #endif
        },
        getLocation() {
            uni.getLocation({
                type: 'gcj02',
                success: (res) => {
					console.log("success");
                    let lat = res.latitude;
                    let lng = res.longitude;
					let key = 'XW7BZ-HNCC5-QLRIH-IBKOZ-MHQ2F-CXFON';
                    // 这里假设有一个函数根据经纬度获取城市名称，实际需要自行实现
                    this.getCityByLatLon(lat, lng);
                },
                fail: () => {
					console.log("fail");
                    uni.showToast({
                        title: '无法获取位置信息',
                        icon: 'none'
                    });
                }
            });
        },
        handleLocationPermissionDenied() {
            uni.showModal({
                title: '位置权限被拒绑',
                content: '请在系统设置或应用权限管理中允许使用位置信息',
                showCancel: false
            });
        },
        // 示例方法，根据经纬度获取城市名称
        getCityByLatLon(lat, lng) {
            // 这里应实现通过经纬度获取城市名称的逻辑，可能需要调用外部API
            // 假设获取到的城市名称赋值给CityName
            // this.CityName = '某城市名称';
			console.log("成功调用");
        },
    },
}
</script>

 
<style lang="scss" scoped>
	.main-Location {
		height: 100vh;
	}
 
	.ynq-AutoLocation {
		width: calc(100% - 40rpx);
		background: rgba(250, 250, 250, .5);
		padding: 20rpx 20rpx;
 
		text.ynq {
			font-size: 32rpx;
			margin-right: 10rpx;
		}
 
		text {
			font-size: 30rpx;
		}
	}
 
	.ynq-HotCity {
		padding: 20rpx;
	}
 
	.ynq-HotCityTitle {
		padding: 0rpx 0rpx;
 
		text.ynq {
			margin-right: 10rpx;
			color: #ff0000;
			font-size: 32rpx;
		}
 
		text {
			font-size: 30rpx;
		}
	}
 
	.ynq-HotCityList {
		padding: 20rpx 0 0 0;
		flex-wrap: wrap !important;
 
		text {
			width: 190rpx;
			display: inline-block;
			text-align: center;
			background: rgba(200, 200, 200, .2);
			font-size: 26rpx;
			margin: 10rpx;
			padding: 20rpx 10rpx;
		}
	}
 
	.Location-Letter {
		position: fixed;
		right: 5rpx;
		top: 180rpx;
		width: 30rpx;
		z-index: 100;
 
		view {
			display: block;
			width: 30rpx;
			text-align: center;
			height: 35rpx;
			line-height: 35rpx;
			font-size: 22rpx;
			transition: ease .3s;
			-webkit-transition: ease .3s;
		}
	}
 
	.ynq-CityList {
		padding: 0px 40rpx 0 20rpx;
 
		.ynq-CityLetter {
			line-height: 30rpx;
			height: 40rpx;
			font-size: 24rpx;
			border-bottom: 1px solid #f7f7f7;
			padding-left: 10rpx;
			color: #909090;
		}
		.ynq-CityLine {
			margin: 20rpx 0px;
			text {
				display: block;
				line-height: 60rpx;
				padding: 0px 10rpx;
				font-size: 30rpx;
				color: #767676;
				&:nth-child(even) {
					background-color: rgba(200, 200, 200, .12);
				}
			}
		}
	}
	.ynq-ScrollView {
		height: calc(100vh - 160rpx);
	}
 
	.Click-Latter {
		font-size: 30rpx !important;
	}
	.jcsb {
		justify-content: space-between;
	}
	.u_flex{
		display: flex;
	}
</style>