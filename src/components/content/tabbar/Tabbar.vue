<!-- 组件说明 
  饿了么底部导航栏
-->
<template>
  <div class='tabbar'>
    <tab-bar class='tabbar'>
      <tab-bar-item path='/home'  activeColor='#1bbffc'>
        <div slot="item-icon">
          <img src="~assets/images/tabbar/elm.png" alt="">
        </div>
        <div slot='item-active-icon'>
          <img src="~assets/images/tabbar/elm-act.png" alt="">
        </div>
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item path='/discover' activeColor='#1bbffc'>
        <div slot="item-icon">          
          <img src="~assets/images/tabbar/discover.png" alt="">
        </div>
        <div slot='item-active-icon'>          
          <img src="~assets/images/tabbar/discover-act.png" alt="">
        </div>
        <div slot="item-text">发现</div>
      </tab-bar-item>
      <tab-bar-item path='/order' activeColor='#1bbffc'>
        <div slot="item-icon"> 
           <img src="~assets/images/tabbar/order.png" alt="">
         </div>
        <div slot='item-active-icon'>          
          <img src="~assets/images/tabbar/order-act.png" alt="">
        </div>
        <div slot="item-text">订单</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor='#1bbffc'>
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
    export default {
        name: 'Tabbar',
        components: {
            TabBar,
            TabBarItem
        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>

</style>