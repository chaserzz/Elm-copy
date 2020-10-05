<template>
  <div class='food_watch'>
    <header>
      <section class="shop_status_header">
        <span class="shop_detail_title">食品监督安全公示</span>
      </section>
    </header>
    <section class="shop_statu_detail">
      <div> 
        <svg t="1601892805594" v-if="status == 1" class="icon" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="1671" width="2.5rem" height="2.5rem">
          <path
            d="M508.928 14.336C232.448 14.336 8.192 239.616 8.192 515.072s225.28 500.736 500.736 500.736 500.736-225.28 500.736-500.736S785.408 14.336 508.928 14.336zM262.144 421.888c0-32.768 26.624-59.392 59.392-59.392s59.392 26.624 59.392 59.392-25.6 59.392-59.392 59.392-59.392-26.624-59.392-59.392zM716.8 726.016c-47.104 66.56-123.904 107.52-204.8 107.52-84.992 0-163.84-43.008-209.92-114.688-8.192-12.288-4.096-27.648 7.168-35.84 12.288-8.192 27.648-4.096 35.84 7.168 36.864 57.344 99.328 91.136 166.912 91.136 64.512 0 125.952-31.744 162.816-84.992 8.192-11.264 24.576-14.336 35.84-6.144 11.264 8.192 14.336 24.576 6.144 35.84zM678.912 481.28c-32.768 0-59.392-26.624-59.392-59.392s26.624-59.392 59.392-59.392c32.768 0 59.392 26.624 59.392 59.392S711.68 481.28 678.912 481.28z"
            fill="rgb(126, 211, 33)" p-id="1672"></path>
        </svg>
        <svg v-else t="1601893909586" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="1864" width="2.5rem" height="2.5rem">
          <path
            d="M512 1013.76C233.472 1013.76 7.168 787.456 7.168 508.928S233.472 4.096 512 4.096s504.832 226.304 504.832 504.832S790.528 1013.76 512 1013.76z m0-957.44C262.144 56.32 59.392 259.072 59.392 508.928S262.144 961.536 512 961.536s452.608-202.752 452.608-452.608S761.856 56.32 512 56.32z"
            fill="#36A197" p-id="1865"></path>
          <path
            d="M514.048 4.096C234.496 4.096 7.168 231.424 7.168 510.976s227.328 506.88 506.88 506.88 506.88-227.328 506.88-506.88S793.6 4.096 514.048 4.096zM265.216 416.768c0-32.768 26.624-60.416 60.416-60.416 32.768 0 60.416 26.624 60.416 60.416s-26.624 60.416-60.416 60.416c-33.792 0-60.416-26.624-60.416-60.416z m450.56 382.976c-12.288 8.192-27.648 5.12-35.84-6.144-35.84-52.224-101.376-86.016-167.936-86.016-65.536 0-126.976 31.744-164.864 86.016-5.12 7.168-13.312 11.264-21.504 11.264-5.12 0-10.24-1.024-15.36-5.12-11.264-8.192-14.336-24.576-6.144-35.84C351.232 695.296 429.056 655.36 512 655.36c82.944 0 164.864 41.984 210.944 108.544 7.168 11.264 4.096 27.648-7.168 35.84z m-30.72-322.56c-32.768 0-60.416-26.624-60.416-60.416s26.624-60.416 60.416-60.416 60.416 26.624 60.416 60.416-26.624 60.416-60.416 60.416z"
            fill="rgb(208, 2, 27)" p-id="1866"></path>
        </svg>
      </div>
      <div class="check_date">
        <p>
          <span>监督检查结果：</span>
          <span class="shop_status_well" v-if="status == 1">良好</span>
          <span class="shop_status_bad" v-else>差</span>
        </p>
        <p>
          <span>检查日期：</span>
          <span></span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ShopSafePublic',
    props: {
      status: {
        type: Number,
        default:-1
      }
    },
    data() {

      return {

      }
    },
    computed: {},
    methods: {

    }
}
</script>

<style scoped>
  .food_watch {
    padding-left: .6rem;
    background-color: #fff;
  }

  header {
    position: relative;
    height: 2.5rem;
    line-height: 2.5rem;
    border-bottom: .025rem solid #f1f1f1;
  }

  header div {
    position: absolute;
    top: 0;
    right: .6rem;
    color: #bbb;
  }
  .description_arrow{
    position: relative;
    top:.1rem;
  }
  .shop_detail_title {
    font-size: .95rem;
    color: #333;
  }
  .shop_statu_detail{
    padding-bottom: 1rem;
  }
  .shop_statu_detail div{
    display: inline-block;
  }
  .check_date{
    height: 100%;
    color: #666;
    font-size: .8rem;
    margin-left: .6rem;
  }
  .check_date p{
    margin-top: .8rem;
  }
  .shop_status_well{
    color:#7ed321;
  }
  .shop_status_bad{
    color: red;
  }
</style>