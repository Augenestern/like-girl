<template>
    <div>
        <draggable delay="1000" group="cards" ghost-class="ghost" animation="300" :list="props.cardData" @end="onEnd">
            <template #item="{ element, index }">
                <div style="position: relative;" @touchstart="gtouchstart()" @touchmove="gtouchmove()"
                    @touchend="gtouchend()">
                    <!-- <input class="cardItem" v-model="element.name" type="text"> -->
                    <textarea class="textarea1" v-model="element.name" placeholder="请输入内容"></textarea>
                    <svg @click="deleteCardItem(index)"
                        style="position: absolute;width: 18px;height: 18px;bottom: 18px;right: 8px;" t="1691399332726"
                        class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4760"
                        width="32" height="32">
                        <path
                            d="M507.904 52.224q95.232 0 179.2 36.352t145.92 98.304 98.304 145.408 36.352 178.688-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-178.688-36.352-145.408-98.304-98.304-145.92-36.352-179.2 36.352-178.688 98.304-145.408 145.408-98.304 178.688-36.352zM736.256 573.44q30.72 0 55.296-15.872t24.576-47.616q0-30.72-24.576-45.568t-55.296-14.848l-452.608 0q-30.72 0-56.32 14.848t-25.6 45.568q0 31.744 25.6 47.616t56.32 15.872l452.608 0z"
                            p-id="4761" fill="#8a8a8a"></path>
                    </svg>
                </div>
            </template>
        </draggable>
    </div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import { useMain } from "@/store/home";
import { showConfirmDialog } from 'vant'
const usemain = useMain()
const props = defineProps(['cardData', 'cardIndex'])
const onEnd = () => {
    console.log('Cend', props.cardData);
}
//长按震动功能
let timeOutEvent: any
const gtouchstart = (e: any) => {
    //开始触摸
    timeOutEvent = 0
    e.target.setAttribute('readonly', true);
    timeOutEvent = setTimeout(() => {
        e.target.setAttribute('readonly', true);
        setTimeout(() => {
            navigator.vibrate(80);
        }, 900);
    }, 100)
}
const gtouchmove = () => {
    clearTimeout(timeOutEvent)
    timeOutEvent = 0
}
const gtouchend = (e: any) => {
    clearTimeout(timeOutEvent)
    e.target.removeAttribute('readonly');
    timeOutEvent = 0
}

//输入框自动换行功能
var autoTextarea = function (elem: any) {
    var isFirefox =
        !!document.getBoxObjectFor || "mozInnerScreenX" in window,
        isOpera =
            !!window.opera && !!window.opera.toString().indexOf("Opera"),
        addEvent = function (type: any, callback: any) {
            elem.addEventListener ? elem.addEventListener(type, callback, false) : elem.attachEvent("on" + type, callback);
        },
        getStyle = elem.currentStyle
            ? function (name: any): any {
                var val = elem.currentStyle[name];
                if (name === "height" && val.search(/px/i) !== 1) {
                    var rect = elem.getBoundingClientRect();
                    return (
                        rect.bottom -
                        rect.top -
                        parseFloat(getStyle("paddingTop")) -
                        parseFloat(getStyle("paddingBottom")) +
                        "px"
                    );
                }
                return val;
            }
            : function (name: any) {
                return getComputedStyle(elem, null)[name];
            },
        minHeight = parseFloat(getStyle("height"));
    elem.style.resize = "none";
    var change = function () {
        var scrollTop,
            height,
            padding = 0,
            style = elem.style;
        if (elem._length === elem.value.length) return;
        elem._length = elem.value.length;
        if (!isFirefox && !isOpera) {
            padding = parseInt(getStyle("paddingTop")) + parseInt(getStyle("paddingBottom"));
        }
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        elem.style.height = minHeight + "px";
        if (elem.scrollHeight > minHeight) {
            height = elem.scrollHeight - padding;
            style.overflowY = "hidden";
            style.height = height + "px";
            scrollTop += parseInt(style.height) - elem.currHeight;
            document.body.scrollTop = scrollTop;
            document.documentElement.scrollTop = scrollTop;
            elem.currHeight = parseInt(style.height);
        }
    };
    addEvent("propertychange", change);
    addEvent("input", change);
    addEvent("focus", change);
    change();
}

const deleteCardItem = (index: any) => {
    console.log(props.cardIndex, index);
    showConfirmDialog({
        title: `确认删除这一条吗？`,
    })
        .then(() => {
            usemain.cardsList[props.cardIndex].data.splice(index, 1)
        })
        .catch(() => {
            // on cancel
        });
}
onMounted(() => {
    console.log(props.cardData);
    var text: any = document.getElementsByClassName("textarea1");
    for (let i = 0; i < text.length; i++) {
        autoTextarea(text[i]);
    }
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>
.ghost {
    opacity: 0.5;
}

// .cardItem {
//     width: 100%;
//     padding: 8px 0px;
//     background-color: rgba(234, 209, 243, 0.5);
//     border-radius: 5px;
//     border: 1px solid #ccc;
//     margin-bottom: 5px;
//     position: relative;
// }

textarea {
    line-height: 32px;
    font-size: 13px;
    margin-left: 4px;
    margin-bottom: 5px;
    height: 32px;
    border-radius: 5px;
    background-color: rgba(226, 177, 244, 0.5);
    outline: 0 none;
    max-height: 300px;
    width: 96%;
    border: 1px solid #ccc;
}

textarea:focus {
    box-shadow: 0px 0px 4px 4px rgb(247, 219, 248);
}

.icon {
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    visibility: hidden;
    opacity: 0;
}

textarea:focus~.icon {
    visibility: visible;
    opacity: 1;
}
</style>