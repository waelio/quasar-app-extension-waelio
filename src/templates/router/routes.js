
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: ''         , name: '',           component: () => import('pages/Index.vue') },
      { path: 'home'     , name: 'home',       component: () => import('pages/Index.vue') },
      { path: 'auth'     , name: 'auth',       component: () => import('pages/Auth.vue') },
      { path: 'about'    , name: 'about',      component: () => import('pages/AboutUs.vue') },
      { path: 'services' , name: 'services',   component: () => import('pages/Services.vue') },
      { path: 'products' , name: 'products',   component: () => import('pages/Products.vue') },
      { path: 'contact'  , name: 'contact',    component: () => import('pages/ContactUs.vue') },
      { path: 'privacy'  , name: 'privacy',    component: () => import('pages/Privacy.vue') },
      { path: 'terms'    , name: 'terms',      component: () => import('pages/Terms.vue') },
      { path: 'settings' , name: 'settings',   component: () => import('pages/Settings.vue') },
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
