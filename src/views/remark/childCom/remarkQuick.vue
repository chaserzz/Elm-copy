<template>
  <div class='quick'>
    <p class='title'>快速备注</p>
    <ul class='choose_box'>
      <li class='choose_item' v-for='(item,index) in quickContent' :key='index'>
        <section class='item'>
          <span class='item_content' :class='{active:currentIndex[index] === num}' @click='itemClick(index,num)'  v-for='(content,num) in item' :key='num'>{{content}}</span>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'remarkQuick',
  props:{
    quickContent:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      currentIndex:[-1,-1,-1,-1,-1,-1]
    }
  },
  methods:{
    itemClick(index,num){
      if(this.currentIndex[index] === num){
        this.currentIndex[index] = -1
      }else{
       this.currentIndex[index] = num
      }
      this.$emit('quickremark',this.currentIndex)
      this.$forceUpdate()
    }
  }
}
</script>

<style scoped>
.quick{
  margin-top: .5rem;
  padding: .9rem .6rem;
  background-color: #fff;
}
.title{
  font-size: .8rem;
  color:#333;
}
.choose_box{
  margin-top: 1rem;
}
.choose_item{
  display: inline-block;
  margin-right: .6rem;
  margin-bottom: .6rem;
}
.item_content{
  display: inline-block;
  border:.025rem solid #3190e8;
  border-top-left-radius: .2rem;
  border-bottom-left-radius: .2rem;
  padding: .4rem .6rem;
  font-size: .6rem;
  color: #333;
}
.item :nth-child(even){
  border-left: none;
}
.item :nth-child(3){
  border-left:none;
}
.active{
  background-color: #3190E8;
  color: #fff;
}
</style>