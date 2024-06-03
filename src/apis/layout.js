
import httpInstance from '@/utils/http.js'


// 获取首页header分类数据
export function getCategpryApi() {
    return httpInstance.get('home/category/head')
}