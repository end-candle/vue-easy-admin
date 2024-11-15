import { ROUTE_NAME } from '@/constants/router';
import type { GetRoutes } from '@/types/router';
import AdvanceForm from '@/views/form/AdvanceForm.vue';
import BaseForm from '@/views/form/BasicForm.vue';
import StepForm from '@/views/form/StepForm.vue';
import MainLayout from '@layouts/MainLayout.vue';

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
          path: 'step',
          name: ROUTE_NAME.STEP_FORM,
          component: StepForm,
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
