<!-- 组件说明 -->
<template>
  <div class='FoodList'>
    <transition name="fade-choose">
    <div>
      <scroll id='left_Scroll'>
        <div class='left'>
          <ul class='foodtitle'>
            <li class='foodtitleitem' v-for='(item,index) in FoodList' :key='index' :class='{active: index == currentIndex}'>
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </scroll>
        <div class='right' >
          <scroll id='right_Scroll'>
          <div class='FoodListItem' v-for='(item,index) in FoodList' :key='index'>
            <header>
           <span class='Itemname'>{{item.name}}</span>
           <span class='ItemDesc'>{{item.description}}</span>
            </header>
            <ul class='detailInfo'>
              <li class='foodItem' v-for='(item,index) in item.foods'>
                <section>
                  <div class='foodImg'>
                    <img :src="'https://elm.cangdu.org/img/' + item.image_path" >
                  </div>
                  <div class='desc'>
                    <p class='foodNmae'>{{item.name}}</p>
                    <p class='foodDesc'>{{item.description}}</p>
                    <p class='foodSell'>月售{{item.month_sales}}份 好评率{{item.satisfy_rate}}%</p>
                    <span v-if='item.activity !={}' class='foodActive'>{{item.activity.image_text}}</span>
                    <p class='foodPrice'>
                      <span class='money'>￥</span><span class='singal'>20</span> <span class='guige' v-if='item.specifications.length != 0'>起</span>
                      <span v-if='item.specifications.length != 0' class='stand foodPrice_right'>选规格</span>
                      <span v-else class='foodPrice_right'>
                        <svg t="1595580263309" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6695" width="19" height="19"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m-192 330.666667v64h384v-64H320z" p-id="6696" fill="#1296db"></path></svg>
                        <span class='num'>1</span>
                        <svg t="1595580245577" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6413" width="19" height="19"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m32 170.666667h-64v159.978667L320 480v64l160-0.021333V704h64v-160H704v-64h-160V320z" p-id="6414" fill="#1296db"></path></svg>                    
                      </span>
                    </p>
                  </div>
                </section>
               </li>
            </ul>
           </div>
          </scroll>
          </div>
      </div>
     </transition>
    </div>

</template>

<script>
    import scroll from 'components/common/scroll/scroll'

    export default {
        name: 'ShopFoodList',
        props: {
            FoodList: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        components: {
            scroll
        },
        data() {
            return {
                currentIndex: 0,

            };
        },
        methods: {

        },
    }
</script>

<style scoped>
    #left_Scroll,
    #right_Scroll {
        overflow: hidden;
        height: calc(100vh - 19vh - 8.5vh);
    }
    
    .FoodList {
        position: relative;
        background-color: #f5f5f5;
    }
    
    .left {
        width: 13vh;
    }
    
    .foodtitle {
        display: inline-block;
    }
    
    .foodtitleitem {
        padding: 3vh;
        padding-left: 1.4vh;
        padding-right: 7vh;
        color: #666;
        font-size: .8rem;
        border-bottom: .025rem solid #e4e4e4;
    }
    
    .active {
        background-color: #fff;
    }
    
    .right {
        position: absolute;
        width: calc(100% - 13vh);
        height: 100%;
        top: 0;
        left: 13vh;
    }
    
    header {
        margin-left: 2vh;
        height: 7vh;
        line-height: 7vh;
    }
    
    .Itemname {
        font-size: 1rem;
        color: #666;
        font-weight: 550;
    }
    
    .ItemDesc {
        font-size: .75rem;
        margin-left: 1.5vh;
        color: #999;
    }
    
    .foodItem {
        position: relative;
        padding: 2.5vh 0;
        background-color: #fff;
        border-bottom: .015rem solid #e4e4e4;
        overflow: hidden;
    }
    
    .foodImg {
        position: absolute;
        left: 4vw;
    }
    
    .foodImg img {
        width: 2.5rem;
        height: 2.5rem;
    }
    
    .desc {
        position: relative;
        left: calc(2.5rem + 3vw + 2.5vh);
        top: .3vh;
    }
    
    .foodNmae {
        font-size: .9rem;
        font-weight: 550;
    }
    
    .foodDesc {
        margin-top: .3rem;
        font-size: .65rem;
        color: #999;
    }
    
    .foodSell {
        margin-top: .3rem;
        font-size: .7rem;
        color: #333;
    }
    
    .foodActive {
        position: relative;
        display: inline-block;
        left: -.2rem;
        font-size: .6rem;
        padding: .05rem .15rem;
        border: .045rem solid #F1884F;
        border-radius: .55rem;
        color: #F1884F;
        transform: scale(.9);
    }
    
    .foodPrice {
        position: relative;
    }
    
    .money {
        position: relative;
        display: inline-block;
        transform: scale(.75);
        color: #F1884F;
        left: -.25rem;
        top: .05rem;
    }
    
    .singal {
        position: relative;
        left: -.5rem;
        font-weight: 550;
        color: #FF6600;
    }
    
    .guige {
        position: relative;
        display: inline-block;
        font-size: .75rem;
        right: .5rem;
        color: #666;
        transform: scale(.9);
    }
    
    .foodPrice_right {
        display: inline-block;
        position: absolute;
        font-size: .75rem;
        right: 5rem;
    }
    
    .stand {
        display: inline-block;
        top: -.3rem;
        padding: .25rem .35rem;
        border-radius: .35rem;
        background-color: #3190E8;
        color: #fff;
    }
    
    .num {
        position: relative;
        margin: 0 .3rem;
        top: -5px;
    }
    
    .fade-choose-enter-active,
    .fade-choose-leave-active {
        transition: opacity .5s;
    }
    
    .fade-choose-leave,
    .fade-choose-leave-active {
        display: none;
    }
    
    .fade-choose-enter,
    .fade-choose-leave-active {
        opacity: 0;
    }
</style>