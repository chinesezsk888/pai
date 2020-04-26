export const routes = [
  {
    path: '/groupvideo/:id',
    name: 'GroupVideo',
    component: () => import(/* webpackChunkName: "grouplist" */ '../views/listpage/GroupVideo.vue')
  },
  {
    path: '/groupimage/:id',
    name: 'GroupImage',
    component: () => import(/* webpackChunkName: "grouplist" */ '../views/listpage/GroupImage.vue')
  },
  {
    path: '/groupaudio/:id',
    name: 'GroupAudio',
    component: () => import(/* webpackChunkName: "grouplist" */ '../views/listpage/GroupAudio.vue')
  }
]
