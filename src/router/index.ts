import type { App } from 'vue';
import { createRouter, createWebHistory, type Router } from 'vue-router';
import createRouterGuards from '@router/guards';
import { getAllStaticRoutes } from '@router/modules';

async function setRouter(app: App<Element>) {
  const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: await getAllStaticRoutes(app),
  });

  await createRouterGuards(app, router);
  app.use(router);
}

export default setRouter;
