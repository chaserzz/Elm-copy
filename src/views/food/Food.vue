<!-- 组件说明 -->
<template>
  <div class='food'>
  <category-list :category-list='categoryList' />

  </div>
</template>

<script>
    import CategoryList from './childCom/CategoryList.vue'

    import {
        getCategoryList
    } from 'network/food'

    export default {
        name: 'Food',
        components: {
            CategoryList
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

</style>