<template>
    <div class="home-header-top">
        <slot name="toubu"></slot>
        <span style="position: absolute; right: 10px;font-size:13px;">喜欢花 喜欢浪漫 喜欢你.</span>
    </div>
</template>

<script setup lang="ts">

onMounted(() => {
})
onUnmounted(() => {
})
</script>

<style lang="less" scoped>
.home-header-top {
    height: 50px;
    width: 100%;
    line-height: 50px;
    position: fixed;
    top: 0;
    // background-color: aqua;
    z-index: 10;
    backdrop-filter: blur(10px);
    /*设置背景虚化的程度，10px为模糊半径*/
    background-color: rgba(234, 209, 243, 0.5);
    /*设置背景颜色的透明度，让背景虚化更加明显*/
    animation-name: actionOp;
    animation-duration: 3s;
}

@keyframes actionOp {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}</style>