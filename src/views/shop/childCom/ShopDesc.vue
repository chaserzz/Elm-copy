<!-- 组件说明 -->
<template>
  <div class='shopDesc'>
      <!--毛玻璃背景-->
    <div class='bgPic'>
      <img :src="info.image_path">
    </div> 
    <div class='shop_desc'>
      <header>
        <div class='shopImg'>
          <img :src="info.image_path">
        </div>
        <div class='shopName'>
          {{info.name}}
        </div>
        <div class='deliver' v-if='info.float_delivery_fee'>
          <span>商家配送/30分钟送达/配送费￥{{info.float_delivery_fee}}</span>
        </div>
        <div class='notice' v-if='info.promotion_info'>
          {{info.promotion_info}}
        </div>
      </header>
      <div>
        <footer v-if='info.activities'>
          <div class='actives'  v-if='info.activities[0]'>
            <span class='icon' :style='{backgroundColor:info.activities[0].icon_color}'>
              {{info.activities[0].icon_name}}
            </span>
            <span class='active_desc'>
              {{info.activities[0].description}}
            </span>
          </div>
          <div class='right' @click='showActive'>
            {{info.activities.length}}个活动
            <svg t="1595408158024" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3330" width="13" height="13"><path d="M234.464182 21.713854a73.537091 73.537091 0 0 1 104.34666 0l448.186984 445.207497a73.527867 73.527867 0 0 1 21.86188 51.676529 78.513008 78.513008 0 0 1-21.86188 52.670131L333.83756 1015.481905c-28.52323 15.072705-63.541771 9.791065-86.355084-13.023566s-28.089682-57.833172-13.018294-86.355084L631.968239 518.599198 234.464182 121.092504c-25.769081-28.116038-25.769081-71.262612 0-99.37865z m0 0" p-id="3331" fill="#ffffff"></path></svg>
          </div>
        </footer>
        <footer v-else>
          <div class='noActives'>
            <span>商家暂无活动</span>
          </div>
        </footer>
      </div>
    </div>  
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'ShopDesc',
        props: {
            info: {}
        },
        components: {

        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {
            showActive() {
                this.$emit('showActive')
            }
        },
    }
</script>

<style scoped>
    .shopDesc {
        position: relative;
        height: 19vh;
        overflow: hidden;
    }
    
    .bgPic {
        position: absolute;
        box-sizing: border-box;
        z-index: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .bgPic img {
        filter: blur(2px);
        width: 100%;
        height: 100%;
    }
    
    .shop_desc {
        position: relative;
        width: 100%;
        height: 19vh;
        z-index: 9;
        background-color: rgba(195, 185, 198, .85);
        color: #fff;
    }
    
    .shopImg {
        width: 4rem;
        height: 4rem;
    }
    
    .shopImg img {
        height: 100%;
        width: 100%;
        border-radius: .5rem;
    }
    
    header {
        position: relative;
        margin-left: .8rem;
    }
    
    header img {
        margin-top: .5rem;
    }
    
    .shopName,
    .deliver,
    .notice {
        position: absolute;
        font-size: .7rem;
        left: 4.4rem;
    }
    
    .shopName {
        top: .6rem;
        font-size: 1.1rem;
        font-weight: 550;
    }
    
    .deliver {
        top: 2.3rem;
    }
    
    .notice {
        bottom: -.4rem;
    }
    
    footer {
        position: relative;
        top: 1.3rem;
        font-size: .7rem;
    }
    
    .icon {
        display: inline-block;
        padding: .1rem 0.05rem;
        border-radius: 0.025rem;
    }
    
    .actives {
        position: absolute;
        left: .8rem;
    }
    
    .right {
        position: absolute;
        right: 1rem;
    }
    
    .right svg {
        vertical-align: middle;
    }
    
    .noActives {
        width: 100%;
        text-align: center;
    }
</style>