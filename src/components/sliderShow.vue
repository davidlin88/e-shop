<template>
  <div class="slider-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
        <transition name="slide-trans">
          <img v-if="isShow" :src="img[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="img[nowIndex].src">
        </transition>
    </div>
    <div class="mask">
      <h2 class="img-title">{{img[nowIndex].title}}</h2>
      <ul class="control">
        <li @click="goto (prevIndex)">&lt;</li>
        <li v-for="(item,index) in img">
          <a :class="{'on' : index === nowIndex}" @click="goto (index)">
            {{index + 1}}
          </a>
        </li>
        <li @click="goto (nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inv: 2000,
      nowIndex: 0,
      isShow: true,
      img: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: '数据统计',
          toKey: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: '数据预测',
          toKey: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: '数据分析',
          toKey: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: '广告发布',
          toKey: 'detail/forecast'
        }
      ]
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.img.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.img.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.nowIndex = index
        this.isShow = true
      }, 1000)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>

<style scoped>
/*动画样式*/
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slider-show {
  width: 900px;
  height: 500px;
  position: relative;
  margin-top: 15px;
  overflow: hidden;
}
.slide-img {
  height: 100%;
}
.slide-img img {
  position: absolute;
  top: 0;
}
.img-title {
  font-size: 14px;
  color: #ddd;
}
.control {
  position: absolute;
  right: 0;
  bottom: 0;
}
.control li {
  float: left;
  cursor: pointer;
  color: #fff;
  margin-right: 22px;
}
.on {
  text-decoration: underline;
}
.mask {
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 30px;
  height: 30px;
  background-color: rgba(0,0,0,0.5);
  padding-left: 20px;
  z-index: 999;
}
</style>
