<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive exclud='shop'>
        <router-view />
      </keep-alive>
    </transition>
    <tabbar />
  </div>
</template>
<script>
    import Tabbar from 'components/content/tabbar/Tabbar.vue'
    export default {
        name: 'App',
        components: {
            Tabbar
        },
        computed: {

        },
        methods: {

        },
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