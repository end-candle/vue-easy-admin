import { createRouter, createWebHistory, type Router } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import createRouterGuards from './guards';
import type { App } from 'vue';
import { ROUTE_NAME } from '@/constants/router';

async function setRouter(app: App<Element>) {
  const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: ROUTE_NAME.HOME,
        component: HomeView,
      },
      {
        path: '/login',
        name: ROUTE_NAME.LOGIN,
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/login/LoginView.vue'),
      },
    ],
  });

  await createRouterGuards(router);
  app.use(router);
}

export default setRouter;
