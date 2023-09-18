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
        <div style="width: 100%;height: 60px;"></div>
        <div class="addImg">
            <van-uploader :after-read="afterRead">
                <div class="addJian">+</div>
            </van-uploader>
        </div>
        <!-- <div @click="deleteImgclick" class="addImg" style="box-shadow: 0px 2px 10px 3px #ccc; font-size: 18px;color: #7e7d7d;">{{ deleteImg
        }}</div> -->
        <div class="container" id="con">
            <div v-for="imgUrl in imgArr" class="item" @click="girlShow(imgUrl)" @touchstart="gtouchstart(imgUrl)"
                @touchmove="gtouchmove()" @touchend="gtouchend()">
                <img :src="imgUrl" alt="">
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import homeHeader from '@/components/homeHeader.vue';
import { addImgApi, findAllImgApi, deleteImg } from "@/api/useApi/imgApi";
import { showImagePreview, showNotify, showConfirmDialog } from 'vant'
import { initMinio, putObject } from "minio-js";
const router = new (useRouter as any)
let likeyou = () => {
    router.push('/home')
}
let imgArr: any = reactive([])

//长按删除功能
let timeOutEvent: any
const gtouchstart = (imgUrl: any) => {
    //开始触摸
    timeOutEvent = 0
    timeOutEvent = setTimeout(() => {
        showConfirmDialog({
            title: '删除',
            message:
                '确认删除该图片吗',
        })
            .then(() => {
                deleteImg(imgUrl)
                showNotify({ type: 'success', message: '删除成功' })
                setTimeout(() => {
                    location.reload()
                }, 500);
            })
            .catch(() => {
                // on cancel
            });
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

//设置图片瀑布流布局
const waterFall = () => {
    let item: any = document.getElementsByClassName("item")
    let width = item[0].offsetWidth
    let clientWidth = document.documentElement.clientWidth;
    let columnCount = Math.floor(clientWidth / width)
    let emptyCount = (clientWidth % width) / (columnCount + 1)
    let hrr = []
    for (let i = 0; i < item.length; i++) {
        if (i < columnCount) {
            item[i].style.top = "0px"
            item[i].style.left = (i * width + i * emptyCount + emptyCount) + "px"
            // console.log(item[i].offsetHeight);
            hrr.push(item[i].offsetHeight + emptyCount)
        } else {
            let min = Math.min(...hrr)
            let index = hrr.indexOf(min)
            item[i].style.top = min + "px"
            item[i].style.left = (index * width + index * emptyCount + emptyCount) + "px"
            hrr[index] += item[i].offsetHeight + emptyCount
        }
        // console.log(hrr);
    }
    let waibox: any = document.getElementsByClassName('waiBox')[0]
    let maxH = Math.max(...hrr)
    if ((maxH + 250) / document.body.clientHeight < 1) {
        waibox.style.height = '100vh'
    } else {
        waibox.style.height = (maxH + 250) + 'px'
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

//上传图片
const afterRead = (file: any) => {
    var f = file.file
    let reader = new FileReader()
    reader.readAsArrayBuffer(f)
    reader.onload = async function (e: any) {
        let imgUrl1 = 'http://106.52.170.16:9000/img-test/' + f.name
        let response
        await addImgApi({ imgUrl: imgUrl1 }).then((res: any) => {
            response = res
        })
        if (response == 200) {
            let res = e.target.result //ArrayBuffer
            //先初始化
            initMinio({
                endPoint: '106.52.170.16',
                port: 9000,
                useSSL: false,
                accessKey: 'admin',
                secretKey: 'sdl@admin',
            })
            //再上传
            const metadata = {
                'content-type': f.type
            }
            putObject('img-test', res, f.name, metadata, function (err: any, data: any) {
                if (err) console.log(err)
                else {
                    console.log('上传完成', data)
                }
            })
            showNotify({ background: 'orange', message: '正在上传...' })
            setTimeout(() => {
                chushihua()
                showNotify({ type: 'success', message: '上传成功' })
            }, 2000);
        } else {
            showNotify({ background: 'orange', message: '正在上传...' })
            setTimeout(() => {
                showNotify({ background: '#F7444E', message: '上传失败或该图片已存在' })
            }, 2000);
        }
    }
};

//初始化
const chushihua = async () => {
    await findImg()
    playTimeSet(waterFall, 50, 100)
}
//点击放大图片
const girlShow = (imgUrl: any) => {
    showImagePreview({
        images: [imgUrl],
        closeable: true,
    });
}

//查找所有图片
const findImg = async () => {
    await findAllImgApi().then((res: any) => {
        // console.log(res.length);
        for (let i = 0; i < res.length; i++) {
            imgArr[i] = res[i].imgUrl
        }
    })
}
onMounted(async () => {
    await findImg()
    playTimeSet(waterFall, 100, 1000)
    window.onresize = waterFall
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>
.waiBox {
    width: 100%;
    height: 100vh;
    // position: absolute;
    background-color: white;
    background-image: linear-gradient(90deg, rgba(207, 100, 100, 0.15) 10%, rgba(0, 0, 0, 0) 10%),
        linear-gradient(rgba(202, 93, 93, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 15px 15px;
}

.item {
    width: 165px;
    height: auto;
    position: absolute;
    display: flex;
}

.item img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 3px #ccC;
}

.container {
    position: relative;
    width: 100%;
}

.addImg {
    margin: 0px auto;
    margin-bottom: 10px;
    width: 95%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #FFF;
    box-shadow: 0px 0px 10px 3px #ccC;
    border-radius: 5px;
    font-size: 32px;
    color: #b1afaf;
}

/deep/.van-uploader__input-wrapper {
    width: 100vw;
}

.addJian {
    position: relative;
    right: 10px;
}
</style>