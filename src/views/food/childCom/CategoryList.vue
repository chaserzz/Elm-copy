<!-- 组件说明 -->
<template>
  <div class='category_list'>
    <div class='sortList'>
        <!--分类-->
        <div class="sort_item"  :class='{active:sortBy == "food",back: sortBy != "food"}' @click='sortItem("food")'>
            甜品
            <svg t="1595139402207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2505" width="10" height="10"><path d="M71.493818 363.589818L449.861818 809.867636a81.454545 81.454545 0 0 0 124.276364 0l378.368-446.277818A51.2 51.2 0 0 0 913.454545 279.272727H110.545455a51.2 51.2 0 0 0-39.051637 84.317091z" p-id="2506" fill="#000000"></path></svg>
        </div>
        <!--排序-->
        <div class="sort_item" :class='{active:sortBy == "order"}' @click='sortItem("order")'>
            排序
            <svg t="1595139402207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2505" width="10" height="10"><path d="M71.493818 363.589818L449.861818 809.867636a81.454545 81.454545 0 0 0 124.276364 0l378.368-446.277818A51.2 51.2 0 0 0 913.454545 279.272727H110.545455a51.2 51.2 0 0 0-39.051637 84.317091z" p-id="2506" fill="#000000"></path></svg>
        </div>
        <!--筛选-->
        <div class="sort_item" :class='{active:sortBy == "divide"}' @click='sortItem("divide")'>
            筛选
            <svg t="1595139402207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2505" width="10" height="10"><path d="M71.493818 363.589818L449.861818 809.867636a81.454545 81.454545 0 0 0 124.276364 0l378.368-446.277818A51.2 51.2 0 0 0 913.454545 279.272727H110.545455a51.2 51.2 0 0 0-39.051637 84.317091z" p-id="2506" fill="#000000"></path></svg>
        </div>
    </div>
        <!--动画过渡标签-->
        <!--分类-->
        <transition name="showlist">
          <section v-show='sortBy == "food"' class='sort_content food'>
            <ul class='category_left'>
                <li class='categorys' v-for='(item,index) in categoryList' :key='index' @click='categoryClick(index)'>
                    <div>
                        <img :src="item.image_url" alt="">
                        <span class='item_name'>{{item.name}}</span>
                        <span class='item_count'>{{item.count}}</span>
                        <svg t="1595234218184" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2735" width=".8rem" height=".8rem"><path d="M515.9 957.8l-86.6-86.6 358.5-358.6L428 152.8l86.6-86.6 446.5 446.4z" p-id="2736" fill="#CCCCCC"></path></svg>
                    </div>
                </li>
            </ul>
                <ul class='category_right'>
                    <scroll id='Scroll'>
                    <li v-if='index' v-for='(item,index) in detailList'  class='detailItem' >
                        <span class='detail_name'>{{item.name}}</span>
                        <span class='detail_count'>{{item.count}}</span>
                    </li>
                    </scroll>
                </ul> 
          </section>
        </transition>
        <!--动画过渡标签-->
        <!--排序-->
        <transition name="showlist">
          <section v-show='sortBy == "order"' class='sort_content order'>
        3
          </section>
        </transition>
        <!--动画过渡标签-->
        <!--筛选-->
        <transition name="showlist">
          <section v-show='sortBy == "divide"' class='sort_content divide'>
        4
          </section>
        </transition>

  </div>
</template>

<script>
    import scroll from 'components/common/scroll/scroll'

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
        components: {
            scroll
        },
        data() {
            return {
                sortBy: 'food', //大分类的互斥
                detailList: [] //大分类中小分类的数据
            };
        },
        computed: {},
        methods: {
            //大分类的点击
            sortItem(current) {
                if (current === this.sortBy) {
                    this.sortBy = ''
                } else {
                    this.sortBy = current
                }
            },
            //分类小li的点击
            categoryClick(index = 0) {
                this.detailList = this.categoryList[index].sub_categories
            }
        },
    }
</script>

<style scoped>
    .category_list {
        position: relative;
    }
    
    #Scroll {
        height: 100%;
        overflow: hidden;
    }
    
    .sortList {
        padding: 1.5vh 0;
        border-bottom: 0.055rem solid #e4e4e4;
    }
    
    .sort_item {
        display: inline-block;
        height: 100%;
        width: 33.3%;
        text-align: center;
        color: #333;
        font-size: .7rem;
        border-left: 0.055rem solid #e4e4e4;
    }
    
    .sortList svg {
        vertical-align: bottom;
        transition: all 0.3s;
    }
    
    .active svg {
        transition: ease 0.3s;
        transform: rotate(-180deg);
    }
    
    .active path {
        fill: #3190e8;
    }
    
    .active {
        color: #3190e8;
    }
    
    .sort_content {
        position: relative;
        z-index: 9;
    }
    /* 左边小li*/
    
    .category_left {
        position: relative;
        z-index: 9;
        width: 50%;
    }
    
    .category_left::after {
        content: '';
        display: block;
        clear: both
    }
    
    .category_right::after {
        content: '';
        display: block;
        clear: both;
    }
    
    ul li:first-child {
        border-top: none;
    }
    
    .categorys {
        position: relative;
        padding: .5rem 0;
        padding-left: .5rem;
        background-color: #f5f5f5;
        color: #666;
        font-size: .7rem;
    }
    
    .categorys img {
        vertical-align: middle;
        width: 1rem;
        height: 1rem;
        margin-right: .6rem;
    }
    
    .item_count {
        position: absolute;
        right: 1rem;
        display: inline-block;
        height: 1rem;
        padding: .15rem .25rem;
        border-radius: 1rem;
        background-color: #e4e4e4;
        color: #fff;
        vertical-align: middle;
    }
    
    .categorys svg {
        position: absolute;
        right: .2rem;
    }
    
    .category_right {
        position: absolute;
        height: 100%;
        padding: 0 .5rem;
        z-index: 9;
        top: 0;
        left: 50%;
        width: 50%;
        background-color: #fff;
    }
    
    .detailItem {
        position: relative;
        padding: .5rem 0;
        border-top: .03rem solid #e4e4e4;
        color: #666;
        font-size: .7rem;
    }
    
    .detail_count {
        position: absolute;
        right: 0;
    }
    
    .showlist-enter-active,
    .showlist-leave-active {
        transition: all 0.3s;
        transform: translateY(0);
    }
    
    .showlist-enter,
    .showlist-leave-active {
        opacity: 0;
        transform: translateY(-5%);
    }
</style>