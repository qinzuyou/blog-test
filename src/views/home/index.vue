<script setup lang="ts">
    import Huge from '@/components/hugescreen/index.vue'
</script>
<template>
    <div>
       <Huge :img="'src/assets/images/1.jpg'" :title="'你好呀'"></Huge>
     首页
             
    </div>
</template>



<style scoped lang="scss">
    img{
        width: 100%;
        height: 416px;
        object-fit: cover;
    }
</style>