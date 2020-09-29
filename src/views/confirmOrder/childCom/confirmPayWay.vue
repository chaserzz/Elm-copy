<template>
  <div class='payWay'>
    <p class='way_container'>
      <span class='title'>支付方式</span> <span class='way'>在线支付 </span> 
      <b @click='choosePayWay' class='hidden' />
      <svg t="1601258741171" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3236" width=".6rem" height=".6rem"><path d="M719.969 493.984L298.307 72.323c-9.417-9.418-23.192-10.912-30.767-3.337-7.575 7.574-6.08 21.349 3.337 30.767l411.91 411.908-412.412 412.408c-9.418 9.418-10.912 23.194-3.337 30.769 7.574 7.575 21.35 6.08 30.767-3.337l421.663-421.663a29.523 29.523 0 0 0 4.589-5.937c6.68-7.718 4.994-20.835-4.088-29.917z" fill="#272536" p-id="3237"></path></svg>
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
.way_container svg{
  position: absolute;
  right: -0.9rem;
  top:-50%;
  transform: translateY(1.15rem);
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
  height: 2rem;
  line-height: 2.8rem;
  justify-content:space-between;
  color:#aaa;
  font-size: .8rem;
}
</style>