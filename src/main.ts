import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import i18n from '@/locales/i18n';

import 'virtual:uno.css';
import '@unocss/reset/sanitize/sanitize.css';
import '@unocss/reset/sanitize/assets.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount('#app');
