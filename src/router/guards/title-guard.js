const createTitleGuard = (router) => {
    router.afterEach((to, from) => {
        document.title = to.meta?.title;
    });
};

export default createTitleGuard;
