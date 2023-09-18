<template>
    <div class="timeBox" style="text-align: center; margin-bottom: 20px;">
        <span class="time-txt">这是我们一起走过的</span>
        <div style="text-align: center; margin-top: -20px;">
            <span class="timeNum">{{ day }}</span>
            <span class="timeFont">天</span>
            <span class="timeNum">{{ hour }}</span>
            <span class="timeFont">时</span>
            <span class="timeNum">{{ minute }}</span>
            <span class="timeFont">分</span>
            <span class="timeNum">{{ second }}</span>
            <span class="timeFont">秒</span>
        </div>
    </div>
</template>

<script setup lang="ts">
let day: any = ref('')
let hour: any = ref('')
let minute: any = ref('')
let second: any = ref('')
const time = () => {
    let futruetime = new Date("2023/7/29").getTime(); // 以前时间转换为时间戳
    setInterval(function () {
        let nowtime = new Date().getTime(); // 现在时间转换为时间戳
        let msec = nowtime - futruetime; // 毫秒 现在时间-以前时间
        let time: any = msec / 1000; // 毫秒/1000
        day.value = parseInt(time / 86400); // 天  24*60*60*1000
        hour.value = parseInt(time / 3600) - 24 * day.value; // 小时 60*60 总小时数-过去的小时数=现在的小时数
        minute.value = parseInt((time % 3600) / 60); // 分 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
        second.value = parseInt(time % 60); // 以60秒为一整份 取余 剩下秒数
    }, 1000);
}
onMounted(() => {
    time()
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>
.time-txt {
    font-size: 1.5rem;
    line-height: 5rem;
    display: block;
    // background-image: linear-gradient(270deg, #ff4500, #ffa500, #ffd700, #90ee90, #00ffff, #1e90ff, #9370db, #ff69b4, #ff4500);
    -webkit-background-clip: text;
    color: #0000;
    animation: jianbian 1s linear infinite;
    font-family: 'Noto Serif SC', serif;
    font-weight: 400;
}

@keyframes jianbian {
    0% {
        background-image: linear-gradient(270deg, #ff4500, #ffa500, #ffd700, #90ee90, #00ffff, #1e90ff, #9370db, #ff69b4, #ff4500);
        ;
    }

    11% {
        background-image: linear-gradient(270deg, #ffa500, #ffd700, #90ee90, #00ffff, #1e90ff, #9370db, #ff69b4, #ff4500, #ff4500);
        ;
    }

    22% {
        background-image: linear-gradient(270deg, #ffd700, #90ee90, #00ffff, #1e90ff, #9370db, #ff69b4, #ff4500, #ff4500, #ffa500);
        ;
    }

    33% {
        background-image: linear-gradient(270deg, #90ee90, #00ffff, #1e90ff, #9370db, #ff69b4, #ff4500, #ff4500, #ffa500, #ffd700);
        ;
    }

    44% {
        background-image: linear-gradient(270deg, #00ffff, #1e90ff, #9370db, #ff69b4, #ff4500, #ff4500, #ffa500, #ffd700, #90ee90);
        ;
    }

    55% {
        background-image: linear-gradient(270deg, #1e90ff, #9370db, #ff69b4, #ff4500, #ff4500, #ffa500, #ffd700, #90ee90, #00ffff);
        ;
    }

    66% {
        background-image: linear-gradient(270deg, #9370db, #ff69b4, #ff4500, #ff4500, #ffa500, #ffd700, #90ee90, #00ffff, #1e90ff);
        ;
    }

    77% {
        background-image: linear-gradient(270deg, #ff69b4, #ff4500, #ff4500, #ffa500, #ffd700, #90ee90, #00ffff, #1e90ff, #9370db);
        ;
    }

    88% {
        background-image: linear-gradient(270deg, #ff4500, #ff4500, #ffa500, #ffd700, #90ee90, #00ffff, #1e90ff, #9370db, #ff69b4);
        ;
    }

    100% {
        background-image: linear-gradient(270deg, #ff4500, #ffa500, #ffd700, #90ee90, #00ffff, #1e90ff, #9370db, #ff69b4, #ff4500);
        ;
    }
}

.timeBox{
    animation-name: homeBoxChange;
    animation-duration: 5s;
}
@keyframes homeBoxChange{
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.timeNum {
    font-weight: 900;
    font-size: 40px;
    margin-left: 10px;
}

.timeFont {
    font-weight: 800;
    font-size: 25px;
}
</style>