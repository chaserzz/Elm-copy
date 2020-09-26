<template>
  <div class='remark'>
    <remark-nav-bar />
    <remark-quick :quick-content='remarkData' @quickremark='quickContent' />
    <div class='input'>
      <p class='title'>其他备注</p>
      <textarea v-model="otherRemark" class='remarkInfo' placeholder="请输入备注信息(可不填)" />
      </div>
    <button @click='goBack()' class='submit'>确定</button>
  </div>
</template>

<script>
  import {getremark} from 'network/remark.js'
    import {
    setSectionStore,
    getSectionStore,
  } from 'common/utils'


  import remarkNavBar from './childCom/remarkNavBar.vue'
  import remarkQuick from './childCom/remarkQuick.vue'
export default {
  name: 'Remark',
  components:{
   remarkNavBar,
   remarkQuick,
  },
  data () {
    return {
      //所有备注
      remarkData:null,
      //用户选择的备注
      clientRemarks:{},
      //用户自己填写的备注信息
      otherRemark:''
    }
  },
  computed:{

  },
  methods:{
    //快速备注的内容
    quickContent(IndexArray){
      let quick=[]
      for(let i = 0; i<IndexArray.length;i++){
        if(IndexArray[i] != -1){
          quick.push(this.remarkData[i][IndexArray[i]])
        }
      }
      this.clientRemarks.quick=quick
    },
    //点击确定
    goBack(){
      this.clientRemarks.other=this.otherRemark
      setSectionStore('clientRemarks',this.clientRemarks)
      this.$router.go(-1)
    }
  },
  mounted(){
    getremark().then(res =>{
      this.remarkData = res.remarks
    })
  }
}
</script>

<style scoped>
.remark{
  background-color: #f5f5f5;
  height: 100vh;
  overflow: hidden;
}
.input{
  margin-top: .5rem;
  padding: .9rem .6rem;
  background-color: #fff;
}
.title{
  font-size: .85rem;
}
.remarkInfo{
  width: 90%;
  height: 4.5rem;
  margin-top: .7rem;
  padding: .5rem .6rem;
  font-size:.75rem;
  background-color: #f5f5f5;
}
.submit{
  width: calc(100vw - 1rem);
  height: 2.2rem;
  margin-top: .2rem;
  margin-left: .5rem;
  border-radius: .2rem;
  background-color: #4cd964;
  font-size: 1rem;
  color:#fff;
}
</style>