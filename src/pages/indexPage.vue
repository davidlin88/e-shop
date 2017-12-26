<template>
  <div class="index">
    <div class="left">
      <div class="left-top">
        <p class="left-head">全部产品</p>
        <div v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <router-link :to="item.url">{{item.name}}</router-link>
              <span v-if="item.isHot" class="hot">HOT</span>
            </li>
          </ul>
          <div class="hr" v-if="!product.last"></div>
        </div>
      </div>
      <div class="left-bottom">
        <p class="left-head">最新消息</p>
        <ul class="news">
          <li v-for="news in newsList">
            <a :href="news.url">
              {{news.title}}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <sliderShow></sliderShow>
      <div class="right-bottom">
        <div class="boardList p-left">
          <img src="../assets/images/1.png" height="100" width="100">
          <h2>开放产品</h2>
          <p>开放产品是blabla</p>
          <button>立即购买</button>
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
              url: 'mailto:779091821@qq.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
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
          titel: '开放产品',
          description: '开放产品是一款blabla...',
          img: '../assets/images/1.png',
          toKey: '/detail/count'
        },
        {
          titel: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          img: '../assets/images/3.png',
          toKey: '/detail/forecast'
        },
        {
          titel: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          img: '../assets/images/2.png',
          toKey: '/detail/analysis'
        },
        {
          titel: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          img: '../assets/images/4.png',
          toKey: '/detail/publish'
        }
      ]
    }
  },
  components: {
    sliderShow
  },
  create () {
    this.$http.get('/api/news').then(response => {
      console.log(response.body.data)
      this.newsList = response.body.data
    }, response => {
      console.log(response)
    })
  }
}
</script>

<style>
.right-bottom {
  overflow: hidden;
  margin-top: 15px;
}
.boardList {
  width: 440px;
  height: 170px;
  background-color: #fff;
  float: left;
  padding: 20px;
  position: relative;
}
.boardList h2 {
  position: absolute;
  left: 140px;
  top: 20px;
}
.boardList p {
  position: absolute;
  left: 140px;
  top: 53px;
}
.boardList button {
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
.boardList img {
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
  margin-top: 34px;
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
