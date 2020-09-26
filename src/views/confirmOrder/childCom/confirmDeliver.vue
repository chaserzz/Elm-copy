<template>
  <div class='deliver_model'>
    <p class='deliver_text'>送达时间</p>
    <section class='deliver_time'>
      <p class='time'>尽快送达 | 预计 {{deliverTime}}</p>
      <p class='model'>蜂鸟专送</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'confirmDeliver',
    props:{
      time:{
        type:Number,
        default:30
      }
    },
    data() {

      return {}
    },
    computed: {
      deliverTime(){
        let date = new Date()
        //获得当前的分钟
        var min=date.getMinutes();
        date.setMinutes(min+this.time);
        let newdate=date.toLocaleString('chinese', { hour12: false }); 
        let HMS = newdate.substring(10,15)
        return HMS
      }
    },
    methods: {

    },
    mounted(){

    }
  }
</script>

<style scoped>
  .deliver_model {
    display: flex;
    justify-content: space-around;
    align-content: center;
    min-height: 4rem;
    margin-top: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-left: .25rem solid #3190e8;
    background-color: #fff;

  }

  .deliver_text {
    position: relative;
    top: 1.4rem;
    left: -1.1rem;
    color: #333;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .deliver_time {
    position: relative;
    display: flex;
    top: .4rem;
    left: 1rem;
    flex-direction: column;
    align-items: flex-end;
  }

  .time {
    font-size: .95rem;
    color: #3190e8;
    margin-bottom: 0.6rem;
  }

  .model {
    width: 3rem;
    padding: .4rem;
    background-color: #3190e8;
    border-radius: 0.25rem;
    color: #fff;
    font-size: .6rem;
  }
</style>