<template>
  <div class='confirmInfo'>
    <section v-if='shopInfo' class='shopInfo'>
      <img class='shopImg' :src="shopInfo.image_path" alt="" />
      <p>{{shopInfo.name}}</p>
    </section>
    <section class='foodInfo'>
      <ul>
        <li class='foodItem' v-for='(item,index) in foodList' :key='index'>
          <section>
            <span class='foodTitle'>{{item.name}}</span>
            <span class='foodnum'>× {{item.num}}</span>
            <span class='foodprice'>￥{{item.price}}</span>
          </section>
        </li>
        <li class='foodItem'> 
          <section>
            <span class='foodTitle'>餐盒</span>
            <span class='foodprice'>￥{{boxFee}}</span>
          </section>
        </li>
        <li class='foodItem end_of_singal'> 
          <section>
            <span class='foodTitle'>配送费</span>
            <span class='foodprice'>￥{{deliverFee}}</span>
          </section>
        </li>
        <li class='foodItem '> 
          <section>
            <span class='foodTitle'>订单</span>
            <span class='foodprice price'>待支付</span>
          </section>
        </li>
        <li class='foodItem'> 
          <section>
            <span class='foodprice price'>￥{{totalPrice}}</span>
          </section>
        </li>
      </ul>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'confirmInfo',
  props:{
    //商店信息
    shopInfo:{
      type:Object,
      default(){
        return null
      }
    },
    //购物车食品
    foodList:{
      type:Array,
      default(){
        return []
      }
    },
    //配送费
    deliverFee:{
      type:Number,
      default:4
    },
    //餐盒费
    boxFee:{
      type:Number,
      default:1000
    }
  },
  components:{
   
  },
  data () {
   
    return {
    }
  },
  computed:{
    totalPrice(){
      let sum = 0
      for (const iterator of this.foodList) {
        sum += iterator.price
      }
      return sum + this.boxFee + this.deliverFee
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.confirmInfo{
  margin-top: .5rem;
  background-color: #fff;
}
.shopInfo{
  position: relative;
  padding-bottom: .8rem;
  border-bottom: .025rem solid #f5f5f5;
}
.shopImg{
  width: 1.8rem;
  margin-top: .4rem;
  margin-left: 1rem;
  vertical-align: bottom;
}
.shopInfo p{
  display: inline-block;
  position: relative;
  top:-.45rem;
  left:.45rem;
  font-size: .95rem;
}

.foodItem section{
  position: relative;
  width: 100%;
  height: 1rem;
  padding: .55rem 0;
  font-size: .9rem;
}
.foodTitle{
  position: absolute;
  left:1rem;
  color:#666;
}
.foodnum{
  position: absolute;
  right: 4rem;
  color:#f60;
}
.foodprice{
  position: absolute;
  right: 1rem;
  color:#666;
}
.end_of_singal{
  border-bottom: .025rem solid #f5f5f5;
  padding-bottom: .3rem;
}
.price{
  color: #f60;
}
</style>