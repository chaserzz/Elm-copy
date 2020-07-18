<!-- 组件说明 -->
<template>
  <div>
    <nav-bar class='nav-bar'>
      <div class='left' slot="left" @click='goDiscover()'>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="28" height="28" t="1594470750967" p-id="3032" version="1.1"><path fill="#ffffff" d="M 685.6 660.336 l 155.152 155.168 a 16 16 0 0 1 0 22.624 l -11.312 11.328 a 16 16 0 0 1 -22.624 0 l -158.528 -158.544 a 289.792 289.792 0 0 1 -165.152 51.36 C 322.336 742.256 192 611.904 192 451.12 C 192 290.336 322.336 160 483.136 160 c 160.784 0 291.12 130.336 291.12 291.136 c 0 82.112 -33.984 156.272 -88.672 209.2 Z m -202.464 33.92 c 134.272 0 243.12 -108.848 243.12 -243.12 C 726.256 316.848 617.408 208 483.136 208 C 348.848 208 240 316.848 240 451.136 c 0 134.272 108.848 243.12 243.136 243.12 Z" p-id="3033" /></svg>      </div>
      <div class='center' slot="center" @click='goCity()'>
        {{location}}
      </div>
      <div class="right" slot="right">
       <span>登录</span>
        |
      <span>注册</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
    import NavBar from 'components/content/navbar/NavBar.vue'
    export default {
        name: 'HomeNavBar',
        props: {
            location: {
                type: String,
                default: "请设置您的当前位置"
            }
        },
        components: {
            NavBar
        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {
            goCity() {
                this.$router.push('/')
            },
            goDiscover() {
                let geohash = localStorage.getItem('geohash')
                this.$router.push({
                    path: '/discover/' + geohash
                })
            }
        },
    }
</script>

<style scoped>
    .nav-bar {
        background-color: #298eeb;
        color: #fff;
        font-size: 12px;
    }
    
    .center {
        font-size: 15px;
        line-height: 42px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .right {
        width: 70px !important;
        line-height: 42px;
        transform: translateX(-1.7rem);
    }
    
    .left {
        display: flex;
        align-items: center;
    }
    
    svg {
        flex: 1;
    }
</style>