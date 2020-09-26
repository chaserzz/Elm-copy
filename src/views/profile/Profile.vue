<!-- 组件说明 -->
<template>
  <div class='profile'>
    <profile-nav-bar />
    <user-info @click.native='GoRegister' />
    <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="num balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="num discount">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="num jifen">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <list-view class='userList' :listData='UserList' @listClick='userListClick' />
    <list-view :listData='serviceList' @listClick='serviceListClick' />
  </div>
</template>

<script>
  import ProfileNavBar from './childCom/ProfileNavBar.vue'
  import UserInfo from './childCom/UserInfo.vue'
  import ListView from './childCom/ListView.vue'

  export default {
    name: 'Profile',
    props: {

    },
    components: {
      ProfileNavBar,
      UserInfo,
      ListView
    },
    data() {
      return {
        UserList: [{
          info: '我的订单',
          image: require('assets/images/profile/userList/order.png')
        }, {
          info: '积分商城',
          image: require('assets/images/profile/userList/shop.png')
        }, {
          info: '饿了么会员卡',
          image: require('assets/images/profile/userList/vip.png')
        }],
        serviceList: [{
          info: '服务中心',
          image: require('assets/images/profile/userList/service.png')
        }, {
          info: '下载饿了么APP',
          image: require('assets/images/profile/userList/elm.jpeg')
        }]
      };
    },
    computed: {

    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      userListClick(index) {

      },
      serviceListClick(index) {

      },
      GoRegister() {
        this.$router.push({
          path: '/register'
        })
      }
    },
  }
</script>

<style scoped>
  .profile {
    height: calc(100vh - 52px);
    background-color: #f5f5f5;
    overflow: hidden;
  }

  .account {
    display: flex;
    margin-bottom: 1vh;
  }

  .account-item {
    width: 100%;
    border-right: .025rem solid #e4e4e4;
    margin-right: 1px;
    background-color: #fff;
    text-align: center;
  }

  .account-item:last-of-type {
    border: none;
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .num {
    font-size: 24px;
    font-weight: 700;
  }

  .account-item .balance {
    color: #f90;
  }

  .account-item .discount {
    color: #ff5f3e;
  }

  .account-item .jifen {
    color: #6ac20b;
  }

  .account-info {
    margin-top: 6px;
  }

  .userList {
    margin-top: 1.4vh;
    margin-bottom: 1.4vh;
  }
</style>