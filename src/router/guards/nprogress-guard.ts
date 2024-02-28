import NProgress from 'nprogress';
import '@styles/nprogress.css';
import type { RouteGuard } from '@/types/router';

NProgress.configure({
  showSpinner: false,
});

const createNProgressGuard: RouteGuard = (router) => {
  router.beforeEach(() => {
    NProgress.start();
    return true;
  });

  router.afterEach(() => {
    NProgress.done();
  });
};

export default createNProgressGuard;
