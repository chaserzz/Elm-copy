import { request } from './network'
export function getShopInfo(shopid) {
    return request({
        url: '/shopping/restaurant/' + shopid

    })
}

//获取食品列表
export function getFoodList(restaurant_id) {
    return request({
        url: '/shopping/v2/menu',
        params: {
            restaurant_id
        }
    })
}

//购物车检验接口
export function checkOut(geohash, entities, restaurant_id) {
    return request({
        url: '/v1/carts/checkout',
        method: 'post',
        param: {
            come_from: "web",
            geohash,
            entities,
            restaurant_id
        }
    })
}