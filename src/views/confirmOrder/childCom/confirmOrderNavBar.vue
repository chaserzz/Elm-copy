<!-- 组件说明 -->
<template>
  <div>
    <nav-bar class='navBar'>
      <div class='left' slot="left" @click='goBack()'>
        <svg t="1594982764660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2066" width="18" height="18"><path d="M256 512l512 512 0-135.776-376.224-376.224 376.224-376.256 0-135.745z" p-id="2067" fill="#ffffff"></path></svg>
      </div>
      <div class='center' slot="center">
        <span>确认订单</span>
      </div>
      <div class="right" @click='goRegister()' slot="right">
				<svg t="1596000470929" class="icon person" width="28" height="28" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2905"><path d="M512 542.492444a214.471111 214.471111 0 0 1-214.357333-214.357333A214.471111 214.471111 0 0 1 512 113.777778a214.471111 214.471111 0 0 1 214.357333 214.357333A214.471111 214.471111 0 0 1 512 542.492444zM512 159.288889a168.789333 168.789333 0 0 0-168.846222 168.846222A168.789333 168.789333 0 0 0 512 496.981333a168.789333 168.789333 0 0 0 168.846222-168.846222A168.789333 168.789333 0 0 0 512 159.288889z" fill="#fff" p-id="2906"></path><path d="M830.577778 874.723556a22.528 22.528 0 0 1-22.755556-22.755556c0-163.384889-132.892444-295.822222-295.822222-295.822222a296.391111 296.391111 0 0 0-295.822222 295.822222c0 12.743111-10.012444 22.755556-22.755556 22.755556a22.528 22.528 0 0 1-22.755555-22.755556c0-188.416 153.372444-341.333333 341.333333-341.333333 188.416 0 341.333333 153.372444 341.333333 341.333333 0 12.288-10.012444 22.755556-22.755555 22.755556z" fill="#fff" p-id="2907"></path></svg>			
      </div>
    </nav-bar>
  </div>
</template>

<script>
    import NavBar from 'components/content/navbar/NavBar'
    export default {
        name: 'confirmOrderNavBar',
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
          goBack(){
            this.$router.go(-1)
          },
          goRegister(){
            this.$router.push({
              path:'/register'
            })
          }
        },
    }
</script>

<style scoped>
    .navBar {
        background-color: rgb(49, 144, 232);
    }
    
    .left {
        display: flex;
        margin-left: .1rem;
        margin-top:.5rem;
    }
    
    .center {
        font-size: 1.1rem;
        font-weight: 600;
        color: #fff;
    }
    
    .right {
        width: 2rem;
    }
    .person{
      margin-top: .4rem;
    }
</style>