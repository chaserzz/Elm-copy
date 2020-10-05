import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const state = {
    totalprice: 0, //购物车总价格
    shopid: 0, //当前商店的id

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})