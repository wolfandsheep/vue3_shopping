<script setup>
// 给组件命名
defineOptions({
  name: "LayoutVue",
});

// 导入组件
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
// 导入store
import { useCategoryStore } from "@/stores/category.js";
import { onMounted } from "vue";


// 1.调用action，获取导航列表categoryList，存入pinia。
const CategoryStore = useCategoryStore();
onMounted(() => {
  CategoryStore.getCategory();
});





</script>

<template>
  <div>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView></RouterView>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<style lang="scss" scoped>
</style>