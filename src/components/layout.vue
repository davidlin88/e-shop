<template>
  <div id="app">
    <div class="app-header">
      <div class="app-header-inner">
        <router-link :to="{path: '/'}">
          <img class="logo" src="../assets/logo.png" alt="logo">
        </router-link>
        <ul class="head-nav">
          <li>{{username}}</li>
          <li v-if="username===''" @click="logClick">登录</li>
          <li class="nav-sep">|</li>
          <li v-if="username!==''" @click="quit">退出</li>
          <li v-if="username===''" @click="regClick">注册</li>
          <li class="nav-sep">|</li>
          <li @click="aboutClick">关于</li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>@davidlin88</p>
    </div>
    <my-dialog v-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
     <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </my-dialog>
    <my-dialog>
      
    </my-dialog>
    <my-dialog>
      
    </my-dialog>
  </div>
</template>

<script>
import Dialog from './base/dialog'
import LogForm from './logForm'
import RegForm from './regForm'
export default {
  data () {
    return {
      username: '',
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false
    }
  },
  components: {
    MyDialog: Dialog,
    LogForm,
    RegForm
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
