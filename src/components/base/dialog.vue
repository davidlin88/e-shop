<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover" v-if="isShow" @click="closeMyself">
      </div>
      <transition name="drop">
        <div v-if="isShow" class="dialog-content">
          <p class="dialog-close" @click="closeMyself">x</p>
          <!-- 下一行有什么用? -->
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: false
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
  transform: translateY(-500px);
}
.drop-enter {
  transform: translateY(-500px);
}
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background-color: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background-color: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
</style>