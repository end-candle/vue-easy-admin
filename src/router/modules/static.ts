import HomeView from '@/views/HomeView.vue';
import type { App } from 'vue';
import { ROUTE_NAME } from '@/constants/router';
import type { GetRoutes } from '@/types/router';

const getStaticRoutes: GetRoutes = (app: App<Element>) => {
  return [
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
      meta: {
        title: app.config.globalProperties.$t('login'),
        anyOne: true,
      },
    },
  ];
};

export default getStaticRoutes;
