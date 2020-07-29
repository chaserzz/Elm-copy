<!-- 组件说明 -->
<template>
  <div class='Home'>
    <home-nav-bar :location='location' />
    <scroll id='Scroll'
            ref='scroll'
            :pull-up-load='true'
            :probe-type='3'
            @pullingUp='lodaData'>
        <home-swiper :foodList1='foodPage1' :foodList2='foodPage2' :longitude ='longitude' :latitude = 'latitude'/>
        <home-store-info :storeInfo='storeInfo'/>
    </scroll>

  </div>
</template>

<script>
    //子组件
    import HomeNavBar from './childCom/HomeNavBar'
    import HomeSwiper from './childCom/HomeSwiper.vue'
    import HomeStoreInfo from './childCom/HomeStoreInfo.vue'
    //Home组件相关数据的获取
    import {
        getDetailLoaction,
        getFoodCategory,
        getStoreInfo
    } from 'network/home'
    //公共组件
    import Scroll from 'components/common/scroll/scroll.vue'
    //混用js
    import {
        itemImgLoad
    } from 'common/mixins.js'

    export default {
        name: 'Home',
        components: {
            HomeNavBar,
            HomeSwiper,
            HomeStoreInfo,
            //BS插件
            Scroll
        },
        //将mixins插入Vue中
        mixins: [itemImgLoad],
        data() {
            return {
                cityId: {
                    type: Number,
                    default: 0,
                },
                //由路由获得经纬度
                geohash: '',
                //经纬度
                latitude: 0,
                longitude: 0,
                location: '',
                //食物轮播图,分为两页在轮播图中展示
                foodPage1: [],
                foodPage2: [],
                storeInfo: [],
                storePage: 0
            };
        },
        computed: {

        },
        methods: {
            lodaData() {
                this._getStoreInfo()
            },
            _getStoreInfo() {
                //获取商店的信息
                getStoreInfo(this.latitude, this.longitude, this.storePage * 20).then(res => {
                    for (let item of res) {
                        item.image_path = 'https://elm.cangdu.org/img/' + item.image_path
                        item.startWidth = {
                            width: (item.rating / 5.0) * 3.0 + 'rem'
                        }
                        this.storeInfo.push(item)
                    }
                    this.storePage++
                        this.$refs.scroll.finishPullUp()
                })
            }
        },
        beforeMount() {
            this.geohash = this.$route.params.geohash
            getDetailLoaction(this.geohash).then(res => {
                this.location = res.name
                if (this.location.length > 8) {
                    this.location = this.location.substring(0, 8)
                    this.location += '...'
                }
                this.longitude = res.longitude
                this.latitude = res.latitude
            })
            this._getStoreInfo()


            getFoodCategory().then(res => {
                for (let item of res) {
                    item.image_url = 'https://fuss10.elemecdn.com/' + item.image_url
                }
                for (var i = 0; i < 8; i++) {
                    this.foodPage1.push(res[i])
                }
                for (var i = 8; i < res.length; i++) {
                    this.foodPage2.push(res[i])
                }
            })

        },
    }
</script>

<style scoped>
    #Scroll {
        height: calc(100vh - 50px - 42px);
    }
</style>