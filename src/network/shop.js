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

//获取顾客评价信息
export function getCustomerComments(restaurant_id, offset, limit, tag_name) {
    return request({
        url: 'https://elm.cangdu.org/ugc/v2/restaurants/' + restaurant_id + '/ratings',
        querys: {
            offset,
            limit,
            tag_name
        },
    })
}
//获得评价分数
export function getComments(restaurant_id) {
    return request({
        url: 'https://elm.cangdu.org/ugc/v2/restaurants/' + restaurant_id + '/ratings/scores'
    })
}
//获取评价分类
export function getCommentsTags(restaurant_id) {
    return request({
        url: 'https://elm.cangdu.org/ugc/v2/restaurants/' + restaurant_id + '/ratings/tags'
    })
}