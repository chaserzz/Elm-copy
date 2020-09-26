<template>
  <div class='confirmOrder'>
    <confirm-order-nav-bar />
    <confirm-address />
    <confirm-deliver :time='deliverTime' />
    <confirm-pay-way />
    <confirm-info 
    :food-list='cartList'
    :deliver-fee='deliverFee'
    :box-fee='boxFee'
    :shop-info='shopInfo' 
    />
    <confirm-remark-info :remark-info='remarkInfo'/>
  </div>
</template>

<script>
  import confirmOrderNavBar from './childCom/confirmOrderNavBar'
  import confirmAddress from './childCom/confirmAddress'
  import confirmDeliver from './childCom/confirmDeliver'
  import confirmPayWay from './childCom/confirmPayWay'
  import confirmInfo from './childCom/confirmInfo'
  import confirmRemarkInfo from './childCom/confirmRemarkInfo.vue'

  import {
    getShopInfo,
    getFoodList,
    checkOut
  } from 'network/confirmOrder'
  import {
    setStore,
    getStore,
    removeStore,
    getSectionStore
  } from 'common/utils.js'


  export default {
    name: 'confirmOrder',
    components: {
      confirmOrderNavBar,
      confirmAddress,
      confirmDeliver,
      confirmPayWay,
      confirmInfo,
      confirmRemarkInfo
    },
    data() {

      return {
        geohash: '', //经纬度
        shopId: 0, //商店ID
        shopInfo: null, //商店信息
        deliverTime:0, //送达时间
        boxFee:0, //餐盒费
        deliverFee:0,//配送费
        cartList:[], // 购物车
        remarkInfo:null
      }
    },
    computed: {

    },
    methods: {
      //获取商店的信息
      _getShopInfo(shopId) {
        getShopInfo(shopId).then(res => {
          res.image_path = 'https://elm.cangdu.org/img/' + res.image_path
          this.shopInfo = res
          this.deliverFee =res.float_delivery_fee
        })
      },
      //获取本地存储和路由的数据
      getData() {
        //获得经纬度和商店id
        this.geohash = this.$route.params.geohash
        this.shopId = Number(this.$route.params.shopId)
        let cartList = JSON.parse(getStore('CartList'))
        let newArr = new Array
        for (let item of cartList) {
          if (item.shopId == this.shopId) {
            newArr.push({
              attrs: [],
              extra: {},
              id: item.id,
              name: item.name,
              packing_fee: item.packing_fee,
              price: item.price,
              quantity: item.num,
              sku_id: item.sku_id,
              specs: item.specs,
              stock: item.stock,
            })
            this.cartList.push(item)
          }
        }
        //发送到购物车接口
        checkOut(this.geohash,[newArr],this.shopId).then(res =>{
          this.boxFee = 377 * newArr.length -100
          this.deliverTime = 13 * newArr.length 
          if(this.deliverTime < 40) this.deliverTime = 40
        })
      //获得备注信息
      let obj =JSON.parse(getSectionStore('clientRemarks'))
      let remarkinfo = ''
      remarkinfo += obj.other
      if(obj.quick){
      for(const item of obj.quick){
        
        remarkinfo += item +","
       }
      }else{
        remarkinfo ='口味,偏好等 '
      }
      this.remarkInfo = remarkinfo
      }
    },
    beforeMount() {
      this.getData()
      this._getShopInfo(this.shopId)

    }
  }
</script>

<style scoped>
  .confirmOrder {
    width: 100%;
    overflow: hidden;
    background-color: #f5f5f5;
  }
</style>