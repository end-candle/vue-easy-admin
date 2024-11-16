import { inject, onMounted, useTemplateRef } from 'vue';
import type { StepFormHooks } from '../types/step-form';
import type { FormInstance } from 'element-plus';
import { STEP_FORM_KEY } from './useStepForm';

export function useStepFormItem<T>({ sequence, formInstance }: { sequence: number; formInstance?: string }) {
  const injectForm = inject<StepFormHooks<T>>(STEP_FORM_KEY);

  if (!injectForm) {
    throw new Error('useStepForm must be used after useStepFormProvider');
  }

  if (formInstance) {
    const form = useTemplateRef<FormInstance>(formInstance);

    onMounted(() => {
      injectForm.setForm(sequence, form);
    });
  }
  return injectForm;
}
