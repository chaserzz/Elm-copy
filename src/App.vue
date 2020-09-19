<template>
  <div id="app">
       <keep-alive exclude='Shop,Food' >
         <router-view />
        </keep-alive>
    <tabbar class='tabbar'  />
  </div>
</template>
<script>
    import Tabbar from 'components/content/tabbar/Tabbar.vue'
  import{setSectionStore,getSectionStore,removeSectionStore} from 'common/utils.js'

    export default {
        name: 'App',
        components: {
            Tabbar
        },

    }
</script>

<style>
    @import url('assets/css/base.css');
    @import url('assets/css/normalize.css');
    
</style>