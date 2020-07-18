<!-- 组件说明 -->
<template>
  <div class='search'>
    <ul>
      <li v-for='(item,index) in searchList' :key='index' @click='GoHome(item)'>
        <p class='keywords_name'>{{item.name}}</p>
        <p class='keywords_address'>{{item.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    import {
        setStore,
        getStore,
        removeStore
    } from 'common/utils.js'

    export default {
        name: 'SearchList',
        props: {
            searchList: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {
            GoHome(item) {
                if (getStore('historyList')) {
                    let historyList = JSON.parse(getStore('historyList'))
                    for (const iterator of historyList) {
                        if (iterator.geohash === item.geohash) {
                            let index = historyList.indexOf(iterator)
                            historyList.splice(index, 1)
                            historyList.unshift(item)
                        }
                    }
                    historyList.push(item)
                    removeStore('historyList')
                    setStore('historyList', historyList)
                } else {
                    let historyList = []
                    historyList.push(item)
                    setStore('historyList', historyList)
                }
                setStore('geohash', item.geohash + '')
                this.$router.push({
                    path: '/home/' + item.geohash
                })
            }
        },
    }
</script>

<style scoped>
    .keywords_name {
        width: 90%;
        color: #333;
        margin: 0 auto 0.4rem;
        font-size: .8rem;
    }
    
    .keywords_address {
        width: 90%;
        margin: 0 auto 0.4rem;
        font-size: .45rem;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .search li {
        padding: 0.45rem 0;
        border-bottom: 0.025rem solid #e4e4e4;
    }
    
    .search ul:last-child {
        border: none !important;
    }
</style>