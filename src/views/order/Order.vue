<!-- 组件说明 -->
<template>
  <div class='order'>
    <order-nav-bar />
  </div>
</template>

<script>
    import orderNavBar from './childCom/orderNavBar'
    export default {
        name: 'Order',
        components: {
          orderNavBar
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
.order{
  overflow: hidden;
}
</style>