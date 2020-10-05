<!-- 组件说明 -->
<template>
  <div class='FoodList'>
    <transition name="fade-choose">
      <div class='container'>
        <scroll ref='left_scroll' id='left_Scroll' :probe-type='3'>
          <div class='left'>
            <ul class='foodtitle'>
              <li ref='category' class='foodtitleitem' v-for='(item,index) in FoodList' :key='index'
                :class='{active: index == currentIndex}' @click='categoryClick(index)'>
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>
        </scroll>
        <div class='right'>
          <scroll @scroll='contentScroll' :probe-type='3' ref='right_scroll' id='right_Scroll'>
            <div class='FoodListItem' v-for='(item,index) in FoodList' :key='index' ref='detailItem'>
              <header>
                <span class='Itemname'>{{item.name}}</span>
                <span class='ItemDesc'>{{item.description}}</span>
              </header>
              <ul class='detailInfo'>
                <li class='foodItem' v-for='(item,id) in item.foods' :key='id'>
                  <section>
                    <div class='foodImg'>
                      <img :src="'https://elm.cangdu.org/img/' + item.image_path" @error="imgOnerror($event)" />
                    </div>
                    <div class='desc'>
                      <p class='foodNmae'>{{item.name}}</p>
                      <p class='foodDesc'>{{item.description}}</p>
                      <p class='foodSell'>月售{{item.month_sales}}份 好评率{{item.satisfy_rate}}%</p>
                      <span v-if='item.activity != null'
                        class='foodActive'>{{ item.activity.image_text || item.activity[0].image_text }}</span>
                      <p class='foodPrice'>
                        <span class='money'>￥</span><span class='singal'>{{item.specfoods[0].price}}</span> <span
                          class='guige' v-if='item.specifications.length != 0'>起</span>
                          <!-- 减号 -->
                       <svg @click='spceSub()' v-if='item.__v !== 0 && item.specifications.length != 0' t="1595580263309" class="icon spceSub"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6695"
                            width="19" height="19" key=1>
                            <path
                              d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m-192 330.666667v64h384v-64H320z"
                              p-id="6696" fill="#000"></path>
                          </svg> 
                         <span class='spce_num' v-if='item.__v !== 0 && item.specifications.length != 0'>{{item.__v}}</span>
                          <!-- 规格 -->
                        <span  @click='chooseSpec(index,id)' v-if='item.specifications.length != 0' class='stand foodPrice_right'>选规格</span>
                        <span v-else class='foodPrice_right'>
                          <!-- 减号 -->
                          <svg @click='subToCart(index,id)' v-if='item.__v !== 0' t="1595580263309" class="icon"
                            viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6695"
                            width="19" height="19" key=1>
                            <path
                              d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m-192 330.666667v64h384v-64H320z"
                              p-id="6696" fill="#000"></path>
                          </svg>
                          <span class='num' v-if='item.__v !== 0'>{{item.__v}}</span>
                          <!--加号 -->
                          <svg @click='addToCart(index,id)' t="1595580245577" class="icon" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6413" width="19" height="19">
                            <path
                              d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m32 170.666667h-64v159.978667L320 480v64l160-0.021333V704h64v-160H704v-64h-160V320z"
                              p-id="6414" fill="#1296db"></path>
                          </svg>
                        </span>
                      </p>
                    </div>
                  </section>
                </li>
              </ul>
            </div>
          </scroll>
        </div>
        <section v-if='showSpce' class='spce_container' @click='closeSpce()'>
          <div class='spce_content' @click.stop='spceContentClick'>
            <header>
             <span>{{spceItem.name}}</span>
             <svg @click.stop='closeSpce()' t="1601782346522" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3302" width="1.1rem" height="1.1rem"><path d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944 887.296 970.24c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z" p-id="3303" fill="#666666"></path></svg>
            </header>
            <section class='spce_choice'>
              <span >规格</span>
              <ul>
                <li v-for="(item,index) in spceItem.specfoods" :key=index @click='spceClick(index)' :class="{spce_active: spceIndex === index}">
                {{item.specs_name}}
                </li>
              </ul>
            </section>
            <footer class='spce_bottom'>
              <span>
                ￥{{spceItem.specfoods[spceIndex].price}}
              </span>
              <div @click='spceAdd'>
                加入购物车
              </div>
            </footer>
          </div>
        </section>
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
      },
      CartData: {
        type: Array,
        default () {
          return []
        }
      },
      finishLoad: {
        type: Boolean,
        default: false
      }
    },
    components: {
      scroll
    },
    data() {
      return {
        currentIndex: 0,
        //购买的物品
        Cart: [],
        followScroll: true,
        //规格商品
        spceItem:null,
        //显示规格选择窗口
        showSpce:false,
        //规格互斥
        spceIndex:0,
        //存储FoodList的index
        index:0,
        //存储FoodList的id
        id:0,
        //失败图片路径
        defaultImg:require('../../../assets/images/common/Load.jpg')
      };
    },
    methods: {
      //左边分类菜单点击事件
      categoryClick(index) {
        this.currentIndex = index
        this.followScroll = false
        this.$refs.right_scroll.ScrollTo(0, -this.$refs.detailItem[this.currentIndex].offsetTop, 500)
        setTimeout(() => {
          this.followScroll = true
        }, 10)
      },
      //右边详细菜单滚动事件
      contentScroll(position) {
        if (this.followScroll) {
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

        }
      },
      //无规格添加到购物车
      addToCart(index, id) {
        let item = this.FoodList[index].foods[id]
        item.__v++
        this.$emit('changeCart', index, id, item.__v, item.name,item.specfoods[0].price, true,'',item.specfoods[0].sku_id,item.specfoods[0].stock,item.specfoods[0].food_id,item.specfoods[0].packing_fee)
      },
      //无规格购物车商品减少
      subToCart(index, id) {
        let item = this.FoodList[index].foods[id]
        item.__v--
        this.$emit('changeCart', index, id, item.__v, item.name,item.specfoods[0].price, false,'',item.specfoods[0].sku_id,item.specfoods[0].stock,item.specfoods[0].food_id,item.specfoods[0].packing_fee)
      },
      //规格商品添加
      //changeCart(index, id, num, name, price, isAdd,specs,sku_id,stock,food_id,packing_fee)  original_price
      spceAdd(){
        let index = this.index
        let id = this.id
        let item = this.FoodList[index].foods[id].specfoods[this.spceIndex]
        this.FoodList[index].foods[id].specfoods[this.spceIndex].original_price++
        this.$emit('changeCart', index, id, item.original_price, this.FoodList[index].foods[id].name,
        item.price, true,item.specs_name,item.sku_id,item.stock,item.food_id,item.packing_fee,true)
        this.closeSpce()
      },
      /** 将scroll的高度设置为innerHTML的高度  **/
      setScrllHeight() {
        let height = window.innerHeight
        let width = window.innerWidth
        let rem = width / 20.0
        let scrollHeight = height - 2.5 * rem - 7 * rem - 46
        this.$refs.left_scroll.$refs.wrapper.style.height = scrollHeight + 'px'
        this.$refs.right_scroll.$refs.wrapper.style.height = scrollHeight + 'px'
      },
      //规格商品
      chooseSpec(index,id){
        let item = this.FoodList[index].foods[id]
        this.showSpce = true
        this.spceItem = item
        this.idnex = index
        this.id = id
      },
      //规格小li点击
      spceClick(index){
        this.spceIndex = index
      },
      //背景点击关闭规格选择
      closeSpce(){
       this.showSpce = false
      },
      //阻止冒泡,
      spceContentClick(){
      },
      //规格类减少
      spceSub(){
        this.$toast.show('规格类商品请在购物车内删除', 2000)
      },
      //图片加载失败
      imgOnerror(event) {
      let img = event.srcElement
      img.src = this.defaultImg
      img.onerror = null // 防止闪图
    },
    },
    mounted() {
      this.$refs.left_scroll.refresh()
      this.setScrllHeight()
      this.$bus.$on('specSub', (item) => {
        let index = item.foodListIndex
        let id = item.foodsIndex
        let food_id = item.id
        let spces = this.FoodList[index].foods[id].specfoods
        for (let i = 0 ; i <spces.length;i++) {
          if(food_id === spces[i].food_id){
            this.FoodList[index].foods[id].specfoods[i].original_price--
          }
        }
        })
    },
  }
</script>

<style scoped>
  .fade-choose-enter-active,
  .fade-choose-leave-active {
    transition: opacity 3s;
  }

  .fade-choose-leave,
  .fade-choose-leave-active {
    display: none;
  }

  .fade-choose-enter,
  .fade-choose-leave-active {
    opacity: 0;
  }

  #left_Scroll,
  #right_Scroll {
    overflow: hidden;
  }

  .FoodList {
    position: relative;
    background-color: #f5f5f5;
  }

  .left {
    position: relative;
    width: 5rem;
    overflow: hidden;
  }

  .foodtitle {
    display: inline-block;
  }

  .foodtitleitem {
    width: 5rem;
    padding-top: 2.4vh;
    padding-bottom: 2.4vh;
    padding-left: 1.4vh;
    color: #666;
    font-size: .75rem;
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
    transition: all cubic-bezier(.01, .12, 0, .97) 2s;
  }

  .right {
    position: absolute;
    width: calc(100% - 5rem);
    height: 100%;
    top: 0;
    left: 5rem;
    overflow: hidden;
  }

  header {
    margin-left: 2vh;
    height: 7vh;
    line-height: 7vh;
  }

  .Itemname {
    font-size: 1rem;
    color: #666;
    font-weight: 700;
  }

  .ItemDesc {
    font-size: .75rem;
    margin-left: 1.5vh;
    color: #999;
  }

  .foodItem {
    position: relative;
    padding: 2vh 0;
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
    font-size: .85rem;
    font-weight: 700;
  }

  .foodDesc {
    margin-top: .3rem;
    font-size: .6rem;
    color: #999;
  }

  .foodSell {
    margin-top: .3rem;
    font-size: .65rem;
    color: #333;
  }

  .foodActive {
    position: relative;
    display: inline-block;
    left: -.2rem;
    font-size: .55rem;
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
    font-weight: 700;
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
  .spceSub{
    display: inline-block;
    position: absolute;
    font-size: .75rem;
    right: 9rem;
    top: -0.2rem;

  }
  .spce_num{
    position: relative;
    margin: 0 .3rem;
    top: -5px;
    right: -2.7rem;
    font-size: .75rem;
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
  .spce_container{
    position: absolute;
    top: -9.5rem;
    z-index: 99;
    height: 100vh;
    width: 100%;
    background-color:rgba(0,0,0,.4);
  }
  .spce_content{
    position: absolute;
    width: 70%;
    margin-left: 15%;
    top: 50%;
    transform: translate(0,-50%);
    border-radius: .2rem;
    background-color: #fff;
  }
  .spce_content header{
    position: relative;
    text-align: center;
    font-size: .95rem;
  }
    .spce_content header svg{
    position: absolute;
    top:21%;
    right: 5%;
  }
  .spce_choice span{
    font-size: .8rem;
    color: #666;
    margin-left: 5%;
  }
  .spce_choice ul {
    margin-top: .3rem;
    margin-left: 5%;
    margin-bottom: .3rem;
    overflow: hidden;
  }
  .spce_choice ul  li {
    float: left;
    margin-top: .2rem;
    padding: .3rem .5rem;
    border: .025rem solid #ddd;
    border-radius:.2rem;
    margin-right: .5rem;
    margin-bottom: .2rem;
    font-size: 0.75rem;
  }
  .spce_choice ul ::after{
    content: '';
    display: block;
    clear: both;
  }
.spce_bottom{
  position: relative;
  height: 2.5rem;
  margin-top: .5rem;
  background-color: #f5f5f5;
  border-radius: .2rem;
}
.spce_bottom span{
  margin-left: 5%;
  line-height: 2.5rem;
  font-size: .95rem;
  color: #ff6000;
  font-weight: 700;
}
.spce_bottom div{
  display: inline-block;
  position: absolute;
  right: 5%;
  top:50%;
  transform: translateY(-50%);
  padding: .3rem .5rem;
  border-radius: .2rem;
  background-color: #3199e8;
  font-size: .8rem;
  color: #fff;
}
.spce_active{
  border-color:#3190E8;
  color: #3190E8;
}
</style>