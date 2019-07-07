<template>
   <div class="maps">
      <el-page-header @back="goBack" content="地图页面">
      </el-page-header>
      <div >
        <ul>
          <li>map</li>
          <li>map</li>
          <li>map</li>
          <li>map</li>
          <li>map</li>
          <li>map</li>
        </ul>
      </div>
      maps
   </div>
</template>

<script>
export default {
  name:'Maps',
  data(){
    return{
      
    }
  },
  methods: {
    goBack() {
      // this.$router.push('home')

      //返回上一页（回退历史记录）
      this.$router.back();
    }
  }
};
</script>

<style scoped>
  .maps{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    padding-top: 10px;
  }
  .el-page-header{
    padding-left: 15px;
    margin-bottom: 20px;
  }
</style>
