import { SETTOTALPRICE, SETSHOPID, } from './mutations_type'

export default {
    [SETTOTALPRICE](state, payload) {
        state.totalprice = payload
    },
    [SETSHOPID](state, payload) {
        state.shopid = payload
    },

}