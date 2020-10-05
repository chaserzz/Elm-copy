<template>
  <div>
    <section class="shop_status_container">
      <header>餐饮许可证</header>
      <ul>
        <li>
          <p>营业范围</p>
          <p>{{foodLisenceInfo.operation_period || ''}}</p>
        </li>
        <li>
          <p>许可证有效期</p>
          <p>{{foodLisenceInfo.licenses_date || ''}}</p>
        </li>
        <li>
          <p>许可证号</p>
          <p>{{foodLisenceInfo.licenses_number || ''}}</p>
        </li>
        <li>
          <p>发证时间</p>
          <p>{{foodLisenceInfo.licenses_scope || ''}}</p>
        </li>
        <li>
          <p>发证机关</p>
          <p>{{foodLisenceInfo.registered_principal || ''}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ShopFoodLisence',
    props:{
      foodLisenceInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
  }
</script>

<style scoped>
  .shop_status_container {
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
  ul {
    font-size: .75rem;
    color: #666;
    padding-bottom: .5rem;
  }
  ul li {
    margin: 1rem .6rem; 
  }
</style>