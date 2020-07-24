import { request } from './network'

export function getShopInfo(shopid) {
    return request({
        url: '/shopping/restaurant/' + shopid

    })
}

//获取食品列表
export function getFoodList(restaurant_id) {
    return request({
        url: 'https://elm.cangdu.org/shopping/v2/menu',
        params: {
            restaurant_id
        }
    })
}