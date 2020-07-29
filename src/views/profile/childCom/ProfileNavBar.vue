<!-- 组件说明 -->
<template>
	<div class='profile-nav-bar'>
    <nav-bar class='nav-bar'>
      <div class='left' slot="left" @click='goBack()'>
				<svg t="1594982764660" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2066" width="18" height="18"><path d="M256 512l512 512 0-135.776-376.224-376.224 376.224-376.256 0-135.745z" p-id="2067" fill="#ffffff"></path></svg>
      </div>
      <div class='center' slot="center">
       我的
			</div>
			</nav-bar>
	</div>
</template>

<script>
    import NavBar from 'components/content/navbar/NavBar'
    export default {
        name: 'ProfileNavBar',
        components: {
            NavBar
        },
        data() {
            return {

            };
        },
        computed: {

        },
        methods: {

        },
    }
</script>

<style scoped>
    .nav-bar {
        background-color: #298eeb;
        color: #fff;
        font-size: 12px;
    }
    
    .center {
        font-size: 17px;
        line-height: 42px;
        font-weight: 550;
    }
    
    .left {
        display: flex;
        align-items: center;
        margin-left: 5px;
    }
</style>