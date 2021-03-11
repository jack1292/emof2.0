<template>
<div class="header-warpper flex align-center justify-between">
  <div class="header-logo flex align-center">
    <img src="../assets/img/zw-logo.png" alt="">
    <div></div>
    <p>一个辅助政购项目安全、规范、高效的平台</p>
  </div>
  <div class="header-login flex align-center">
    <p class="header-phone flex align-center"><i class="iconfont icondianhua"></i>服务电话：400-999-6541</p>
    <div class="login-box flex align-center justify-between">
      <router-link to="/" class="login-btn login-btn1">登录</router-link>
      <i></i>
      <router-link to="/" class="login-btn login-btn2">免费试用</router-link>
      <router-link to="/" class="login-btn login-btn3" v-if="token">进行系统</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      token:''
    }
  },
  computed:{

  },
  created() {
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.header-warpper{
  padding: 20px 80px;
  height: 105px;
  background: #0a2240;
  .header-logo{
    div{
      width: 1px;
      height: 40px;
      margin: 0 20px;
      background-color: #ffffff;
    }
    p{
      font-size: 18px;
      color: #ffffff;
    }
  }
  .header-login{
    .header-phone{
      font-size: 18px;
      color: #ffffff;
      margin-right: 40px;
      i{
        font-size: 20px;
        margin-right: 5px;
      }
    }
    .login-box{
      width: 186px;
      height: 40px;
      background-color: #ff9600;
      border-radius: 20px;
      overflow: hidden;
      .login-btn{
        display: block;
        width: 90px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: #fff;
        &.login-btn1{
          width: 86px;
        }
        &.login-btn2{
          width: 99px;
        }
        &.login-btn3{
          width: 186px;
        }
      }
      i{
        width: 1px;
        height: 16px;
        background: #fff;
      }
    }
  }
}
</style>