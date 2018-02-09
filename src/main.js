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

import VeeValidate from 'vee-validate';
import {Validator} from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import VueI18n from 'vue-i18n';
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh_CN',
})
Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
});

const dict = {
  messages:{
     required:()=>'这个是必须的'
  }
}

const validator = new Validator({});
validator.localize('zh_CN',dict);
Validator.extend('username', {
  getMessage: field => '以字母或者下划线开头，可包含字母数字下划线',
  validate: value => {
    return  /^[a-zA-Z0-9_-]{4,10}$/.test(value)
  }
});
Validator.extend('phonenumber', {
  getMessage: field => field + '必须是11位手机号码',
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});
Validator.extend('password', {
  getMessage: field => field + '最少6位，包括至少1字母、特殊字符、数字',
  validate: value => {
    return  /^.*(?=.{6,})(?=.*\d)(?=.*[A-Za-z])(?=.*[!@#$%^&*? ]).*$/.test(value)
  }
});


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
