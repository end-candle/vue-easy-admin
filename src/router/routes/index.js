import { EXCEPTION_ROUTE } from '@router/routes/basic';

export const asyncRoutes = [];

const requireContext = require.context('./modules', true, /\.js$/);

requireContext.keys().forEach((key) => {
    asyncRoutes.push(requireContext(key).default);
});

const routes = [...asyncRoutes, EXCEPTION_ROUTE];

export default routes;
