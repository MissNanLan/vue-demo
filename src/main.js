import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/details'
import SelectPage from './pages/select'
import OrderListPage from './pages/orderlist'
import DetailAnaPage from './pages/details/analysis'
import DetailCouPage from './pages/details/count'
import DetailForPage from './pages/details/forecast'
import DetailPubPage from './pages/details/publish'

import VeeValidate ,{Validator} from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'

const config = {
  locale: 'zh_CN'
};
Vue.use(VeeValidate,config);


Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderlist',
      component: OrderListPage
    },
    {
      path: '/select',
      component: SelectPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
