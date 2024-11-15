import type { FormInstance } from 'element-plus';
import { provide, ref, shallowRef, type ShallowRef } from 'vue';
import type { CallbackFunc, StepFormHooks } from '../types/step-form';

export const STEP_FORM_KEY = Symbol('step-form');

export function useStepForm<T>({
  defaultValue,
  defaultActive,
  callback,
  submitActive,
  useProvider,
  forceValidate,
}: {
  defaultValue: T;
  defaultActive?: number;
  callback: CallbackFunc<T>;
  submitActive?: number;
  useProvider?: boolean;
  forceValidate?: boolean;
}) {
  /**
   * 步骤条
   */
  const active = ref<number>(defaultActive ?? 0);
  const stepList = shallowRef<Readonly<ShallowRef<FormInstance | null>>[]>([]);
  const formModel = ref<T>(defaultValue);

  /**
   * 设置表单实例
   * @param form 表单实例
   */
  function setForm(index: number, form: Readonly<ShallowRef<FormInstance | null>>) {
    stepList.value[index] = form;
  }

  async function validate(): Promise<boolean> {
    if (forceValidate ?? true) {
      const valid = (await stepList.value[active.value]?.value?.validate()) ?? true;
      if (!valid) {
        return false;
      }
    }
    return true;
  }

  async function next() {
    if (!(await validate())) {
      return;
    }
    active.value++;
    const end = submitActive ?? stepList.value.length - 1;
    if (end === active.value) {
      await callback(formModel);
    }
  }

  async function prev() {
    if (active.value <= 0) {
      return;
    }
    active.value--;
  }

  async function setActive(value: number) {
    if (value > active.value && !(await validate())) {
      return;
    }
    active.value = value;
  }

  const result: StepFormHooks<T> = {
    active,
    formModel,
    next,
    prev,
    setForm,
    setActive,
  };

  if (useProvider) {
    provide(STEP_FORM_KEY, result);
  }

  return result;
}
