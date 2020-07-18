<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
    <div v-else class="item-active-icon"><slot name="item-active-icon"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        name: "TabBarItem",
        props: {
            path: {
                type: String,
                required: true
            },
            activeColor: {
                type: String,
                default: '#ff5777'
            },
            stop: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                geohash: ' '
            }
        },
        methods: {
            itemClick() {
                if (this.stop) return;
                if (this.path == this.$route.path) {
                    return;
                }
                this.$router.replace(this.path);
            },
        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            activeStyle() {
                return this.isActive ? {
                    color: this.activeColor
                } : {}
            }
        },
        created() {

        },
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        font-size: 12px;
    }
    
    .tab-bar-item .item-icon img,
    .item-active-icon img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
    
    .item-text {
        margin-top: 2px;
    }
    /*.item-text.active {*/
    /*color: #ff5777*/
    /*}*/
</style>