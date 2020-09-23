<template>
  <div class='register'>
      <register-nav-bar />
  </div>
</template>

<script>
import RegisterNavBar from './childCom/RegisterNavBar'
export default {
  name: 'Register',
  components:{
   RegisterNavBar
  },
  data () {
   
    return {
   }
  },
  computed:{
  
  },
  methods:{
  }
}
</script>

<style scoped>
  .register{
    background-color: #f5f5f5;
    height: 100vh;
    overflow: hidden;
  }
</style>