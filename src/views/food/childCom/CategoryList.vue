<!-- 组件说明 -->
<template>
  <div class='category_list'>
    <div class='sortList'>
        <!--分类-->
        <div class="sort_item"  :class='{active:sortBy == "food"}'>
            <svg t="1595139402207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2505" width="12" height="12"><path d="M71.493818 363.589818L449.861818 809.867636a81.454545 81.454545 0 0 0 124.276364 0l378.368-446.277818A51.2 51.2 0 0 0 913.454545 279.272727H110.545455a51.2 51.2 0 0 0-39.051637 84.317091z" p-id="2506" fill="#000000"></path></svg>
        </div>
        <!--动画过渡标签-->
        <transition name="showlist">

        </transition>
        <!--排序-->
        <div class="sort_item" :class='{active:sortBy == "food"}'>
            <svg t="1595139402207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2505" width="12" height="12"><path d="M71.493818 363.589818L449.861818 809.867636a81.454545 81.454545 0 0 0 124.276364 0l378.368-446.277818A51.2 51.2 0 0 0 913.454545 279.272727H110.545455a51.2 51.2 0 0 0-39.051637 84.317091z" p-id="2506" fill="#000000"></path></svg>
        </div>
        <!--筛选-->
        <div class="sort_item" :class='{active:sortBy == "food"}'>
            <svg t="1595139402207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2505" width="12" height="12"><path d="M71.493818 363.589818L449.861818 809.867636a81.454545 81.454545 0 0 0 124.276364 0l378.368-446.277818A51.2 51.2 0 0 0 913.454545 279.272727H110.545455a51.2 51.2 0 0 0-39.051637 84.317091z" p-id="2506" fill="#000000"></path></svg>
        </div>
        
    </div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'CategoryList',
        props: {
            categoryList: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data() {
            return {
                sortBy: 'food',

            };
        },
        computed: {},
        methods: {

        },
    }
</script>

<style scoped>
    .sortList {
        padding: 1.5vh 0;
        border-bottom: 0.055rem solid #e4e4e4;
    }
    
    .sort_item {
        display: inline-block;
        position: relative;
        width: 33.3%;
        text-align: center;
        color: #333;
        font-size: .7rem;
        border-left: 0.055rem solid #e4e4e4;
    }
    
    .sortList svg {
        vertical-align: bottom;
    }
    
    .active {}
    
    .showlist-enter-active,
    .showlist-leave-active {
        transition: all 0.3s;
        transform: translateY(0);
    }
    
    .showlist-enter,
    .showlist-leave-active {
        opacity: 0;
        transform: translateY(-100%);
    }
</style>