<!-- 组件说明 -->
<template>
  <div class='FoodList'>
    <transition name="fade-choose">
    <div>
      <scroll 
      ref='left_scroll'
      id='left_Scroll'>
        <div class='left'>
          <ul class='foodtitle'>
            <li ref='category' class='foodtitleitem' v-for='(item,index) in FoodList' :key='index' :class='{active: index == currentIndex}' @click='categoryClick(index)'>
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </scroll>
        <div class='right' >
          <scroll
          @scroll='contentScroll'
          :probe-type='3'
          ref='right_scroll' 
          id='right_Scroll'>
          <div class='FoodListItem' v-for='(item,index) in FoodList' :key='index' ref='detailItem'>
            <header>
           <span class='Itemname'>{{item.name}}</span>
           <span class='ItemDesc'>{{item.description}}</span>
            </header>
            <ul class='detailInfo'>
              <li class='foodItem' v-for='(item,id) in item.foods' :key='id'>
                <section>
                  <div class='foodImg'>
                    <img :src="'https://elm.cangdu.org/img/' + item.image_path" >
                  </div>
                  <div class='desc'>
                    <p class='foodNmae'>{{item.name}}</p>
                    <p class='foodDesc'>{{item.description}}</p>
                    <p class='foodSell'>月售{{item.month_sales}}份 好评率{{item.satisfy_rate}}%</p>
                    <span v-if='item.activity != null' class='foodActive'>{{ item.activity.image_text || item.activity[0].image_text }}</span>
                    <p class='foodPrice'>
                      <span class='money'>￥</span><span class='singal'>{{item.specfoods[0].price}}</span> <span class='guige' v-if='item.specifications.length != 0'>起</span>
                      <span v-if='item.specifications.length != 0' class='stand foodPrice_right'>选规格</span>
                      <span v-else class='foodPrice_right'>
                         <!-- 减号 -->
                        <svg @click='subToCart(index,id)'  v-if = 'item.__v !== 0' t="1595580263309" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6695" width="19" height="19"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m-192 330.666667v64h384v-64H320z" p-id="6696" fill="#1296db"></path></svg>
                        <span class='num' v-if = 'item.__v !== 0'>{{item.__v}}</span>
                         <!--加号 -->
                        <svg  @click='addToCart(index,id)' t="1595580245577" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6413" width="19" height="19"><path d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m32 170.666667h-64v159.978667L320 480v64l160-0.021333V704h64v-160H704v-64h-160V320z" p-id="6414" fill="#1296db"></path></svg>                    
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
                //购买的物品
                Cart: []
            };
        },
        methods: {
            //左边分类菜单点击事件
            categoryClick(index) {
                this.currentIndex = index
                this.$refs.right_scroll.ScrollTo(0, -this.$refs.detailItem[this.currentIndex].offsetTop, 800)
            },
            //右边详细菜单滚动事件
            contentScroll(position) {
                //是否是向下滑动
                let flag = true
                    //记录Y值
                let y = -position.y
                if (y < 0) {
                    return;
                }
                for (let i = 0; i < this.$refs.detailItem.length; i++) {
                    if (this.$refs.detailItem[i].offsetTop > y) {
                        if (this.currentIndex > i - 1) {
                            flag = false
                        }
                        this.currentIndex = i - 1
                        break
                    }
                }
                let max = -this.$refs.left_scroll.scroll.maxScrollY
                if (this.$refs.category[this.currentIndex].offsetTop > max) {
                    this.$refs.left_scroll.ScrollTo(0, -this.$refs.category[this.currentIndex].offsetTop + max, 300)
                }
            },
            addToCart(index, id) {
                this.FoodList[index].foods[id].__v++
                    this.$emit('changeCart', index, id, this.FoodList[index].foods[id].__v, this.FoodList[index].foods[id].name, this.FoodList[index].foods[id].specfoods[0].price)
            },
            subToCart(index, id) {
                this.FoodList[index].foods[id].__v--
                    this.$emit('changeCart', index, id, this.FoodList[index].foods[id].__v, this.FoodList[index].foods[id].name, this.FoodList[index].foods[id].specfoods[0].price)
            }
        },
        mounted() {

        },
    }
</script>

<style scoped>
    #left_Scroll,
    #right_Scroll {
        overflow: hidden;
        height: calc(100vh - 19vh - 8.5vh - 8vh);
    }
    
    .FoodList {
        position: relative;
        background-color: #f5f5f5;
    }
    
    .left {
        position: relative;
        width: 13vh;
    }
    
    .foodtitle {
        display: inline-block;
    }
    
    .foodtitleitem {
        width: 13vh;
        padding-top: 2.4vh;
        padding-bottom: 2.4vh;
        padding-left: 1.4vh;
        color: #666;
        font-size: .8rem;
        border-bottom: .025rem solid #e4e4e4;
    }
    
    .foodtitleitem span {
        display: inline-block;
        height: 2.7vh;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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