<template>
  <div class='pay'>
    <pay-nav-bar />
    <pay-timer @timeOver='timeOver' />
    <pay-way @Paychose='payChoose' />
    <button @click='goOrder()' class='confirm'>
      确认支付
    </button>
    <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText" />
  </div>
</template>

<script>
  import PayNavBar from './childCom/PayNavBar'
  import PayTimer from './childCom/PayTimer'
  import PayWay from './childCom/PayWay'

  import alertTip from 'components/common/alter/alertTip'
  import {
    getShopInfo
  } from 'network/pay'
  import {
    setStore,
    getStore,
    removeStore
  } from 'common/utils'

  export default {
    name: 'Pay',
    components: {
      PayNavBar,
      PayTimer,
      PayWay,
      alertTip
    },
    data() {

      return {
        showAlert: false, //是否显示警告
        alertText: '', //警告内容
        pay: false, //选择支付方式
        timeOut: false, //时间是否走完
        shopId: 0, //商店ID
        Order:{}, //订单内容
        newCartList:[] //更新后的购物车
      }
    },
    methods: {
      //确认已经选择了支付方式
      payChoose() {
        this.pay = true
      },
      //按钮点击
      goOrder() {
        if (this.pay === false) {
          this.alertText = '请先选择支付方式'
          this.showAlert = true
          //将新的购物车更新到本地缓存中 
          this.removeStore('CartList')
          this.setStore('CartList',this.newCartList)
          return 
        }
        this.alertText = '支付完成,请前往订单页面'
        this.showAlert = true
        this.$store.dispatch('add_Order',this.Order)
      },
      //关闭提示
      closeTip() {
        this.showAlert = false
        if (this.timeOut) {
          this.$router.push({
            path: '/medium/shop/' + this.shopId
          })
        }
        if (this.pay) {
          this.$router.push({
            path: '/medium/order/'
          })
        }
      },
      //获取本订单的内容
      getOrderInfo() {
        this.shopId = Number(this.$route.params.shopId)
        let time = Number(this.$route.params.deliver_time)
        let deliverTime = this.getDeliverTime(time)
        let totalPrice = this.$store.state.totalprice
        let Order = {}
        getShopInfo(this.shopId).then(res => {
          let shopInfo = {}
          res.image_path = 'https://elm.cangdu.org/img/' + res.image_path
          shopInfo.name = res.name
          shopInfo.image = res.image_path
          shopInfo.phone = res.phone
          shopInfo.totalPrice = totalPrice
          shopInfo.deliver_time = deliverTime
          Order.shopInfo = shopInfo
          this.Order = Order
        })
        let CartList = JSON.parse(getStore('CartList'))
        let cartList = [] //本次支付的购物车
        for (let i = 0; i < CartList.length; i++) {
          if (CartList[i].shopId == this.shopId) {
            cartList.push(CartList[i])
            CartList.splice(i, 1)
            i--
          }
        }
        this.newCartList = CartList
        Order.CartList = cartList
      },
      //15min支付时间走完
      timeOver() {
        this.alertText = '支付超时,回到商店页面'
        this.showAlert = true
        this.timeOut = true
      },
      //得到配送的时间
      getDeliverTime(time){
        let date = new Date()
        //获得当前的分钟
        var min=date.getMinutes();
        date.setMinutes(min+time);
        let newdate=date.toLocaleString('chinese', { hour12: false }); 
        let HMS = newdate.substring(10,15)
        return HMS
      }
    },
    mounted() {
      this.getOrderInfo()
    }
  }
</script>

<style scoped>
  .pay {
    overflow: hidden;
  }

  .confirm {

    height: 2.5rem;
    width: 90%;
    margin-top: .5rem;
    margin-left: 5%;
    border-radius: .25rem;
    background-color: #4cd964;
    font-size: .95rem;
    font-weight: 700;
    color: #fff;
    line-height: 2.5rem;
  }
</style>