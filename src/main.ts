import { createApp } from 'vue';

import App from '@/App.vue';
import setI18n from '@/locales/i18n';
import setRouter from '@/router';
import setStore from '@/stores';

import '@unocss/reset/sanitize/assets.css';
import '@unocss/reset/sanitize/sanitize.css';
import 'virtual:uno.css';

async function bootstrap() {
  // 创建vue实例
  const app = createApp(App);
  setI18n(app);
  await setRouter(app);
  setStore(app);
  app.mount('#app');
  return app;
}

bootstrap();
