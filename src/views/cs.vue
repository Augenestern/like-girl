<template>
  <div class="zuiwai">
    <div style="height: 150px;width: 100%;background: rgb(231, 225, 225)"></div>
    <svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(241,69,49,0.7)" />
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(241,69,49,0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(241,69,49,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(241,69,49,0.1)" />
      </g>
    </svg>
    <!-- <svg class="waves"  viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"></use>
                <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
                <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
                <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"></use>
            </g>
        </svg> -->
    <div class="shadowBox"></div>
 
  </div>
</template>

<script setup lang="ts">

//直接使用（html+vue+vant可使用此写法）
// const previewImg = (url:any) => {
//   vant.ImagePreview({
//     images: [url],
//   });
// }
onMounted(() => {
})
onUnmounted(() => {
})
</script>

<style>
/* @import url(http://fonts.googleapis.com/css?family=Lato:300:400); */

/* svg */
.waves {
  position: relative;
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
}



/* box-shadow */
.shadowBox {
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* background-color: aqua; */
  /* 五个参数分别为水平偏移，垂直偏移，模糊，扩散，颜色 */
  /* box-shadow: 4px 4px 0px 5px #89d26d; */
  box-shadow: inset 8px 8px 8px rgba(0, 0, 0, 0.3),
    inset -8px -8px 8px rgba(255, 255, 255, 0.7),
    -10px -10px 10px rgba(0, 0, 0, 0.4);
}

.zuiwai {
  background-color: #dad8d8;
  width: 100%;
  height: 100vh;
}
</style>