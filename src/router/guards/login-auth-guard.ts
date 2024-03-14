import { WHITE_LIST, ROUTE_NAME } from '@/constants/router';
import { useAuthStore } from '@/stores/auth';
import type { RouteGuard } from '@/types/router';
import type { RouteLocationRaw } from 'vue-router';

const createLoginAuthGuard: RouteGuard = (router) => {
  router.beforeEach((to) => {
    const authStore = useAuthStore();
    const token = authStore.token;
    if ((to.name && WHITE_LIST.includes(to.name)) || token) {
      if (token && to.name === ROUTE_NAME.LOGIN) {
        return {
          path: to.query?.redirectUrl ?? '/',
          replace: true,
        } as RouteLocationRaw;
      } else {
        return true;
      }
    } else {
      const { href } = router.resolve(to);
      return {
        name: ROUTE_NAME.LOGIN,
        query: {
          redirectUrl: href,
        },
        replace: true,
      } as RouteLocationRaw;
    }
  });
};

export default createLoginAuthGuard;
