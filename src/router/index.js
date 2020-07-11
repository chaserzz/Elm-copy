import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ("views/home/Home.vue")
const Discover = () =>
    import ("views/discover/Discover.vue")
const Order = () =>
    import ("views/order/Order.vue")
const Profile = () =>
    import ("views/profile/Profile.vue")
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/discover',
        name: 'Discover',
        component: Discover
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes
})

export default router