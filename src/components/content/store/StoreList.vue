<!-- 组件说明 -->
<template>
  <div class='storeList'>
    <store-list-item 
    v-for='(item,index) in storeList' 
    :store-item='item' 
    :key='index'/>
  </div>
</template>

<script>
    import StoreListItem from './StoreListItem.vue'
    export default {
        name: 'StoreList',
        props: {
            storeList: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        components: {
            StoreListItem
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