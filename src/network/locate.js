import { request } from './network'

export function getCityInfo(id) {
    return request({
        url: '/v1/cities/' + id
    })
}

export function searchAddress(city_id, keyword) {
    return request({
        url: '/v1/pois',
        params: {
            city_id,
            keyword
        }
    })
}