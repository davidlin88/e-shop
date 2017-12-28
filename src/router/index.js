import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '../pages/indexPage'
import analysis from '../pages/detail/analysis'
import forecast from '../pages/detail/forecast'
import count from '../pages/detail/count'
import publish from '../pages/detail/publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: indexPage
    },
    {
      path: '/detail/analysis',
      component: analysis
    },
    {
      path: '/detail/forecast',
      component: forecast
    },
    {
      path: '/detail/count',
      component: count
    },
    {
      path: '/detail/publish',
      component: publish
    }
  ]
})
