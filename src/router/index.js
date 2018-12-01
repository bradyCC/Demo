import Vue from 'vue'
import Router from 'vue-router'

import Demo from '@/components/Demo'
import Index from '@/components/Index'
import User from '@/components/user'
import UserId from '@/components/user/UserId'
import Detail from '@/components/user/Detail'
import Parent from '@/components/vuex'
import Child from '@/components/vuex/Child'

import Mintui from '@/components/mintui/Index'

// DEMO
import Computed from '@/components/demo/Computed'
import Watch from '@/components/demo/watch'
import PComponent from '@/components/demo/PComponent'
import LifeCycle from '@/components/demo/LifeCycle'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'demo',
      component: Demo,
      meta: {
        title: 'Demo'
      }
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed,
      meta: {
        title: '计算属性'
      }
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch,
      meta: {
        title: '监听'
      }
    },
    {
      path: '/pcomponent',
      name: 'pcomponent',
      component: PComponent,
      meta: {
        title: '父组件'
      }
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: LifeCycle,
      meta: {
        title: '生命周期'
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        title: '用户页'
      }
    },
    {
      path: '/user/:userid',
      name: 'userid',
      component: UserId,
      meta: {
        title: '用户详情页'
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      meta: {
        title: '详情页'
      }
    },
    {
      path: '/parent',
      name: 'parent',
      component: Parent,
      meta: {
        title: '父组件'
      }
    },
    {
      path: '/child',
      name: 'child',
      component: Child,
      meta: {
        title: '子组件'
      }
    },
    {
      path: '/mintui',
      name: 'mintui',
      component: Mintui,
      meta: {
        title: 'Mint-UI'
      }
    }
  ],
  linkActiveClass: 'active', // 设置链接激活时使用的CSS类名
  linkExactActiveClass: 'exactive' // 设置链接精准匹配激活时使用的CSS类名
})
