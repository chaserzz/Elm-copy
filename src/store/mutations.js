import { SETTOTALPRICE } from './mutations_type'

export default {
    [SETTOTALPRICE](state, payload) {
        state.totalprice = payload
    },

}