<!-- 组件说明 -->
<template>
  <div>
    <nav-bar class='nav-bar'>
      <div class='left' slot="left" @click='backClick()'>
        <svg t="1594885559214" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2793" width="22" height="22">
          <path
            d="M272.448 472.064l399.232-399.232c22.080-22.080 57.792-22.080 79.872 0 22.016 22.016 22.080 57.792 0 79.872l-359.296 359.296 359.296 359.296c22.016 22.016 22.080 57.792 0 79.872s-57.792 22.016-79.872 0l-399.232-399.232c-22.016-22.080-22.016-57.792 0-79.872z"
            p-id="2794" fill="#ffffff"></path>
        </svg> </div>
      <div class='center' slot="center">
        <span>{{location}}</span>
      </div>
      <div class="right" slot="right" @click='backClick()'>
        <span>切换城市</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/content/navbar/NavBar.vue'
  export default {
    name: 'LocateNavBar',
    props: {
      location: {
        type: String,
      }
    },
    components: {
      NavBar
    },
    methods: {
      backClick() {
        this.$router.go(-1)
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
    font-size: 16px;
    line-height: 42px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .right {
    width: 70px !important;
    font-size: .8rem;
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