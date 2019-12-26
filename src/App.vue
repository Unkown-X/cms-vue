<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
div,
p,
ul,
li,
dl,
dt,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
form,
input,
select,
button,
textarea,
iframe,
table,
th,
td {
  margin: 0;
  padding: 0;
}
img {
  border: 0 none;
  vertical-align: center;
}
ul,
li {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 14px;
}
button {
  outline: none;
  cursor: pointer;
}
i,
em,
cite {
  font-style: normal;
}
aside section,
.body {
  display: block;
  width: 1000px;
  margin: 0 auto;
}
a,
a:link {
  color: #000;
  text-decoration: none;
} /*设置a标签基本样式与伪类选择器设置*/
a:visited {
}
a:active,
a:hover {
  text-decoration: none;
  color: #d00000;
}
a:focus {
  outline: none;
}
.orange {
  color: #f26e01;
}
i {
  display: block;
}
.clearfix:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  clear: both;
  visibility: hidden;
}
</style>
