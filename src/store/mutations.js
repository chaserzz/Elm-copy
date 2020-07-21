import { SETLATITUDE, SETLONGTITUDE } from './mutations_type'

export default {
    [SETLATITUDE](state, payload) {
        state.latitude = payload
    },
    [SETLONGTITUDE](state, payload) {
        state.longitude = payload
    }
}