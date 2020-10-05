<template>
  <div class='shop_safe' v-if='this.identification !== null'>
    <shop-safe-nav-bar />
    <shop-safe-public :status='status' v-if = 'sonRefresh'/>
    <shop-business-info :ident-info='identification' />
    <shop-food-lisence :food-lisence-info='identification'/>
    <shop-lisence-photo v-if = 'sonRefresh' :lisence='lisencePhoto' />
  </div>
</template>

<script>
import ShopSafeNavBar from './childCom/ShopSafeNavBar'
import ShopSafePublic from './childCom/ShopSafePublic'
import ShopBusinessInfo from './childCom/ShopBusinessInfo'
import ShopFoodLisence from './childCom/ShopFoodLisence'
import ShopLisencePhoto from './childCom/ShopLisencePhoto'

import scroll from 'components/common/scroll/scroll'

import {getShopInfo} from 'network/shop.js'

export default {
  name: 'ShopSafe',
  components:{
  ShopSafeNavBar,
  ShopSafePublic,
  ShopBusinessInfo,
  ShopFoodLisence,
  ShopLisencePhoto,
  scroll
  },
  data () {
    return {
      status:0, //status
      shopId:0,// 商店id
      sonRefresh:false, //刷新子组件
      identification:{}, //商店工商信息
      lisencePhoto:{} //照片
    }
  },
  computed:{
  },
  methods:{
    getStaus(){
      this.status = this.$route.params.status - 0 
    },
    getIdentification(){
      this.shopId = this.$store.state.shopid
      getShopInfo(this.shopId).then(res =>{
        this.identification = res.identification
        this.lisencePhoto = res.license
      }).then( ()=>{
        this.sonRefresh = true
      })
    }
  },
  mounted(){
    this.getStaus()
    this.getIdentification()
  }
}
</script>

<style scoped>
.shop_safe{
  overflow: hidden;
}
</style>