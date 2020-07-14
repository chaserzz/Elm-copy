<template>
  <div id="app">
    <router-view> </router-view>
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
</style>