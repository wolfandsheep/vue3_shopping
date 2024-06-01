import httpInstance from '@/utils/http.js'


export const getData = () => httpInstance.get('home/category/head')