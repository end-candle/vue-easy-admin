<template>
  <LayoutContainer>
    <ElText
      size="large"
      tag="h1"
      >{{ $t('form.baseForm.title') }}</ElText
    >
    <ElText
      class="mt-3"
      tag="div"
      >{{ $t('form.baseForm.desc') }}</ElText
    >
  </LayoutContainer>
  <ContainerCard>
    <ElForm
      ref="form"
      :model="ruleForm"
      :rules="rules"
      label-width="25%"
      class="basic-form py-3"
    >
      <ElFormItem
        :label="$t('form.baseForm.item.name')"
        prop="name"
      >
        <ElInput
          :placeholder="$t('validate.baseForm.activityName')"
          v-model="ruleForm.name"
        />
      </ElFormItem>
      <ElFormItem
        :label="$t('form.baseForm.item.region')"
        prop="region"
      >
        <ElSelect
          v-model="ruleForm.region"
          :placeholder="$t('validate.baseForm.activityRegion')"
          class="w-full"
        >
          <ElOption
            :label="$t('mock.region1')"
            value="shanghai"
          ></ElOption>
          <ElOption
            :label="$t('mock.region2')"
            value="beijing"
          ></ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem
        :label="$t('form.baseForm.item.date')"
        required
      >
        <ElDatePicker
          v-model="ruleForm.date1"
          type="daterange"
          :range-separator="$t('common.form.to')"
          :start-placeholder="$t('common.form.beginDate')"
          :end-placeholder="$t('common.form.endDate')"
          class="w-25"
        >
        </ElDatePicker>
      </ElFormItem>
      <ElFormItem
        :label="$t('form.baseForm.item.delivery')"
        prop="delivery"
      >
        <ElSwitch v-model="ruleForm.delivery"></ElSwitch>
      </ElFormItem>
      <ElFormItem
        :label="$t('form.baseForm.item.type')"
        prop="type"
      >
        <ElCheckboxGroup v-model="ruleForm.type">
          <ElCheckbox
            :value="$t('mock.activity1')"
            name="type"
            >{{ $t('mock.activity1') }}</ElCheckbox
          >
          <ElCheckbox
            :value="$t('mock.activity2')"
            name="type"
            >{{ $t('mock.activity2') }}</ElCheckbox
          >
          <ElCheckbox
            :value="$t('mock.activity3')"
            name="type"
            >{{ $t('mock.activity3') }}</ElCheckbox
          >
          <ElCheckbox
            :value="$t('mock.activity4')"
            name="type"
            >{{ $t('mock.activity4') }}</ElCheckbox
          >
        </ElCheckboxGroup>
      </ElFormItem>
      <ElFormItem
        :label="$t('form.baseForm.item.resource')"
        prop="resource"
      >
        <ElRadioGroup v-model="ruleForm.resource">
          <el-radio :value="$t('mock.resource1')">{{ $t('mock.resource1') }}</el-radio>
          <el-radio :value="$t('mock.resource2')">{{ $t('mock.resource2') }}</el-radio>
        </ElRadioGroup>
      </ElFormItem>
      <ElFormItem
        :label="$t('form.baseForm.item.desc')"
        prop="desc"
      >
        <ElInput
          v-model="ruleForm.desc"
          type="textarea"
          :placeholder="$t('validate.baseForm.activityDesc.required')"
          :rows="5"
        ></ElInput>
      </ElFormItem>
      <ElFormItem>
        <ElButton
          type="primary"
          @click="submitForm"
          >{{ $t('common.form.submit') }}</ElButton
        >
        <ElButton @click="resetForm">{{ $t('common.form.reset') }}</ElButton>
      </ElFormItem>
    </ElForm>
  </ContainerCard>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from 'vue';
import type { RuleFormInfo } from './types/base-form';
import type { FormItemRule, FormInstance } from 'element-plus';
import { useI18n } from 'vue-i18n';

const ruleForm = ref<RuleFormInfo>({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});

const { t } = useI18n();
const rules: Record<keyof Omit<RuleFormInfo, 'delivery'>, FormItemRule | FormItemRule[]> = {
  name: [
    { required: true, message: t('validate.baseForm.activityName'), trigger: 'blur' },
    { min: 3, max: 5, message: t('validate.common.lenLimit.3-5'), trigger: 'blur' },
  ],
  region: [{ required: true, message: t('validate.baseForm.activityRegion'), trigger: 'change' }],
  date1: [{ type: 'date', required: true, message: t('validate.common.date.required'), trigger: 'change' }],
  date2: [{ type: 'date', required: true, message: t('validate.common.time.required'), trigger: 'change' }],
  type: [
    {
      type: 'array',
      required: true,
      message: t('validate.baseForm.activityType.required'),
      trigger: 'change',
    },
  ],
  resource: [{ required: true, message: t('validate.baseForm.activityResource.required'), trigger: 'change' }],
  desc: [{ required: true, message: t('validate.baseForm.activityDesc.required'), trigger: 'blur' }],
};

const form = useTemplateRef<FormInstance>('form');

async function submitForm() {
  const valid = await form.value?.validate();
  if (!valid) {
    console.log('error submit!!');
    return;
  }
  alert('submit!');
}

function resetForm() {
  form.value?.resetFields();
}
</script>

<style lang="css" scoped>
.basic-form {
  :deep(.el-form-item__content) {
    width: 40%;
    min-width: 280px;
  }
}
</style>
