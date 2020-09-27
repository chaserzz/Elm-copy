<template>
  <div >
    <invoice-nav-bar />
    <ul class='container'>
      <li >
        <section>
          <span class='title'>不需要开发票</span>
           <!-- 灰色 -->
           <svg :class='{active:choose}' @click='svgClick()' t="1601194472591" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3186" width="1.1rem" height="1.1rem"><path d="M512 64.383234C264.7878 64.383234 64.383234 264.7878 64.383234 512s200.404567 447.616766 447.616766 447.616766 447.616766-200.404567 447.616766-447.616766S759.2122 64.383234 512 64.383234zM749.24404 399.346715 490.771928 730.197844c-25.757381 32.969325-73.223154 32.730188-98.382691-0.833916L268.525094 564.127936c-14.827561-19.780982-10.813317-47.835721 8.967665-62.664303 19.780982-14.827561 47.836743-10.813317 62.664303 8.967665l101.483305 142.855154 237.057022-309.05485c15.21897-19.480527 43.349333-22.93576 62.830882-7.71679C761.008798 351.734802 764.46301 379.865166 749.24404 399.346715z" p-id="3187" fill="#999999"></path></svg>
        </section>
      </li>
    </ul>
    <button class='submit' @click='btnClick()'>确定</button>
  </div>
</template>

<script>
import InvoiceNavBar  from './childCom/InvoiceNavBar'
export default {
  name: 'Invoice',
  components:{
   InvoiceNavBar
  },
  data () {
    return {
      choose:false
    }
  },
  computed:{
  },
  methods:{
    svgClick(){
      this.choose = !this.choose
    },
    btnClick(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
div{
  overflow: hidden;
}
.container li {
  margin-top: .5rem;
  padding: .8rem .6rem;
  background-color: #fff;
  font-size: .95rem;
  color:#333;
}
.container li section {
  position: relative;
}
.container svg{
  position: absolute;
  right: .5rem;
}
.active path{
  fill: #4cd964;
}
.submit{
  margin-left: .5rem;
  margin-top: .5rem;
  width: calc(100vw - 1rem);
  height: 2.3rem;
  border-radius: .2rem;
  font-size: .95rem;
  color: #fff;
  background-color: #4cd964;
  
}
</style>