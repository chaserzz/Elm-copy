<!-- 组件说明 -->
<template>
  <div class='category_list'>
    <div class='sortList'>
      <!--分类-->
      <div class="sort_item" :class='{active:sortBy == "food",back: sortBy != "food"}' @click='sortItem("food")'>
        {{detailName}}
        <svg t="1595139402207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2505" width="10" height="10">
          <path
            d="M71.493818 363.589818L449.861818 809.867636a81.454545 81.454545 0 0 0 124.276364 0l378.368-446.277818A51.2 51.2 0 0 0 913.454545 279.272727H110.545455a51.2 51.2 0 0 0-39.051637 84.317091z"
            p-id="2506" fill="#000000"></path>
        </svg>
      </div>
      <!--排序-->
      <div class="sort_item" :class='{active:sortBy == "order"}' @click='sortItem("order")'>
        排序
        <svg t="1595139402207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2505" width="10" height="10">
          <path
            d="M71.493818 363.589818L449.861818 809.867636a81.454545 81.454545 0 0 0 124.276364 0l378.368-446.277818A51.2 51.2 0 0 0 913.454545 279.272727H110.545455a51.2 51.2 0 0 0-39.051637 84.317091z"
            p-id="2506" fill="#000000"></path>
        </svg>
      </div>
      <!--筛选-->
      <div class="sort_item" :class='{active:sortBy == "divide"}' @click='sortItem("divide")'>
        筛选
        <svg t="1595139402207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="2505" width="10" height="10">
          <path
            d="M71.493818 363.589818L449.861818 809.867636a81.454545 81.454545 0 0 0 124.276364 0l378.368-446.277818A51.2 51.2 0 0 0 913.454545 279.272727H110.545455a51.2 51.2 0 0 0-39.051637 84.317091z"
            p-id="2506" fill="#000000"></path>
        </svg>
      </div>
    </div>
    <!--动画过渡标签-->
    <!--分类-->
    <transition name="showlist">
      <section v-show='sortBy == "food"' class='sort_content food'>
        <ul class='category_left'>
          <li class='categorys' v-for='(item,index) in categoryList' :key='index' @click='categoryClick(index)'
            :class='{detail_active : index === currentIndex}'>
            <div>
              <img :src="item.image_url" alt="">
              <span class='item_name'>{{item.name}}</span>
              <span class='item_count'>{{item.count}}</span>
              <svg t="1595234218184" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2735" width=".8rem" height=".8rem">
                <path d="M515.9 957.8l-86.6-86.6 358.5-358.6L428 152.8l86.6-86.6 446.5 446.4z" p-id="2736"
                  fill="#CCCCCC"></path>
              </svg>
            </div>
          </li>
        </ul>
        <ul class='category_right'>
          <scroll id='Scroll'>
            <li  v-for='(item,index) in detailList' v-if='index' class='detailItem' :key='index' @click='changClick(item)'>
              <span class='detail_name'>{{item.name}}</span>
              <span class='detail_count'>{{item.count}}</span>
            </li>
          </scroll>
        </ul>
      </section>
    </transition>
    <!--动画过渡标签-->
    <!--排序-->
    <transition name="showlist">
      <section v-show='sortBy == "order"' class='sort_content order'>
        <ul>
          <li @click='orderClick(4)'>
            <svg t="1595296490399" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="2127" width="14" height="14">
              <path
                d="M655.0016 844.3392a38.0416 38.0416 0 0 1-38.7072-38.7072V218.5728a38.7072 38.7072 0 0 1 77.4144 0v587.0592a39.68 39.68 0 0 1-38.7072 38.7072z"
                p-id="2128" fill="#3190e8"></path>
              <path
                d="M834.56 436.6336a37.12 37.12 0 0 1-27.2896-11.6736l-179.2-179.2a38.2976 38.2976 0 0 1 54.1696-54.1696l179.2 179.2a37.4272 37.4272 0 0 1 0 54.1696 39.3216 39.3216 0 0 1-26.88 11.6736zM364.6976 844.3392a38.0416 38.0416 0 0 1-38.7072-38.7072V218.5728a38.7072 38.7072 0 1 1 77.4144 0v587.0592a39.68 39.68 0 0 1-38.7072 38.7072z"
                p-id="2129" fill="#3190e8"></path>
              <path
                d="M364.6976 844.3392a37.12 37.12 0 0 1-27.0848-11.6224l-179.2-179.2A38.2976 38.2976 0 1 1 212.4288 599.04l179.2 179.2a38.7072 38.7072 0 0 1-27.0848 65.792z"
                p-id="2130" fill="#3190e8"></path>
            </svg>
            <p>智能排序</p>
            <svg t="1595309394674" class="icon order_svg" v-if='orderId == 4' viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3552" width="13" height="13">
              <path
                d="M1018.88 240.64l-72.704-72.704-542.72 543.232-326.144-325.632L5.12 457.728l398.336 398.336 72.192-72.704L1018.88 240.64z"
                p-id="3553" fill="#1296db"></path>
            </svg>
          </li>
          <li @click='orderClick(5)'>
            <svg t="1595307962490" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="3154" width="14" height="14">
              <path
                d="M778.24 435.4048C778.24 285.2864 658.88256 163.84 512 163.84s-266.24 121.4464-266.24 271.5648c0 95.78496 88.064 240.128 266.24 427.25376 178.176-187.12576 266.24-331.4688 266.24-427.23328zM554.7008 936.42752a61.44 61.44 0 0 1-86.87616-1.47456C265.91232 726.03648 163.84 561.62304 163.84 435.42528 163.84 240.35328 319.54944 81.92 512 81.92s348.16 158.43328 348.16 353.4848c0 126.21824-102.07232 290.6112-303.98464 499.52768l-1.47456 1.47456zM512 593.92a163.84 163.84 0 1 1 0-327.68 163.84 163.84 0 0 1 0 327.68z m0-81.92a81.92 81.92 0 1 0 0-163.84 81.92 81.92 0 0 0 0 163.84z"
                fill="#3190e8" p-id="3155"></path>
            </svg>
            <p>距离最近</p>
            <svg t="1595309394674" class="icon order_svg" v-if='orderId == 5' viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3552" width="13" height="13">
              <path
                d="M1018.88 240.64l-72.704-72.704-542.72 543.232-326.144-325.632L5.12 457.728l398.336 398.336 72.192-72.704L1018.88 240.64z"
                p-id="3553" fill="#1296db"></path>
            </svg>
          </li>
          <li @click='orderClick(6)'>
            <svg t="1595308002745" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="4459" width="14" height="14">
              <path
                d="M859.9104 609.92512l0 45.6c-0.67968 2.21952-1.5104 4.4352-1.9648 6.70464-4.66048 24.09984-7.28448 48.82944-14.31552 72.22016-20.84992 69.02016-59.92064 126.53952-114.6944 173.50016-42.24512 36.2496-89.7856 62.36544-144.1344 75.22048-17.87008 4.23552-36.19456 6.73024-54.32064 10.0352l-45.5744 0c-2.21952-0.6848-4.49024-1.72032-6.75456-1.87008-48.12544-2.9952-93.72544-15.52512-136.50048-37.38496-80.86528-41.18528-139.19488-102.5152-165.83552-190.74048-5.67424-18.8544-8.03968-38.62016-11.9744-57.97504l0-43.50976c1.7152-10.69056 3.2-21.47456 5.21984-32.16 8.61952-46.68544 29.36576-88.0256 56.83968-126.19008 25.91488-35.92064 53.44-70.70464 78.016-107.53536 26.56896-39.95008 39.424-84.2944 31.88992-132.9152-1.4848-9.60512-2.87488-19.20896-4.33536-28.76416 0.98048-0.25088 1.9648-0.45056 2.9504-0.73088 59.31008 62.16064 68.96512 138.46528 60.49408 220.92032 2.17088-2.31936 3.98592-3.93472 5.37088-5.79968 50.33984-68.08448 71.96416-143.29984 55.55456-227.54688-10.42944-53.58976-32.99456-101.76512-70.32448-141.81504C369.3056 61.84576 349.69472 47.65568 331.61984 32l18.65472 0c1.536 0.62976 2.976 1.7152 4.53504 1.86496 32.82048 2.81984 63.65056 12.95488 93.02016 27.2 67.17056 32.51584 121.62048 80.58496 167.17056 139.22048 66.9504 86.27968 110.48448 181.99424 119.10528 292.19968 3.30496 42.06976-0.9856 82.95552-12.19968 123.2896-4.23552 15.27552-10.21056 30.04544-15.68 45.94944 21.72544-9.25056 38.24-23.38944 50.9952-41.7152 38.04032-54.77504 48.67456-115.85536 40.05504-183.38048 2.80064 3.24992 4.23552 4.53504 5.21472 6.14528 22.91456 36.19968 40.05504 74.81472 49.0048 116.78464C855.05024 576.17024 857.11488 593.1648 859.9104 609.92512M501.56544 529.61536c-0.85504 0.60544-1.79072 1.2352-2.67008 1.84064-1.18528 16.64-2.06976 33.30048-3.68 49.93536-2.37056 25.38496-8.44544 49.85984-20.32 72.62464-14.52032 27.87968-38.7904 45.21984-65.69088 59.01056-29.00992 14.9696-47.28448 36.34944-49.65504 70.10048-2.46912 34.70976 7.96544 63.86944 35.94496 85.20064 26.21568 19.96032 56.84096 26.4704 89.3056 25.38496 51.82976-1.6896 90.4448-26.32064 105.92512-78.1952 11.11552-37.23008 9.30048-74.71488 1.86496-112.19456-10.16064-51.37536-28.76544-99.26528-60.60032-141.2352C523.04512 550.36032 511.7504 540.40448 501.56544 529.61536"
                p-id="4460" fill="#f07373"></path>
            </svg>
            <p>销量最高</p>
            <svg t="1595309394674" class="icon order_svg" v-if='orderId == 6' viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3552" width="13" height="13">
              <path
                d="M1018.88 240.64l-72.704-72.704-542.72 543.232-326.144-325.632L5.12 457.728l398.336 398.336 72.192-72.704L1018.88 240.64z"
                p-id="3553" fill="#1296db"></path>
            </svg>
          </li>
          <li @click='orderClick(1)'>
            <svg t="1595308123222" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="5715" width="14" height="14">
              <path
                d="M252.090182 252.090182a384 384 0 1 1 543.092363 543.092363A384 384 0 0 1 252.090182 252.090182z m493.707636 49.384727a314.181818 314.181818 0 1 0-444.322909 444.322909 314.181818 314.181818 0 0 0 444.322909-444.322909z m-71.773091 44.869818a34.909091 34.909091 0 0 1-5.585454 45.195637l-4.096 3.211636-113.570909 75.636364h94.208a34.909091 34.909091 0 0 1 4.701091 69.538909l-4.701091 0.325818-104.773819-0.046546v69.818182h104.727273a34.909091 34.909091 0 0 1 4.747637 69.538909l-4.701091 0.325819-104.773819-0.046546v58.181818a34.909091 34.909091 0 0 1-69.492363 4.747637l-0.279273-4.701091-0.046545-58.228364h-104.727273a34.909091 34.909091 0 0 1-4.701091-69.492364l4.747636-0.279272 104.680728-0.046546v-69.818182h-104.727273a34.909091 34.909091 0 0 1-4.701091-69.492363l4.747636-0.279273 94.114909-0.046545-113.477818-75.636364a34.909091 34.909091 0 0 1 34.210909-60.648727l4.514909 2.56 120.22691 80.151272 120.32-80.151272a34.909091 34.909091 0 0 1 48.407272 9.681454z"
                fill="#e6b61a" p-id="5716"></path>
            </svg>
            <p>起送价最低</p>
            <svg t="1595309394674" class="icon order_svg" v-if='orderId == 1' viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3552" width="13" height="13">
              <path
                d="M1018.88 240.64l-72.704-72.704-542.72 543.232-326.144-325.632L5.12 457.728l398.336 398.336 72.192-72.704L1018.88 240.64z"
                p-id="3553" fill="#1296db"></path>
            </svg>
          </li>
          <li @click='orderClick(2)'>
            <svg t="1595308270158" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="6890" width="14" height="14">
              <path
                d="M512 960c-246.4 0-448-201.6-448-448s201.6-448 448-448 448 201.6 448 448-201.6 448-448 448z m0-64c211.2 0 384-172.8 384-384s-172.8-384-384-384-384 172.8-384 384 172.8 384 384 384z m32-576v211.2l3.2 3.2 156.8 156.8c12.8 12.8 12.8 32 0 44.8s-32 12.8-44.8 0l-156.8-156.8c-3.2-3.2-22.4-22.4-22.4-35.2v-224c0-19.2 12.8-32 32-32s32 12.8 32 32z"
                p-id="6891" fill="#37c7b7"></path>
            </svg>
            <p>配送速度最快</p>
            <svg t="1595309394674" class="icon order_svg" v-if='orderId == 2' viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3552" width="13" height="13">
              <path
                d="M1018.88 240.64l-72.704-72.704-542.72 543.232-326.144-325.632L5.12 457.728l398.336 398.336 72.192-72.704L1018.88 240.64z"
                p-id="3553" fill="#1296db"></path>
            </svg>
          </li>
          <li @click='orderClick(3)'>
            <svg t="1595308356067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="2374" width="14" height="14">
              <path
                d="M240.1536 934.540288c11.133952 7.635968 24.193024 11.515904 37.266432 11.515904 10.778624 0 21.543936-2.609152 31.296512-7.840768l203.25888-109.463552 203.298816 109.463552c9.781248 5.231616 20.559872 7.840768 31.296512 7.840768 13.060096 0 26.120192-3.879936 37.29408-11.515904 20.190208-13.947904 30.518272-37.854208 26.474496-61.70624l-39.616512-236.632064 170.909696-170.662912c16.925696-16.831488 22.718464-41.529344 15.012864-63.960064-7.732224-22.38976-27.6224-38.742016-51.56864-42.320896l-233.148416-34.684928L570.566656 114.184192c-10.628096-22.10304-33.46944-36.242432-58.591232-36.242432-25.039872 0-47.894528 14.139392-58.563584 36.242432l-101.336064 210.388992-233.160704 34.684928c-23.960576 3.57888-43.850752 19.931136-51.569664 42.320896-7.704576 22.43072-1.870848 47.128576 15.040512 63.960064l170.841088 170.662912-39.6288 236.632064C209.60768 896.68608 219.921408 920.592384 240.1536 934.540288zM118.477824 421.960704l232.410112-34.521088 40.887296-6.0928 17.949696-37.21216 102.264832-212.041728 102.250496 212.041728 17.964032 37.21216 40.887296 6.0928 232.410112 34.521088L736.012288 591.026176l-28.469248 28.40064 6.626304 39.629824 39.602176 236.193792L548.95616 785.091584l-37.008384-19.9168-37.006336 19.9168L270.12608 895.292416l39.602176-236.234752 6.626304-39.629824-28.470272-28.40064L118.477824 421.960704z"
                p-id="2375" fill="#eba53b"></path>
            </svg>
            <p>评分最高</p>
            <svg t="1595309394674" class="icon order_svg" v-if='orderId == 3' viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3552" width="13" height="13">
              <path
                d="M1018.88 240.64l-72.704-72.704-542.72 543.232-326.144-325.632L5.12 457.728l398.336 398.336 72.192-72.704L1018.88 240.64z"
                p-id="3553" fill="#1296db"></path>
            </svg>
          </li>
        </ul>
      </section>
    </transition>
    <!--动画过渡标签-->
    <!--筛选-->

    <section v-show='sortBy == "divide"' class='sort_content divide'>
      <header>
        <span>配送方式</span>
      </header>
      <ul>
        <li @click='divideClick()'>
          <svg t="1595309394674" class="icon" v-if='chose' viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="3552" width="13" height="13">
            <path
              d="M1018.88 240.64l-72.704-72.704-542.72 543.232-326.144-325.632L5.12 457.728l398.336 398.336 72.192-72.704L1018.88 240.64z"
              p-id="3553" fill="#1296db"></path>
          </svg>
          <svg t="1595310057800" class="icon" v-else viewBox="0 0 1024 1024" version="1.1"
            xmlns="http://www.w3.org/2000/svg" p-id="5711" width="14" height="14">
            <path
              d="M924.8 461.792l-128.496 6.624-109.296 22.896s-15.312 88.464-67.92 150.672c-40.608 48-101.136 99.648-187.584 118.896 0 0-36.912 8.832-55.392 54.624s-48.528 135.12-48.528 135.12L249.824 992l228.48-420.912S208.496 471.392 99.2 195.2l470.4 227.424s52.416-51.648 127.584-53.136c0 0 73.104 2.928 79.728 80.496z"
              fill="#1296db" p-id="5712"></path>
            <path
              d="M314.816 32l247.392 352.224-247.392-255.504S308.384 43.808 314.816 32zM202.784 93.296l352.224 304.224-326.4-193.44s-32.688-65.76-25.824-110.784zM162.704 375.392L185.6 401.216a164.832 164.832 0 0 0 42.096 141.072A229.152 229.152 0 0 0 396.8 620.576s-156.576 25.104-225.216-131.472c0 0-22.176-56.88-8.88-113.712z"
              fill="#1296db" p-id="5713"></path>
          </svg>
          <span>蜂鸟快送</span>

        </li>
      </ul>
    </section>
    </transition>

  </div>
</template>

<script>
  import scroll from 'components/common/scroll/scroll'

  export default {
    name: 'CategoryList',
    props: {
      categoryList: {
        type: Array,
        default () {
          return []
        }
      },
      categoryTitle: {
        type: String,
        default: ''
      }
    },
    components: {
      scroll
    },
    data() {
      return {
        sortBy: '', //大分类的互斥
        detailList: [], //大分类中小分类的数据
        currentIndex: 0, //
        firstIn: true, //首次打开分类
        orderId: 1, //排序
        chose: false, //筛选配送方式
        detailName: ''
      };
    },
    computed: {},
    methods: {
      //大分类的点击
      sortItem(current) {
        if (this.firstIn) {
          this.categoryClick(0)
        }
        if (current == 'food') {
          this.detailName = '分类'
        } else {
          this.detailName = this.categoryTitle
        }
        if (current === this.sortBy) {
          this.sortBy = ''
          this.detailName = this.categoryTitle
        } else {
          this.sortBy = current
        }
        this.firstIn = false
      },
      //小分类li的点击
      categoryClick(index) {
        this.detailList = this.categoryList[index].sub_categories
        this.currentIndex = index
      },
      //最终分类的点击,将发送给父组件
      changClick(item) {
        this.sortBy = ''
        this.$emit('change', item)
      },
      orderClick(id) {
        this.orderId = id
        this.$emit('order', id)
      },
      divideClick() {
        this.$emit('dividechose')
      }
    },
    mounted() {
      this.detailName = this.categoryTitle
    },
  }
</script>

<style scoped>
  .category_list {
    position: relative;
  }

  #Scroll {
    height: 100%;
    overflow: hidden;
  }

  .sortList {
    padding: 1.5vh 0;
    height: 6vh;
    border-bottom: 0.055rem solid #e4e4e4;
  }

  .sort_item {
    display: inline-block;
    height: 100%;
    width: 33.3%;
    text-align: center;
    color: #333;
    font-size: .7rem;
    border-left: 0.055rem solid #e4e4e4;
  }

  .sortList svg {
    vertical-align: bottom;
    transition: all 0.3s;
  }

  .active svg {
    transition: ease 0.3s;
    transform: rotate(-180deg);
  }

  .active path {
    fill: #3190e8;
  }

  .active {
    color: #3190e8;
  }

  .sort_content {
    position: absolute;
    background-color: #fff;
    width: 100%;
    z-index: 7;
  }

  /* 左边小li*/

  .category_left {
    position: relative;
    z-index: 9;
    width: 50%;
  }

  .category_left::after {
    content: '';
    display: block;
    clear: both
  }

  .category_right::after {
    content: '';
    display: block;
    clear: both;
  }

  ul li:first-child {
    border-top: none;
  }

  .categorys {
    position: relative;
    padding: .5rem 0;
    padding-left: .5rem;
    background-color: #f5f5f5;
    color: #666;
    font-size: .7rem;
  }

  .categorys img {
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
    margin-right: .6rem;
  }

  .item_count {
    position: absolute;
    right: 1rem;
    display: inline-block;
    height: 1rem;
    padding: .15rem .25rem;
    border-radius: 1rem;
    background-color: #e4e4e4;
    color: #fff;
    vertical-align: middle;
  }

  .categorys svg {
    position: absolute;
    right: .2rem;
  }

  .category_right {
    position: absolute;
    height: 100%;
    padding: 0 .5rem;
    z-index: 9;
    top: 0;
    left: 50%;
    width: 50%;
    background-color: #fff;
  }

  .detailItem {
    position: relative;
    padding: .5rem 0;
    border-top: .03rem solid #e4e4e4;
    color: #666;
    font-size: .7rem;
  }

  .detail_count {
    position: absolute;
    right: 0;
  }

  .detail_active {
    background-color: #fff;
  }

  .order ul {
    padding-left: 1.5rem;
  }

  .order li {
    position: relative;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    padding: 0.6rem 0;
  }

  .order svg {
    position: absolute;
    left: -0.9rem;
    top: 22px;
  }

  .order .order_svg {
    left: 93%;
  }

  .order p {
    display: inline-block;
    padding-left: 0.3rem;
    width: 100%;
    border-bottom: 0.025rem solid #e4e4e4;
  }

  .divide {
    color: #333;
    font-size: .7rem;
    padding: 1.5vh 0;
    padding-left: 4vw;
  }

  .divide header {
    margin-bottom: 1vh;
  }

  .divide ul li {
    width: 25vw;
    height: 5vh;
    line-height: 4.2vh;
    padding: .5vw .5vh;
    border: 0.025rem solid #e4e4e4;
  }

  .divide svg {
    position: relative;
    top: 0.3vh;
  }

  .showlist-enter-active,
  .showlist-leave-active {
    transition: all 0.3s;
    transform: translateY(0);
  }

  .showlist-enter,
  .showlist-leave-active {
    opacity: 0;
    transform: translateY(-5%);
  }
</style>