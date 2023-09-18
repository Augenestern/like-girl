<template>
    <div class="waiBox">
        <homeHeader>
            <template v-slot:toubu>
                <span
                    style="text-shadow: 2px 2px 0px #ddd,3px 3px 0px #999; position: absolute; left: 20px; font-size:20px;"
                    @click="likeyou">Like
                    You</span>
            </template>
        </homeHeader>
        <div class="dragBox">
            <draggable delay="1000" :list="usemain.cardsList" ghost-class="ghost" animation="300" @end="onEnd">
                <template #item="{ element, index }">
                    <div class="item" @touchstart="gtouchstart()" @touchmove="gtouchmove()" @touchend="gtouchend()">
                        <div class="cardTitle">{{ element.cardname }}</div>
                        <cards :cardData="element.data" :cardIndex="index"></cards>
                        <div @click="addCardItem(index)" class="cardBottom">
                            添加+
                        </div>
                        <svg @click="deleteCardName(index)"
                            style="position: absolute; top: 6px; right: 10px; width: 25px;height: 25px; " t="1691397429258"
                            class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            p-id="2338" width="32" height="32">
                            <path
                                d="M202.666667 256h-42.666667a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64H266.666667v565.333333a53.333333 53.333333 0 0 0 53.333333 53.333334h384a53.333333 53.333333 0 0 0 53.333333-53.333334V352a32 32 0 0 1 64 0v469.333333c0 64.8-52.533333 117.333333-117.333333 117.333334H320c-64.8 0-117.333333-52.533333-117.333333-117.333334V256z m224-106.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z m-32 288a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z m170.666666 0a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z"
                                fill="#8a8a8a" p-id="2339"></path>
                        </svg>
                        <svg @click="bjCardName(index)"
                            style="position: absolute; top: 4px; right: 40px; width: 25px;height: 25px; " t="1691328869680"
                            class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            p-id="2309" width="32" height="32">
                            <path
                                d="M799.306 313.723v20.48h154.167v618.844h-882.098v-618.844h233.189v-20.48h-253.669v659.804h923.058v-659.804z"
                                fill="#8a8a8a" p-id="2310"></path>
                            <path d="M339.333 880.513h45.173v45.173h-45.173v-45.173z" fill="#8a8a8a" p-id="2311"></path>
                            <path d="M640.119 880.513h45.394v45.173h-45.394v-45.173z" fill="#8a8a8a" p-id="2312"></path>
                            <path d="M489.837 880.513h45.173v45.173h-45.173v-45.173z" fill="#8a8a8a" p-id="2313"></path>
                            <path
                                d="M293.186 582.762c-1.417 1.876-3.299 5.628-5.659 11.258-2.355 5.159-32.893 66.118-70.724 180.115-3.299 15.479-5.188 28.142-5.659 37.99 31.885-39.688 115.452-199.588 126.433-211.38 32.426-34.816 203.776-308.566 241.349-334.59-17.093 47.567-232.454 395.172-237.642 403.149 162.181 35.549 232.452-55.351 241.883-63.324l-71.436-12.667 86.995-26.030c57.315-58.356 72.847-149.86 72.847-149.86-6.603 2.343-75.911 22.749-87.702 26.032l94.775-51.36c6.599-25.799 56.584-142.582 58.704-331.383-25.463 1.878-283.72 77.869-445.583 505.162-1.411 8.446-0.94 14.074 1.417 16.888z"
                                fill="#8a8a8a" p-id="2314"></path>
                        </svg>
                    </div>
                </template>
            </draggable>
            <div class="item" @click="addCard"
                style="margin-bottom: 40px; height: 40px; font-size: 32px; text-align: center;line-height: 40px;">+
            </div>
        </div>
        <van-dialog @confirm="queding" @cancel="quxiao" v-model:show="showAddCard" title="添加卡片分类" show-cancel-button>
            <van-field v-model="addCardName" placeholder="请输入分类名称" />
        </van-dialog>
        <van-dialog @confirm="quedingbj" v-model:show="showBjCard" title="编辑卡片分类" show-cancel-button>
            <van-field v-model="bjCard" placeholder="请输入分类名称" />
        </van-dialog>
    </div>
</template>

<script setup lang="ts">
import cards from "@/components/cards.vue"
import homeHeader from '@/components/homeHeader.vue';
import draggable from "vuedraggable";
import { useMain } from "@/store/home";
import { showConfirmDialog } from 'vant'
import { deleteAndAdd, findCardlist } from "@/api/useApi/cardApi"
const usemain = useMain()
const router = new (useRouter as any)
let likeyou = () => {
    router.push('/home')
}
let showAddCard = ref(false)
let showBjCard = ref(false)
let addCardName = ref('')
let bjCard = ref('')

const onEnd = () => {
    console.log('Bend', usemain.cardsList);
}

//长按震动功能
let timeOutEvent: any
const gtouchstart = () => {
    //开始触摸
    timeOutEvent = 0
    timeOutEvent = setTimeout(() => {
        navigator.vibrate(80);
    }, 1000)
}
const gtouchmove = () => {
    clearTimeout(timeOutEvent)
    timeOutEvent = 0
}
const gtouchend = () => {
    clearTimeout(timeOutEvent)
    timeOutEvent = 0
}
//添加卡片分类
const addCard = () => {
    addCardName.value = ''
    showAddCard.value = true
}
const queding = () => {
    usemain.cardsList.push({ cardname: addCardName.value, data: [], sign: 'ddd' })
}
const quxiao = () => {
    addCardName.value = ''
}
const addCardItem = (index: any) => {
    usemain.cardsList[index].data.push({ name: '' })
}

//编辑卡片分类
let linshinum: any = ''
const bjCardName = (index: any) => {
    showBjCard.value = true
    bjCard.value = usemain.cardsList[index].cardname
    linshinum = index
}
const quedingbj = () => {
    usemain.cardsList[linshinum].cardname = bjCard.value
}

//删除卡片分类
const deleteCardName = (index: any) => {
    showConfirmDialog({
        title: `确认删除"${usemain.cardsList[index].cardname}"吗？`,
    })
        .then(() => {
            usemain.cardsList.splice(index, 1)
        })
        .catch(() => {
            // on cancel
        });
}
onMounted(() => {
    findCardlist().then((res: any) => {
        if (res.length != 0) {
            usemain.cardsList = res
        }
        console.log(res);
    })
    // usemain.$reset()
})
onUnmounted(() => {
    deleteAndAdd(usemain.cardsList)
})
</script>

<style lang="less" scoped>
.waiBox {
    width: 100%;
    min-height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(90deg, rgba(207, 100, 100, 0.15) 10%, rgba(0, 0, 0, 0) 10%),
        linear-gradient(rgba(202, 93, 93, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 15px 15px;
}

.ghost {
    opacity: 0.5;
}

.dragBox {
    width: 90%;
    margin-top: 60px;
}

.item {
    width: 100%;
    background-color: rgb(255, 255, 255);
    border: 4px solid #fde3fc;
    // box-shadow: 6px 6px 10px 2px #d9d9d9;
    // background-image:
    //     radial-gradient(at 100% 100%, rgb(245, 238, 240) 0px, transparent 50%),
    //     radial-gradient(at 0% 100%, rgb(245, 238, 240) 0px, transparent 50%),
    //     radial-gradient(at 100% 0%, rgb(245, 238, 240) 0px, transparent 50%),
    //     radial-gradient(at 0% 0%, rgb(245, 238, 240) 0px, transparent 50%);
    margin-bottom: 10px;
    backdrop-filter: blur(10px);
    border-radius: 10px;
    margin-left: -4px;
}

.cardTitle {
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-weight: 900;
    // text-shadow: 0px 0px 10px #e97bda;
}

.cardBottom {
    width: 97%;
    padding: 8px 0px;
    background-color: rgba(221, 180, 236, 0.5);
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    margin-left: 4px;
    text-align: center;
}
*{
    -webkit-touch-callout: none !important;
  	-webkit-user-select: none;
}
</style>