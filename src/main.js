import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入吐司插件
import toast from 'components/common/toast'

Vue.use(toast);

Vue.config.productionTip = false
    //事件总线
Vue.prototype.$bus = new Vue()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')