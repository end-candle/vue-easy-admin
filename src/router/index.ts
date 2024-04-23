import type { App } from 'vue';
import { createRouter, createWebHistory, type Router } from 'vue-router';
import createRouterGuards from '@router/guards';
import getBaseRoutes from '@router/modules/base';

async function setRouter(app: App<Element>) {
  const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: await getBaseRoutes(app),
  });

  await createRouterGuards(router);
  app.use(router);
}

export default setRouter;
