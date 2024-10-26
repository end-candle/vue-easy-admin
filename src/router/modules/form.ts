import BaseForm from '@/views/form/BasicForm.vue';
import { ROUTE_NAME } from '@/constants/router';
import type { GetRoutes } from '@/types/router';
import MainLayout from '@layouts/MainLayout.vue';
import AdvanceForm from '@/views/form/AdvanceForm.vue';

const getFormRoutes: GetRoutes = () => {
  return [
    {
      path: '/form',
      component: MainLayout,
      props: { showFooter: false },
      name: ROUTE_NAME.FORM,
      redirect: { name: ROUTE_NAME.BASE_FORM },
      children: [
        {
          path: 'base',
          name: ROUTE_NAME.BASE_FORM,
          component: BaseForm,
        },
        {
          path: 'advance',
          name: ROUTE_NAME.ADVANCE_FORM,
          component: AdvanceForm,
        },
      ],
    },
  ];
};

export default getFormRoutes;
