
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'landing',
        component: () => import('pages/Landing.vue'),
      },      
      {
        path: '/home',
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
      {
        path: '/signup',
        name: 'signUp',
        component: () => import('pages/SignUp.vue'),
      },
      {
        path: '/signin',
        name: 'signIn',
        component: () => import('pages/SignIn.vue'),
      },            
      {
        path: '/:flip_id',
        name: 'join-flip',
        component: () => import('pages/JoinFlip.vue'),
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
