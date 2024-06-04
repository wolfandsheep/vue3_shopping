<script setup>
// 给本组件起名
defineOptions({
  name: "HomeVue",
});

// 导入组件
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeHot from "./components/HomeHot.vue";
import homeProduct from "./components/HomeProduct.vue";
</script>


<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
    <HomeNew />
    <HomeHot />
    <homeProduct />
  </div>

</template>
