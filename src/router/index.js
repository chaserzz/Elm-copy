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
const Medium = () =>
    import ("views/medium/Medium")
const Register = () =>
    import ("views/register/Register")
const confirmOrder = () =>
    import ("views/confirmOrder/confirmOrder")
const Remark = () =>
    import ('views/remark/Remark')

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
        path: '/medium',
        component: Medium,
        name: 'Medium',
        children: [{
                path: '/medium/home/:geohash',
                name: 'Home',
                component: Home
            }, {
                path: '/medium/discover/:geohash',
                name: 'Discover',
                component: Discover
            },
            {
                path: '/medium/order/',
                name: 'Order',
                component: Order
            },
            {
                path: '/medium/profile/',
                name: 'Profile',
                component: Profile
            },
        ]
    },
    {
        path: '/food/:longitude/:latitude/:name/:id',
        name: 'Food',
        component: Food
    },
    {
        path: '/shop/:shopid',
        name: 'Shop',
        component: Shop,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/confirmOrder/:geohash/:shopId',
        name: 'confirmOrder',
        component: confirmOrder,
        children: [

        ]
    },
    {
        path: '/remark',
        name: Remark,
        component: Remark
    }
]

const router = new VueRouter({
    routes
})

export default router