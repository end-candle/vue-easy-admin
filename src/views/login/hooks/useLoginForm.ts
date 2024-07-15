import { ref, shallowRef, type Ref, type ShallowRef } from 'vue';
import type { LoginFormModel } from '@/types/login/login-form';
import { useLoginApi } from '@services/auth';
import type { ElForm, FormRules } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { useSystemStore } from '@/stores/system';
import { useRoute, useRouter } from 'vue-router';
import { ROUTE_NAME } from '@/constants/router';

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
  const { execute, data } = useLoginApi(loginFormModel);

  const isFetching = ref<boolean>(false);
  const router = useRouter();
  const route = useRoute();
  const sysStore = useSystemStore();
  async function handleLogin() {
    isFetching.value = true;
    try {
      const res = await form.value?.validate();
      if (!res) {
        return;
      }
      // 登录
      await execute(true);
      // 获取当前用户的系统信息
      await sysStore.initSystem(true);
      // 跳转重定向页面或者首页
      await router.push((route.query.redirectUrl as string) || { name: ROUTE_NAME.HOME });
    } finally {
      isFetching.value = false;
    }
  }

  return {
    form,
    rules,
    loginFormModel,
    isFetching,
    handleLogin,
  };
}
