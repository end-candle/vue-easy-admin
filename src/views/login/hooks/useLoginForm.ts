import { ref, shallowRef, type Ref, type ShallowRef } from 'vue';
import type { LoginFormModel } from '../types/login-form';
import { useLoginApi } from '@/services/auth';
import type { ElForm, FormRules } from 'element-plus';
import { useI18n } from 'vue-i18n';

type Form = typeof ElForm;

export function useLoginForm(): {
  isFetching: Readonly<Ref<boolean>>;
  loginFormModel: Ref<LoginFormModel>;
  form: ShallowRef<Form | undefined>;
  rules: FormRules;
  handleLogin: () => Promise<void>;
} {
  const form = shallowRef<Form>();
  const i18n = useI18n();

  const rules: FormRules = {
    username: {
      required: true,
      message: i18n.t('validate.required.username'),
      trigger: 'change',
    },
    password: {
      required: true,
      message: i18n.t('validate.required.password'),
      trigger: 'change',
    },
  };

  const loginFormModel = ref<LoginFormModel>({
    username: '',
    password: '',
    autoLogin: Boolean(localStorage.getItem('autoLogin')),
  });
  const { execute, isFetching } = useLoginApi(loginFormModel);
  async function handleLogin() {
    const res = await form.value?.validate();
    if (!res) {
      return;
    }
    execute();
  }

  return {
    form,
    rules,
    loginFormModel,
    isFetching,
    handleLogin,
  };
}
