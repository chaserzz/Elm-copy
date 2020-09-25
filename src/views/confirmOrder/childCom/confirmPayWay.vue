<template>
  <div class='payWay'>
    <p class='way_container'>
      <span class='title'>支付方式</span> <span class='way'>在线支付 ></span> 
      <b @click='choosePayWay' class='hidden' />
    </p>
    <p class='redPocket'>
      <span>红包</span>   <span>暂时只在饿了么APP中支持</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'confirmPayWay',
  components:{
   
  },
  data () {
    return {
      
    }
  },
  computed:{
  },
  methods:{
    choosePayWay(){

    }
  }
}
</script>

<style scoped>
.payWay{
  min-height: 4rem;
  margin-top: .5rem;
  padding: .8rem 1rem;
  background-color: #fff;
}
.way_container{
  position: relative;
  min-height: 2rem;
  border-bottom: .025rem solid #f5f5f5;
}
.title{
  font-size: .95rem;
  color: #666;
}
.way{
  position: absolute;
  display: inline-block;
  width: 75%;
  right: 0;
  color: #aaa;
  text-align: end;
  font-size: .85rem;
}
.hidden{
  position: absolute;
  display: inline-block;
  top:-25%;
  width: 80%;
  height: 100%;
}
.redPocket{
  display: flex;
  min-height: 2rem;
  line-height: 2rem;
  justify-content:space-between;
  color:#aaa;
  font-size: .8rem;
}
</style>