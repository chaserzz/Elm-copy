<template>
  <div class='address_container' @click='addressClick()'>
    <section>
      <svg t="1602040453376" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="3353" width="1.8rem" height="1.8rem">
        <path
          d="M512 106.666667c152.917333 0 277.333333 124.416 277.333333 277.333333 0 114.282667-172.032 382.058667-277.333333 519.808C406.698667 766.058667 234.666667 498.282667 234.666667 384c0-152.917333 124.416-277.333333 277.333333-277.333333m0-64C323.477333 42.666667 170.666667 195.477333 170.666667 384c0 152.085333 222.144 472.96 308.010666 581.205333 8.533333 10.752 20.928 16.128 33.322667 16.128s24.789333-5.376 33.322667-16.128C631.189333 856.96 853.333333 536.085333 853.333333 384c0-188.522667-152.810667-341.333333-341.333333-341.333333z"
          fill="#3190E8" p-id="3354"></path>
        <path
          d="M512 341.333333c23.530667 0 42.666667 19.136 42.666667 42.666667s-19.136 42.666667-42.666667 42.666667-42.666667-19.136-42.666667-42.666667 19.136-42.666667 42.666667-42.666667m0-64a106.666667 106.666667 0 1 0 0.021333 213.354667A106.666667 106.666667 0 0 0 512 277.333333z"
          fill="#3190E8" p-id="3355"></path>
      </svg>
      <p>请选择配送地址</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'confirmAddress',
    components: {

    },
    data() {

      return {}
    },
    computed: {},
    methods: {
      addressClick(){
        this.$emit('addressClick')
      }
    },

  }
</script>

<style scoped>
  .address_container {
    position: relative;
    min-height: 3.5rem;
    padding: 0 .6rem;
    background-color: #fff;
  }

  div p {
    display: inline-block;
    height: 1.8rem;
    vertical-align: top;
    line-height: 1.8rem;
    font-size: .95rem;
    color: #3190E8;
  }
  section{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
  }
</style>