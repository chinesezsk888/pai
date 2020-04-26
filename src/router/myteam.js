export const routes = [
  {
    path: 'myteam_apply',
    name: 'TeamApply',
    component: () => import(/* webpackChunkName: "personal" */ '../views/myteam/TeamApply')
  },
  {
    path: 'myteam_apply_leader',
    name: 'TeamApplyLeader',
    component: () => import(/* webpackChunkName: "personal" */ '../views/myteam/TeamApplyLeader')
  },
  {
    path: 'myteam_invite',
    name: 'TeamInvite',
    component: () => import(/* webpackChunkName: "personal" */ '../views/myteam/TeamInvite')
  },
  {
    path: 'myteam_show',
    name: 'TeamShow',
    component: () => import(/* webpackChunkName: "personal" */ '../views/myteam/TeamShow')
  },
  {
    path: 'team_manager_index',
    name: 'ManagerIndex',
    component: () => import(/* webpackChunkName: "personal" */ '../views/myteam/ManagerIndex'),
    children: [
      {
        path: '/',
        name: 'ManagerShow',
        component: () => import(/* webpackChunkName: "personal" */ '../views/myteam/ManagerShow')
      }, {
        path: 'setting',
        name: 'ManagerSetting',
        component: () => import(/* webpackChunkName: "personal" */ '../views/myteam/ManagerSetting')
      }, {
        path: 'new_member',
        name: 'ManagerShowNew',
        component: () => import(/* webpackChunkName: "personal" */ '../views/myteam/ManagerShowNew')
      }, {
        path: 'setting_exit',
        name: 'ManagerSettingExit',
        component: () => import(/* webpackChunkName: "personal" */ '../views/myteam/ManagerSettingExit')
      }, {
        path: 'setting_accont',
        name: 'ManagerSettingAccont',
        component: () => import(/* webpackChunkName: "personal" */ '../views/myteam/ManagerSettingAccont')
      }
    ]
  }
]
