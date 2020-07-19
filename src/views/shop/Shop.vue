<!-- 组件说明 
    这是店铺页面
-->
<template>
  <div class='Shop'>
    
  </div>
</template>

<script>
    import {
        getShopInfo
    } from 'network/shop.js'
    export default {
        name: '',
        components: {

        },
        data() {
            return {
                shopId: 0
            };
        },
        computed: {

        },
        methods: {
            getShopInfo() {
                this.shopId = this.$route.params.shopid
                getShopInfo(this.shopId).then(res => {
                    console.log(res);
                })
            }
        },
        mounted() {
            this.getShopInfo()
        },
    }
</script>

<style scoped>

</style>