<template>
    <div class="waibox">
        <div id="tqEcharts"></div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import * as echarts from 'echarts'
const props = defineProps(['positionNow'])
watch(() => props.positionNow, () => {
    console.log('watchec', props.positionNow);
    parseData()
})

let first = true
let myChart: any = ref(null)
let tqDatas = reactive({
    tqData:[] as any,
    timeArr:[] as any,
    highData:[] as any,
    lowData:[] as any,
})
const parseData =async ()=>{
    tqDatas.tqData=[],
    tqDatas.timeArr=[],
    tqDatas.highData=[],
    tqDatas.lowData=[],
    await axios.get(`https://api.vvhan.com/api/weather?city=${props.positionNow}&type=week`).then((res) => {
        tqDatas.tqData = res.data.data
        console.log(tqDatas.tqData);
    })
    for(let i=0;i<tqDatas.tqData.length;i++){
        tqDatas.timeArr.push(tqDatas.tqData[i].week)
        tqDatas.highData.push(tqDatas.tqData[i].high.split('°')[0])
        tqDatas.lowData.push(tqDatas.tqData[i].low.split('°')[0])
    }
    console.log(tqDatas);
    
    initVoc()
}
let initVoc = () => {
    if (first) { myChart = echarts.init(document.getElementById("tqEcharts") as any); }
    first = false
    let state = reactive({
        option: {
            tooltip: {
                trigger: "axis",
                // padding: 3,
                fontSize: 11,
                lineHeight: 11,
            },
            grid: {
                // top: "15%",
                // bottom: "20%",
            },
            legend: {
                top: "0%",
                icon: "rect",
                itemWidth: 8,
                itemHeight: 8,
            },
            xAxis: {
                type: "category",
                boundaryGap: false,
                data: tqDatas.timeArr,
                axisLabel: {
                    interval: 0,
                    fontSize: 8,
                },
            },
            yAxis: {
                type: "value",
                axisLabel: {
                    fontSize: 8,
                },
            },
            series: [
                {
                    name: "最高气温",
                    type: "line",
                    color:'#fa7962',
                    data: tqDatas.highData,
                    showSymbol: false,
                    symbol: "circle",
                    symbolSize: 6,
                    zlevel: 3,
                },
                {
                    name: "最低气温",
                    type: "line",
                    color:'#60ca5c',
                    data: tqDatas.lowData,
                    showSymbol: false,
                    symbol: "circle",
                    symbolSize: 6,
                    zlevel: 3,
                },
            ],
        }
    })
    myChart.setOption(state.option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}
onMounted(() => {
    parseData()
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>
.waibox {
    width: 100%;
    height: 100%;
    background-color: #f8ebf3;
}
#tqEcharts{
    padding-top: 20px;
    width: 100%;
    height: 100%;
}
</style>