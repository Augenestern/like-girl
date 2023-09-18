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
        <gaodeMap></gaodeMap>
        <biaoge></biaoge>
    </div>
</template>

<script setup lang="ts">
import homeHeader from '@/components/homeHeader.vue';
import gaodeMap from '@/components/gaodeMap.vue';
import biaoge from '@/components/biaoge.vue';
const router = new (useRouter as any)
let likeyou = () => {
    router.push('/home')
}

onMounted(() => {
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
</style>