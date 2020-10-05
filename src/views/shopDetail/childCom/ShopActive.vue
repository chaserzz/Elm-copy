<template>
  <div class='shop_active'>
    <header>
      活动与属性
    </header>
    <section>
    <ul class='container'>
      <li v-for='(item,index) in Info.active' :key=index>
        <span class='icon' :style='{backgroundColor:item.icon_color}'>
          {{item.icon_name}}
        </span>
        <span class='active_desc'>
          {{item.description + "(APP专享)"}}
        </span>
      </li>
    </ul>
    <ul class='container'>
      <li v-for='(item,index) in Info.supports' :key=index>
        <span class='icon' :style='{backgroundColor:item.icon_color}'>
          {{item.icon_name}}
        </span>
        <span class='active_desc'>
          {{item.description }}
        </span>
      </li>
    </ul>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'ShopActive',
    props:{
      Info:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {

      return {}
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style scoped>
  .shop_active {
    margin-top: .5rem;
    background-color: #fff;
    padding-bottom: 1.5rem;
  }
  section{
    color:#666;
    font-size: .8rem;
    padding-left: .6rem;
    margin-top: 1rem;
  }

  .container  li {
    margin-top: 0.6rem;
    width: calc(100vw - .6rem);
  }
 .container .icon {
    display: inline-block;
    padding: .1rem 0.05rem;
    border-radius: 0.025rem;
    color: #fff;
  }
  header{
  padding: .6rem;    
  border-bottom: 1px solid #f1f1f1;
  }
  .active_desc{
    margin-left: .2rem;
  }
</style>