<!-- 组件说明 -->
<template>
  <div class='food'>
    <food-nav-bar title='商朝便利'/>
    <category-list :category-list='categoryList' />

  </div>
</template>

<script>
    import CategoryList from './childCom/CategoryList.vue'
    import FoodNavBar from './childCom/FoodNavBar.vue'

    import {
        getCategoryList
    } from 'network/food'

    export default {
        name: 'Food',
        components: {
            CategoryList,
            FoodNavBar
        },
        data() {
            return {
                currentId: 0,
                categoryList: []
            };
        },
        computed: {

        },
        methods: {

        },
        created() {
            this.currentId = this.$route.params.id
            getCategoryList().then(res => {
                this.categoryList = res
            })
        },
    }
</script>

<style scoped>
    .food {
        position: relative;
        background-color: #fff;
        height: 100vh;
        z-index: 9;
    }
</style>