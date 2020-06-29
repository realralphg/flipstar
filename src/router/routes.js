
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
            {
        path: '/',
        name: 'home',
        component: () => import('pages/Home.vue'),
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('pages/Profile.vue'),
      },      
      {
        path: '/how',
        name: 'how',
        component: () => import('pages/How.vue'),
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
