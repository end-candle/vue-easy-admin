import { useTabStore } from '@/stores/tab';
import type { RouteGuard } from '@/types/router';

const createTitleAndTabGuard: RouteGuard = (app, router) => {
  router.beforeEach((to) => {
    useTabStore().addTab(to);
  });
  router.afterEach((to) => {
    const title = to.meta?.title || '';
    if (!title) {
      return;
    }
    document.title = title;
  });
};

export default createTitleAndTabGuard;
