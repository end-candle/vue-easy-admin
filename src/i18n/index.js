import VueI18n from 'vue-i18n';
import Vue from 'vue';
import zhCn from './zh-cn/index';
import enUs from './en-us/index';
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import storage from '@helpers/storage';
import { LOCALE } from '@constants/common';

Vue.use(VueI18n);

export default new VueI18n({
    locale: storage.get(LOCALE) || 'zh-cn',
    messages: {
        'zh-cn': {
            zhLocale,
            ...zhCn
        },
        'en-us': {
            enLocale,
            ...enUs
        }
    }
});
