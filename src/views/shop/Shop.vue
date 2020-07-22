<!-- 组件说明 
    这是店铺页面
-->
<template>
  <div class='Shop'>
    <shop-nav-bar class='navBar'/>
    <shop-desc :info = 'shopInfo' @showActive = 'showActive'/>
    <tab-control :title='["商品","评价"]' @tabClick = 'tabClick'/>
  </div>
</template>

<script>
    import ShopNavBar from './childCom/ShopNavBar'
    import ShopDesc from './childCom/ShopDesc'

    import tabControl from 'components/content/tabcontrol/tabcontrol'

    import {
        getShopInfo
    } from 'network/shop.js'
    export default {
        name: 'Shop',
        components: {
            ShopNavBar,
            ShopDesc,
            tabControl
        },
        data() {
            return {
                shopId: 0,
                shopInfo: []
            };
        },
        computed: {

        },
        methods: {
            getShopInfo() {
                this.shopId = this.$route.params.shopid
                getShopInfo(this.shopId).then(res => {
                    res.image_path = 'https://elm.cangdu.org/img/' + res.image_path
                    res.activities[0].icon_color = '#' + res.activities[0].icon_color
                    this.shopInfo = res
                    console.log(res);
                })
            },
            showActive() {
                this.showActive = true
            },
            //tab栏点击
            tabClick(index) {
                console.log(index);
            }
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
</style>