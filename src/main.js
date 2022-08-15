import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@store';
import Plugins from '@plugins';
import Filters from '@filters';
import Directives from '@directives';
import '@helpers/nprogress';
import '@/styles/common.scss';
import '@/assets/fonts/iconfont.css';
import { setTheme } from '@helpers/theme';
import storage from '@helpers/storage';
import { THEME } from '@store/modules/app';
import i18n from '@i18n';

// 配置全局异常处理
// Vue.config.errorHandler = (err, vm, info) => {
//     console.log(err, vm, info);
// };

function createApp() {
    Vue.config.productionTip = false;
    return new Vue({
        router,
        store,
        i18n,
        render: (h) => h(App)
    }).$mount('#app');
}

function bootstrap() {
    // 设置主题
    setTheme(storage.get(THEME));
    Vue.use(Plugins);
    Vue.use(Filters);
    Vue.use(Directives);
    // 创建vue实例
    return createApp();
}

bootstrap();
