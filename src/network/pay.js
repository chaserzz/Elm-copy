import { request } from './network'

export function getShopInfo(shopid) {
    return request({
        url: '/shopping/restaurant/' + shopid

    })
}