<template>
  <div class='timer'>
    <p class='title'>支付剩余时间</p>
    <p class='time'>
      <span>
      00 : {{min}} : {{second}}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PayTimer',
  components:{
   
  },
  data () {
    return {
      time:899, //15分钟的倒计时
      min:15,    //分钟
      second:'00'  //秒
    }
  },
  computed:{
  },
  methods:{
    //倒计时实现
    getTime(){
      this.min =  Number.parseInt((this.time /60))
      if(this.min < 10){
        this.min = '0' + this.min
      }
      this.second = this.time - (this.min *60)
      if(this.second < 10){
        this.second = '0' + this.second
      }
      if(this.time == 0){
      return ;  
      }
      this.time--
      if(this.time === 0){
        this.$emit('timeOver')
      }
    }
  },
  mounted(){
    setInterval(this.getTime,1000)
  }
}
</script>

<style scoped>
.timer{
  width: 100vw;
  padding: 2rem 0;
  background-color: #fff;
  text-align: center;
}
.title{
  font-size: .75rem;
  color: #666;
}
.time{
  margin-top: .6rem;
  font-size: 2rem;
}
</style>