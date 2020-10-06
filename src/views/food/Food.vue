<!-- 组件说明 -->
<template>
  <div class='food'>
    <food-nav-bar class='navbar' :title='foodTitle' />
    <category-list class='categoryList' ref='categoryList' :category-list='categoryList' :category-title='foodTitle'
      @change='Change' @order='order' />
    <scroll id='Scroll' ref='scroll' :pull-up-load='true' :probe-type='3' @pullingUp='lodaData'>
      <div class='space'></div>
      <food-store-info class='storeInfo' :storeInfo='storeInfo' />
    </scroll>
  </div>
</template>

<script>
  import CategoryList from './childCom/CategoryList.vue'
  import FoodNavBar from './childCom/FoodNavBar.vue'
  import FoodStoreInfo from './childCom/FoodStoreInfo.vue'

  import scroll from 'components/common/scroll/scroll'

  import {
    getCategoryList,
    getStoreInfo,
    FirstIn
  } from 'network/food'

  export default {
    name: 'Food',
    components: {
      CategoryList,
      FoodNavBar,
      FoodStoreInfo,
      scroll
    },
    data() {
      return {
        currentId: 20,
        categoryList: [],
        foodTitle: '',
        latitude: '',
        longitude: '',
        storePage: 0,
        orderId: 4,
        storeInfo: []
      };
    },
    computed: {

    },
    methods: {
      getParams() {
        this.currentId = this.$route.params.id
        this.currentId = this.currentId - 0
        this.foodTitle = this.$route.params.name
        this.latitude = this.$route.params.latitude
        this.longitude = this.$route.params.longitude
      },
      Change(item) {
        if(this.currentId !== item.id){
          this.storePage = 0
          this.storeInfo = []
        }
        this.currentId = item.id 
        this.foodTitle = item.name
        this._getStoreInfo()
      },
      order(id) {
        this.orderId = id
        this._getStoreInfo()
        this.$refs.categoryList.sortItem('order')
      },
      _getStoreInfo() {
        getStoreInfo(this.latitude, this.longitude,this.storePage * 20 , this.currentId, this.orderId).then(res => {
         let list = []
          for (let item of res) {
            item.image_path = 'https://elm.cangdu.org/img/' + item.image_path
            item.startWidth = {
              width: (item.rating / 5.0) * 3.0 + 'rem'
            }
            this.storeInfo.push(item)
          }
          this.storePage++;
        })
      },
      lodaData() {
        this._getStoreInfo()
        
        this.$refs.scroll.refresh()
      }
    },
    created() {
      this.getParams()
      getCategoryList().then(res => {
        for (let item of res) {
          if (item.image_url) {
            item.image_url = 'https://fuss10.elemecdn.com/' + item.image_url
          } else {
            item.image_url = 'https://elm.cangdu.org/img/default.jpg'
          }
        }
        this.categoryList = res
      })
    },
    mounted(){
      getStoreInfo(this.latitude,this.longitude).then(res =>{
        let list = []
        for (let item of res) {
          item.image_path = 'https://elm.cangdu.org/img/' + item.image_path
          item.startWidth = {
          width: (item.rating / 5.0) * 3.0 + 'rem'
        }
          this.storeInfo.push(item)
        }
        this.storePage++
      })
    }
  }
</script>

<style scoped>
.food{
  overflow: hidden;
}
  #Scroll {
    height: calc(100vh - 42px - 6vh);
  }

  .navbar {
    position: relative;
    z-index: 99;
  }

  .food {
    position: relative;
    background-color: #fff;
    height: 100vh;
    z-index: 9;
  }

  .categoryList {
    position: relative;
    z-index: 99;
  }

  .space {
    height: 2.5vh;
  }
</style>