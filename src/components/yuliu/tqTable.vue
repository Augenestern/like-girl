<template>
    <div class="waibox">
        <table>
            <tr>
                <td>日期</td>
                <td>星期</td>
                <td>白天</td>
                <td>夜晚</td>
                <td>最低温度</td>
                <td>最高温度</td>
            </tr>
            <tr v-for="(item,index ) in tqDatas.tqData">
                <td>{{ item.date.slice(5, 10) }}</td>
                <td v-if="index==0">今天</td>
                <td v-else>{{ item.week }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.night.type }}</td>
                <td>{{ item.high }}</td>
                <td>{{ item.low }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
const props = defineProps(['positionNow'])
watch(() => props.positionNow, () => {
    console.log('table',props.positionNow);
    getTqData()
})
let tqDatas = reactive({
    tqData: [] as any
})
const getTqData = () => {
    axios.get(`https://api.vvhan.com/api/weather?city=${props.positionNow}&type=week`).then((res) => {
        tqDatas.tqData = res.data.data
        console.log(tqDatas.tqData);
    })
}
onMounted(() => {
    getTqData()
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

table {
    width: 100%;
    height: 100%;
}

td {
    width: 15%;
    font-size: 12px;
    text-align: center;
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(85, 85, 85);
}
</style>