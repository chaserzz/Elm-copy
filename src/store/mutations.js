import { SETTEXT } from './mutations_type'

export default {
    [SETTEXT](state, payload) {
        state.text = payload
    },

}