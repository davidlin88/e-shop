<template>
  <div id="app">
    <div class="app-header">
      <div class="app-header-inner">
        <img class="logo" src="../assets/logo.png" alt="logo">
        <ul class="head-nav">
          <li>登录</li>
          <li class="nav-sep">|</li>
          <li>注册</li>
          <li class="nav-sep">|</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <div class="app-footer">
      <p>@davidlin88</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
.app-header {
  background-color: #363636;
  height: 90px;
}
.app-header-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.logo {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
  margin-top: 33px;
}
.head-nav li{
  float: left;
  color: #999;
  cursor: pointer;
}
.nav-sep {
  margin-left: 12px;
  margin-right: 12px;
}
.app-footer {
  height: 80px;
  background-color: #ddd;
  width: 100%;
  line-height: 80px;
  text-align: center;
  margin-top: 20px;
}
* {
  box-sizing: border-box;
}
body{
  line-height:1.4;
  color:#444;
  font-family: Arial, "Microsoft YaHei";
  font-size: 14px;
  background:white;
  background-color: #eee;
}
input,textarea,select,button{
  font-size:12px;
  font-size:100%;    
  font-family:arial, "Microsoft YaHei";;
  font-family:inherit;
}
body,h1,h2,h3,h4,h5,h6,p,ul,ol,form{
  margin:0;
}
h4,h5,h6{
  font-size:1em;
}
ul,ol{
  padding-left:0; 
  list-style-type:none;
}
/*image with no-border*/
a img{border:0;}
img{border:0;}

</style>
