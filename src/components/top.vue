<template>
  <div class="top">
    
  </div>
</template>

<script>
let that;
export default {
  name: "top",
  data() {
    return {
     
    };
  },
  mounted() {
    that = this;
    // if(!sessionStorage.getItem("user")){
    //   this.$router.push({ path: "login" });
    //   return
    // }
    that.nameText = JSON.parse(sessionStorage.getItem("user")).adminName;
  },
  methods: {
    exit() {
      console.log("退出");
      let user = JSON.parse(sessionStorage.getItem("user"));
      let data = {
        adminAccount: user.adminAccount
      };
      that
        .$fetch("/sign-out", data)
        .then(res => {
          sessionStorage.removeItem('user')
          this.$router.push({ path: "login" });
        })
        .catch(error => {
          sessionStorage.removeItem('user')
          this.$router.push({ path: "login" });
          that.$store.commit("showAlert");
        });
    },
    toPage(Url) {
      this.$router.push({ path: Url });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top {
  height: 8vh;
  background-color:skyblue;
  padding-left: 40px;
}


.exit {
  width: 107px;
  text-align: center;
  border-left: 1px solid #ffffff;
}
</style>