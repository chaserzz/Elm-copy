<!--
 组件说明:此组件是作为中间二次路由的中转界面
-->
<template>
  <div>
    <transition name="router-fade" mode="out-in">
        <keep-alive >
         <router-view />
        </keep-alive>
    </transition>
    <tabbar  class='tabbar'  />
  </div>
</template>

<script>
    import Tabbar from 'components/content/tabbar/Tabbar.vue'
export default {
  name: 'Medium',
  components:{
    Tabbar
  },
  data () {
   return {
    path:''
   }
   },
  activated() {
    
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  }
}
</script>

<style scoped>
    .router-fade-enter-active,	
    .router-fade-leave-active {	
        transition: opacity .3s;	
    }	
    	    
    .router-fade-enter,	
    .router-fade-leave-active {	
        opacity: 0;	
    }
</style>