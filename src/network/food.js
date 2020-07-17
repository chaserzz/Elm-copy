import { request } from './network'
//获取分类列表
export function getCategoryList(id) {
    return request({
        url: '/shopping/v2/restaurant/category'
    })
}