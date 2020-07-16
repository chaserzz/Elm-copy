import { request } from './network'

export function getCity(type = 'guess') {
    return request({
        url: '/v1/cities',
        params: {
            type
        }
    })
}