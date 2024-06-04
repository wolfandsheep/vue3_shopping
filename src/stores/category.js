import { defineStore } from 'pinia'
import { ref } from "vue";
// 导入api
import { getCategpryApi } from "@/apis/layout.js";


export const useCategoryStore = defineStore('category', () => {

    // 1. 获取导航列表数据category
    // state  定义导航列表数据
    const categoryList = ref([]);
    // action  获取导航列表数据
    const getCategory = async () => {
        const resp = await getCategpryApi();
        categoryList.value = resp.result;
    };
    


    // 最终导出
    return {
        // categoryList
        categoryList,
        getCategory


    }
})
