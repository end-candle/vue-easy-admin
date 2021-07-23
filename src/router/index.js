import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes/index';
import createRouterGuards from '@router/guards';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    }
});

createRouterGuards(router);

export default router;
