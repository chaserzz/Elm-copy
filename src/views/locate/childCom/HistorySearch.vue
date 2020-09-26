<!-- 组件说明 -->
<template>
  <div class='history'>
    <p class='title'>搜索历史</p>
    <div class='history_keywords'>
      <ul>
        <li v-for='(item,index) in historyList' :key='index' @click='GoHome(item)'>
          <p class='keywords_name'>{{item.name}}</p>
          <p class='keywords_address'>{{item.address}}</p>
        </li>
      </ul>
      <div class='clear' v-show='showClear' @click='clear()'>
        <span>清空所有</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    setStore,
  } from 'common/utils'
  export default {
    name: 'HistorySearch',
    data() {
      return {
        historyList: {
          type: Object,
          default () {
            return {}
          }
        },
        //显示清空所有  初始值未false
        showClear: false
      };
    },
    methods: {
      getHistoryList() {
        if (localStorage.getItem('historyList')) {
          this.historyList = JSON.parse(localStorage.getItem('historyList'))
          this.showClear = true
        } else {
          this.historyList = []
        }
      },
      clear() {
        this.historyList = []
        this.showClear = false
        localStorage.removeItem('historyList')
      },
      GoHome(item) {
        setStore('geohash', item.geohash + '')
        this.$router.push({
          path: '/medium/home/' + item.geohash
        })
      }
    },
    beforeMount() {
      this.getHistoryList()
    },
  }
</script>

<style scoped>
  .clear {
    padding: 0.7rem 0;
    border-top: .025rem solid #e4e4e4;
    border-bottom: .025rem solid #e4e4e4;
    font-size: 1rem;
    color: #666;
    text-align: center;
  }

  .history_keywords {
    background-color: #fff;
  }

  .keywords_name {
    width: 90%;
    color: #333;
    margin: 0 auto 0.4rem;
    font-size: .8rem;
  }

  .keywords_address {
    width: 90%;
    margin: 0 auto 0.4rem;
    font-size: .65rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    position: relative;
    top: .2rem;
    width: 90%;
    margin: 0 auto;
    font-size: .8rem;
  }

  li {
    margin-top: .6rem;
    padding: 0.45rem 0;
    border-bottom: 0.025rem solid #e4e4e4;
  }
</style>