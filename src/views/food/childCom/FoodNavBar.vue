<!-- 组件说明 -->
<template>
  <div class='FoodNavBar'>
    <nav-bar class='navBar'>
      <div class='left' slot="left" @click='goBack()'>
        <svg t="1594982764660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2066" width="22" height="22">
          <path d="M256 512l512 512 0-135.776-376.224-376.224 376.224-376.256 0-135.745z" p-id="2067" fill="#ffffff">
          </path>
        </svg>
      </div>
      <div class='center' slot="center">
        <span>{{title}}</span>
      </div>
      <div class='right' slot="right"></div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/content/navbar/NavBar'
  export default {
    name: 'FoodNavBar',
    components: {
      NavBar
    },
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    computed: {

    },
    methods: {
      goBack() {
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
    position: relative;
    margin-left: 1vh;
    top: 50%;
    transform: translateY(-26%);
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