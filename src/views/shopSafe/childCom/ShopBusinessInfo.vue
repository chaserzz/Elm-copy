<template>
  <div>
    <section class="shop_status_container">
      <header>
        <span>工商登记信息</span>
      </header>
      <ul>
        <li>
          <p>企业名称</p>
          <p>{{identInfo.company_name}}</p>
        </li>
        <li>
          <p>工商执照注册号</p>
          <p>{{identInfo.identificate_agency}}</p>
        </li>
        <li>
          <p>注册资本</p>
          <p>{{identInfo.registered_number}}</p>
        </li>
        <li>
          <p>注册地址</p>
          <p>{{identInfo.registered_address}}</p>
        </li>
        <li>
          <p>属地监管所</p>
          <p>{{identInfo.registered_principal}}</p>
        </li>
        <li>
          <p>法定代表人</p>
          <p>{{identInfo.legal_person}}</p>
        </li>
        <li>
          <p>经营范围</p>
          <p>{{identInfo.operation_period}}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ShopBusinessInfo',
    props: {
      identInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data() {

      return {}
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