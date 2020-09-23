<!-- 组件说明
  选择城市的界面
-->
<template>
  <div class='city'>
    <!--导航栏-->
    <nav-bar class='nav_bar' >
      <div class='left' slot="left" @click='navLeftClick()'>elm.me</div>
      <div class='right' slot='right'>
      <span>登录</span>
        |
      <span>注册</span>
      </div>
    </nav-bar>
    <scroll id='Scroll' ref='scroll'>
      <div class='content'>
      <!--提示栏-->
      <div class='tip'>
        <span >当前定位城市:</span>
        <span class='r'>定位不准时,请在城市列表中选择</span>
      </div>
      <!--定位城市-->
      <div class='guess' @click='cityClick(guessCity.id)'>
        <span class='guess_city' v-if='guessCity.name'>{{guessCity.name }}</span>
        <span class='enter'><svg t="1594813013816" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3025" width="0.8rem" height="0.8rem"><path d="M310.11328 58.50624l439.94624 435.42016a25.25696 25.25696 0 0 1 0 35.98336l-439.94624 435.42528a25.89696 25.89696 0 0 1-36.352 0 25.2672 25.2672 0 0 1 0-35.98848l421.74976-417.42848-421.74976-417.42848a25.26208 25.26208 0 0 1 0-35.98336 25.89696 25.89696 0 0 1 36.352 0z" p-id="3026" fill="#000000"></path></svg></span>
      </div>
      <!--热门城市-->
      <div class='hot'>
        <city-list 
        :city-list='hotCity'
        fontColor='#3190e8' 
        title='热门城市'
        />
      </div>
      <!--所有城市-->
      <div class='cityorder' v-for='(item,index) in allCity' :key='index'>
        <city-list 
        :city-list='item' 
        fontColor='#666' 
        :title='allCity[index][0].title'
        :desc= 'allCity[index][0].desc'
        />
        </div>
</div>
    </scroll>

    </div>
</template>

<script>
    import NavBar from 'components/content/navbar/NavBar'
    import CityList from './childCom/CityList'

    import Scroll from 'components/common/scroll/scroll'

    import {
        getCity
    } from 'network/city.js'
    export default {
        name: 'City',
        components: {
            NavBar,
            CityList,
            Scroll
        },
        data() {
            return {
                guessCity: {},
                hotCity: [],
                allCity: []
            };
        },
        computed: {

        },
        methods: {
            navLeftClick() {
                //页面重载
                let NewPage = '_empty' + '?time=' + new Date().getTime() / 1000
                    // 之后将页面push进去
                this.$router.push(NewPage)
                    // 再次返回上一页即可
                this.$router.go(-1)
            },
            //猜测地点点击跳转
            cityClick(id) {
                this.$router.push({
                    path: '/locate/' + id
                })
            },

        },
        beforeCreate() {
            //获取猜测地点
            getCity().then(res => {
                    this.guessCity = res
                })
                //获取热门城市
            getCity('hot').then(res => {
                    for (var item of res) {
                        let city = {}
                        city.name = item.name
                        city.id = item.id
                        this.hotCity.push(city)
                    }
                })
                //获取所有城市
            getCity('group').then(res => {
                for (let i = 65; i <= 90; i++) {
                    let word = String.fromCharCode(i)
                    for (let key in res) {
                        if (key === word) {
                            if (word === 'A') {
                                res[key][0].desc = '(按字母排序)'
                            } else {
                                res[key][0].desc = ''
                            }
                            res[key][0].title = key
                            this.allCity.push(res[key])
                        }
                    }
                }
            })
        },
    }
</script>

<style scoped>
    .city {
        position: relative;
        height:100vh;
        height: calc(var(--vh,1vh) * 100 - 46px);
        z-index: 99;
        background-color: #fff;
        overflow: hidden;
    }
    /*导航栏*/
    
    .nav_bar {
        background-color: #298eeb;
        color: #fff;
        font-size: 12px;
        line-height: 42px;
    }
    
    .left {
        margin-left: .5rem;
        font-size: 15px;
    }
    
    .right {
        transform: translateX(-1.7rem);
    }
    /*提示栏*/
    
    .tip {
        position: relative;
        height: 1rem;
        margin-top: 1.7rem;
        line-height: 1.6rem;
        font-size: 0.7rem;
        color: #777;
        transform: scale(0.95);
    }
    
    .tip .r {
        position: absolute;
        right: 0.4rem;
        color: #555;
    }
    
    .guess {
        position: relative;
        margin-top: 0.8rem;
        height: 2.2rem;
        border-top: 0.07rem solid #e3e3e3;
        border-bottom: 0.07rem solid #e3e3e3;
        line-height: 2.1rem;
    }
    
    .guess_city {
        margin-left: .5rem;
        font-size: 1rem;
        color: #3190e8;
    }
    
    .enter {
        position: absolute;
        right: 0.8rem;
    }
    
    #Scroll {
        height: calc(100vh - 42px);
    }
</style>