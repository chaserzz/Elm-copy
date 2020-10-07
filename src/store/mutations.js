import { SETTOTALPRICE, SETSHOPID, SETFINISHORDER } from './mutations_type'

export default {
    [SETTOTALPRICE](state, payload) {
        state.totalprice = payload
    },
    [SETSHOPID](state, payload) {
        state.shopid = payload
    },
    [SETFINISHORDER](state, payload) {
        state.finishorder.push(payload)
    }
}