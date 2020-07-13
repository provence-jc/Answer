import Vue from 'vue'
import Router from 'vue-router'
// import NavHeader from '@/components/NavHeader'
import check from '../pages/check'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'check',
      component: resolve => require(['../pages/check.vue'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../pages/home'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['../pages/index'], resolve)
    },
    {
      path: '/submit',
      name: 'submit',
      component: resolve => require(['../pages/submit'], resolve)
    },
    {
      path: '/parsing',
      name: 'parsing',
      component: resolve => require(['../pages/parsing'], resolve)
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: resolve => require(['../pages/ranking'], resolve)
    }
  ]
})
