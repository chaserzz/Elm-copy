<template>
  <div>
    <div class='UserInfo'>
      <form>
        <section class='username'>
          <input class='Login' v-model="userId" type="text" name="userId" id="userId" placeholder="账号" />
        </section>
        <section class='password'>
          <input ref='password' v-model="userPassword" class='Login' type="password" name="password" id="password"
            placeholder="密码" />
          <div @click='showPassword' class='show'>
            <!-- 睁眼 -->
            <svg v-if='passwordShow' t="1600947623469" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="4321" width="1rem" height="1rem">
              <path
                d="M512 896C182.4 896 46.4 630.4 11.2 548.8c-9.6-24-9.6-49.6 0-73.6C46.4 393.6 182.4 128 512 128c328 0 465.6 265.6 500.8 347.2 9.6 24 9.6 49.6 0 73.6C977.6 630.4 840 896 512 896zM70.4 499.2c-3.2 8-3.2 16 0 24C100.8 596.8 222.4 832 512 832s411.2-235.2 441.6-307.2c3.2-8 3.2-16 0-24C923.2 427.2 801.6 192 512 192S100.8 427.2 70.4 499.2zM512 672c-88 0-160-72-160-160s72-160 160-160 160 72 160 160-72 160-160 160z m0-256c-52.8 0-96 43.2-96 96s43.2 96 96 96 96-43.2 96-96-43.2-96-96-96z"
                p-id="4322" fill="#8a8a8a"></path>
            </svg>
            <!--  闭眼 -->
            <svg v-else t="1600947682534" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="5268" width="1rem" height="1rem">
              <path
                d="M94.4 649.6c-3.2 0-8 0-11.2-1.6-16-6.4-25.6-24-19.2-41.6l65.6-180.8c6.4-16 24-25.6 41.6-19.2 16 6.4 25.6 24 19.2 41.6l-65.6 180.8c-4.8 12.8-17.6 20.8-30.4 20.8z m267.2 107.2h-4.8c-17.6-3.2-28.8-19.2-25.6-36.8l33.6-188.8c3.2-17.6 19.2-28.8 36.8-25.6 17.6 3.2 28.8 19.2 25.6 36.8l-33.6 188.8c-3.2 14.4-17.6 25.6-32 25.6z m300.8 0c-16 0-28.8-11.2-32-27.2l-33.6-188.8c-3.2-17.6 8-33.6 25.6-36.8 17.6-3.2 33.6 8 36.8 25.6L694.4 720c3.2 17.6-8 33.6-25.6 36.8h-6.4z m267.2-107.2c-12.8 0-25.6-8-30.4-20.8L833.6 448c-6.4-16 3.2-35.2 19.2-41.6 16-6.4 35.2 3.2 41.6 19.2L960 606.4c6.4 16-3.2 35.2-19.2 41.6-3.2 0-8 1.6-11.2 1.6zM512 576C128 576 8 312 3.2 300.8c-6.4-16 0-35.2 16-41.6 16-6.4 35.2 0 41.6 16C65.6 284.8 171.2 512 512 512c340.8 0 446.4-227.2 451.2-236.8 6.4-16 25.6-24 41.6-16 16 6.4 24 25.6 16 41.6C1016 312 896 576 512 576z"
                p-id="5269" fill="#8a8a8a"></path>
            </svg>
          </div>
        </section>
        <section class='captchas'>
          <input class='Login' v-model="CodeNum" type="text" name="captchas" id="captchas" placeholder="验证码"
            maxlength="4" />
          <div class='changeImg'>
            <p class='title'>看不清</p>
            <p class='change' @click='changeCaptchas'>换一张</p>
          </div>
          <img class='captchasImg' :src="captchasImg" alt="">
        </section>
      </form>
    </div>
    <p class='hint'>温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class='hint'>注册过的用户可凭账号密码登录</p>
    <button class='denglu' @click='tryLogin'>登录</button>
    <router-link to="/forget" class="to_forget">重置密码？</router-link>
    <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText" />
  </div>
</template>

<script>
  import alertTip from 'components/common/alter/alertTip'
  import {
    getcaptchas,
    sendLogin,
    getUserInfo
  } from 'network/register'
  export default {
    name: 'RegisterInput',
    components: {
      alertTip
    },
    data() {
      return {
        //验证码图片
        captchasImg: null,
        passwordShow: false, //是否显示密码
        userId: null, //用户名
        userPassword: null, //用户密码
        CodeNum: null, //验证码
        showAlert: false, //是否显示警告
        alertText: '', //警告内容
        userInfo: null
      }
    },
    computed: {},
    methods: {
      //显示密码
      showPassword() {
        this.passwordShow = !this.passwordShow
        if (this.passwordShow) {
          //显示密码
          this.$refs.password.type = 'text'
        } else {
          this.$refs.password.type = 'password'
        }
      },
      //获得验证码图片
      _getcaptchasImg() {
        getcaptchas().then(res => {
          this.captchasImg = res.code
        })
      },
      //切换验证码
      changeCaptchas() {
        this._getcaptchasImg()
      },
      //登录
      tryLogin() {
        //未输入姓名
        if (this.userId == '' || this.userId === null) {
          this.showAlert = true
          this.alertText = '请输入账号'
        } else if /*未输入密码*/ (this.userPassword == '' || this.userPassword === null) {
          this.showAlert = true
          this.alertText = '请输入密码'
        } else if /*未输入验证码*/ (this.CodeNum == '' || this.userPassword === null) {
          this.showAlert = true
          this.alertText = '请输入验证码'
        } else {
          sendLogin(this.userId, this.userPassword, this.CodeNum).then(res => {
            console.log(res);
            if (res.message == '验证码失效') {
              this.changeCaptchas()
            }
          })
        }
      },
      //关闭提示
      closeTip() {
        this.showAlert = false
      }
    },
    created() {
      this._getcaptchasImg()
      getUserInfo().then(res =>{
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .UserInfo {
    position: relative;
  }

  .Login {
    width: 100%;
    padding: .7rem .9rem;
    border-bottom: 1px solid #f1f1f1;
    font-size: .9rem;
  }

  form {
    margin-top: .7rem;
  }

  .captchas {
    position: relative;
  }

  .captchasImg {
    position: absolute;
    top: .3rem;
    right: 3.5rem;
  }

  .password {
    position: relative;
  }

  .show {
    position: absolute;
    top: .8rem;
    right: .8rem;
    z-index: 99;
  }

  .changeImg {
    position: absolute;
    top: .3rem;
    right: .5rem;
    font-size: .55rem;
  }

  .change {
    margin-top: .3rem;
    color: #3b95e9;
  }

  .hint {
    padding: .4rem .6rem;
    color: red;
    font-size: .5rem;
    line-height: .5rem;
  }

  .denglu {
    display: block;
    width: calc(100% - 1rem);
    margin-top: .5rem;
    margin-left: .5rem;
    padding: .7rem 0;
    border-radius: .15rem;
    background-color: #4cd964;
    font-size: 1rem;
    color: #ffffff;
  }

  .to_forget {
    position: absolute;
    right: .2rem;
    margin-top: .9rem;
    font-size: .8rem;
    color: #3b95e9;
  }
</style>