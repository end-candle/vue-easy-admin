import BaseFormView from '@/views/form/BasicForm.vue';
import type { App } from 'vue';
import { ROUTE_NAME } from '@/constants/router';
import type { GetRoutes } from '@/types/router';
import MainLayout from '@layouts/MainLayout.vue';

const getFormRoutes: GetRoutes = (app?: App<Element>) => {
  return [
    {
      path: '/form',
      component: MainLayout,
      name: ROUTE_NAME.FORM,
      redirect: { name: ROUTE_NAME.BASE_FORM },
      children: [
        {
          path: 'base',
          name: ROUTE_NAME.BASE_FORM,
          component: BaseFormView,
        },
      ],
    },
  ];
};

export default getFormRoutes;
