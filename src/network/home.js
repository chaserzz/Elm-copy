import { request } from './network'

//通过经纬度获得详细地址
export function getDetailLoaction(geohash) {
    return request({
        url: '/v2/pois/' + geohash
    })
}
//获取食物分类列表
export function getFoodCategory() {
    return request({
        url: '/v2/index_entry'
    })
}

//获取商家信息
export function getStoreInfo(latitude, longitude, offset = 0, ) {
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