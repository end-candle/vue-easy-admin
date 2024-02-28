import { createI18n } from 'vue-i18n';
import zhCN from './zh-CN.json';
import enUS from './en-US.json';
import type { App } from 'vue';

async function setI18n(app: App<Element>) {
  const i18n = createI18n({
    locale: 'zh-CN',
    legacy: false,
    messages: {
      'zh-CN': zhCN,
      'en-US': enUS,
    },
  });
  app.use(i18n);
}

export default setI18n;
