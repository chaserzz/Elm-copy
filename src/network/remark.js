import { request } from './network'

export function getremark() {
    return request({
        url: '/v1/carts/1/remarks'
    })
}