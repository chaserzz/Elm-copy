<!-- 组件说明 
  饿了么底部导航栏
-->
<template>
  <div class='tabbar'>
    <tab-bar class='tabbar'>
      <tab-bar-item path='/medium/home' @click.native='HomeClick()' :stop='true' activeColor='#1bbffc'>
        <div slot="item-icon">
          <img src="~assets/images/tabbar/elm.png" alt="">
        </div>
        <div slot='item-active-icon'>
          <img src="~assets/images/tabbar/elm-act.png" alt="">
        </div>
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path='/medium/discover' @click.native='DiscoverClick()' :stop='true'  activeColor='#1bbffc'>
        <div slot="item-icon">          
          <img src="~assets/images/tabbar/discover.png" alt="">
        </div>
        <div slot='item-active-icon'>          
          <img src="~assets/images/tabbar/discover-act.png" alt="">
        </div>
        <div slot="item-text">发现</div>
      </tab-bar-item>
      <tab-bar-item path='/medium/order' @click.native='OrderClick()' activeColor='#1bbffc'>
        <div slot="item-icon"> 
           <img src="~assets/images/tabbar/order.png" alt="">
         </div>
        <div slot='item-active-icon'>          
          <img src="~assets/images/tabbar/order-act.png" alt="">
        </div>
        <div slot="item-text">订单</div>
      </tab-bar-item>
      <tab-bar-item path='/medium/profile' @click.native='ProfileClick()' activeColor='#1bbffc'>
        <div slot="item-icon">       
          <img src="~assets/images/tabbar/profile.png" alt="">
        </div>
        <div slot='item-active-icon'>
          <img src="~assets/images/tabbar/profile-act.png" alt="">
        </div>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'

    import {
        getStore
    } from 'common/utils'

    export default {
        name: 'Tabbar',
        components: {
            TabBar,
            TabBarItem
        },
        data() {
            return {
                geohash: ''
            };
        },

        methods: {
            HomeClick() {
                this.geohash = getStore('geohash')
                this.$router.push({
                    path: '/medium/home/' + this.geohash
                })
            },
            DiscoverClick() {
                this.geohash = getStore('geohash')
                this.$router.push({
                    path: '/medium/discover/' + this.geohash
                })
            },
            OrderClick(){
                this.$router.push({
                    path: '/medium/order/' 
                })
            },
            ProfileClick(){
                this.$router.push({
                    path: '/medium/profile/' 
                })
            }
        },
    }
</script>

<style scoped>

</style>