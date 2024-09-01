import HomeView from '@/views/HomeView.vue';
import type { App } from 'vue';
import { ROUTE_NAME } from '@/constants/router';
import type { GetRoutes } from '@/types/router';
import MainLayout from '@layouts/MainLayout.vue';

const getStaticRoutes: GetRoutes = (app?: App<Element>) => {
  return [
    {
      path: '/',
      component: MainLayout,
      redirect: { name: ROUTE_NAME.HOME },
      children: [
        {
          path: 'home',
          name: ROUTE_NAME.HOME,
          component: HomeView,
          meta: {
            title: app?.config.globalProperties.$t('home'),
          },
        },
      ],
    },
    {
      path: '/login',
      name: ROUTE_NAME.LOGIN,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/login/LoginView.vue'),
      meta: {
        title: app?.config.globalProperties.$t('login'),
      },
    },
    {
      path: '/redirect',
      name: ROUTE_NAME.REDIRECT,
      component: () => import('@/views/RedirectView.vue'),
    },
  ];
};

export default getStaticRoutes;
