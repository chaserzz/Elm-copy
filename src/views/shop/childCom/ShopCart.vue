<!-- 组件说明 -->
<template>
  <div class='ShopCart'>
		<section class='CartDetail'>
          <div class='block' > </div>
		  <div class='title'>
		  <span>购物车</span>
				<div class='clear'>
					<svg t="1596797389587" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3917" width=".75rem" height=".75rem"><path d="M801.554798 340.644067 205.431589 340.644067C179.885202 340.644067 162.849134 357.72408 162.849134 383.35575L162.849134 981.288316C162.849134 1006.912219 179.885202 1024 205.431589 1024L801.554798 1024C827.101184 1024 844.137253 1006.912219 844.137253 981.288316L844.137253 383.35575C844.137253 357.72408 827.101184 340.644067 801.554798 340.644067L801.554798 340.644067ZM444.501358 809.027716C444.501358 834.574087 427.465289 851.610163 401.918903 851.610163 376.372517 851.610163 359.336448 834.574087 359.336448 809.027716L359.336448 553.548537C359.336448 527.994434 376.372517 510.966096 401.918903 510.966096 427.465289 510.966096 444.501358 527.994434 444.501358 553.548537L444.501358 809.027716 444.501358 809.027716ZM653.452434 809.027716C653.452434 834.574087 636.416366 851.610163 610.869979 851.610163 585.323593 851.610163 568.287525 834.574087 568.287525 809.027716L568.287525 553.548537C568.287525 527.994434 585.323593 510.966096 610.869979 510.966096 636.416366 510.966096 653.452434 527.994434 653.452434 553.548537L653.452434 809.027716ZM939.646025 195.698198C939.646025 161.510005 911.93344 133.805115 877.752978 133.805115L716.397714 133.805115 716.397714 127.739589C716.397714 55.355626 661.04203 0 588.658103 0L418.336037 0C345.944357 0 290.588745 55.355626 290.588745 127.739589L290.588745 133.805115 135.035977 133.805115C100.855515 133.805115 73.142857 161.510005 73.142857 195.698198 73.142857 204.510223 75.015095 212.881262 78.334171 220.470901 81.335954 241.228295 96.677669 254.736464 118.750354 255.355392 123.949349 256.771196 129.388178 257.591281 135.035977 257.591281L877.752978 257.591281C884.924782 257.591281 891.787191 256.307003 898.193115 254.063375 907.144411 251.989957 914.486491 247.471762 919.81707 241.011668 931.986798 229.708449 939.646025 213.616245 939.646025 195.698198Z" p-id="3918" fill="#bfbfbf"></path></svg>
				  <span>清空</span>
				</div>
			</div>
			<ul class='detailList'>
				<li v-for='(item,index) in cartData' :key='index'>

				</li>
		</ul>
		</section>
    <div class='BottomBar'>
      <div class='shopSvg' :class='{move_in_cart : receive,active : cartData.length != 0}'>
			<div class='totalnum' v-if='cartData.length > 0'>
              {{totalGoods}}
            </div>
          <svg t="1595664674549" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4951" width="1.7rem" height="1.7rem"><path d="M350.72 777.46086957q19.03304348 0 36.0626087 7.01217391t30.05217391 19.53391304 20.03478261 29.55130435 7.01217391 36.0626087-7.01217391 36.06260869-20.03478261 29.55130435-30.05217391 20.03478261-36.0626087 7.51304348q-20.03478261 0-36.56347826-7.51304348t-29.55130435-20.03478261-20.03478261-29.55130435-7.01217391-36.06260869 7.01217391-36.0626087 20.03478261-29.55130435 29.55130435-19.53391304 36.56347826-7.01217391zM767.44347826 779.46434783q19.03304348 0 36.56347826 7.01217391t30.05217391 19.53391304 20.03478261 29.55130435 7.51304348 36.0626087-7.51304348 36.06260869-20.03478261 29.55130435-30.05217391 20.03478261-36.56347826 7.51304348-36.06260869-7.51304348-29.55130435-20.03478261-20.03478261-29.55130435-7.51304348-36.06260869 7.51304348-36.0626087 20.03478261-29.55130435 29.55130435-19.53391304 36.06260869-7.01217391zM935.73565217 210.47652174q28.04869565 0 43.57565218 7.51304348t22.03826087 18.53217391 6.01043478 23.54086957-3.50608696 21.5373913-12.52173913 37.06434783-21.5373913 61.60695652-23.54086957 66.61565217-17.53043478 52.09043478q-13.0226087 40.06956522-33.0573913 55.59652174t-49.08521739 15.52695653l-34.05913044 0-65.11304348 0-85.14782608 0-93.16173914 0-248.43130434 0 15.02608695 90.15652173 504.87652174 0q48.08347826 0 48.08347826 41.07130435 0 20.03478261-9.51652174 34.56t-37.56521739 14.52521739l-48.08347826 0-93.16173913 0-115.2 0-117.20347826 0-96.16695652 0-55.09565217 0q-20.03478261 0-33.55826087-9.01565217t-22.53913044-23.54086957-14.52521739-31.5547826-8.51478261-32.05565218q-1.00173913-6.01043478-5.50956522-29.05043478t-11.01913043-57.6-14.52521739-77.13391304-16.02782609-85.64869566q-19.03304348-101.17565217-43.07478261-225.39130434l-75.13043478 0q-15.02608696 0-25.04347826-7.51304348t-16.52869565-18.03130435-9.01565218-22.53913044-2.50434782-22.03826086q0-20.03478261 13.52347826-33.05739131t36.56347826-13.02260869l22.03826087 0 20.03478261 0 25.04347826 0 34.05913043 0q20.03478261 0 32.05565218 6.01043478t19.03304347 15.02608695 10.01739131 19.03304348 5.00869565 17.02956522q2.00347826 8.01391304 4.00695652 22.53913043t4.00695652 29.55130435q3.00521739 18.03130435 6.01043479 38.06608696l685.18956521 0z" fill="#ffffff" p-id="4952"></path></svg>
	  </div>
	  <section class='left'>
		<p class='goods_price'>
		  ￥<span>{{totalPrice}}</span>
		</p>
	  <p class='deliver_price'>
		<span>配送费￥{{deliverFee}}</span>
	  </p>
	  <div class='total_price' :class='{goPay : goPay}'>
		<span>{{payText}}</span>
	  </div>
	  </section>
    </div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'ShopCart',
        props: {
            receive: {
                type: Boolean,
                default: false
            },
            cartData: {
                type: Array,
                default () {
                    return []
                }
            },
            deliverFee: {
                type: Number,
                default: 5
            },
            miniOrderFee: {
                type: Number,
                default: 20
            }
        },
        components: {

        },
        data() {
            return {
                totalGoods: 0,
                totalPrice: 0.00,
                payText: "",
                goPay: false
            };
        },
        watch: {
            cartData() {
                //商品总数量
                let totalGoods = 0
                //商品总价格
                let totalPrice = 0.00
                for (const iterator of this.cartData) {    
                    totalPrice += iterator.num * iterator.price
                    totalGoods += iterator.num
                }
                this.totalGoods = totalGoods
                this.totalPrice = totalPrice
                let fee = this.totalPrice - this.miniOrderFee
                if (fee < 0) {
                    fee = -fee
                    this.payText = '还差' + fee + "起送"
                    this.goPay = false
                } else {
                    this.payText = "去结算"
                    this.goPay = true
                }
            }
        },
    }
</script>

<style scoped>
    @keyframes mymove {
        0% {
            transform: scale(1)
        }
        25% {
            transform: scale(.8)
        }
        50% {
            transform: scale(1.1)
        }
        75% {
            transform: scale(.9)
        }
        100% {
            transform: scale(1)
        }
    }
    
    @-moz-keyframes mymove {
        0% {
            transform: scale(1)
        }
        25% {
            transform: scale(.8)
        }
        50% {
            transform: scale(1.1)
        }
        75% {
            transform: scale(.9)
        }
        100% {
            transform: scale(1)
        }
    }
    
    @-webkit-keyframes mymove {
        0% {
            transform: scale(1)
        }
        25% {
            transform: scale(.8)
        }
        50% {
            transform: scale(1.1)
        }
        75% {
            transform: scale(.9)
        }
        100% {
            transform: scale(1)
        }
    }
    
    @-o-keyframes mymove {
        0% {
            transform: scale(1)
        }
        25% {
            transform: scale(.8)
        }
        50% {
            transform: scale(1.1)
        }
        75% {
            transform: scale(.9)
        }
        100% {
            transform: scale(1)
        }
    }
        .BottomBar {
        width: 100%;
    }
    
    .move_in_cart {
        animation: mymove .5s ease-in-out;
    }
    
    .ShopCart {
      position: relative;
        height: 46px;
        width: 100%;
        border: none;
        background-color: #333;
        color: white;
    }
    
    .shopSvg {
        position: absolute;
        width: 3rem;
        height: 3rem;
        top: -35%;
        left: 6%;
        background-color: #333;
        border: .2rem solid #333;
        border-radius: 50%;
    }
    
    .active {
        background-color: #3190E8;
    }
    
    .shopSvg svg {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .total_price {
        position: absolute;
        padding-left: .5rem;
        padding-right: .5rem;
        border: none;
        width: 6rem;
        height: 45px;
        top: 50%;
        right: 0;
        z-index: 3;
        transform: translateY(-50%);
        background-color: rgb(83, 83, 86);
        font-size: .9rem;
        line-height: 8vh;
        font-weight: 550;
        text-align: center;
    }
    
    p {
        margin-left: 25%;
    }
    
    .goods_price {
        position: absolute;
        top: 1vh;
        font-size: 1rem;
        font-weight: 550;
    }
    
    .deliver_price {
        position: absolute;
        bottom: .8vh;
        left: .2rem;
        font-size: .7rem;
    }
    
    .totalnum {
        position: absolute;
        z-index: 3;
        left: 77%;
        top: -.2rem;
        width: .7rem;
        min-width: .7rem;
        height: .7rem;
        min-height: .7rem;
        background-color: #ff461d;
        border: .025rem solid #ff461d;
        border-radius: 50%;
        font-size: .5rem;
        font-family: Helvetica Neue, Tahoma, Arial;
        line-height: .7rem;
        text-align: center;
    }
    
    .show {
        display: block;
    }
    
    .left {
        height: 8vh;
        width: 100%;
        overflow: hidden;
    }
    
    .goPay {
        background-color: #4cd964;
    }
    
    .CartDetail {
        position: absolute;
        bottom: 8vh;
        display: none;
    }
    
    .block {
        position: absolute;
    }
    
    .title {
        position: relative;
        padding: 2vh 4%;
        width: 100vw;
        background-color: #f5f5f5;
        color: #666;
        font-size: .85rem;
    }
    
    .clear {
        display: inline;
        position: absolute;
        right: 2%;
        font-size: .78rem;
    }
    
    .claer span {
        text-anchor: middle;
        /* 文本水平居中 */

        /* 文本垂直居中 */
    }
    
    .clear svg {
        margin-right: 8%;
    }

</style>