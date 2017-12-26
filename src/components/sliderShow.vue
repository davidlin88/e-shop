<template>
  <div class="slider-show">
    <div class="img">
      <img :src="src" alt="title">
    </div>
    <div class="mask">
      <div class="img-title">
        {{title}}
      </div>
      <ul class="control">
        <li>&lt;</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>&gt;</li>
      </ul>
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
.slider-show {
  width: 900px;
  height: 500px;
  position: relative;
}
.img {
  height: 100%;
}
.control {
  float: right;
}
.control li {
  float: left;
  cursor: pointer;
  color: #fff;
  margin-right: 22px;
}
.mask {
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 30px;
  height: 30px;
  background-color: rgba(0,0,0,0.5);
  z-index: 999;
}
</style>
