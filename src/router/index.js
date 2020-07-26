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
const Locate = () =>
    import ("views/locate/Locate")
const City = () =>
    import ("views/city/City")
const Food = () =>
    import ("views/food/Food")
const Shop = () =>
    import ("views/shop/Shop")

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/city'
    },
    {
        path: '/city',
        name: 'City',
        component: City
    },
    {
        path: '/locate/:cityId',
        name: 'Locate',
        component: Locate
    },
    {
        path: '/home/:geohash',
        name: 'Home',
        component: Home
    },
    {
        path: '/food/:longitude/:latitude/:name/:id',
        name: 'Food',
        component: Food
    },
    {
        path: '/discover/:geohash',
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
    },
    {
        path: '/shop/:shopid',
        name: 'Shop',
        component: Shop
    }
]

const router = new VueRouter({
    routes
})

export default router