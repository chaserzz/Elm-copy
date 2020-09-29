<template>
  <div class='bottom_bar'>
    <section class='totalPrice'>
      <span>
        待支付￥{{totalPrice}}
      </span>
    </section>
    <section class='confirm' @click='goPay()'>
      <span>确认下单</span>
    </section>
  </div>
</template>

<script>
import {getSectionStore} from 'common/utils'

export default {
  name: 'confirmBottomBar',
  components:{
    
  },
  data () {
   
    return {
      totalPrice:0
    }
  },
  methods:{
   goPay(){
     this.$router.push({
       path:'/pay'
     })
   }
  },
  mounted(){
    this.totalPrice = JSON.parse(getSectionStore('totalPrice'))
  }
}
</script>

<style scoped>
.bottom_bar{
  position: fixed;
  height: 40px;
  bottom: 0;
  left: 0;
}
section{
  height: 40px;
  display: inline-block;
}
.totalPrice{
width: 70%;
padding-left: 1rem;
background-color: #3c3c3c;
line-height: 40px;
color: #fff;
}
.confirm{
  width: calc(30% - 1rem);
  height: 40px;
  background-color:#56d176;
  color: #fff; 
  text-align: center;
  line-height: 40px;
}
</style>