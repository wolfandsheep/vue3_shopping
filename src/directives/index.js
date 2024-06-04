
/**
 * 定义懒加载插件
 */
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        // 懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
                    if (isIntersecting) {
                        el.src = binding.value
                        // 一旦图片加载完成后，移除监听器，否则会重复监听。
                        stop()
                    }
                })
            }
        })
    }

}





