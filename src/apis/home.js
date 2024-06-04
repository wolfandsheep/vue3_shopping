import httpInstance from '@/utils/http.js'


// 1.获取轮播图数据
// 默认为1是首页轮播图，2是分类页轮播图
export function getBannerListApi(params = []) {
    const { distributionSite = '1' } = params
    return httpInstance.get('/home/banner', {
        params: {
            distributionSite
        }
    })
}

// 2.获取新鲜好物数据
export function findNewApi() {
    return httpInstance.get('/home/new')
}

// 3.获取人气推荐数据
export const getHotApi = () => {
    return httpInstance.get('/home/hot')
}

// 4.获取所有商品模块
export const getGoodsApi = () => {
    return httpInstance({
        url: '/home/goods'
    })
}