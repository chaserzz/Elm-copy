<!-- 组件说明 -->
<template>
  <div class='discover'>
    <discover-nav-bar />
    <div class='search'>
      <input type="text" @keyup='EnterUp()' placeholder="请输入商家或美食名称" v-model='keyword' />
      <button @click='commit()'>提交</button>
    </div>
    <div>
      <div v-if='Historymodel && historySearch[0]' class='title'>
        搜索历史
      </div>
      <div v-if='!Historymodel && !IsreasulteNull' class='title'>
        商家
      </div>
    </div>
    <scroll id='Scroll'>
      <!-- 历史记录-->
      <div v-if='Historymodel '>
        <ul>
          <li v-for='(item,index) in historySearch' class='historyItem' :key='index' @click='historyItemClick(item)'>
            <span>{{item}}</span>
            <svg @click.stop='deleteItem(index)' t="1595044747529" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="3374" width="11" height="11">
              <path
                d="M671.830688 511.699001l319.059377-319.059377c43.945914-43.945914 43.945914-115.583774 0-159.529688-43.945914-43.945914-115.583774-43.945914-159.529688 0l-319.059377 319.059377-319.059377-319.059377c-43.945914-43.945914-115.583774-43.945914-159.529688 0-43.945914 43.945914-43.945914 115.583774 0 159.529688l319.059377 319.059377-319.059377 319.059377c-43.945914 43.945914-43.945914 115.583774 0 159.529688 43.945914 43.945914 115.583774 43.945914 159.529688 0l319.059377-319.059377 319.059377 319.059377c43.945914 43.945914 115.583774 43.945914 159.529688 0 43.945914-43.945914 43.945914-115.583774 0-159.529688L671.830688 511.699001z"
                p-id="3375" fill="#999999"></path>
            </svg>
          </li>
        </ul>
        <div v-if='historySearch[0]' class='clear' @click='clear()'>
          <span>清空搜索历史</span>
        </div>
      </div>
      <!--未搜索到数据-->
      <div class='noneResulte' v-if='IsreasulteNull'>
        很抱歉!无搜索结果
      </div>
      <!--搜索到数据-->
      <div v-if='!IsreasulteNull && !Historymodel ' class='resulte'>
        <ul>
          <li v-for='(item,index) in searchResulte' :key='index' @click='ShopItem(item)'>
            <img :src="item.image_path" alt="">
            <p class='first'>
              <span class='name'>{{item.name}}</span>
              <span class='pay'>支付</span>
            </p>
            <p class='second'>
              <span>月售{{item.recent_order_num}}单</span>
            </p>
            <p class='third'>
              <span>{{item.float_minimum_order_amount}}元起送</span> /
              <span>距离{{item.distance}}</span>
            </p>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
  import DiscoverNavBar from './childCom/DiscoverNavBar.vue'

  import Scroll from 'components/common/scroll/scroll.vue'

  import {
    setStore,
    getStore,
    removeStore
  } from 'common/utils'

  import {
    getSearch
  } from 'network/discover'
  export default {
    name: 'Discover',
    components: {
      Scroll,
      DiscoverNavBar,

    },
    data() {
      return {
        keyword: '',
        historySearch: [], //历史搜索
        Historymodel: true,
        searchResulte: [],
        IsreasulteNull: false
      };
    },
    computed: {

    },
    methods: {
      //获取历史数据
      getHistoryList() {
        if (getStore('historySearch')) {
          this.historySearch = JSON.parse(getStore('historySearch'))
          this.showHistory = true
        }
      },
      //提交按钮
      commit() {
        //防止空数据传输
        if (this.keyword === '') {
          this.$toast.show('请输入搜索内容', 2000)
          return;
        }
        //获取搜索的商店
        let geohash = getStore('geohash')
        getSearch(geohash, this.keyword).then(res => {
          if (res.length > 0) {
            for (let item of res) {
              item.image_path = 'https://elm.cangdu.org/img/' + item.image_path
            }
            this.searchResulte = res
          } else {
            this.IsreasulteNull = true
          }
        }).then(() => {
          let repite = false
          for (let item of this.historySearch) {
            if (this.keyword === item) {
              repite = true
            }
          }
          if (!repite) {
            this.historySearch.push(this.keyword)
          }
          removeStore('historySearch')
          setStore('historySearch', this.historySearch)
          this.Historymodel = false
        })

      },
      //关闭图标
      deleteItem(index) {
        this.historySearch.splice(index,1)
        removeStore('historySearch')
        setStore('historySearch', this.historySearch)
      },
      //清空
      clear() {
        this.historySearch = []
        localStorage.removeItem('historySearch')
      },
      //回车键搜索
      EnterUp() {
        if (this.keyword === '') {
          this.Historymodel = true
          this.IsreasulteNull = false
        }
        if (event.keyCode === 13) {
          this.IsreasulteNull = false
          this.commit()
        }
      },
      //点击搜索结果
      ShopItem(item){
        let id = item.id
        this.$router.push({
          path: '/shop/' + id
        })
      },
      //历史Item的点击
      historyItemClick(item){
        this.keyword = item
        this.commit()
      }
    },
    beforeMount() {
      this.getHistoryList()
    },
  }
</script>

<style scoped>
  #Scroll {
    height: calc(100vh - 49px - 50px - 2.2rem - .9rem - 1.1rem);
    overflow: hidden;
    background-color: #fff;
  }

  .discover {
    position: relative;
    height: calc(100vh - 49px);
    background-color: #f5f5f5;
  }

  .search {
    position: relative;
    padding: 0.55rem 0.15rem;
    height: 2.2rem;
    background-color: #fff;
  }

  .search input {
    width: 72%;
    height: 50%;
    margin-left: 2%;
    border: 0.035rem solid #e4e4e4;
    border-radius: 0.15rem;
    padding: 0.45rem;
    background-color: rgb(242, 242, 242);
    font-size: 0.85rem;
    font-weight: 560;
    color: rgb(117, 117, 117);
  }

  .search button {
    display: inline-block;
    position: absolute;
    width: 18%;
    height: 63.5%;
    right: 2%;
    margin-left: 2%;
    background-color: rgb(49, 144, 232);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 555;
    border-radius: 0.2rem;
  }

  .title {
    background-color: rgb(245, 245, 245);
    height: .9rem;
    font-size: .8rem;
    font-weight: 550;
    color: rgb(102, 102, 102);
    padding: .75rem .45rem;
  }

  .historyItem {
    position: relative;
    padding: .75rem .45rem;
    border-bottom: .025rem solid #e4e4e4;
    font-size: 0.9rem;
  }

  .historyItem svg {
    position: absolute;
    right: .45rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .clear {
    padding: 0.7rem 0;
    border-top: .025rem solid #e4e4e4;
    border-bottom: .025rem solid #e4e4e4;
    font-size: 1rem;
    font-weight: 550;
    color: rgb(49, 144, 232);
    text-align: center;
  }

  .noneResulte {
    border-top: .075rem solid #e4e4e4;
    height: 7vh;
    line-height: 7vh;
    text-align: center;
    color: #333;
    font-size: .8rem;
  }

  .resulte img {
    float: left;
    height: 3rem;
    width: 3rem;
    vertical-align: text-top;
  }

  .resulte {
    font-size: 0.75rem;
    color: #333;
  }

  .first,
  .second,
  .third {
    margin-left: 3.4rem;
  }
  .resulte ul {
    padding-top: .8rem;
  }
  .resulte li {
    margin-top: 0.8rem;
    padding-bottom: 0.8rem;
    border-bottom: 0.025rem solid #e4e4e4;
  }

  .pay {
    display: inline-block;
    position: relative;
    top: -0.18rem;
    font-size: 0.65rem;
    margin-left: 0.3rem;
    border-bottom: 0.08rem solid rgb(255, 96, 0);
    color: rgb(255, 96, 0);
    font-weight: 550;
    transform: scale(0.8);
  }

  .pay::after {
    position: absolute;
    display: block;
    content: '';
    width: 1.55rem;
    height: 1.25rem;
    border: 0.1rem solid rgb(255, 96, 0);
    transform: skew(-15deg);
    top: -0.3rem;
    left: -0.2rem;
  }
</style>