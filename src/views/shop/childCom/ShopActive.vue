<template>
  <div class='shop_active'>
      <section class='shop_content'>
      <p class='shop_name'>{{active.name}}</p>
      <p class='title'>
        <span>优惠信息</span>
      </p>
      <ul>
        <li v-for='(item,index) in active.active' :key=index>
          <span class='icon' :style='{backgroundColor:item.icon_color}'>
            {{item.icon_name}}
          </span>
          <span class='active_desc'>
            {{item.description}}
          </span>
        </li>
      </ul>
      <p class='title'>
        <span>商家公告</span> 
      </p>
      <p class='promotion'>{{active.promotion}}</p>
    </section>
    <svg @click='close()' t="1601884046185" class="closeSvg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4251" width="3rem" height="3rem"><path d="M512 0c282.7776 0 512 229.2224 512 512 0 282.7776-229.2224 512-512 512C229.2224 1024 0 794.7776 0 512 0 229.2224 229.2224 0 512 0z m0 51.2C257.501867 51.2 51.2 257.501867 51.2 512s206.301867 460.8 460.8 460.8 460.8-206.301867 460.8-460.8S766.498133 51.2 512 51.2z m229.290667 231.509333a25.6 25.6 0 0 1 0 36.1984L548.215467 512l193.0752 193.109333a25.6 25.6 0 0 1-36.1984 36.1984L512 548.1984 318.907733 741.290667a25.6 25.6 0 1 1-36.1984-36.1984l193.092267-193.109334-193.092267-193.0752a25.6 25.6 0 0 1 36.1984-36.1984l193.109334 193.0752 193.0752-193.0752a25.6 25.6 0 0 1 36.1984 0z" p-id="4252" fill='#666'></path></svg>
  </div>
</template>

<script>
  export default {
    name: 'ShopActive',
    props: {
      active: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      close(){
        this.$emit('colseActive')
      }
    }
  }
</script>

<style scoped>
  .shop_active {
    position: relative;
    top: -100%;
    z-index: 999;
    height: 100%;
    padding: 1.25rem;
    background-color: #262626;
    color: #fff;
  }

  .shop_name {
    text-align: center;
    margin-bottom: 4rem;
  }

  .title {
    text-align: center;
  }
  .title span{
    display: inline-block;
    padding: .2rem .4rem;
    border: .025rem solid #555;
    border-radius: .5rem;
    font-size: .7rem;
    margin-bottom: 1rem;
  }
  ul li {
    font-size: .7rem;
    margin-left: .2rem;
  }
  ul{
    margin-bottom: .8rem;
  }
  .icon {
    display: inline-block;
    padding: .1rem 0.05rem;
    border-radius: 0.025rem;
  }
  .promotion{
    margin-left: .2rem;
    font-size: .7rem;
  }
  .closeSvg{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 4rem;
  }
</style>