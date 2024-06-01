/**
 * 请求响应api基地址
 */
import axios from 'axios'

// 1.配置基地址
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 2.配置请求响应拦截器
httpInstance.interceptors.request.use(
    (config) => {
        return config 
    },
    (error) => {
        return new Promise.reject(error)
    }
)

httpInstance.interceptors.response.use(
    (resp) => {
        return resp.data 
    },
    (error) => {
        return new Promise.reject(error)
    }
)



export default httpInstance