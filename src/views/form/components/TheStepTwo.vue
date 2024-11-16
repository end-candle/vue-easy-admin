<template>
  <div class="w125 my-5 mx-a">
    <ElAlert
      :title="$t('form.stepForm.alert.tip1')"
      type="warning"
      show-icon
    />
    <ElForm
      ref="form"
      :model="formModel"
      :rules="rules"
      hide-required-asterisk
      label-width="130px"
      class="w125 mt-4"
    >
      <ElFormItem :label="$t('form.stepForm.item.account2')">
        <ElText>{{ formModel.account }}</ElText>
      </ElFormItem>
      <ElFormItem :label="$t('form.stepForm.item.user')">
        <ElText>{{ formModel.user }}</ElText>
      </ElFormItem>
      <ElFormItem :label="$t('form.stepForm.item.name')">
        <ElText>{{ formModel.name }}</ElText>
      </ElFormItem>
      <ElFormItem :label="$t('form.stepForm.item.money')">
        <ElText>￥ {{ formModel.money }}</ElText>
      </ElFormItem>
      <ElDivider />
      <div class="step-two-form__footer">
        <ElFormItem
          :label="$t('form.stepForm.item.password')"
          prop="password"
        >
          <ElInput
            v-model="formModel.password"
            type="password"
            :placeholder="$t('form.stepForm.item.placeholder.passowrd')"
            show-password
          >
          </ElInput>
        </ElFormItem>
        <ElFormItem>
          <ElButton
            type="primary"
            @click="next"
            >{{ $t('common.form.next') }}</ElButton
          >
        </ElFormItem>
      </div>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import type { FormItemRule } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { useStepFormItem } from '../shared/useStepFormItem';
import type { StepFormInfo } from '../types/step-form';

const { t } = useI18n();
const rules: Record<keyof Pick<StepFormInfo, 'password'>, FormItemRule | FormItemRule[]> = {
  password: [{ required: true, message: t('form.stepForm.item.placeholder.passowrd'), trigger: 'change' }],
};

const { formModel, next } = useStepFormItem<StepFormInfo>({ sequence: 1, formInstance: 'form' });
</script>
