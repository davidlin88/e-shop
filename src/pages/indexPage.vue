<template>
  <div class="index">
    <div class="left">
      <div class="left-top">
        <p class="left-head">全部产品</p>
        <!-- 循环产品列表数据 -->
        <div v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <!-- 站内跳转 -->
              <router-link :to="item.url" v-if="item.isInsite">{{item.name}}</router-link>
              <!-- 站外跳转 -->
              <a :href="item.url" v-if="!item.isInsite">{{item.name}}</a>
              <span v-if="item.isHot" class="hot">HOT</span>
            </li>
          </ul>
          <div class="hr" v-if="!product.last"></div>
        </div>
      </div>
      <div class="left-bottom">
        <p class="left-head">最新消息</p>
        <ul class="news">
          <li v-for="item in newsList">
            <a :href="item.url">
              {{item.title}}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <sliderShow></sliderShow>
      <div class="board-item"  v-for="item in boardList">
        <div class="board-item-inner">
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
          <router-link :to="item.toKey">
            <button>立即购买</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sliderShow from '../components/sliderShow'
export default {
  data () {
    return {
      productList: {
        pc: {
          title: 'PC产品',
          isInsite: true,
          list: [
            {
              name: '数据统计',
              url: '/detail/count'
            },
            {
              name: '数据预测',
              url: '/detail/forecast'
            },
            {
              name: '流量分析',
              url: '/detail/analysis',
              isHot: true
            },
            {
              name: '广告发布',
              url: '/detail/publish'
            }
          ]
        },
        app: {
          title: '手机应用类',
          isInsite: false,
          last: true,
          list: [
            {
              name: '今日头条',
              url: 'https://www.toutiao.com/'
            },
            {
              name: '微博',
              url: 'https://weibo.com',
              isHot: true
            },
            {
              name: '网易云音乐',
              url: 'http://music.163.com/'
            },
            {
              name: '支付宝',
              url: 'https://www.alipay.com/'
            }
          ]
        }
      },
      newsList: [],
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款blabla...',
          src: require('../assets/images/1.png'),
          toKey: '/detail/count'
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          src: require('../assets/images/3.png'),
          toKey: '/detail/forecast'
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          src: require('../assets/images/2.png'),
          toKey: '/detail/analysis'
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          src: require('../assets/images/4.png'),
          toKey: '/detail/publish'
        }
      ]
    }
  },
  components: {
    sliderShow
  },
  created () {
    this.$http.get('/api/news').then(response => {
      console.log('newsList调用成功')
      this.newsList = response.body.data
    })
  }
}
</script>

<style>
.board-item {
  background-color: #fff;
  width: 440px;
  height: 168px;
  padding: 20px;
}
.board-item-inner {
  padding-left: 125px;
  background: url(../assets/images/1.png) no-repeat left center;
  margin-top: 15px;
}
.board-item-inner {
  width: 440px;
  height: 170px;
  float: left;
  padding: 20px;
  position: relative;
}
.board-item-inner h2 {
  position: absolute;
  left: 140px;
  top: 20px;
}
.board-item-inner p {
  position: absolute;
  left: 140px;
  top: 53px;
}
.board-item-inner button {
  position: absolute;
  left: 140px;
  top: 90px;
  background-color: #4fc08d;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
}
button:focus {
  outline: none;
}
.p-left {
  margin-right: 20px;
  margin-bottom: 20px;
}
.p-right {
  margin-bottom: 20px;
}
.left {
  width: 300px;
  float: left;
}
.right {
  width: 900px;
  float: left;
}
.index {
  margin: 0 auto;
  width: 1200px;
  overflow: hidden;
}
.hot {
  background-color: #f00;
  color: #fff;
  vertical-align: top;
}
.left-top,.left-bottom{
  width: 270px;
  box-shadow: 0 0 1px #ddd;
  margin: 15px;
  background-color: #fff;
  float: left;
}
.left-bottom {
  min-height: 491px;
  margin-top: 0;
}
.left ul {
  padding: 10px 20px;
}
.left-head {
  background-color: rgb(79,192,141);
  color: #fff;
  height: 34px;
  line-height: 34px;
  padding-left: 15px;
}
h3 {
  padding-left: 15px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 14px;
}
.hr {
  background-color: #ddd;
  width: 100%;
  height: 1px;
}
.news {
  margin-top: 20px;
}
.left a {
  display: inline-block;
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  text-decoration: none;
  color: inherit;
}
.left-bottom a {
  width: 230px;
}
</style>
