export const asyncRoutes = [
  {
    name: 'PageA',
    path: '/page-a',
    component: () => import('../views/PageA.vue'),
  },
  {
    name: 'PageB',
    path: '/page-b',
    component: () => import('../views/PageB.vue'),
  },
];
