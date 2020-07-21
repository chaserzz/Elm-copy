<!-- 组件说明 -->
<template>
  <div class='food'>
    <swiper>
      <swiper-item > 
        <ul class='wrap'>         
          <li v-for='(item,index) in foodList1' :key='index' class='foodItem' @click='GoFood(item)'>
              <img :src="item.image_url" >
              <span>{{item.title}}</span>
      </li>
    </ul>
      </swiper-item>
      <swiper-item > 
        <ul class='wrap'>         
          <li v-for='(item,index) in foodList2' :key='index' class='foodItem' @click='GoFood(item)'>  
              <img :src="item.image_url" >
              <span>{{item.title}}</span>
      </li>
    </ul>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
    import {
        Swiper,
        SwiperItem
    } from 'components/common/swiper/index'
    export default {
        name: 'HomeSwiper',
        props: {
            foodList1: {
                type: Array,
                default () {
                    return []
                }
            },
            foodList2: {
                type: Array,
                default () {
                    return []
                }
            },
            latitude: '',
            longitude: ''
        },
        components: {
            Swiper,
            SwiperItem
        },
        data() {
            return {

            };
        },
        methods: {
            GoFood(item) {
                this.$router.push({
                    path: '/food/' + this.longitude + '/' + this.latitude + '/' + item.title + '/' + item.id
                })
            }
        },
    }
</script>

<style scoped>
    .food {
        padding-bottom: 2vh;
        border-bottom: 2vh solid #f5f5f5;
    }
    
    .wrap {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    
    .wrap li {
        width: 25%;
        margin-top: 1vh;
    }
    
    .wrap li img {
        width: 50%;
        margin-left: 25%;
    }
    
    .wrap span {
        display: block;
        font-size: .74rem;
        text-align: center;
        color: #666;
        margin-top: 0.5vh;
        transform: scale(0.9);
    }
</style>