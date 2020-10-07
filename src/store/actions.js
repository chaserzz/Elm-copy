import { SETFINISHORDER } from './mutations_type'


export default {
    add_Order(context, payload) {
        return new Promise((resolve, reject) => {
            context.commit(SETFINISHORDER, payload)
            resolve('支付成功')
        })
    }
}