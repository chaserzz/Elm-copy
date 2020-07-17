<!-- 组件说明 -->
<template>
  <div class='category_list'>

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

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>

</style>