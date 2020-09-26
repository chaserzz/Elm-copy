<template>
  <div class='container'>
    <p class='remarkInfo'>
      <span class='left title'>订单备注</span> 
      <span class='right' @click='goRemark()'>{{remarkInfo}} ></span>
    </p>
    <p class='service'>
      <span class='left'>发票抬头</span> 
      <span class='right'>不需要开发票 ></span>
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
        return ''
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
    goRemark(){
      this.$router.push({
        path:'/remark'
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
  width: 65%;
  font-size: .8rem;
  color: #999;
  text-align:end;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>