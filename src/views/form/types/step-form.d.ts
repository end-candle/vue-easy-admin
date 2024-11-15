import type { MaybePromise } from '@/types/common';
import type { FormInstance } from 'element-plus';
import { type ShallowRef } from 'vue';

export type StepFormHooks<T> = {
  active: ShallowRef<number>;
  formModel: Ref<T>;
  next: () => Promise<void>;
  prev: () => Promise<void>;
  setForm: (index: number, form: Readonly<ShallowRef<FormInstance | null>>) => void;
  setActive: (value: number) => void;
};

export type CallbackFunc<T> = (forms: Ref<T>) => MaybePromise<void>;

export type StepFormInfo = {
  name: string;
  account: string;
  user: string;
  type: number;
  money?: number;
  password?: string;
};
