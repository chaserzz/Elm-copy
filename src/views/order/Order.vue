<!-- 组件说明 -->
<template>
  <div class='order'>
    <order-nav-bar />
    <order-list :list-info='OrderList' :totalPrice='totalPrice'/>
  </div>
</template>

<script>
    import orderNavBar from './childCom/orderNavBar'
    import OrderList from './childCom/OrderList.vue'

    export default {
        name: 'Order',
        components: {
          orderNavBar,
          OrderList
        },
        data() {
            return {
              OrderList:[], //订单
              totalPrice:0  //总价格
            };
        },
        computed: {

        },
        methods: {
          //获取订单列表
          getOrderInfo(){
            this.OrderList = this.$store.state.finishorder
          }
        },
        mounted(){
          this.getOrderInfo()
        }
    }
</script>

<style scoped>
.order{
  overflow: hidden;
}
</style>