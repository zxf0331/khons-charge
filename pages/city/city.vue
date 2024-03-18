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
				<i class="iconfont icon-location"></i>
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

<script setup>
import { ref, computed } from 'vue';
import cityData from './city.json';
import { jsonp } from 'vue-jsonp';
import { useMainStore } from '@/store/main.js'

const mainStore = useMainStore()
let CityName = computed(() => mainStore.currentCity)
const HotCity = ref(['北京', '深圳', '上海', '成都', '广州', '广东']);
const LatterName = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
const CityList = ref(cityData.city);
const LetterId = ref('');
const key = 'XW7BZ-HNCC5-QLRIH-IBKOZ-MHQ2F-CXFON';

// onMounted(() => {
//     getCityName();
// });

function getLetter(name) {
    LetterId.value = name;
}

function getStorage(Name) {
    // uni.setStorage({
    //     key: 'City_Name',
    //     data: Name	
    // });
    // CityName.value = Name;
	mainStore.setCity(Name)
    uni.navigateBack({
        url: '/pages/home/home'
    });
}

// function getCityName() {
//     setTimeout(() => {
//         uni.getStorage({
//             key: 'City_Name',
//             success(res) {
//                 // CityName.value = res.data;
// 				mainStore.setCity(res.data)
//             }
//         });
//     }, 500);
// }

function requestLocationPermission() {
    // #ifdef MP-WEIXIN
    uni.authorize({
        scope: 'scope.userLocation',
        success: () => {
            getLocation();
        },
        fail: handleLocationPermissionDenied,
    });
    // #endif
    
    // #ifdef H5
    getLocation();
    // #endif
    
    // #ifdef APP-PLUS
    plus.geolocation.getCurrentPosition(getLocation, handleLocationPermissionDenied, {geocode: true});
    // #endif
}

function getLocation() {
    uni.getLocation({
        type: 'gcj02',
        success: (res) => {
            let lat = res.latitude;
            let lng = res.longitude;
            // #ifndef H5
            getCityByLatLon(lat, lng)
            // #endif
            
            // #ifdef H5
            H5getCityByLatLon(lat, lng)
            // #endif
        },
        fail: (errMsg) => {
            console.log(errMsg);
            uni.showToast({
                title: '无法获取位置信息',
                icon: 'none'
            })
        }
    })
}

function handleLocationPermissionDenied() {
    uni.showModal({
        title: '位置权限被拒绝',
        content: '请在系统设置或应用权限管理中允许使用位置信息',
        confirmText: "确认",
        cancelText: "取消",
        success: function(res) {
            if (res.confirm) {
                uni.openSetting({
                    success() {
                        uni.getLocation()
                    }
                })
            }
        }
    });
}

function H5getCityByLatLon(lat, lng) {
    const params = {
        headers: {"content-type": "application/xml"},
        callbackQuery: "callbackParam",
        callbackName: "jsonpCallback"
    };
    let url = `https://apis.map.qq.com/ws/geocoder/v1/?location=${lat},${lng}&key=${key}&output=jsonp&callback="jsonpCallback"`; 
    jsonp(url, params).then(res => {
        let data = res.data;
        let CityNameResult = res.result.ad_info.city
		mainStore.setCity(CityNameResult)
		CityName = CityNameResult
        // uni.setStorage({
        //     key: 'City_Name',
        //     data: CityNameResult
        // });
    }).catch(err => {
        console.log('err', err)
    });
}

function getCityByLatLon(lat, lng) {
    uni.request({
        url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${lat},${lng}&key=${key}`,
        method: "GET",
        success(ress) {
            let CityNameResult = ress.data.result.address_component.city
            mainStore.setCity(CityNameResult)
			CityName = CityNameResult
            // uni.setStorage({
            //     key: 'City_Name',
            //     data: CityNameResult
            // })
        },
        fail() {
            uni.showToast({
                'title': '对不起，数据获取失败！',
                'icon': 'none'
            })
        }
    })
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
		
		.icon-location {
			font-size: 34rpx;
			padding-top: 4rpx;
			margin-right: 4rpx;
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
			height: 60rpx;
			font-size: 32rpx;
			line-height: 60rpx;
			border-bottom: 1px solid #f7f7f7;
			padding-left: 10rpx;
			color: #3b82fc;
			background-color: #ececec;

		}
		.ynq-CityLine {
			margin: 20rpx 0px;
			text {
				display: block;
				line-height: 60rpx;
				padding: 0px 10rpx;
				font-size: 30rpx;
				color: #767676;

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