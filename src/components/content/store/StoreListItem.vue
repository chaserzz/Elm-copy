<!-- 组件说明 -->
<template>
  <div class='storeListItem' @click='GoShop(storeItem)'>
    <img :src="storeItem.image_path" alt="~assets/images/loading.gif" @load='imgload()'>
    <!--商店信息-->
    <section class='storeInfo'>
    <!--第一行: 包括商店名称,  保 准 票-->
    <div class='first'>
        <div class='store_name'>
            {{storeItem.name}}
        </div>
        <ul class='store_promise'>
            <li v-for='(item,index) in storeItem.supports' :key='index'>{{item.icon_name}}</li>
        </ul>
    </div>
    <div class='second'>
        <!--评分星星部分-->
        <div class='start-container'>
            <div class='totalstart'>       
                 <svg t="1594708448640" v-for='num in 5' :key='num' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2888" width="0.6rem" height="0.6rem"><path d="M575.852903 115.426402L661.092435 288.054362c10.130509 20.465674 29.675227 34.689317 52.289797 37.963825l190.433097 27.62866c56.996902 8.288598 79.7138 78.281203 38.475467 118.496253l-137.836314 134.35715c-16.372539 15.963226-23.84251 38.987109-19.954032 61.49935l32.540421 189.716799c9.721195 56.792245-49.833916 100.077146-100.793444 73.267113L545.870691 841.446188a69.491196 69.491196 0 0 0-64.67153 0l-170.376737 89.537324c-50.959528 26.810033-110.51464-16.474868-100.793444-73.267113L242.569401 667.9996c3.888478-22.512241-3.581493-45.536125-19.954032-61.49935L84.779055 472.245428c-41.238333-40.215049-18.521435-110.207655 38.475467-118.496252l190.433097-27.62866c22.61457-3.274508 42.159288-17.498151 52.289797-37.963826L451.319277 115.426402c25.479764-51.675827 99.053862-51.675827 124.533626 0z" p-id="2889" fill="#e6e6e6"></path></svg>
            </div>
            <div :style='[storeItem.startWidth]' class='start-overflow'>
              <div class='totalstart_2'>
                <svg t="1594708448640" v-for='num in 5' :key='num' viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2888" width="0.6rem" height="0.6rem"><path d="M575.852903 115.426402L661.092435 288.054362c10.130509 20.465674 29.675227 34.689317 52.289797 37.963825l190.433097 27.62866c56.996902 8.288598 79.7138 78.281203 38.475467 118.496253l-137.836314 134.35715c-16.372539 15.963226-23.84251 38.987109-19.954032 61.49935l32.540421 189.716799c9.721195 56.792245-49.833916 100.077146-100.793444 73.267113L545.870691 841.446188a69.491196 69.491196 0 0 0-64.67153 0l-170.376737 89.537324c-50.959528 26.810033-110.51464-16.474868-100.793444-73.267113L242.569401 667.9996c3.888478-22.512241-3.581493-45.536125-19.954032-61.49935L84.779055 472.245428c-41.238333-40.215049-18.521435-110.207655 38.475467-118.496252l190.433097-27.62866c22.61457-3.274508 42.159288-17.498151 52.289797-37.963826L451.319277 115.426402c25.479764-51.675827 99.053862-51.675827 124.533626 0z" p-id="2889" fill="#ff9a0d"></path></svg>
              </div>
            </div>
        </div>
        <div class='pointer'>
            {{storeItem.rating}}
        </div>
        <div class='sell'>
            月售{{storeItem.recent_order_num}}单
        </div>
        <div class='deliver'>
            <span v-if='storeItem.delivery_mode' class='deliver_left' >{{storeItem.delivery_mode.text}}</span>
            <span class='deliver_right'>准时达</span>
        </div>
    </div>
    <div class='third'>
        <div class='fee'>
            <span>¥{{storeItem.float_minimum_order_amount}}起送</span> / <span>{{storeItem.piecewise_agent_fee.tips}}</span>
        </div>
        <div class='distance'>
            <span>{{storeItem.distance}}</span> / <span class='time'>{{storeItem.order_lead_time}}</span>
        </div>
    </div>
    </section>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'StoreListItem',
        props: {
            storeItem: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        components: {

        },
        data() {
            return {

            };
        },
        methods: {
            imgload() {
                this.$bus.$emit('imgLoad')
            },
            GoShop(storeItem) {
                this.$router.push({
                    path: '/shop/' + storeItem.id
                })
            }
        },
    }
</script>

<style scoped>
    .storeListItem {
        display: flex;
        padding-bottom: 1rem;
        border-bottom: .025rem solid #f1f1f1;
    }
    
    .storeInfo {
        position: relative;
        width: calc(100rem - 4rem);
    }
    
    .storeListItem img {
        width: 4rem;
        height: 4rem;
    }
    /*第一行*/
    
    .first {
        margin-top: 0.1rem;
        display: flex;
    }
    
    .store_name {
        box-sizing: border-box;
        width: 9.5rem;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.85rem;
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    /*利用伪前元素制作品牌*/
    
    .store_name::before {
        content: '品牌';
        background-color: #ffd930;
        font-size: 0.7rem;
        display: inline-block;
        padding: 0 0.1rem;
        transform: scale(0.9);
        margin-left: 0.5rem;
    }
    
    .store_promise {
        display: flex;
        position: absolute;
        right: 0.55rem;
        font-size: 0.85rem;
        line-height: 0.85rem;
        color: #999;
        transform: scale(0.75);
    }
    
    .store_promise li {
        border: .045rem solid #f1f1f1;
        margin-left: 0.4rem;
    }
    /*第二行*/
    /*评分星星部分*/
    
    .start-container {
        position: relative;
        width: 3rem;
        height: 1rem;
    }
    
    .totalstart {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    
    .totalstart_2 {
        width: 3rem;
    }
    
    .start-overflow {
        position: absolute;
        top: 0;
        z-index: 9;
        left: 0;
        height: 100%;
        overflow: hidden;
    }
    /*星星部分结束*/
    
    .second {
        display: flex;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
    }
    
    .pointer,
    .sell,
    .deliver {
        line-height: 1.25rem;
        font-size: 0.45rem;
    }
    
    .deliver {
        transform: scale(0.75);
        position: absolute;
        right: 0;
        line-height: 1.15rem;
    }
    
    .pointer,
    .sell {
        transform: scale(0.8);
    }
    
    .pointer {
        color: #ff6000;
        margin-left: 0.3rem;
    }
    
    .sell {
        color: #666;
    }
    
    .deliver_left,
    .deliver_right {
        display: inline-block;
        text-align: center;
        padding: 0rem 0.14rem;
        border-radius: 0.38rem !important;
        margin-left: 0.15rem;
    }
    
    .deliver_left {
        background-color: #3190e8;
        border: .025rem solid #3190e8;
        color: #fff;
        border-radius: .08rem;
    }
    
    .deliver_right {
        background-color: #fff;
        border: .025rem solid #3190e8;
        color: #3190e8;
        border-radius: .08rem;
    }
    
    .third {
        display: flex;
        position: relative;
        font-size: .5rem;
        margin-top: 0.55rem;
        color: #999;
    }
    
    .fee,
    .distance {
        margin-left: .01rem;
        transform: scale(0.8);
    }
    
    .distance {
        position: absolute;
        right: 0.35rem;
    }
    
    .time {
        color: #3190e8;
    }
</style>