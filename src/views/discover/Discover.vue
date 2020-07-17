<!-- 组件说明 -->
<template>
  <div class=''>
    <discover-nav-bar />
    <div class='search'>
        <input type="text" placeholder="请输入商家或美食名称" v-model='keyword' />
        <button>提交</button>
    </div>
    <scroll id='Scroll'>

    </scroll>
  </div>
</template>

<script>
    import DiscoverNavBar from './childCom/DiscoverNavBar.vue'

    import Scroll from 'components/common/scroll/scroll.vue'

    export default {
        name: 'Discover',
        components: {
            Scroll,
            DiscoverNavBar,
            keyword: ''
        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>
    #Scroll {
        height: 50vh;
    }
    
    .search {
        padding: 0.55rem 0.15rem;
        height: 3rem;
    }
    
    .search input {
        width: 73%;
        height: 100%;
        margin-left: 2%;
        border: 0.035rem solid #e4e4e4;
        border-radius: 0.15rem;
        padding: 0.45rem;
        background-color: rgb(242, 242, 242);
        font-size: 0.85rem;
        font-weight: 560;
        color: rgb(242, 242, 242);
    }
    
    .search button {
        display: inline-block;
        width: 22%;
        margin-left: 2%;
        height: 100%;
        background-color: rgb(49, 144, 232);
        color: #fff;
        font-size: 0.8rem;
        font-weight: 555;
        border-radius: 0.2rem;
    }
</style>