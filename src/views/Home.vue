<template>
  <div class="home">
    <div class="nav">
      <router-link to="/home/hello">
        <el-button type="primary" icon="el-icon-house">主页</el-button>
      </router-link>    

      <router-link to="/home/maps"> 
        <el-button type="primary" icon="el-icon-location-outline">地图页</el-button>
      </router-link>  

      <router-link to="/home/demos"> 
        <el-button type="primary" icon="el-icon-document-checked">DEMOS</el-button>
      </router-link>  

      <router-link to="/home/about"> 
        <el-button type="primary" icon="el-icon-user">关于我</el-button>
      </router-link>
    </div> 
   
    <router-view class="view1"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
     
  }
}
</script>

<style scoped>
  /* img{
    min-width: 900px;
  } */
</style>
