import { createRouter, createWebHashHistory } from 'vue-router';
import { asyncRoutes } from './async';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Index',
      path: '/',
      component: () => import('../views/index.vue'),
    },
  ],
});

let isAdd = false;

router.beforeEach(() => {
  if (isAdd) {
    return true;
  }

  asyncRoutes.forEach((route) => {
    router.addRoute(route);
  });
});

setInterval(() => {
  console.log(router.getRoutes());
}, 3000);

export default router;
