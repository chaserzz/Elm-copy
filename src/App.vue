<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
       <keep-alive exclude='Shop,Food' >
         <router-view />
        </keep-alive>
    </transition>
  </div>
</template>
<script>

  import{setSectionStore,getSectionStore,removeSectionStore} from 'common/utils.js'

    export default {
        name: 'App',
    }
</script>

<style>
    @import url('assets/css/base.css');
    @import url('assets/css/normalize.css');
    .router-fade-enter-active,	
    .router-fade-leave-active {	
        transition: opacity .3s;	
    }	
    	    
    .router-fade-enter,	
    .router-fade-leave-active {	
        opacity: 0;	
    }
</style>