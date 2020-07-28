<!-- 组件说明 -->
<template>
	<div class='shop_comment'>
		<section class='syn_assess'>
		<div class='left'>
			<p class='syn_num'>{{overall_comments}}</p>
			<p class='num_explain'>综合评价</p>
			<p class='appraise'>高于周边商家{{compare_rating}}%</p>
		</div>
		<div class='right'>
			<p class='service'>
			<span class='title'>服务态度</span>	
			<start class='start' />
			<span>{{service_score}}</span>
				<!--星星部分-->
			</p>
			<p class='foods'>
			<span class='title'>菜品评价</span>	
				<!--星星部分-->
				<start class='start' />
				<span>{{service_score}}</span>
			</p>
			<p class='deliver'>
				<span class='title'>送达时间</span>
				<span class='time'>{{synComment.deliver_time}}分钟</span>
			</p>
		</div>
		</section>
		<section class='customer_assess'>
			<div class='assess_category'>
				<div 
				 v-for = '(item,index) in commentTags'
				 class = 'assess_category_item satisfied'
				 :key = 'index'
				 :class= "{ 'active':currentIndex === index,'unsatisfied': item.unsatisfied}"	
				 @click='tagClick(index)'
				 >
					{{item.name}}({{item.count}})
				</div>
			</div>
			<div class='detail_assess'>
				<section class='detail_assess_item'>
					<header>
						<div class='user_img'> 
							<img src="~assets/images/touxiang.png" >
						</div>
						<div class='first'>
							<span class='user_name'>4******b</span>
							<span class='date'>2017-02-10</span>
						</div>
						<div class='user_assess'>
							<!--星星部分-->
							<start />
						</div>
						<span class='fontComments'>按时送达</span>
					</header>
					<footer>
						<div class='user_assrss_img'>
							<img src="" alt="">
						</div>
						<ul class='user_buy_foods'>
							<li>
							<span>韩式炸鸡</span>	
							</li>
							<li>
							<span>韩式炸鸡</span>	
							</li>
						</ul>
					</footer>
				</section>
			</div>
		</section>
	</div>
</template>

<script>
    import Start from 'components/common/start/Start'
    export default {
        name: 'ShopComment',
        props: {
            synComment: {
                type: Object,
                default () {
                    return {}
                }
            },
            commentTags: {
                type: Array,
                default () {
                    return []
                }
            },
            customerComments: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        components: {
            Start
        },
        data() {
            return {
                currentIndex: 0
            };
        },
        computed: {
            overall_comments() {
                return this.synComment.overall_score.toFixed(1)
            },
            service_score() {
                return this.synComment.service_score.toFixed(1)
            },
            food_score() {
                return this.synComment.food_score.toFixed(1)
            },
            compare_rating() {
                return this.synComment.compare_rating.toFixed(3) * 100
            }
        },
        methods: {
            tagClick(index) {
                this.currentIndex = index
            }
        },
    }
</script>

<style scoped>
    section {
        background-color: #fff;
    }
    
    .syn_assess {
        padding-top: 1.9vh;
        padding-bottom: 3vh;
        font-family: Helvetica Neue, Tahoma, Arial;
        margin-bottom: 1.5vh;
    }
    
    .left {
        float: left;
        margin-left: 10%;
    }
    
    .syn_num {
        margin-left: 15%;
        color: #f60;
        font-size: 1.5rem;
    }
    
    .num_explain {
        margin-top: .3vh;
        margin-left: 8.2%;
        font-size: .8rem;
        color: #666;
    }
    
    .appraise {
        position: relative;
        margin-top: .8vh;
        left: -5.5%;
        font-size: .6rem;
        color: #999;
    }
    
    .start {
        display: inline-block;
    }
    
    .title {
        margin-right: 5%;
        font-size: .8rem;
        color: #666;
    }
    
    .right {
        margin-left: 44%;
    }
    
    .time {
        color: #999;
        font-size: .65rem;
    }
    
    .service,
    .foods {
        margin-bottom: .4vh;
    }
    
    .assess_category {
        border-bottom: .025rem solid #e4e4e4;
        padding: 1.2vh 0.4vh 2.1vh 1.1vh;
        font-family: Helvetica Neue, Tahoma, Arial;
    }
    
    .assess_category_item {
        display: inline-block;
        margin-left: 2%;
        margin-top: .8vh;
        border-radius: .2rem;
        padding: .9vh 2vw;
        font-size: .8rem;
    }
    
    .detail_assess {
        padding: 2vh 2%;
    }
    
    header {
        position: relative;
    }
    
    .user_img {
        display: inline-block;
        width: 2.2rem;
        height: 2.2rem;
    }
    
    .user_img img {
        width: 100%;
        height: 100%;
    }
    
    .first {
        display: inline-block;
        font-family: Helvetica, Tahoma, Arial;
        margin-left: 4%;
    }
    
    .user_name {
        position: absolute;
        top: .5vh;
        font-size: .7rem;
        color: #666;
    }
    
    .date {
        position: absolute;
        top: .5vh;
        right: 2%;
        font-size: .62rem;
        color: #999;
    }
    
    .user_assess {
        position: absolute;
        top: 3vh;
        left: 14.6%;
    }
    
    .fontComments {
        position: absolute;
        top: 3.6vh;
        left: 32.4%;
        font-size: .7rem;
        color: #666;
    }
    
    .user_buy_foods {
        margin-left: 11.7%;
    }
    
    .user_buy_foods li {
        display: inline-block;
        width: 3rem;
        border: 0.025rem solid #e4e4e4;
        margin-left: 3vw;
        padding: .9vh 1.2vw;
        font-size: .75rem;
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .satisfied {
        background-color: #ebf5ff;
        color: #6d7885;
    }
    
    .unsatisfied {
        background-color: #f5f5f5;
        color: #aaa;
    }
    
    .active {
        background-color: #3190e8;
        color: #fff;
    }
</style>