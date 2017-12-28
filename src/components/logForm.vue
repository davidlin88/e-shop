<template>
  <div>
    <div class="mask" @click="close"></div>
    <div class="log">
      <div class="close" @click="close">x</div>
      <label for="name">用户名</label>
      <input type="text" placeholder="请输入用户名" id="name">
      <label for="passport">密码</label>
      <input type="text" placeholder="请输入密码" id="passport">
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      close () {
      }
    }
  }
</script> 

<style scoped>
  
</style>