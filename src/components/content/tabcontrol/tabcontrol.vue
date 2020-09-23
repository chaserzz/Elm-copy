<!-- 组件说明 -->
<template>
  <div class='tabcontrol'>
    <div class='tabcontrolitem'  v-for='(item,index) in title' :key='index' @click='divClick(index)' :class='{active:current==index}'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    //import x from ''
    export default {
        name: 'tabControl',
        components: {

        },
        props: {
            title: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        data() {
            return {
                current: 0,
            };
        },
        computed: {

        },
        methods: {
            divClick(index) {
                this.current = index;
                this.$emit('tabClick', index);
            }
        },
    }
</script>

<style scoped>
    .tabcontrol {
        display: flex;
        height: 2.5rem;
        line-height:2.4rem;
        text-align: center;
        font-size: .8rem;
        color: #666;
        background-color: #fff;
    }
    
    .tabcontrolitem {
        flex: 1;
    }
    
    .active {
        color: #3190e8;
    }
    
    .active span {
        padding: 6px;
        border-bottom: 3px solid #3190e8;
    }
</style>