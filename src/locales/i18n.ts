import { createI18n } from 'vue-i18n';
import zhCN from './zh-CN.json';
import enUS from './en-US.json';

export default createI18n({
  locale: 'zh-CN',
  legacy: false,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
});
