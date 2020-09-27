import { request } from './network'
//获取分类列表
export function getCategoryList(id) {
    return request({
        url: '/shopping/v2/restaurant/category'
    })
}
//获取商家信息
export function getStoreInfo(latitude, longitude, offset, restaurant_category_ids, order_by, restaurant_category_id = '') {
    return request({
        url: '/shopping/restaurants',
        params: {
            latitude,
            longitude,
            offset,
            'extras[]': 'activities',
            restaurant_category_id,
            'restaurant_category_ids[]': restaurant_category_ids,
            order_by,
            limit: 30,
        }
    })
}
//获取商家信息
export function FirstIn(latitude, longitude, offset = 0, ) {
    return request({
        url: '/shopping/restaurants',
        params: {
            latitude,
            longitude,
            offset,
            limit: 30
        }
    })
}