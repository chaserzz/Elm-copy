import { request } from './network'
//获取城市列表
export function getCity(type = 'guess') {
    return request({
        url: '/v1/cities',
        params: {
            type
        }
    })
}
//通过经纬度获得详细地址
export function getDetailLoaction(latitude, longtitude) {
    return request({
        url: '/v2/pois/' + latitude + ',' + longtitude
    })
}
//获取食物分类列表
export function getFoodCategory() {
    return request({
        url: 'https://elm.cangdu.org/v2/index_entry'
    })
}

//获取商家信息
export function getStoreInfo(latitude, longitude, offset = 0, ) {
    return request({
        url: 'https://elm.cangdu.org/shopping/restaurants',
        params: {
            latitude,
            longitude,
            offset,
        }
    })
}