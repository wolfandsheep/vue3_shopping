import httpInstance from '@/utils/http.js'


// 1.获取分类数据
export const getCategoryApi = (id) => {
  return httpInstance({
    url:'/category',
    params:{
      id
    }
  })
}