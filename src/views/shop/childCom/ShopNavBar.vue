<!-- 组件说明 -->
<template>
  <div class='navbar'>
    <nav-bar>
      <div slot="left" @click='GoBack()'>
        <svg t="1595397058837" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2449" width="25" height="25">
          <path
            d="M729.2224 125.82506667c-26.66026667-26.66026667-69.88373333-26.66026667-96.544 0L294.7776 463.728c-26.66026667 26.66026667-26.66026667 69.88373333 0 96.544l337.90186667 337.90293333c26.66026667 26.66026667 69.88373333 26.66026667 96.544 0s26.66026667-69.88373333 0-96.544L439.59253333 512l289.62986667-289.63093333C755.88373333 195.7088 755.88373333 152.48533333 729.2224 125.82506667z"
            p-id="2450" fill="#ffffff"></path>
        </svg>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/content/navbar/NavBar'
  export default {
    name: 'ShopNavBar',
    components: {
      NavBar
    },
    computed: {

    },
    methods: {
      GoBack() {
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped>
svg{
  position: relative;
  left:-0.72rem;
}
</style>