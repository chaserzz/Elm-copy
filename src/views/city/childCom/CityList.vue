<!-- 组件说明 -->
<template>
  <div class='cityList'>
    <div class='title'>
       <span>{{title}}</span> 
        <span class='desc' v-if='desc !== ""'>{{desc}}</span>
    </div>
    <ul>
      <li v-for='(item,index) in cityList' 
      :key='index'
      :style='{color:fontColor}'
      @click='cityClick(item.id)'>{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'CityList',
        props: {
            cityList: {
                type: Array,
                default () {
                    return {}
                }
            },
            fontColor: {
                type: String,
                default: '#000000'
            },
            title: {
                type: String,
                default: ''
            },
            desc: {
                type: String,
                default: ''
            }
        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {
            cityClick(id) {

            }
        },
    }
</script>

<style scoped>
    ul {
        justify-content: space-around;
        flex-wrap: wrap;
        text-align: center;
        overflow: hidden;
        border-bottom: .2rem solid #e4e4e4;
    }
    
    ul li {
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 25%;
        height: 1.9rem;
        line-height: 1.9rem;
        font: .6rem/1.9rem Microsoft YaHei;
        border-bottom: .025rem solid #e4e4e4;
        border-right: .025rem solid #e4e4e4;
        white-space: nowrap;
    }
    
    ul li:nth-of-type(4n) {
        border-right: none;
    }
    
    ul li:nth-of-type(4n)::after {
        display: block;
        clear: both;
        content: '';
    }
    
    .cityList::before {
        display: block;
        height: 0.6rem;
        background-color: #f5f5f5;
        content: '';
    }
    
    .title {
        height: 1.65rem;
        font: .55rem/1.45rem Helvetica;
        color: #666;
        padding-left: .5rem;
        border-bottom: .07rem solid #e4e4e4;
        border-top: .2rem solid #e4e4e4;
    }
    
    .desc {
        display: inline-block;
        font-size: .475rem;
        color: #999;
        transform: scale(0.9);
    }
</style>