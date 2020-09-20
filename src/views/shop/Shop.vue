<!-- 组件说明 
    这是店铺页面
-->
<template>
  <div class='Shop' >
    <shop-nav-bar class='navBar'/>
    <shop-desc :info = 'shopInfo' @showActive = 'showActive'/>
    <tab-control class='tabControl' :title='["商品","评价"]' @tabClick = 'tabClick'/>
    <div class='shopContent'>
			<section class='Goods'  v-show='currentIndex === 0'>
				<shop-food-list class='foodList'   :finish-load='FoodLoadFinish' :food-list='FoodList' @changeCart = 'changeCart'/>
		    	<section class='shopcart'>
                	<shop-cart  
			    	:cart-data='CurrtentCartData' 
		    		:receive='receiveInCart' 
		    		:mini-order-fee ='shopInfo.float_minimum_order_amount' 
		    		:deliver-fee = 'shopInfo.float_delivery_fee'
	    			/>
                </section>
			</section>
			<section class='comments' v-if='currentIndex != 0'>
				<scroll 
				ref='scroll'
				:pull-up-load='true'
				@pullingUp = 'refreshComments'
				id='Scroll'>
					<shop-comment 
					:syn-comment = 'Comments' 
					:comment-tags='commentsTags'
					:customer-comments='customerComments'
					@tagClick='TagClick'
					/>
				</scroll>
			</section>
    </div>
  </div>
</template>

<script>
    import ShopNavBar from './childCom/ShopNavBar'
    import ShopDesc from './childCom/ShopDesc'
    import ShopFoodList from './childCom/ShopFoodList.vue'
    import ShopCart from './childCom/ShopCart.vue'
    import ShopComment from './childCom/ShopComment.vue'

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
            scroll
        },
        data() {
            return {
                shopId: 0,
                shopInfo: [],
                FoodList: [],
                receiveInCart: false,
                //购物车的内容
                CartList: [],
                currentIndex: 0,
                commentsTags: [],
                customerComments: [],
                Comments: {},
                tagName: '',
                page: 1, //顾客评论的当前页数,
                CurrtentCartData: [],
                FoodLoadFinish:false
            };
        },
        computed: {

        },
        methods: {
            //获取关于店铺的所有信息
            getShopInfo() {
                this.shopId = this.$route.params.shopid
                this.CartList = JSON.parse(getStore('CartList')) || []
                for (let i = 0; i < this.CartList.length - 1; i++) {
                    if (this.CartList[i].shopId == this.shopId && this.CartList[i].foodListIndex == this.CartList[i + 1].foodListIndex && this.CartList[i].foodsIndex == this.CartList[i + 1].foodsIndex) {
                        this.CartList.splice(i, 1)
                        i--
                    }
                }
                for (let i = 0; i < this.CartList.length - 1; i++) {
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
                        for (let item of res) {
                            for (let iter of this.CartList) {
                                if (iter.shopId === this.shopId) {
                                    res[iter.foodListIndex].foods[iter.foodsIndex].__v = iter.num
                                }
                            }
                            this.FoodList = res
                            this.FoodLoadFinish = true
                        }
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
            showActive() {
                this.showActive = true
            },
            //tab栏点击
            tabClick(index) {
                this.currentIndex = index
            },
            //改变购物车中的数量
            changeCart(index, id, num, name, price, isAdd) {
                if (isAdd) this.receiveInCart = true
                this.CartList = JSON.parse(getStore('CartList')) || []
                let CartItem = {
                    shopId: this.shopId,
                    foodListIndex: index,
                    foodsIndex: id,
                    num: num,
                    name: name,
                    price: price,
                }
                removeStore('CartList')
                if (this.CartList.length == 0) {
                    this.CartList.push(CartItem)
                } else {
                    for (let i = 0; i < this.CartList.length; i++) {
                        if (this.CartList[i].shopId == this.shopId && this.CartList[i].foodListIndex == index && this.CartList[i].foodsIndex == id) {
                            this.CartList[i].num = num
                        } else {
                            this.CartList.push(CartItem)
                        }
                        if (this.CartList[i].num === 0) {
                            this.CartList.splice(i, 1)
                        }
                    }
                }
                this.getCartData()
                setTimeout(() => {
                    this.receiveInCart = false
                }, 500)
                setStore('CartList', this.CartList)
            },
            getCartData() {
                let cartlist = []
                for (const iterator of this.CartList) {
                    if (iterator.shopId == this.shopId && iterator.num !== 0) {
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
            }
        },
        mounted() {
            this.getShopInfo()
        },
    }
</script>

<style scoped>
    .Shop {
        height: 100vh;
        background-color: #f5f5f5;
        overflow: hidden;
    }
    #Scroll {
        height: calc(100vh - 19vh);
        overflow: hidden;
    }
    .navBar {
        position: absolute;
        left: -.8rem;
        z-index: 100;
    }

    .tabControl {
        border-bottom: .025rem solid #e4e4e4;
    }

    .shopcart{
    position: relative;
    }
    .shopContent{
    position: relative;
    height:calc(100vh - 19vh - 8.5vh);
    }
    .Goods{
        height: 100%;
    }
    .shopcart{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>