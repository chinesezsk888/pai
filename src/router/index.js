import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes as homeRoutes } from './homepage.js'
import { routes as myteamRoutes } from './myteam.js'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  ...homeRoutes,
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/search')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import(/* webpackChunkName: "upload" */ '../views/uploadpage')
  },
  {
    path: '/personal',
    redirect: '/personal/collection',
    component: () => import(/* webpackChunkName: "personal" */ '../views/personal'),
    children: [
      {
        path: 'collection',
        name: 'Collection',
        component: () => import(/* webpackChunkName: "personal" */ '../views/personal/components/Collection')
      },
      {
        path: 'wealth',
        name: 'Wealth',
        component: () => import(/* webpackChunkName: "personal" */ '../views/personal/components/Wealth')
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import(/* webpackChunkName: "personal" */ '../views/personal/components/Account')
      },
      ...myteamRoutes
    ]
  },
  {
    path: '/detail/:type',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/detail')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
