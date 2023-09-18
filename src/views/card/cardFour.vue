<template>
    <div class="waiBox">
        <homeHeader><template v-slot:toubu>
                <span
                    style="text-shadow: 2px 2px 0px #ddd,3px 3px 0px #999; position: absolute; left: 20px; font-size:20px;"
                    @click="likeyou">Like
                    You</span>
            </template></homeHeader>
        <div @click="girlShow(img1)" class="girl1"><img :src="img1" alt=""></div>
        <div class="btnzuhe">
            <div class="btnDan" @click="touchCopy(img1)">复制链接</div>
            <div class="btnDan" @click="btgirl('http://3650000.xyz/api/?type=json&mode=3', 1)">{{
                djqh1 }}</div>
        </div>
        <div class="girlBox">
            <div @click="girlShow(img2)" class="girl2"><img :src="img2" alt=""></div>
            <div @click="girlShow(img3)" class="girl3"><img :src="img3" alt=""></div>
        </div>
        <div class="butHengpai">
            <div class="btnzuhe">
                <div class="btnDan1" @click="touchCopy(img2)">复制链接</div>
                <div style="margin:0px 3px 0px 0px;" class="btnDan1"
                    @click="btgirl('http://3650000.xyz/api/?type=json&mode=1', 2)">{{ djqh2 }}</div>
            </div>
            <div class="btnzuhe">
                <div style="margin:0px 0px 0px 3px;" class="btnDan1" @click="touchCopy(img3)">复制链接</div>
                <div class="btnDan1" @click="btgirl('http://3650000.xyz/api/?type=json&mode=8', 3)">{{ djqh3 }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useClipboard from 'vue-clipboard3'
import { showFailToast, showSuccessToast } from 'vant';
import homeHeader from '@/components/homeHeader.vue';
import axios from 'axios';
// import reqimg from '@/api/useApi/reqimg'
import { showImagePreview } from 'vant';
// import FileSaver from 'file-saver'
const router = new (useRouter as any)
let likeyou = () => {
    router.push('/home')
}
let img1 = ref('')
let img2 = ref('')
let img3 = ref('')
let djqh1 = ref('点击切换')
let djqh2 = ref('点击切换')
let djqh3 = ref('点击切换')
const btgirl = (url: any, num: number) => {
    if (num == 1) {
        if (djqh1.value == '点击切换') {
            djqh1.value = '加载中...'
            axios.get(url).then((res) => { img1.value = res.data.url })
            setTimeout(() => {
                djqh1.value = '点击切换'
            }, 2500);
        }
    } else if (num == 2) {
        if (djqh2.value == '点击切换') {
            djqh2.value = '加载中...'
            axios.get(url).then((res) => { img2.value = res.data.url })
            setTimeout(() => {
                djqh2.value = '点击切换'
                console.log('wsmwsmws');
            }, 2500);
        }
    } else if (num == 3) {
        if (djqh3.value == '点击切换') {
            djqh3.value = '加载中...'
            axios.get(url).then((res) => { img3.value = res.data.url })
            setTimeout(() => {
                djqh3.value = '点击切换'
            }, 2500);
        }
    }
}


const girlShow = (imgUrl: any) => {
    showImagePreview({
        images: [imgUrl],
        closeable: true,
    });
}
const downloadgirl = () => {
    downloadImg('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F6e3757e5-1540-4390-af6b-67d91172b8ae%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1693302816&t=a911aab1cd5f821999f8f1b809939607', 'photo.jpg')
}

// 下载图片
const downloadImg = (imgsrc: any, fileName: any) => {
    let image = new Image()
    // 解决跨域 Canvas 污染问题
    image.setAttribute('crossOrigin', 'anonymous')
    image.onload = function () {
        let canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        let context: any = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        let url = canvas.toDataURL('image/png') // 得到图片的base64编码数据
        let a = document.createElement('a') // 生成一个a元素
        let event = new MouseEvent('click') // 创建一个单击事件
        a.download = fileName || 'photo' // 设置图片名称
        a.href = url // 将生成的URL设置为a.href属性
        a.dispatchEvent(event) // 触发a的单击事件
    }
    image.src = imgsrc
    return Promise.resolve()
}

// 点击复制
const touchCopy = (imgUrl: any) => {
    // 调用
    copy(imgUrl)
}
// 使用插件
const { toClipboard } = useClipboard()
const copy = async (msg: any) => {
    try {
        // 复制
        await toClipboard(msg)
        // 复制成功
        showSuccessToast('复制成功,可去浏览器下载')
    } catch (e) {
        // 复制失败
        showFailToast('复制失败,没有权限')
    }
}
onMounted(() => {
    btgirl('http://3650000.xyz/api/?type=json&mode=3', 1)
    btgirl('http://3650000.xyz/api/?type=json&mode=1', 2)
    btgirl('http://3650000.xyz/api/?type=json&mode=8', 3)
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>
.waiBox {
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(90deg, rgba(207, 100, 100, 0.15) 10%, rgba(0, 0, 0, 0) 10%),
        linear-gradient(rgba(202, 93, 93, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 15px 15px;
}

.girl1 {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 95%;
    height: 35%;
    margin-top: 15%;
    background-color: rgba(234, 209, 243, 0.5);
    border-radius: 5px;
    border:3px solid #e9d2e3;
    border-radius: 10px;
}

.girlBox {
    display: flex;
    width: 95%;
    height: 40%;
    margin-top: 6px;
}

.girl2 {
    flex: 1;
    left: 0;
    display: flex;
    justify-content: center;
    margin-right: 2px;
    background-color: rgba(234, 209, 243, 0.5);
    border:3px solid #e9d2e3;
    border-radius: 10px;
}

.girl3 {
    flex: 1;
    right: 0;
    display: flex;
    justify-content: center;
    margin-left: 2px;
    background-color: rgba(234, 209, 243, 0.5);
    border:3px solid #e9d2e3;
    border-radius: 10px;
}

img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.btnzuhe {
    display: flex;
}

.btnDan {
    width: 47.5vw;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #fff;
    border: 1px rgb(220, 156, 207) solid;
    border-radius: 5px;
    // border-radius: 20px;
    box-shadow: inset 0px 0px 4px 4px #e9c1e0,
        inset 0px 0px 6px 8px #e9d2e3,
        inset 0px 0px 8px 12px #ecdde9;
    color: #e434c4;
}

.btnDan1 {
    width: 23vw;
    height: 30px;
    font-size: 12px;
    text-align: center;
    line-height: 30px;
    background-color: #fff;
    border: 1px rgb(220, 156, 207) solid;
    border-radius: 5px;
    // border-radius: 20px;
    box-shadow: inset 0px 0px 4px 2px #e9c1e0,
        inset 0px 0px 6px 4px #e9d2e3,
        inset 0px 0px 8px 6px #ecdde9;
    color: #e434c4;
}

.butHengpai {
    display: flex;
}
</style>