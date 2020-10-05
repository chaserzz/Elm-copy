<template>
  <div>
    <div class='storeInfo'>
    <header>许可证书</header>
    <section>
      <img  :src="'https://elm.cangdu.org/img/'+lisence.business_license_image" @error="imgOnerror($event)" />
      <img class='right' :src="'https://elm.cangdu.org/img/'+lisence.catering_service_license_image"  @error="imgOnerror($event)" />
    </section>
    </div>     
  </div>
</template>

<script>
export default {
  name: 'ShopLisencePhoto',
  props:{
    lisence:{
      type:Object,
      default(){
        return {}
      },
    }
  },
  data () {
    return {
      defaultImg: require('../../../assets/images/common/Load.jpg')
  
    }
  },
  computed:{
  },
  methods:{
    imgOnerror(event) {
      let img = event.srcElement
      img.src = this.defaultImg
      img.onerror = null // 防止闪图
    },
  }
}
</script>

<style scoped>
.storeInfo{
  position: relative;
  margin-top: .5rem;
  margin-bottom: .4rem;
  background-color: #fff;
}
header{
  padding: 0 .6rem;
  border-bottom: 0.025rem solid #f1f1f1;
  line-height: 1.8rem;
  font-size: .95rem;
  color: #333;
}
section img{
  width: 40%;
  margin-left: .6rem;
  background-color: #f5f5f5;
}
.right{
  position:absolute;
  right: .6rem;
}
</style>