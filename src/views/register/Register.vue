<template>
  <div class='register'>
    <register-nav-bar />
    <register-input />
  </div>
</template>

<script>
  import RegisterNavBar from './childCom/RegisterNavBar'
  import RegisterInput from './childCom/RegisterInput'
  export default {
    name: 'Register',
    components: {
      RegisterNavBar,
      RegisterInput
    },
    data() {

      return {}
    },
    computed: {

    },
    methods: {}
  }
</script>

<style scoped>
  .register {
    background-color: #f5f5f5;
    height: 100vh;
    overflow: hidden;
  }
</style>