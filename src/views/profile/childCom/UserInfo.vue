<!-- 组件说明 -->
<template>
  <div class='UserInfo'>
    <section class='imgwarp'>
      <img src="~assets/images/profile/avatar.svg" alt="">
    </section>
    <section class='userName'>
      <slot name='userName'>
        <span>登录/注册</span>
      </slot>
    </section>
    <section class='phone'>
      <svg t="1596004329857" width='1.1rem' height='1.1rem' viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="11641">
        <path
          d="M709.484586 0.001463H314.514004C242.10273-0.291108 183.149714 56.54077 182.857143 126.977191v769.388065C183.003428 966.947962 241.883302 1023.999269 314.514004 1023.999269h394.970582c72.411273 0.292571 131.36429-56.61245 131.656861-127.048871V127.635475C840.995161 57.052769 782.115287 0.001463 709.484586 0.001463zM511.999295 959.999406c-43.666192 0-78.994116-34.377069-78.994117-76.872978 0-42.422766 35.401067-76.799835 79.067259-76.799836s78.994116 34.377069 78.994117 76.872978c0 42.422766-35.401067 76.799835-79.067259 76.799836z m236.982349-230.399507H275.016945V147.53029c0-31.96336 26.843371-57.929019 59.02616-57.929019h355.91238a58.51416 58.51416 0 0 1 59.026159 57.929019v582.069609z"
          fill='#fff' p-id="11642"></path>
      </svg>
      <slot>
        <span>暂无绑定手机号</span>
      </slot>
    </section>
    <section class='right'>
      <svg t="1596004931897" width='.8rem' height='.8rem' viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="2174">
        <path
          d="M658.10806201 512.31975095l-378.20582873-378.2110069c-15.89692997-15.88398459-15.89692997-41.6660088 0-57.55128793 15.88398459-15.89692997 41.6660088-15.89692997 57.55128794 0l406.98729813 406.98729813c15.89692997 15.88398459 15.89692997 41.6660088 1e-8 57.55128794l-406.98729814 406.98600359c-7.94328684 7.94846498-18.3604363 11.92399202-28.77499669 11.92399203s-20.83170987-3.97552703-28.77499671-11.92399203c-15.89692997-15.88398459-15.89692997-41.6660088 0-57.55128793l378.20582875-378.21230143z"
          fill='#fff' p-id="2175"></path>
      </svg>
    </section>
  </div>
</template>

<script>
  //import x from ''
  export default {
    name: 'UserInfo',
    components: {

    },
    data() {
      return {

      };
    },
    computed: {

    },
    methods: {

    },
  }
</script>

<style scoped>
  .UserInfo {
    position: relative;
    padding: 2.4vh 4%;
    background-color: #3190e8;
  }

  .imgwarp {
    display: inline-block;
    width: 3.2rem;
    height: 3.2rem;
    background-color: #fff;
    border-radius: 50%;
  }

  .imgwarp img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .userName {
    position: absolute;
    top: 3.5vh;
    left: 23%;
    color: #fff;
    font-weight: 550;
  }

  .phone {
    position: absolute;
    top: 7.5vh;
    left: 22%;
    font-size: .8rem;
    color: #fff;
  }

  .phone span {
    position: relative;
    top: -.2rem;
  }

  .right {
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translateY(-50%);
  }
</style>