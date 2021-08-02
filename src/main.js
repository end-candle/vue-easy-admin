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

Vue.use(Plugins);
Vue.use(Filters);
Vue.use(Directives);

Vue.config.productionTip = false;

// 配置全局异常处理
// Vue.config.errorHandler = (err, vm, info) => {
//     console.log(err, vm, info);
// };

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
