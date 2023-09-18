<template>
    <div class="home-body">
        <div class="home-header">
            <homeHeader>
                <template v-slot:toubu>
                    <span
                        style="text-shadow: 2px 2px 0px #ddd,3px 3px 0px #999; position: absolute; left: 20px; font-size:20px;"
                        @click="likeyou">Like
                        You</span>
                </template>
            </homeHeader>
            <div class="home-header-card">
                <div class="touxiang touxiangleft">
                    <div class="touxiang-img"
                        style="background-image: url('https://q.qlogo.cn/headimg_dl?dst_uin=1125274036&spec=640&img_type=jpg'); background-size: cover;background-position: center center;">
                    </div>
                    <span>Mj</span>
                </div>
                <tubiao style="margin: 0 10%;"></tubiao>
                <!-- <div></div> -->
                <div class="touxiang touxiangright">
                    <div class="touxiang-img"
                        style="background-image: url('https://q.qlogo.cn/headimg_dl?dst_uin=1125274036&spec=640&img_type=jpg'); background-size: cover;background-position: center center;">
                    </div>
                    <span>Mj</span>
                </div>
            </div>
            <svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"></use>
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
                    <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"></use>
                </g>
            </svg>
        </div>
        <div class="home-main">
            <beauTime></beauTime>
            <div class="home-main-box1">
                <div @click="router.push('/cardOne')" class="home-shadowBox home-box1">
                    <div class="home-shadowBox-svg">
                        <svg style="background-color: #fdece6;" t="1690688286877" class="icon"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4568" width="200"
                            height="200">
                            <path
                                d="M746.6496 198.4a129.6384 129.6384 0 0 1 129.536 124.0064l0.1024 5.632v367.9232a129.6384 129.6384 0 0 1-124.0064 129.536l-5.632 0.1024H306.9184a129.6384 129.6384 0 0 1-129.536-124.0064l-0.128-5.632v-57.9328c0-7.4752 2.6368-14.6944 7.3728-20.4032l2.5344-2.7136 131.84-126.0544a32 32 0 0 1 35.4304-5.9648l3.1488 1.664 116.0704 69.5808 74.7008-66.0992a32 32 0 0 1 35.072-4.864l3.072 1.6896 177.1008 110.6688a32 32 0 0 1-30.848 55.9616l-3.072-1.6896-156.8256-97.9968-74.3424 65.792a32 32 0 0 1-34.6112 5.12l-3.072-1.6384-115.2512-69.0944-104.32 99.712v44.2624a65.6384 65.6384 0 0 0 61.4912 65.5104l4.1728 0.128h439.7312a65.6384 65.6384 0 0 0 65.5104-61.4912l0.128-4.1472V328.0384a65.6384 65.6384 0 0 0-61.4912-65.5104l-4.1472-0.128H306.9184a65.6384 65.6384 0 0 0-65.536 61.4912l-0.128 4.1472v134.3488a32 32 0 0 1-63.8208 3.2768l-0.1792-3.2768v-134.3488a129.6384 129.6384 0 0 1 124.032-129.536l5.632-0.1024h439.7312z"
                                fill="#FB553C" p-id="4569"></path>
                            <path
                                d="M692.5312 398.3104m-47.4112 0a47.4112 47.4112 0 1 0 94.8224 0 47.4112 47.4112 0 1 0-94.8224 0Z"
                                fill="#FB553C" p-id="4570"></path>
                        </svg>
                    </div>
                    <span style="margin-left: 10px;font-size: 20px;font-weight: 700;color: rgb(68, 67, 67);">相册</span>
                </div>
                <div @click="router.push('/cardTwo')" class="home-shadowBox home-box2-1">
                    <div class="home-shadowBox-svg"><svg style="background-color: #eaf4e7;" t="1690687119910" class="icon"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2615" width="128"
                            height="128">
                            <path
                                d="M512 288a160 160 0 1 0 0 320 160 160 0 0 0 0-320z m-96 160a96 96 0 1 1 192 0 96 96 0 0 1-192 0z"
                                fill="#5DDAC4" p-id="2616"></path>
                            <path
                                d="M492.8 969.6l19.2-25.6-19.2 25.6 19.2 14.4 19.2-14.4-19.2-25.6 19.2 25.6h0.032l0.064-0.096 0.224-0.16 0.8-0.608 2.88-2.24a1109.184 1109.184 0 0 0 47.968-40.032 1235.488 1235.488 0 0 0 112.96-113.472C777.248 719.776 864 588.16 864 448c0-194.4-157.6-352-352-352S160 253.6 160 448c0 140.16 86.784 271.776 167.84 364.992a1235.488 1235.488 0 0 0 150.304 145.088 757.12 757.12 0 0 0 13.536 10.656l0.768 0.64 0.256 0.128 0.064 0.096zM224 448a288 288 0 1 1 576 0c0 115.84-73.216 232.224-152.16 323.008A1172.576 1172.576 0 0 1 512 903.104a1172.576 1172.576 0 0 1-135.84-132.096C297.216 680.224 224 563.84 224 448z"
                                fill="#5DDAC4" p-id="2617"></path>
                        </svg></div>
                    <span style="margin-left: 10px;font-size: 20px;font-weight: 700;color: rgb(68, 67, 67);">位置</span>
                </div>
                <div @click="noteclick" class="home-shadowBox home-box2-2">
                    <div class="home-shadowBox-svg"><svg style="background-color: #f1efef;" t="1690768668375" class="icon"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2466" width="200"
                            height="200">
                            <path
                                d="M746.666667 64a170.666667 170.666667 0 0 1 170.666666 170.666667v554.666666a170.666667 170.666667 0 0 1-170.666666 170.666667H298.666667a170.666667 170.666667 0 0 1-170.666667-170.666667V234.666667a170.666667 170.666667 0 0 1 170.666667-170.666667h448z m0 74.666667H298.666667a96 96 0 0 0-95.893334 91.477333L202.666667 234.666667v554.666666a96 96 0 0 0 91.477333 95.893334L298.666667 885.333333h448a96 96 0 0 0 95.893333-91.477333L842.666667 789.333333V234.666667a96 96 0 0 0-91.477334-95.893334L746.666667 138.666667z"
                                fill="#f4ea29" p-id="2467"></path>
                            <path
                                d="M224 325.333333a37.333333 37.333333 0 0 1 3.072 74.538667l-3.072 0.128H106.666667a37.333333 37.333333 0 0 1-3.072-74.538667L106.666667 325.333333h117.333333zM224 624a37.333333 37.333333 0 0 1 3.072 74.538667l-3.072 0.128H106.666667a37.333333 37.333333 0 0 1-3.072-74.538667L106.666667 624h117.333333zM693.333333 346.666667a37.333333 37.333333 0 0 1 37.205334 34.261333l0.128 3.072v256a37.333333 37.333333 0 0 1-74.538667 3.072L656 640V384c0-20.608 16.725333-37.333333 37.333333-37.333333z"
                                fill="#f4ea29" p-id="2468"></path>
                        </svg></div>
                    <span style="margin-left: 10px;font-size: 20px;font-weight: 700;color: rgb(68, 67, 67);">笔记</span>
                </div>
            </div>
            <div @click="router.push('/cardThree')" class="home-shadowBox home-box3">
                <div class="home-shadowBox-svg"><svg style="background-color: #e7f1f4;" t="1690689066982" class="icon"
                        viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6417" width="200"
                        height="200">
                        <path
                            d="M511.913993 928.016126c-8.256677 0-16.341341-3.096254-22.705863-9.460776l-95.983874-95.983874c-12.55703-12.55703-12.55703-32.682681 0-45.239711s32.682681-12.55703 45.239711 0l73.450025 73.450025 73.450025-73.450025c6.020494-6.020494 14.105157-9.460776 22.705863-9.460776l223.962372 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L864.026877 223.962372c0-17.545439-14.277171-31.994625-31.994625-31.994625l-639.892491 0c-17.545439 0-31.994625 14.449185-31.994625 31.994625l0 511.913993c0 17.717453 14.449185 31.994625 31.994625 31.994625l95.983874 0c17.717453 0 31.994625 14.277171 31.994625 31.994625s-14.277171 31.994625-31.994625 31.994625l-95.983874 0c-52.980346 0-95.983874-43.003528-95.983874-95.983874L96.155888 223.962372c0-52.980346 43.003528-95.983874 95.983874-95.983874l639.892491 0c52.980346 0 95.983874 43.003528 95.983874 95.983874l0 511.913993c0 52.980346-43.003528 95.983874-95.983874 95.983874L621.142953 831.860239 534.619856 918.55535C528.427348 924.747858 520.17067 928.016126 511.913993 928.016126z"
                            fill="#1296db" p-id="6418"></path>
                        <path
                            d="M335.943558 511.913993c-26.490173 0-47.991937-21.501764-47.991937-47.991937s21.501764-47.991937 47.991937-47.991937 47.991937 21.501764 47.991937 47.991937S362.433731 511.913993 335.943558 511.913993z"
                            fill="#1296db" p-id="6419"></path>
                        <path
                            d="M527.911305 511.913993c-26.490173 0-47.991937-21.501764-47.991937-47.991937s21.501764-47.991937 47.991937-47.991937 47.991937 21.501764 47.991937 47.991937S554.401478 511.913993 527.911305 511.913993z"
                            fill="#1296db" p-id="6420"></path>
                        <path
                            d="M720.051067 511.913993c-26.490173 0-47.991937-21.501764-47.991937-47.991937s21.501764-47.991937 47.991937-47.991937c26.490173 0 47.991937 21.501764 47.991937 47.991937S746.369226 511.913993 720.051067 511.913993z"
                            fill="#1296db" p-id="6421"></path>
                    </svg></div>
                <span style="margin-left: 10px;font-size: 20px;font-weight: 700;color: rgb(68, 67, 67);">留言板</span>
            </div>
            <div @click="router.push('/cardFour')" class="home-shadowBox home-box3">
                <div class="home-shadowBox-svg"><svg style="background-color: #f4e7e9;" t="1690689185006" class="icon"
                        viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8041" width="200"
                        height="200">
                        <path
                            d="M811.008 770.048q-9.216 1.024-19.456 3.584t-18.432 5.632q-10.24 4.096-19.456 9.216-2.048-11.264 1.024-22.528 2.048-10.24 8.192-21.504t20.48-22.528q25.6-17.408 60.928-21.504t66.048 8.192 48.128 42.496 6.144 82.432q-9.216 41.984-37.888 76.288t-76.288 52.736-112.128 17.408-144.384-28.672q-55.296-19.456-87.04-48.64t-47.616-59.904-18.944-57.856-1.024-42.496 12.8-37.888 22.016-43.008q13.312-24.576 29.696-50.176 8.192-13.312 14.336-25.6 5.12-11.264 8.192-22.528t0-21.504q-10.24-26.624-25.6-40.96t-29.696-21.504q-17.408-7.168-35.84-8.192-25.6-1.024-47.104-6.144-18.432-5.12-36.352-13.312t-26.112-25.6q-9.216-17.408-7.68-35.84t7.168-36.352 11.776-34.304 6.144-28.672q0-32.768-34.816-46.08-45.056-11.264-67.584-9.216t-31.744 8.704-9.216 12.288 0 1.536q0 14.336 3.584 36.864t-3.584 43.008q-5.12 12.288-13.824 23.04t-14.848 19.968q-8.192 13.312-13.824 23.04t-4.608 12.8q2.048 4.096 9.728 5.632t11.776 3.584q5.12 3.072 6.656 9.728t7.68 11.776q10.24 10.24 12.288 17.408 1.024 4.096 0 7.168 0 8.192 1.024 19.456 1.024 9.216 2.56 20.992t4.608 23.04q6.144 26.624 14.336 37.376t19.968 13.312 28.16 0.512 39.936-2.048q17.408 1.024 35.84 1.024t32.768 8.192 22.528 22.528 13.312 28.672q4.096 17.408 6.144 35.84 3.072 23.552 3.072 47.104 0 20.48-2.048 44.544t-10.24 47.616q-17.408 48.128-51.2 71.68t-72.704 30.72q-40.96 8.192-77.824 2.048t-66.56-20.48-48.64-34.816-23.04-40.96q-3.072-16.384-0.512-32.256t7.68-30.72 12.288-28.16 12.288-25.6q9.216-19.456 11.264-34.304t0-25.088q-2.048-11.264-8.192-20.48-9.216-10.24-19.456-21.504-8.192-10.24-17.408-22.016t-15.36-26.112q-20.48-41.984-21.504-77.824 0-15.36 0.512-37.376t7.68-41.472q6.144-16.384 30.208-43.52t53.76-70.144q6.144-12.288 10.752-25.6t7.168-24.576 3.584-19.456 1.024-11.264q0-10.24-1.024-22.528t-2.048-25.6q0-6.144-1.024-20.48t2.56-31.744 12.8-35.328 28.672-32.256q15.36-11.264 36.352-15.872t39.424-5.632q21.504-1.024 45.056 1.024 19.456-7.168 40.96-11.264 18.432-4.096 43.008-7.168t51.2-3.072q89.088 2.048 149.504 27.136t99.328 61.44 59.392 78.848 29.696 78.848 10.752 61.44 1.536 26.112q1.024 17.408 12.288 31.744t26.112 29.184 30.72 30.208 27.136 33.792q21.504 38.912 23.552 69.632t-8.192 54.272-28.672 40.448-37.376 28.16-34.816 17.408-19.968 8.192q-33.792 15.36-51.712 33.792t-24.064 36.864-2.56 35.84 14.848 29.696q7.168 9.216 18.432 15.36t23.04 9.216 22.528 3.584 17.92-1.536q16.384-3.072 27.136-14.848t12.8-25.088-5.632-22.528-27.136-8.192z"
                            p-id="8042" fill="#d4237a"></path>
                    </svg></div>
                <span style="margin-left: 10px;font-size: 20px;font-weight: 700;color: rgb(68, 67, 67);">今日无事 勾栏听曲</span>
            </div>
        </div>
    </div>
</template>
<!-- https://q.qlogo.cn/headimg_dl?dst_uin=1125274036&spec=640&img_type=jpg -->
<script setup lang="ts">
import homeHeader from '@/components/homeHeader.vue';
import tubiao from '@/components/tubiao.vue'
import beauTime from '@/components/beauTime.vue'
import { showConfirmDialog } from 'vant';

const router = new (useRouter as any)
let likeyou = () => {

    showConfirmDialog({
        title: '退出登录',
        // message:
        //     '返回到登录页面？',-
    })
        .then(() => {
            localStorage.clear()
            router.push('/')
        })
        .catch(() => {
            // on cancel
        });
}
let noteclick = () => {
    // router.push('/cardFive')
    window.location.href = "https://augenestern.github.io/"
}
onMounted(() => {
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>
.home-body {
    width: 100%;
    height: 100vh;
}

.home-header {
    position: relative;
    width: 100%;
    height: 48%;
    background-image: url('/src/assets/haimian.png');
    background-size: cover;
    background-position: bottom center;

    color: white;
}



.home-header-card {
    width: 90%;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    border-radius: 25px;
    backdrop-filter: blur(6px);
    /*设置背景虚化的程度，10px为模糊半径*/
    background-color: rgba(255, 255, 255, 0.6);
    /*设置背景颜色的透明度，让背景虚化更加明显*/
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.touxiang {
    width: 76px;
    text-align: center;
}

.touxiang span {
    font-weight: 600;
    text-shadow: 0 0 5px rgb(18, 20, 23);
    font-size: 20px;
}

.touxiang-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px white solid;
    margin-bottom: 10px;
    box-shadow: 0 0 3px rgb(18, 20, 23);
}
.touxiangleft{
    position: relative;
    animation-name: touxiangleft1;
    animation-duration: 3s;
}
.touxiangright{
    position: relative;
    animation-name: touxiangright1;
    animation-duration: 3s;
}
@keyframes touxiangleft1{
    from {
        opacity: 0;
        left: -35px;
    }
    to {
        opacity: 1;
        left: 0px;
    }
}
@keyframes touxiangright1{
    from {
        opacity: 0;
        right: -35px;
    }
    to {
        opacity: 1;
        right: 0px;
    }
}
.home-main {
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(90deg, rgba(207, 100, 100, 0.15) 10%, rgba(0, 0, 0, 0) 10%),
        linear-gradient(rgba(202, 93, 93, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 15px 15px;
}

.input {
    width: 80%;
    height: 8%;
    margin-top: 8%;
    border: 1px #C0C4CC solid;
    border-radius: 10px;
    padding-left: 10px;
}
.home-main-box1{
    width: 90%;
    height: 230px;
    margin-bottom: 10px;
    position: relative;
    animation-name: homeBoxChange;
    animation-duration: 4s;
}
@keyframes homeBoxChange{
    from {
        margin-top: 100px;
    }
    to {
        margin-top: 0px;
    }
}
.home-shadowBox {
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 15px 8px rgba(166, 165, 165, 0.3),
        inset 0px 0px 15px 80px rgba(240, 240, 240, 0.3);
    display: flex;
    align-items: center;
    animation-name: homeBoxChange1;
    animation-duration: 4s;
    svg {
        width: 40px;
        height: 40px;
        margin-left: 20px;
        border-radius: 50%;
        padding: 10px;
    }
}
@keyframes homeBoxChange1{
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.home-box1 {
    width: 47%;
    height: 230px;
    position: absolute;
    left: 0px;
    top: 0px;
}

.home-box2-1 {
    position: absolute;
    height: 110px;
    width: 50%;
    right: 0px;
    top: 0px;
}
.home-box2-2 {
    width: 50%;
    position: absolute;
    height: 110px;
    right: 0px;
    bottom: 0px;
}
.home-box3 {
    margin-bottom: 10px;
    width: 90%;
    height: 110px;
}

//svg
.waves {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
}

.parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    animation-delay: -5s;
    animation-duration: 20s;
}

.parallax>use:nth-child(2) {
    animation-delay: -10s;
    animation-duration: 5s;
}

.parallax>use:nth-child(3) {
    animation-delay: -15s;
    animation-duration: 20s;
}

.parallax>use:nth-child(4) {
    animation-delay: 0s;
    animation-duration: 10s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        transform: translate3d(85px, 0, 0);
    }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
    .waves {
        height: 60px;
        min-height: 40px;
    }
}</style>