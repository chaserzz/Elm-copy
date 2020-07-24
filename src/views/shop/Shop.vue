<!-- 组件说明 
    这是店铺页面
-->
<template>
  <div class='Shop'>
    <shop-nav-bar class='navBar'/>
    <shop-desc :info = 'shopInfo' @showActive = 'showActive'/>
    <tab-control class='tabControl' :title='["商品","评价"]' @tabClick = 'tabClick'/>
    <shop-food-list :food-list='FoodList'/>
  </div>
</template>

<script>
    import ShopNavBar from './childCom/ShopNavBar'
    import ShopDesc from './childCom/ShopDesc'
    import ShopFoodList from './childCom/ShopFoodList.vue'

    import tabControl from 'components/content/tabcontrol/tabcontrol'

    import {
        getShopInfo,
        getFoodList
    } from 'network/shop.js'
    export default {
        name: 'Shop',
        components: {
            ShopNavBar,
            ShopDesc,
            tabControl,
            ShopFoodList
        },
        data() {
            return {
                shopId: 0,
                shopInfo: [],
                FoodList: []
            };
        },
        computed: {

        },
        methods: {
            //获取关于店铺的所有信息
            getShopInfo() {
                this.shopId = this.$route.params.shopid
                    //获取店铺的详情
                getShopInfo(this.shopId).then(res => {
                        res.image_path = 'https://elm.cangdu.org/img/' + res.image_path
                        if (res.activities[0]) {
                            res.activities[0].icon_color = '#' + res.activities[0].icon_color
                        }
                        this.shopInfo = res
                    })
                    //获取店铺的食品页面
                getFoodList(this.shopId).then(res => {
                    console.log(res);
                    this.FoodList = res
                })
            },
            showActive() {
                this.showActive = true
            },
            //tab栏点击
            tabClick(index) {
                console.log(index);
            },
        },
        mounted() {
            this.getShopInfo()
        },
    }
</script>

<style scoped>
    .Shop {
        position: relative;
        z-index: 19;
        height: 100vh;
        background-color: #f5f5f5;
    }
    
    .navBar {
        position: absolute;
        left: -.8rem;
        z-index: 100;
    }
    
    .tabControl {
        border-bottom: .025rem solid #e4e4e4;
    }
</style>