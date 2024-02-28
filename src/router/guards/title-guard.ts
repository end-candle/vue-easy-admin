import type { RouteGuard } from '@/types/router';

const createTitleGuard: RouteGuard = (router) => {
  router.afterEach((to) => {
    document.title = to.meta?.title || '';
  });
};

export default createTitleGuard;
