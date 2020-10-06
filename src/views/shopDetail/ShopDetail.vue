<template>
  <div class='shopDetail'>
    <shop-detail-nav-bar />
    <scroll id='scroll'>
    <shop-active v-if='sonRefresh' :info='activeInfo' />
    <shop-food-watch  v-if='sonRefresh' :watchInfo='watchInfo' />
    <shop-info   v-if='sonRefresh' :info='shopDetailInfo'/>
    </scroll>
  </div>
</template>

<script>
    import {getShopInfo} from 'network/shop.js'
    import scroll from 'components/common/scroll/scroll'

    import ShopDetailNavBar from './childCom/ShopDetailNavBar.vue'
    import ShopActive from './childCom/ShopActive.vue'
    import ShopFoodWatch from './childCom/ShopFoodWatch'
    import ShopInfo from './childCom/ShopInfo.vue'

export default {
  name: 'ShopDetail',
  components:{
   ShopDetailNavBar,
   ShopActive,
   ShopFoodWatch,
   ShopInfo,
   scroll
  },
  data () {
   
    return {
      shopInfo:null, //商店信息
      shopId:0, //商店id
      activeInfo:{}, //ShopActive需要的数据
      sonRefresh:false, //强制刷新子组件
      watchInfo:{},  //ShopFoodWatch需要的数据
      shopDetailInfo:{}, //ShopInfo需要的数据
      imgPath:'', //图片路径
      
    }
  },
  computed:{
  },
  methods:{
    _getShopInfo(){
       this.shopId = Number(this.$route.params.shopid)
       this.$store.commit('setshopid', this.shopId)
       getShopInfo(this.shopId).then(res => {
          res.image_path = 'https://elm.cangdu.org/img/' + res.image_path
          if (res.activities[0]) {
            res.activities[0].icon_color = '#' + res.activities[0].icon_color
          }
          if(res.supports.length!= 0){
            for(let index = 0;index < res.supports.length;index++){
              res.supports[index].icon_color = '#' + res.supports[index].icon_color
            }
          }
          this.shopInfo = res
        }).then(()=>{
          this.getActiveInfo()
          this.getFoodWatch()
          this.getShopDetailInfo()
          this.sonRefresh = true
        })
        
    },
    getActiveInfo(){
      this.activeInfo.active = this.shopInfo.activities
      this.activeInfo.supports = this.shopInfo.supports
    },
    getFoodWatch(){
      this.watchInfo.status = this.shopInfo.status
      this.watchInfo.identification = this.shopInfo.identification
    },
    getShopDetailInfo(){
      this.shopDetailInfo.name = this.shopInfo.name
      this.shopDetailInfo.opening_time = this.shopInfo.opening_hours[0]
      this.shopDetailInfo.address = this.shopInfo.address
      this.shopDetailInfo.license = this.shopInfo.license
    }
  },
  mounted(){
    this._getShopInfo()
  }
}
</script>

<style scoped>
  .shopDetail{
    overflow: hidden;
  }
  #scroll{
    height: calc(100vh - 49px);
    overflow: hidden;
  }
</style>