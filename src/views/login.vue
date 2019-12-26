<template>
  <div class="bg">
    <div class="loginplate">
      <h4 class="top">公安非税管理系统</h4>
      <div class="in">
        <div class="qrcode">二维码</div>
      </div>
      <div class="down">
        <span @click="login()">扫码登录</span>
      </div>
    </div>
  </div>
</template>

<script>
let that;
export default {
  name: "login",
  components: {
    // HelloWorld
  },
  mounted() {
    that = this;
  },
  methods: {
    login() {
         that.$router.push({ path: "home" });
    }
  }
};
</script>
<style scoped lang="scss">
.bg {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #cccccc;
}
.loginplate {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  min-height: 200px;
  background: #ffffff;
  border-radius: 10px;
  padding: 25px;
  transform: translateX(-50%) translateY(-50%);
  .top {
    font-size: 20px;
  }

  .qrcode {
    width: 150px;
    height: 150px;
    margin: 10px auto;
    background: pink;
  }
}
</style>
