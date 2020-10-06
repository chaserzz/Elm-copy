<template>
  <div class='shop_info'>
    <header>商家信息</header>
    <ul>
      <li>
        <p>商店名字:</p>
        <span>{{info.name}}</span>
      </li>
      <li>
        <p>地址:</p>
        <span>{{info.address}}</span>
      </li>
      <li>
        <p>营业时间:</p>
        <span>{{info.opening_time}}</span>
      </li>
      <li>
        <p>营业执照</p>
        <div @click='lisenceClick(0)' >
          <svg width=".9rem" height=".9rem" xmlns="http://www.w3.org/2000/svg" version="1.1" class="description_arrow">
            <path d="M0 0 L8 7 L0 14" stroke="#bbb" stroke-width="1.5" fill="none" />
          </svg>
        </div>
      </li>
      <li>
        <p>餐饮许可证</p>
        <div @click='lisenceClick(1)' >
          <svg width=".9rem" height=".9rem" xmlns="http://www.w3.org/2000/svg" version="1.1" class="description_arrow">
            <path d="M0 0 L8 7 L0 14" stroke="#bbb" stroke-width="1.5" fill="none" />
          </svg>
        </div>
      </li>
    </ul>
    <section v-if='showLicense' class='license_container' @click='hiddenLicense()' >
      <img @click.stop='Stop()' class='license' :src="imgPath" @error="imgOnerror($event)" />
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ShopInfo',
    props: {
      info: {
        type: Object,
        defaulte() {
          return {}
        }
      }
    },
    data (){
      return{
        imgPath:'https://elm.cangdu.org/img/',//图片基础路径
        showLicense:false, //是否显示执照
        defaultImg: require('../../../assets/images/common/Load.jpg')
      }
    },
    methods: {
      //执照点击
      lisenceClick(index){
        this.showLicense = true
        this.imgPath = 'https://elm.cangdu.org/img/'
        if(index === 0){
          this.imgPath = this.imgPath + this.info.license.business_license_image
          return;
        }
          this.imgPath = this.imgPath + this.info.license.catering_service_license_image
      },
      //图片显示失败
      imgOnerror(event) {
      let img = event.srcElement
      img.src = this.defaultImg
      img.onerror = null // 防止闪图
      },
      //隐藏许可证
      hiddenLicense(){
        this.showLicense = false
      },
      //防止冒泡
      Stop(){
        return 
      }
    }
  }
</script>

<style scoped>
  .shop_info {
    margin-top: .5rem;
    padding-left: .6rem;
    background-color: #fff;
  }

  header {
    position: relative;
    margin-top: .4rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-bottom: .025rem solid #f1f1f1;
  }

  ul {
    font-size: .8rem;
    color: #666;
  }

  ul li {
    position: relative;
    padding: 1rem 0;
    border-bottom: .025rem solid #f5f5f5;
  }

  ul li p {
    display: inline;
    margin-right: .4rem;
  }

  ul li div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: .6rem;
  }
  .license_container{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(0,0,0,.5);
  }
  .license{
    position: absolute;
    width: 100%;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
</style>