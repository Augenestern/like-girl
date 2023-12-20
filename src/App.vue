<template>
  <div class="maxBox" @click="boom" style="overflow-x: hidden; font-family:serif;"><router-view></router-view></div>
</template>

<script setup lang="ts">
import mojs from '@mojs/core'
import { showToast } from 'vant'
const burst = new mojs.Burst({
  left: 0, top: 0,
  radius: { 0: 30 },
  angle: 'rand(0, 360)',
  children: {
    shape: 'line',
    stroke: 'pink',
    fill: 'none',
    scale: 1,
    scaleX: { 1: 0 },
    easing: 'cubic.out',
    duration: 1000
  }
});
const bubbles = new mojs.Burst({
  left: 0, top: 0,
  radius: 28,
  count: 3,
  timeline: { delay: 100 },
  children: {
    stroke: 'pink',
    fill: 'none',
    scale: 1,
    strokeWidth: { 8: 0 },
    radius: { 0: 'rand(6, 10)' },
    degreeShift: 'rand(-50, 50)',
    duration: 400,
    delay: 'rand(0, 250)',
  }
});
let boom = (e: any) => {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();

  bubbles
    .tune({ x: e.pageX, y: e.pageY })
    .generate()
    .replay();
}

var time:any = '' // 用来存上一次按键时间；
setTimeout(() => {
  // 监听返回按钮
  document.addEventListener('plusready', function () {
    plus.key.addEventListener('backbutton', function (_evt:any) {
      var webview = plus.webview.currentWebview();
      var url = location.hash.split('/')[1];
      console.log("url",url);
      if (url === 'home') { // 处于首页时,实现退出app操作
        // vant.Toast('提示');
        if ((new Date() as any) - time < 2000) { // 小于2s,退出程序
          webview.close();
        } else { // 重置时间，
          time = new Date();
          showToast('再次返回退出');
        }
        return;
      } else {
        history.go(-1); // 不满足退出操作，，返回上一页
      }
    }, false);
  })
}, 10)
</script>

<style>
.maxBox {
  overflow-x: hidden;
}
* {
  /* 禁止长按屏幕复制内容*/
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
input , textarea{
  /*用上边的禁止复制方法后 此时在ios手机有问题，所有的输入框自动失去焦点无法输入内容,*/
  -webkit-user-select:auto;
}
</style>
