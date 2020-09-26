<!-- 组件说明 -->
<template>
  <div class='locate'>
    <locate-nav-bar :location='city.name' />
    <scroll id='Scroll' ref='scroll'>
      <div class='search'>
        <div class='search_wrap'>
          <input type="text" placeholder="输入学校,商务楼,地址" v-model='keywords' @keyup='inputKeyup()' />
          <button @click='submitClick'>提交</button>
        </div>
      </div>
      <history-search v-if='history_mode' />
      <search-list v-if='!history_mode' :search-list='searchList' />
    </scroll>
  </div>
</template>

<script>
  import LocateNavBar from './childCom/LocateNavBar.vue'
  import HistorySearch from './childCom/HistorySearch.vue'
  import SearchList from './childCom/SearchList.vue'

  import scroll from 'components/common/scroll/scroll'

  import {
    getCityInfo,
    searchAddress
  } from 'network/locate'
  export default {
    name: 'Locate',
    components: {
      LocateNavBar,
      HistorySearch,
      SearchList,
      scroll
    },
    data() {
      return {
        cityId: Number,
        city: {},
        keywords: '',
        history_mode: true,
        searchList: []
      };
    },
    computed: {

    },
    methods: {
      //提交按钮点击事件
      submitClick() {
        if (this.keywords === '') {
          this.$toast.show('请输入搜索内容', 2000)
        } else {
          this.history_mode = false
          searchAddress(this.cityId, this.keywords).then(res => {
            this.searchList = res
            this.$refs.scroll.refresh()
          })
        }

      },
      //input回车事件
      inputKeyup() {
        if (event.keyCode === 13) {
          this.submitClick()
        }
      }
    },
    created() {
      //通过路由获取城市id
      this.cityId = this.$route.params.cityId
    },
    beforeMount() {
      //通过城市id获得城市的具体信息
      getCityInfo(this.cityId).then(res => {
        this.city = res
      })
    },
  }
</script>

<style scoped>
  .locate {
    position: relative;
    z-index: 9;
    background-color: #f5f5f5;
    overflow: hidden;
  }

  #Scroll {
    overflow: hidden;
    height: calc(100vh - 42px);
  }

  .search {
    margin-top: 0.6rem;
    border-bottom: .03rem solid #e4e4e4;
    border-top: .03rem solid #e4e4e4;
    background-color: #fff;
  }

  .search_wrap {
    padding: .7rem 1rem;
    font-size: .8rem;
  }

  .search_wrap input {
    display: block;
    width: 100%;
    height: 2rem;
    margin-bottom: .62rem;
    border: 1px solid #e4e4e4;
  }

  .search_wrap button {
    display: block;
    width: 100%;
    height: 1.75rem;
    background-color: #3190e8;
    color: #f5f5f5;
    border-radius: .2rem;
  }
</style>