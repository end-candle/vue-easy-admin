import type { RouteGuard } from '@/types/router';

const createTitleGuard: RouteGuard = (app, router) => {
  router.afterEach((to) => {
    document.title = app.config.globalProperties.$t(to.meta?.title || '');
  });
};

export default createTitleGuard;
