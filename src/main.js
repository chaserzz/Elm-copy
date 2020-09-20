import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入吐司插件
import toast from 'components/common/toast'
// 解决Uncaught (in promise) NavigationDuplicated {_name:""NavigationDuplicated"的报错
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(toast);

Vue.config.productionTip = false
    //事件总线
Vue.prototype.$bus = new Vue()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')