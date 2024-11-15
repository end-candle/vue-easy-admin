<template>
  <ElForm
    ref="form"
    :model="formModel"
    :rules="rules"
    hide-required-asterisk
    label-width="100px"
    class="w125 mt-10 mx-a mb-0"
  >
    <ElFormItem
      :label="$t('form.stepForm.item.account')"
      prop="account"
    >
      <ElSelect
        v-model="formModel.account"
        :placeholder="$t('form.stepForm.item.placeholder.account')"
        class="w100"
      >
        <ElOption
          label="endcandle@alipay.com"
          value="endcandle@alipay.com"
        ></ElOption>
      </ElSelect>
    </ElFormItem>
    <ElFormItem
      :label="$t('form.stepForm.item.user')"
      prop="user"
    >
      <ElInput
        v-model="formModel.user"
        :placeholder="$t('form.stepForm.item.placeholder.user')"
        class="input-with-select"
      >
        <template #prepend>
          <ElSelect
            v-model="formModel.type"
            class="!w-25"
            :placeholder="$t('form.stepForm.item.placeholder.type')"
          >
            <ElOption
              :label="$t('loginWithAlipay')"
              :value="1"
            ></ElOption>
            <ElOption
              :label="$t('mock.option.user.icCard')"
              :value="2"
            ></ElOption>
          </ElSelect>
        </template>
      </ElInput>
    </ElFormItem>
    <ElFormItem
      :label="$t('form.stepForm.item.name')"
      prop="name"
    >
      <ElInput
        v-model="formModel.name"
        :placeholder="$t('form.stepForm.item.placeholder.name')"
      >
      </ElInput>
    </ElFormItem>
    <ElFormItem
      :label="$t('form.stepForm.item.money')"
      prop="money"
    >
      <ElInput
        v-model="formModel.money"
        :placeholder="$t('form.stepForm.item.placeholder.money')"
      >
        <template #prefix> <i-f7-money-yen></i-f7-money-yen> </template>
      </ElInput>
    </ElFormItem>
    <ElFormItem>
      <ElButton
        type="primary"
        @click="next"
        >{{ $t('common.form.next') }}</ElButton
      >
    </ElFormItem>
  </ElForm>
  <el-divider />
  <ElText
    type="info"
    tag="div"
    class="my-0 mx-14"
  >
    <h3 class="font-medium text-4">{{ $t('common.explain') }}</h3>
    <h4 class="font-medium text-3.5 mb-2">{{ $t('form.stepForm.footer.tip1') }}</h4>
    <p class="mt-0">
      {{ $t('form.stepForm.footer.summary1') }}
    </p>
    <h4 class="font-medium text-3.5 mb-2">{{ $t('form.stepForm.footer.tip2') }}</h4>
    <p class="mt-0">
      {{ $t('form.stepForm.footer.summary1') }}
    </p>
  </ElText>
</template>

<script setup lang="ts">
import type { FormInstance, FormItemRule } from 'element-plus';
import { inject, onMounted, useTemplateRef } from 'vue';
import { STEP_FORM_KEY } from '../shared/useStepForm';
import type { StepFormHooks, StepFormInfo } from '../types/step-form';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const rules: Record<keyof Omit<StepFormInfo, 'password'>, FormItemRule | FormItemRule[]> = {
  account: [{ required: true, message: t('form.stepForm.item.placeholder.account'), trigger: 'change' }],
  user: [{ required: true, message: t('form.stepForm.item.placeholder.user'), trigger: 'blur' }],
  type: [
    {
      required: true,
      message: t('form.stepForm.item.placeholder.type'),
      trigger: 'change',
    },
  ],
  name: [{ required: true, message: t('form.stepForm.item.placeholder.name'), trigger: 'blur' }],
  money: [
    {
      required: true,
      message: t('form.stepForm.validate.money'),
      trigger: 'blur',
    },
  ],
};

const injectForm = inject<StepFormHooks<StepFormInfo>>(STEP_FORM_KEY);

if (!injectForm) {
  throw new Error('useStepForm must be used after useStepFormProvider');
}

const { formModel, setForm, next } = injectForm;

const form = useTemplateRef<FormInstance>('form');

onMounted(() => {
  setForm(0, form);
});
</script>

<style scoped>
.input-with-select:deep(.el-input-group__prepend) {
  background-color: transparent;
}
</style>
