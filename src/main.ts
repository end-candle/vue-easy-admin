import { createPinia } from 'pinia';
import { createApp } from 'vue';
import '@/assets/styles/base.css'

import App from './App.vue';
import router from './router';

import 'virtual:uno.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
