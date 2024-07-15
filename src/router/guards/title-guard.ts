import type { RouteGuard } from '@/types/router';
import { useI18n } from 'vue-i18n';

const createTitleGuard: RouteGuard = (router) => {
  router.afterEach((to) => {
    document.title = useI18n().t(to.meta?.title || '');
  });
};

export default createTitleGuard;
