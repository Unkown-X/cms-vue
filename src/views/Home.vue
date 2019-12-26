<template>
  <div class="page">
    <el-row>
      <el-col :span="3">
        <navleft/>
      </el-col>
      <el-col :span="21">
        <top/>
        <div class="main">
          <div class="control"></div>
          <div class="content"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
 import navleft from '@/components/navleft.vue'
 import top from '@/components/top.vue'
export default {
  name: "home",
  components: {
    navleft,
    top
  }
};
</script>
<style lang="scss" scoped>
.page {
  width: 100vw;
  min-height: 100vh;
  background: #cccccc
}
.main {
  padding: 20px;
  height: 92vh;
  overflow-y: auto;
}
.control {
  width: 100%;
  background: #ffffff;
  height: 80px;
}
.content {
  width: 100%;
  background: #ffffff;
  height: 500px;
  margin-top:20px;
}
</style>
