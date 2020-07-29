<!-- 组件说明 -->
<template>
  <div>
    <nav-bar class='nav-bar'>
      <div class='left' slot="left" @click='goDiscover()'>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="28" height="28" t="1594470750967" p-id="3032" version="1.1"><path fill="#ffffff" d="M 685.6 660.336 l 155.152 155.168 a 16 16 0 0 1 0 22.624 l -11.312 11.328 a 16 16 0 0 1 -22.624 0 l -158.528 -158.544 a 289.792 289.792 0 0 1 -165.152 51.36 C 322.336 742.256 192 611.904 192 451.12 C 192 290.336 322.336 160 483.136 160 c 160.784 0 291.12 130.336 291.12 291.136 c 0 82.112 -33.984 156.272 -88.672 209.2 Z m -202.464 33.92 c 134.272 0 243.12 -108.848 243.12 -243.12 C 726.256 316.848 617.408 208 483.136 208 C 348.848 208 240 316.848 240 451.136 c 0 134.272 108.848 243.12 243.136 243.12 Z" p-id="3033" /></svg>      </div>
      <div class='center' slot="center" @click='goCity()'>
        {{location}}
      </div>
      <div class="right" @click='goProfile()' slot="right">
				<svg t="1596000470929" class="icon" width="28" height="28" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2905"><path d="M512 542.492444a214.471111 214.471111 0 0 1-214.357333-214.357333A214.471111 214.471111 0 0 1 512 113.777778a214.471111 214.471111 0 0 1 214.357333 214.357333A214.471111 214.471111 0 0 1 512 542.492444zM512 159.288889a168.789333 168.789333 0 0 0-168.846222 168.846222A168.789333 168.789333 0 0 0 512 496.981333a168.789333 168.789333 0 0 0 168.846222-168.846222A168.789333 168.789333 0 0 0 512 159.288889z" fill="#fff" p-id="2906"></path><path d="M830.577778 874.723556a22.528 22.528 0 0 1-22.755556-22.755556c0-163.384889-132.892444-295.822222-295.822222-295.822222a296.391111 296.391111 0 0 0-295.822222 295.822222c0 12.743111-10.012444 22.755556-22.755556 22.755556a22.528 22.528 0 0 1-22.755555-22.755556c0-188.416 153.372444-341.333333 341.333333-341.333333 188.416 0 341.333333 153.372444 341.333333 341.333333 0 12.288-10.012444 22.755556-22.755555 22.755556z" fill="#fff" p-id="2907"></path></svg>			</div>
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
            },
            goProfile() {
                this.$router.push('/profile')
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
        position: relative;
        top: .4rem;
    }
    
    .left {
        display: flex;
        align-items: center;
    }
    
    svg {
        flex: 1;
    }
</style>