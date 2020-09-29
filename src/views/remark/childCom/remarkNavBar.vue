<!-- 组件说明 -->
<template>
  <div>
    <nav-bar class='navBar'>
      <div class='left' slot="left" @click='goBack()'>
        <svg t="1594982764660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2066" width="18" height="18">
          <path d="M256 512l512 512 0-135.776-376.224-376.224 376.224-376.256 0-135.745z" p-id="2067" fill="#ffffff">
          </path>
        </svg>
      </div>
      <div class='center' slot="center">
        <span>订单备注</span>
      </div>
      <div class='right' slot="right"></div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/content/navbar/NavBar'
  export default {
    name: 'remarkNavBar',
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
    margin-top: .7rem;
  }

  .center {
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
  }

  .right {
    width: 2rem;
  }
</style>