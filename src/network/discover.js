import { request } from './network'

export function getSearch(geohash, keyword) {
    return request({
        url: '/v4/restaurants/',
        params: {
            geohash,
            keyword
        },
    })
}