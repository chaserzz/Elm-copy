<template>
  <div class='pay'>
    <pay-nav-bar />
    <pay-timer />
    <pay-way />
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
export default {
  name: 'Pay',
  components:{
   PayNavBar,
   PayTimer,
   PayWay,
   alertTip
  },
  data () {
   
    return {
        showAlert: false, //是否显示警告
        alertText: '', //警告内容

    }
  },
  computed:{

  },
  methods:{
    //按钮点击
    goOrder(){
      this.alertText = '当前环境无法支付,请前往APP进行'
      this.showAlert = true

    },      
    //关闭提示
      closeTip() {
        this.showAlert = false
        this.$router.push({
          path:'/medium/order'
        })
      }
  }
}
</script>

<style scoped>
.pay{
  overflow: hidden;
}
.confirm{
  
  height: 2.5rem;
  width: 90%;
  margin-top: .5rem;
  margin-left: 5%;
  border-radius: .25rem;
  background-color:#4cd964;
  font-size: .95rem;
  font-weight: 700;
  color: #fff;
  line-height: 2.5rem;
}
</style>