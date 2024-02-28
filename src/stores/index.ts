import type { App } from 'vue';
import { createPinia } from 'pinia';

async function setStore(app: App<Element>) {
  const store = createPinia();
  app.use(store);
}

export default setStore;
