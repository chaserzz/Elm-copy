<template>
  <div class='order_list'>
    <section>
      <ul>
        <li v-for='(item,index) in listInfo' :key = index>
          <header>
            <img :src="item.shopInfo.image">
            <p class='shopName'>{{item.shopInfo.name}}</p>
            <p class='shopPhoto'>店家号码:{{item.shopInfo.phone}}</p>
            <span class='payFor'>已支付</span>
          </header>
          <section class='FoodList'>
            <p v-for='(FoodItem,key) in item.CartList' :key='key'>
              <span class='FoodName'>{{FoodItem.name}}</span>
              <span class='FoodNum'> × {{FoodItem.num}}</span>
            </p>
          </section>
          <footer class='foodPrice'>
            <span class='time'>预计送达时间:{{item.shopInfo.deliver_time}}</span>
            <span class='price'>￥{{item.shopInfo.totalPrice}}</span>
          </footer>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  props:{
    listInfo:{
      type:Array,
      default(){
        return {}
      },
      totalPrice:{
        type:Number,
        default:0
      }
    }
  },
  data () {
   
    return {

    }
  },
  computed:{

  },
  methods:{

  }
}
</script>

<style scoped>
.order_list{
  background-color: #fff;
  color:#666;
  font-size: .8rem;
}
img{
  float: left;
  width: 4rem;
  margin-top: 0.5rem;
  margin-right: .3rem;
}
ul li {
  position: relative;
  padding: .8rem .6rem;
}
header{
  position: relative;
}
.shopName{
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: .2rem;
}
.payFor{
  display: inline-block;
  position: absolute;
  top:.2rem;
  right: .2rem;
  border-bottom: 0.08rem solid rgb(255, 96, 0);
  color: rgb(255, 96, 0);
}

  .payFor::after {
    position: absolute;
    display: block;
    content: '';
    width: 2.55rem;
    height: 1.25rem;
    border: 0.1rem solid rgb(255, 96, 0);
    transform: skew(-15deg);
    top: -0.3rem;
    left: -0.2rem;
  }

  .FoodList{
    margin-top: .5rem;
    padding-left: 4.2rem;
    font-size: .85rem;
    color: #333 ;
  }
  .FoodList p{
    margin-top: .2rem;
  }
  footer{
    position: relative;
    margin-top: .3rem;
    padding-left: 4.2rem;
    font-size: .85rem;
  }
  .time{
    color: #3190E8;
  }
  .price{
    position: absolute;
    right: .2rem;
    color: rgb(255, 96, 0);
  }
</style>