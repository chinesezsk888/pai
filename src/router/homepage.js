import HomePage from '@/views/homepage'
import HomePageContain from '@/views/homepage/homepage.vue'
export const routes = [
  { path: '/', redirect: '/index.html' },
  {
    path: '/index.html',
    name: 'HomePage',
    component: HomePage,
    children: [{
      path: '/',
      name: 'HomePageContain',
      component: HomePageContain
    },
    {
      path: '/homevideo/:type',
      name: 'HomeVideo',
      component: () => import(/* webpackChunkName: "home" */ '../views/homepage/video.vue')
    },
    {
      path: '/homeimage/:type',
      name: 'HomeImage',
      component: () => import(/* webpackChunkName: "home" */ '../views/homepage/image.vue')
    },
    {
      path: '/homeaudio/:type',
      name: 'HomeAudio',
      component: () => import(/* webpackChunkName: "home" */ '../views/homepage/audio.vue')
    },
    {
      path: '/groupvideo/:type/:id',
      name: 'GroupVideo',
      component: () => import(/* webpackChunkName: "grouplist" */ '../views/listpage/GroupVideo.vue')
    },
    {
      path: '/groupimage/:type/:id',
      name: 'GroupImage',
      component: () => import(/* webpackChunkName: "grouplist" */ '../views/listpage/GroupImage.vue')
    },
    {
      path: '/groupaudio/:type/:id',
      name: 'GroupAudio',
      component: () => import(/* webpackChunkName: "grouplist" */ '../views/listpage/GroupAudio.vue')
    }]
  }
]
