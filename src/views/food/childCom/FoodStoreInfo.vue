<!-- 组件说明 -->
<template>
  <div class='storeInfo'>
    <store-list :store-list='storeInfo'>
    </store-list>
  </div>
</template>

<script>
  import StoreList from 'components/content/store/StoreList'
  import StoreListItem from 'components/content/store/StoreListItem'

  export default {
    name: 'FoodStoreInfo',
    props: {
      storeInfo: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      StoreList
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