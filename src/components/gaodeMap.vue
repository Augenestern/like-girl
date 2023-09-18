<template>
    <div class="waibox">
        <div id="container"></div>
        <div class="weizhi">当前位置:{{ weizhi }}</div>
    </div>
</template>

<script setup lang="ts">
import { showNotify } from "vant";
import { useMain } from "@/store/home";
const usemain = useMain()
// interface ILocation { // 经纬度实体类
//     // 经度
//     longitude: string | number
//     // 纬度
//     latitude: string | number
// }
const key = '0ea7e0b5d7a1c4657b75d1ee64e54b66' // 自己申请的高德地图key
const nMap: any = ref('')
// 设置地图
const defaultStyle = {
    zoom: 17, //设置地图显示的缩放级别
    zooms: [4, 18],
    center: [116.397428, 39.90923], //设置地图中心点坐标
    viewMode: '3D' //设置地图模式
}
onMounted(async () => {
    window._AMapSecurityConfig = {
        securityJsCode: '801ce0f5f1df5e633dd661f9f8a064a7',
    }
    await loadScript()
})
/**
 * 加载脚本
 */
const loadScript = async () => {
    const url = `https://webapi.amap.com/maps?v=1.4.15&key=${key}&callback=onLoad&plugin=AMap.Geolocation`
    const jsapi = document.createElement('script')
    jsapi.charset = 'utf-8'
    jsapi.src = url
    document.head.appendChild(jsapi)
    jsapi.onload = () => {
        initMap()
    }
}
/**
 * 实例化AMap对象
 */
let weizhi = ref('未定位')
let marker1 = ref('')
const initMap = () => {
    nMap.value = new AMap.Map('container', defaultStyle)
    logMapinfo();
    //绑定地图移动事件
    nMap.value.on('moveend', logMapinfo);
    // var trafficLayer = new AMap.TileLayer.Traffic({
    //     zIndex: 10
    // });
    // nMap.value.add(trafficLayer);//添加图层到地图

    // var marker = new AMap.Marker({
    //     position:[116.39, 39.9]//位置
    // })
    // nMap.value.add(marker);//添加到地图

    var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: false,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: false,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: false,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: false      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    });
    nMap.value.addControl(geolocation)
    geolocation.getCurrentPosition()
    AMap.event.addListener(geolocation, 'complete', onComplete)
    AMap.event.addListener(geolocation, 'error', onError)
    function onComplete(data: any) {
        // data是具体的定位信息
        nMap.value.remove(marker1.value);
        showNotify({ type: 'success', message: '获取定位成功' })
        console.log(data)
        // let aa = data.position.lng + 0.00530
        let aa = data.position.lng
        // let bb = data.position.lat - 0.00001
        let bb = data.position.lat
        nMap.value.setCenter([aa, bb])
        marker1.value = new AMap.Marker({
            position: [aa, bb],//位置
        })
        nMap.value.add(marker1.value);//添加到地图
        // if (data.formattedAddress) {
        //     weizhi.value = data.formattedAddress
        //     console.log(data.formattedAddress)
        // } else {
        //     console.log('‘获取定位失败2’')
        //     setTimeout(() => {
        //         showNotify({ background: '#F7444E', message: '获取定位失败..' })
        //     }, 2000);
        // }
    }
    function onError(data: any) {
        nMap.value.remove(marker1.value);
        // 定位出错
        console.log(data);
        showNotify({ background: '#F7444E', message: '获取定位失败' })
    }
}
const logMapinfo = () => {
    nMap.value.getCity((info: any) => {
        weizhi.value = info.province + info.city + info.district
        if (info.city == '') {
            usemain.cityName = info.province
        } else {
            usemain.cityName = info.city
        }
        console.log(usemain.cityName);
    });
}
// 添加点标记
// const addPointMarker = (longitude: number, latitude: number) => {
//     const marker = new AMap.Marker({
//         position: new AMap.LngLat(longitude, latitude),
//         title: ' '
//     })
//     nMap.value.add(marker)
// }
// 批量添加
// const addPointMarkerList = (arr: Array<Array<number | string>>) => {
//     let markerList = ref<any>([])
//     arr.forEach(item => {
//         const marker = new AMap.Marker({
//             position: new AMap.LngLat(item[0], item[1]),
//             title: ' '
//         })
//         console.log(marker)
//         markerList.value.push(marker)
//     })
//     nMap.value.add(markerList.value)
// }
</script>

<style lang="less" scoped>
#container {
    
    width: 95vw;
    height: 240px;
    background-color: rgb(235, 246, 246);
}

.weizhi {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #fff;
    border:1px solid #dbd8db;
    border-radius: 0px 0px 5px 5px;
    font-size: small;
    color: rgb(122, 152, 223);
}
.waibox{
    border: 4px solid #fde3fc;
    margin-top: 60px;
}
</style>