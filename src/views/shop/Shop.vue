<!-- 组件说明 
    这是店铺页面
-->
<template>
  <div class='Shop' ref='shop'>
    <shop-nav-bar class='navBar' />
    <shop-desc class='shopDesc' :info='shopInfo' @showActive='activeClick' @goDetail='goDetail' />
    <tab-control class='tabControl' :title='["商品","评价"]' @tabClick='tabClick' />
    <div class='shopContent'>
      <section class='Goods' v-show='currentIndex === 0'>
        <shop-food-list class='foodList' :finish-load='FoodLoadFinish' :food-list='FoodList' @changeCart='changeCart' />
        <section class='shopcart'>
          <shop-cart ref="shopCart" @goPay='goConfirm' @changeCart='changeCart' @clear='clearCart'
            :cart-data='CurrtentCartData' :receive='receiveInCart' :mini-order-fee='shopInfo.float_minimum_order_amount'
            :deliver-fee='shopInfo.float_delivery_fee' />
        </section>
      </section>
      <section class='comments' v-if='currentIndex != 0'>
        <scroll ref='scroll' :pull-up-load='true' @pullingUp='refreshComments' id='Scroll'>
          <shop-comment :syn-comment='Comments' :comment-tags='commentsTags' :customer-comments='customerComments'
            @tagClick='TagClick' />
        </scroll>
      </section>
    </div>
    <shop-active v-if='showActive' :active='activeContent' @colseActive='colse' />
  </div>
</template>

<script>
  import ShopNavBar from './childCom/ShopNavBar'
  import ShopDesc from './childCom/ShopDesc'
  import ShopFoodList from './childCom/ShopFoodList.vue'
  import ShopCart from './childCom/ShopCart.vue'
  import ShopComment from './childCom/ShopComment.vue'
  import ShopActive from './childCom/ShopActive'

  import tabControl from 'components/content/tabcontrol/tabcontrol'

  import scroll from 'components/common/scroll/scroll'

  import {
    setStore,
    getStore,
    removeStore
  } from 'common/utils'

  import {
    getShopInfo,
    getFoodList,
    getCustomerComments,
    getComments,
    getCommentsTags
  } from 'network/shop.js'
  export default {
    name: 'Shop',
    components: {
      ShopNavBar,
      ShopDesc,
      tabControl,
      ShopFoodList,
      ShopCart,
      ShopComment,
      ShopActive,
      scroll
    },
    data() {
      return {
        shopId: 0, //商店id
        shopInfo: [], //商店信息
        FoodList: [], //商品信息
        receiveInCart: false,
        //购物车的内容
        CartList: [], //购物车
        currentIndex: 0, //互斥
        commentsTags: [], //评价标签
        customerComments: [], //
        Comments: {}, //评价
        tagName: '', //当前选择的tag名称
        page: 1, //顾客评论的当前页数,
        CurrtentCartData: [], //当前商店的购物车
        FoodLoadFinish: false, //加载完毕
        showActive: false, //是否显示活动组件
        activeContent: {}, //活动组件的内容
      };
    },
    computed: {

    },
    methods: {
      //获取关于店铺的所有信息
      getShopInfo() {
        this.shopId = this.$route.params.shopid
        this.CartList = JSON.parse(getStore('CartList')) || []
        for (let i = 0; i < this.CartList.length; i++) {
          //商店ID为此ID
          if (this.CartList[i].shopId == this.shopId) {
            /*&& this.CartList[i].foodListIndex == this.CartList[i + 1]
            .foodListIndex && this.CartList[i].foodsIndex == this.CartList[i + 1].foodsIndex*/
            if (this.CartList[i + 1]) {
              if (this.CartList[i].foodListIndex == this.CartList[i + 1].foodListIndex &&
                this.CartList[i].foodsIndex == this.CartList[i + 1].foodsIndex) {
                this.CartList.splice(i, 1)
                i--
              }
            }
          }
        }
        for (let i = 0; i < this.CartList.length; i++) {
          if (this.CartList[i].num === 0) {
            this.CartList.splice(i, 1)
          }
        }
        this.getCartData()
        //获取店铺的详情
        getShopInfo(this.shopId).then(res => {
          res.image_path = 'https://elm.cangdu.org/img/' + res.image_path
          if (res.activities[0]) {
            res.activities[0].icon_color = '#' + res.activities[0].icon_color
          }
          this.shopInfo = res
        })
        //获取店铺的食品页面
        getFoodList(this.shopId).then(res => {
          res.map((item,index)=>{
            item.num = 0
          })
          for (let iter of this.CartList) {
            if (iter.shopId === this.shopId) {
              //不是规格类商品
              if (iter.specs === '') {
                res[iter.foodListIndex].foods[iter.foodsIndex].__v = iter.num
                res[iter.foodListIndex].num += iter.num
              } else {
                res[iter.foodListIndex].foods[iter.foodsIndex].__v += iter.num
                res[iter.foodListIndex].num += iter.num

              }
            }
          }
          this.FoodList = res

          this.FoodLoadFinish = true
        })
        //获得评价分类
        getCommentsTags(this.shopId).then(res => {
          this.commentsTags = res
        })
        //获取顾客评价
        getCustomerComments(this.shopId).then(res => {
            this.customerComments = res
          }),
          //获取评价分数
          getComments(this.shopId).then(res => {
            this.Comments = res
          })
      },
      //显示活动
      activeClick() {
        this.showActive = true
        this.activeContent.name = this.shopInfo.name
        this.activeContent.active = this.shopInfo.activities
        this.activeContent.promotion = this.shopInfo.promotion_info
      },
      //tab栏点击
      tabClick(index) {
        this.currentIndex = index
      },
      //改变购物车中的数量
      changeCart(index, id, num, name, price, isAdd, specs, sku_id, stock, food_id, packing_fee, isSpce) {
        //判断是否是规格类商品
        if (isSpce) {
          //判断是否是添加
          if (isAdd) {
            ++this.FoodList[index].foods[id].__v
          } else {
            --this.FoodList[index].foods[id].__v
          }
        } else {
          this.FoodList[index].foods[id].__v = num
        }
        //是否是添加数量
        if (isAdd) {
          //FoodList左边导航栏内数量span增加
          this.FoodList[index].num++
          this.receiveInCart = true 
        }else{
          //FoodList左边导航栏内数量span增加
          this.FoodList[index].num--

        }
        let findItem = false //找到相同的食品
        this.CartList = JSON.parse(getStore('CartList')) || []
        if (this.CartList.length === 1) {
          if (this.CartList[0].num === 0) {
            this.CartList = []
          }
        }
        let CartItem = {
          shopId: this.shopId,
          foodListIndex: index,
          foodsIndex: id,
          num: num,
          name: name,
          price: price,
          packing_fee: packing_fee,
          id: food_id,
          sku_id: sku_id,
          stock: stock,
          specs: specs
        }
        removeStore('CartList')
        if (this.CartList.length == 0) {
          this.CartList.push(CartItem)
        } else {
          for (let i = 0; i < this.CartList.length; i++) {
            if (this.CartList[i].shopId === this.shopId && this.CartList[i].id === food_id) {
              this.CartList[i].num = num
              findItem = true

            }
            if (this.CartList[i].num === 0) {
              this.CartList.splice(i, 1)
            }
          }
          if (!findItem)
            this.CartList.push(CartItem)
        }
        this.getCartData()
        setTimeout(() => {
          this.receiveInCart = false
        }, 500)
        setStore('CartList', this.CartList)

      },
      /**清空购物车 */
      clearCart() {
        this.$refs.shopCart.blockClick()
        this.CurrtentCartData = []
        for (let i = 0; i < this.CartList.length; i++) {
          if (this.CartList[i].shopId === this.shopId) {
            let index = this.CartList[i].foodListIndex
            let id = this.CartList[i].foodsIndex
            this.FoodList[index].foods[id].__v = 0
            this.CartList.splice(i, 1)
            i--
          }
        }
        removeStore('CartList')
        setStore('CartList', this.CartList)
      },
      getCartData() {
        let cartlist = []
        for (const iterator of this.CartList) {
          if (iterator.shopId === this.shopId && iterator.num > 0 && iterator.id !== 0) {
            cartlist.push(iterator)
          }
        }
        this.CurrtentCartData = cartlist
      },
      //改变评论
      TagClick(name) {
        getCustomerComments(this.shopId, 0, name).then(res => {
          this.tagName = name
          this.customerComments = res
        })
      },
      refreshComments() {
        getCustomerComments(this.shopId, this.page * 10, this.tagName).then(res => {
          for (const iterator of res) {
            this.customerComments.push(iterator)
          }
          this.page++
          this.$refs.scroll.finishPullUp()
          this.$refs.scroll.refresh()
        })
      },
      //修复安卓手机100vh中包含地址栏高度
      setShopHeight() {
        let height = window.innerHeight
        this.$refs.shop.style.height = height + 'px'
      },
      //前往结算页面
      goConfirm() {
        let geohash = getStore('geohash')
        this.$router.push({
          path: '/confirmOrder/' + geohash + '/' + this.shopId
        })
      },
      //关闭活动组件
      colse() {
        this.showActive = false
      },
      //前往Detail页面
      goDetail() {
        this.$router.push({
          path: '/shopDetail/' + this.shopId
        })
      }
    },
    mounted() {
      this.getShopInfo()
      this.setShopHeight()
    },
    watch: {
      CurrtentCartData() {
        if (this.CurrtentCartData.length === 0) {
          this.$refs.shopCart.blockClick()
        }
      }
    }
  }
</script>

<style scoped>
  /* 整个页面 */
  .Shop {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  /* 商品导航栏  */
  .navBar {
    position: relative;
    z-index: 99;
  }

  /* 商店简介 */
  .shopDesc {
    position: absolute;
    width: 100%;
    top: 0;
  }

  /* 切换栏 */
  .tabControl {
    margin-top: calc(7rem - 42px);
  }

  /* 商店详细内容 */
  .shopContent {
    position: relative;
    width: 100vw;
  }

  /**评论滚动 */
  #Scroll {
    height: calc(100vh - 19vh);
    overflow: hidden;
  }
</style>