<!-- 组件说明 -->
<template>
  <div class='food'>
    <food-nav-bar class='navbar' title='商朝便利'/>
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
                for (const item of res) {
                    if (item.image_url) {
                        item.image_url = 'https://fuss10.elemecdn.com/' + item.image_url
                    } else {
                        item.image_url = 'https://elm.cangdu.org/img/default.jpg'
                    }
                    if (!item.sub_categories) {

                    }
                }
                this.categoryList = res
                console.log(res);
            })
        },
    }
</script>

<style scoped>
    .navbar {
        position: relative;
        z-index: 99;
    }
    
    .food {
        position: relative;
        background-color: #fff;
        height: 100vh;
        z-index: 9;
    }
</style>