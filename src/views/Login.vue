<template>
    <div class="login">
        <el-input
            placeholder="请输入用户名"
            v-model="input"
            clearable>
        </el-input>
        <br>
        <el-input
            placeholder="请输入密码"
            v-model="input"
            clearable>
        </el-input>
        <br>
        <el-button type="primary" @click="toHome">登录</el-button>
         
    </div>
</template>

<script>
export default {
    data() {
        return {
        input: ''
        }
    },
    methods:{
        toHome(){
            this.$router.push('/home/hello')
        }
    }
}
</script>

<style scoped>
.login{
    z-index: 9999;
    background-color: aliceblue;
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
}
.el-input{
    width: 25%;
    margin-bottom: 20px;
}
</style>
