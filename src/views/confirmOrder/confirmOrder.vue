<template>
  <div class='confirmOrder'>
    <confirm-order-nav-bar />
    <confirm-address />
    <confirm-deliver />
    <confirm-pay-way />
  </div>
</template>

<script>

import  confirmOrderNavBar from './childCom/confirmOrderNavBar'
import confirmAddress from './childCom/confirmAddress'
import confirmDeliver from './childCom/confirmDeliver'
import confirmPayWay from './childCom/confirmPayWay'

import {getShopInfo,getFoodList} from 'network/confirmOrder'

export default {
  name: 'confirmOrder',
  components:{
   confirmOrderNavBar,
   confirmAddress,
   confirmDeliver,
   confirmPayWay
  },
  data () {
   
    return {
      geohash:'',
      shopId:''
    }
  },
  computed:{
 
  },
  methods:{
  
  },
  beforeMount(){
    //获得经纬度和商店id
  this.geohash = this.$route.params.geohash
  this.shopId = this.$route.params.shopId

  }
}
</script>

<style scoped>
.confirmOrder{
  background-color: #f5f5f5;
}
</style>