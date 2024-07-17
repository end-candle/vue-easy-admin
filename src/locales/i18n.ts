import { createI18n } from 'vue-i18n';
import zhCN from './zh-CN.json';
import enUS from './en-US.json';
import type { App } from 'vue';

export let globalI18n: ReturnType<typeof setI18n> | undefined;

export function setI18n(app: App<Element>) {
  const locale = 'zh-CN';
  document.documentElement.lang = locale;
  const i18n = createI18n({
    locale,
    legacy: false,
    messages: {
      'zh-CN': zhCN,
      'en-US': enUS,
    },
  });
  app.use(i18n);
  globalI18n = i18n;
  return i18n;
}
