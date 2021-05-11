import { EXCEPTION_ROUTE, REFRESH_ROUTE } from '@router/routes/basic';
import { sortRoutes } from '@helpers/route';

export const asyncRoutes = [];

const requireContext = require.context('./modules', true, /\.js$/);

requireContext.keys().forEach((key) => {
    asyncRoutes.push(requireContext(key).default);
});

const routes = [...sortRoutes(asyncRoutes), REFRESH_ROUTE, EXCEPTION_ROUTE];

export default routes;
