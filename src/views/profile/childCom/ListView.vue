<template>
  <div id="list">
    <div v-for="(item, index) in listData" :key="index" class="item" @click='Listclick(index)'>
      <span class="icon">
        <img :src="item.image" />
      </span>
      <div class="info">{{item.info}}</div>
      <svg t="1596012665535" class="icon_arrow" viewBox="0 0 1024 1024" width='.8rem' height='.8rem' version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="51229">
        <path
          d="M355.55555566 974.22222267c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L315.73333366 166.39999967c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
          fill='#e4e4e4' p-id="51230"></path>
      </svg>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ListView",
    props: {
      listData: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      Listclick(index) {
        this.$emit('listClick', index)
      }
    },
  }
</script>

<style scoped>
  #list {
    background-color: #f3f3f3;
    font-size: .9rem;
    color: #333;
  }

  #list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
    background-color: #fff;
  }

  .icon img {
    width: 1rem;
    height: 1rem;
  }

  .item .icon {
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
  }

  .item .info {
    margin-left: 35px;
    padding-left: 5px;
  }

  .item {
    position: relative;
    border-bottom: .010rem solid #e4e4e4;
  }

  .icon_arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 3%;
  }

  .item:last-child {
    border: none;
  }
</style>