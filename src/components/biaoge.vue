<template>
    <div class="waibox1">
        <div class="yuliu">
            <tqEcharts :positionNow="positionNow" v-if="!echa"></tqEcharts>
            <tqTable :positionNow="positionNow" v-else></tqTable>
        </div>
        <div @click="changePosiTq" class="weizhi">当前位置:{{ positionNow }} &nbsp;&nbsp;点击切换到:{{ usemain.cityName }}</div>
        <div class="weizhi" @click="ebhuan">点击切换为{{ sign1 }}</div>
    </div>
</template>

<script setup lang="ts">
import tqEcharts from './yuliu/tqEcharts.vue';
import tqTable from './yuliu/tqTable.vue';
import { useMain } from '@/store/home';
const usemain = useMain()
let positionNow = ref('')
let echa = ref(true)
const changePosiTq = ()=>{
    positionNow.value=  usemain.cityName
}
let sign1 = ref('Echarts图')
let ebhuan = ()=>{
    echa.value = !echa.value
    if(!echa.value){
        sign1.value="表格"
    }else{
        sign1.value="Echarts图"
    }
}
//定时器
let playTimeSet = (fn: () => void, count: number, millisec: number) => {
    const interval = () => {
        if (typeof count === 'undefined' || count-- > 0) {
            setTimeout(interval, millisec);
            try {
                fn();
            } catch (e: any) {
                console.log(e);
            }
        }
    };
    setTimeout(interval, millisec);
}
const fanfaLinshi = ()=>{
    positionNow.value = usemain.cityName
}
onMounted(() => {
    playTimeSet(fanfaLinshi,5,1000)
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>

.yuliu {
    width: 95vw;
    height: 240px;
    background-color: rgb(219, 234, 234);
    position: relative;
}
.weizhi {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #fff;
    border-radius: 0px 0px 5px 5px;
    font-size: small;
    color: rgb(122, 152, 223);
    border:1px solid #dbd8db;
}
.qiehuan{
    position: absolute;
    right: 0px;
    top: 0px;
}
.waibox1{
    margin-top: 20px;
    border: 4px solid #fde3fc;
}
</style>