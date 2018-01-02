<template>
  <div>
    <div class="detail-nav">
      <img src="../../assets/images/1.png" height="100" width="100" alt="">
      <ul class="nav-item">
        <li v-for="item in navItem">
          <router-link :to="item.toKey" :tag="li">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="detail">
      <h2 class="detail-title">数据统计</h2>
      <p class="quote">历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。
      </p>
      <div class="goods">
        <label>产品类型:</label>
        <ul>
          <li>红色版</li>
          <li>绿色版</li>
          <li>蓝色版</li>
        </ul>
        <label>适用地区:</label>
        <select name="" id="">
          <option v-for="area in areas" :value="area.name" >{{area.name}}</option>
        </select>
        <label>有效时间:</label>
        <span>{{time}}</span>
        <label>总价:</label>
        <span>{{price}}元</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navItem: [
        {
          name: '数据统计',
          toKey: '../detail/count'
        },
        {
          name: '数据预测',
          toKey: '../detail/forecast'
        },
        {
          name: '流量分析',
          toKey: '../detail/analysis'
        },
        {
          name: '广告发布',
          toKey: '../detail/publish'
        }
      ],
      areas: [
        {
          name: '北京'
        },
        {
          name: '上海'
        },
        {
          name: '广州'
        },
        {
          name: '深圳'
        },
        {
          name: '杭州'
        }
      ],
      time: '半年',
      price: '500'
    }
  }
}
</script>

<style>
.detail-nav {
  background-color: #fff;
  width: 200px;
  height: 300px;
}
.nav-item li {
  padding: 10px 15px;
}
.nav-item li.active,
.nav-item li:hover {
  background-color: #4fc08d;
  color: #fff;
}
</style>