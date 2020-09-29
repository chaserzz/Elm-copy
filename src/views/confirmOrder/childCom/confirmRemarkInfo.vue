<template>
  <div class='container'>
    <p class='remarkInfo'>
      <span class='left title'>订单备注</span> 
      <span class='right' @click='goRemark()'>{{remarkInfo}} </span>
      <svg t="1601258741171" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3236" width=".6rem" height=".6rem"><path d="M719.969 493.984L298.307 72.323c-9.417-9.418-23.192-10.912-30.767-3.337-7.575 7.574-6.08 21.349 3.337 30.767l411.91 411.908-412.412 412.408c-9.418 9.418-10.912 23.194-3.337 30.769 7.574 7.575 21.35 6.08 30.767-3.337l421.663-421.663a29.523 29.523 0 0 0 4.589-5.937c6.68-7.718 4.994-20.835-4.088-29.917z" fill="#272536" p-id="3237"></path></svg>
    </p>
    <p class='service'>
      <span class='left'>发票抬头</span> 
      <span class='right' @click='goInvoice()'>不需要开发票 </span>
      <svg t="1601258741171" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3236" width=".6rem" height=".6rem"><path d="M719.969 493.984L298.307 72.323c-9.417-9.418-23.192-10.912-30.767-3.337-7.575 7.574-6.08 21.349 3.337 30.767l411.91 411.908-412.412 412.408c-9.418 9.418-10.912 23.194-3.337 30.769 7.574 7.575 21.35 6.08 30.767-3.337l421.663-421.663a29.523 29.523 0 0 0 4.589-5.937c6.68-7.718 4.994-20.835-4.088-29.917z" fill="#272536" p-id="3237"></path></svg>

    </p>
  </div>
</template>

<script>
export default {
  name: 'confirmRemarkInfo',
  props:{
    remarkInfo:{
      type:String,
      default(){
        return '口味,偏好等 '
      }
    }
  },
  data () {
    return {
      
    }
  },
  computed:{
  },
  methods:{
    //前往备注路由
    goRemark(){
      this.$router.push({
        path:'/remark'
      })
    },
    //前往发票路由
    goInvoice(){
      this.$router.push({
        path:'/invoice'
      })
    }
  }
}
</script>

<style scoped>
.container{
  margin-top: .5rem;

  background-color: #fff;
}
.remarkInfo{
  position: relative;
  padding: .2rem 1rem;
  line-height: 2rem;
}
.title{
  font-size: .95rem;
  color: #666;
}
.service{
  position: relative;
  padding: .2rem 1rem;
  line-height: 2rem;
  font-size: .9rem;
  color:#999;
}
.right{
  display: inline-block;
  position: absolute;
  right: 1rem;
  width: 60%;
  font-size: .8rem;
  color: #999;
  text-align:end;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
p{
  position: relative;
}
svg{
  position: absolute;
  right: .2rem;
  top: -50%;
  transform: translateY(2.15rem);
}
</style>