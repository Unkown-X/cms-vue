<template>
  <div class="navleft">
    <!-- <el-scrollbar style="height:100%">
      
    </el-scrollbar>-->
  </div>
</template>

<script>
// import vuescroll from "vuescroll";
// import "vuescroll/dist/vuescroll.css";
let that;
export default {
  name: "navleft",
  data() {
    return {};
  },
  props: ["active"],
  mounted() {
    that = this;
    // let user = JSON.parse(sessionStorage.getItem("user"));

    // this.navlist = this.navlist0;
    // this.navlist[this.active[0]].listShow = true;
    // if (this.active.length == 1) {
    //   this.navlist[this.active[0]].active = true;
    // } else if (this.active.length == 2) {
    //   this.navlist[this.active[0]].active = true;
    //   this.navlist[this.active[0]].list[this.active[1]].active = true;
    // }
    // if ((user && user.isRoot == 0) || (user && user.adminLevel == 0)) {
    //   this.navlist[4].isShow = true;
    // }
  },
  methods: {
    toPage(Url) {
      //由于同路由不刷新所以同路由不跳转
      if (this.navlist[this.active[0]].list[this.active[1]].Url != Url) {
        that.$store.commit("showLoading");
        that.$router.push({ path: Url });
      }
    },
    openList(index) {
      this.navlist[index].listShow = !this.navlist[index].listShow;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navleft {
  height: 100vh;
  background-color: red;
  // overflow-y: auto;
}
</style>