<template>
  <LayoutContainer>
    <ElText
      tag="h1"
      size="large"
      >{{ $t('form.advanceForm.title') }}</ElText
    >
    <ElText
      tag="div"
      class="mt-3"
    >
      {{ $t('form.advanceForm.desc') }}</ElText
    >
  </LayoutContainer>
  <ElForm
    ref="form"
    :model="formData"
    :rules="rules"
    label-position="top"
  >
    <ContainerCard>
      <template #header>
        <ElText size="large"> {{ $t('form.advanceForm.subtitle1') }} </ElText>
      </template>
      <ElRow :gutter="24">
        <ElCol
          :sm="24"
          :md="12"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.name')"
            prop="name"
          >
            <ElInput
              v-model="formData.name"
              :placeholder="$t('validate.advanceForm.required.name')"
            />
          </ElFormItem>
        </ElCol>
        <ElCol
          :sm="24"
          :md="12"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.domain')"
            prop="domain"
          >
            <ElInput
              v-model="formData.domain"
              :placeholder="$t('validate.advanceForm.required.domain')"
            >
              <template #prepend>http://</template>
              <template #append>.com</template>
            </ElInput>
          </ElFormItem>
        </ElCol>
        <ElCol
          :sm="24"
          :md="24"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.admin')"
            prop="admin"
          >
            <ElSelect
              v-model="formData.admin"
              class="w-full"
              :placeholder="$t('form.advanceForm.item.placeholder.admin')"
            >
              <ElOption
                v-for="item in adminList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </ElOption>
            </ElSelect>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow :gutter="24">
        <ElCol
          :sm="24"
          :md="12"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.leader')"
            prop="leader"
          >
            <ElSelect
              v-model="formData.leader"
              class="w-full"
              :placeholder="$t('form.advanceForm.item.placeholder.admin')"
            >
              <ElOption
                v-for="item in adminList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </ElOption>
            </ElSelect>
          </ElFormItem>
        </ElCol>
        <ElCol
          :sm="24"
          :md="12"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.workDate')"
            prop="workDate"
          >
            <ElDatePicker
              v-model="formData.workDate"
              type="daterange"
              :range-separator="$t('common.form.to')"
              :start-placeholder="$t('common.form.beginDate')"
              :end-placeholder="$t('common.form.endDate')"
              clearable
              class="w-full"
            >
            </ElDatePicker>
          </ElFormItem>
        </ElCol>
        <ElCol
          :sm="24"
          :md="24"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.type')"
            prop="type"
          >
            <ElSelect
              v-model="formData.type"
              class="w-full"
              :placeholder="$t('form.advanceForm.item.placeholder.type')"
            >
              <ElOption
                v-for="item in repoTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </ElOption>
            </ElSelect>
          </ElFormItem>
        </ElCol>
      </ElRow>
    </ContainerCard>
    <ContainerCard class="mt24">
      <template #header>
        <ElText size="large"> {{ $t('form.advanceForm.subtitle2') }} </ElText>
      </template>
      <ElRow :gutter="24">
        <ElCol
          :sm="24"
          :md="12"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.workName')"
            prop="workName"
          >
            <ElInput
              v-model="formData.workName"
              :placeholder="$t('validate.advanceForm.required.workName')"
            ></ElInput>
          </ElFormItem>
        </ElCol>
        <ElCol
          :sm="24"
          :md="12"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.workDesc')"
            prop="workDesc"
          >
            <ElInput
              v-model="formData.workDesc"
              :placeholder="$t('validate.advanceForm.required.workDesc')"
            >
            </ElInput>
          </ElFormItem>
        </ElCol>
        <ElCol
          :sm="24"
          :md="24"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.executor')"
            prop="executor"
          >
            <ElSelect
              v-model="formData.executor"
              class="w-full"
              :placeholder="$t('validate.advanceForm.required.executor')"
            >
              <ElOption
                v-for="item in adminList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </ElOption>
            </ElSelect>
          </ElFormItem>
        </ElCol>
      </ElRow>
      <ElRow :gutter="24">
        <ElCol
          :sm="24"
          :md="12"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.charger')"
            prop="charger"
          >
            <ElSelect
              v-model="formData.charger"
              class="w-full"
              :placeholder="$t('validate.advanceForm.required.charger')"
            >
              <ElOption
                v-for="item in adminList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </ElOption>
            </ElSelect>
          </ElFormItem>
        </ElCol>
        <ElCol
          :sm="24"
          :md="12"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.awakeDate')"
            prop="awakeDate"
          >
            <ElTimePicker
              v-model="formData.awakeDate"
              class="!w-full"
              :placeholder="$t('validate.common.time.required')"
            >
            </ElTimePicker>
          </ElFormItem>
        </ElCol>
        <ElCol
          :sm="24"
          :md="24"
          :lg="8"
        >
          <ElFormItem
            :label="$t('form.advanceForm.item.workType')"
            prop="workType"
          >
            <ElSelect
              v-model="formData.workType"
              class="w-full"
              :placeholder="$t('validate.advanceForm.required.workType')"
            >
              <ElOption
                v-for="item in workTypeList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </ElOption>
            </ElSelect>
          </ElFormItem>
        </ElCol>
      </ElRow>
    </ContainerCard>
    <ContainerCard class="mt24">
      <template #header>
        <ElText size="large"> {{ $t('form.advanceForm.subtitle3') }} </ElText>
      </template>
      <ElAutoResizer :style="{ width: '100%', height: '200px' }">
        <template #default="{ width, height }">
          <ElTableV2
            :columns="columns"
            :height="height"
            :width="width"
            :data="memberList"
          ></ElTableV2>
        </template>
      </ElAutoResizer>
      <el-button
        icon="el-icon-plus"
        :plain="true"
        class="w-full mt24"
        >{{ $t('form.advanceForm.operate.addMember') }}</el-button
      >
    </ContainerCard>
  </ElForm>
  <div
    class="text-right mb0 fixed right-0 bottom-0 py px-5 z-36 bg-white advance-form__footer"
    :style="footerStyle"
  >
    <ElButton
      type="primary"
      @click="submitForm"
      >{{ $t('common.form.submit') }}</ElButton
    >
    <ElButton @click="resetForm">{{ $t('common.form.reset') }}</ElButton>
  </div>
  <div class="advance-form__footer-placeholder"></div>
</template>

<script lang="ts" setup>
import { computed, inject, ref, useTemplateRef } from 'vue';
import type { Column, FormItemRule, FormInstance } from 'element-plus';
import { useI18n } from 'vue-i18n';
import type { AdvanceFormInfo } from './types/advance-form';
import type { MainLayoutProvider } from '@/components/layouts/types/main-layout';

const formData = ref<AdvanceFormInfo>({
  name: '',
  domain: '',
  admin: '',
  leader: '',
  workDate: [],
  type: '',
  workName: '',
  workDesc: '',
  executor: '',
  charger: '',
  awakeDate: '',
  workType: '',
});

const mainLayoutProvider = inject<MainLayoutProvider>('main-layout');

const footerStyle = computed(() => {
  return {
    left: mainLayoutProvider?.asideWidth.value,
  };
});

const { t } = useI18n();
const rules: Record<
  keyof Omit<AdvanceFormInfo, 'admin' | 'leader' | 'workDate' | 'type'>,
  FormItemRule | FormItemRule[]
> = {
  name: {
    required: true,
    message: t('validate.advanceForm.required.name'),
    trigger: 'blur',
  },
  domain: {
    required: true,
    message: t('validate.advanceForm.required.domain'),
    trigger: 'blur',
  },
  workName: {
    required: true,
    message: t('validate.advanceForm.required.workName'),
    trigger: 'blur',
  },
  workDesc: {
    required: true,
    message: t('validate.advanceForm.required.workDesc'),
    trigger: 'blur',
  },
  executor: {
    required: true,
    message: t('validate.advanceForm.required.executor'),
    trigger: 'change',
  },
  charger: {
    required: true,
    message: t('validate.advanceForm.required.charger'),
    trigger: 'change',
  },
  awakeDate: {
    required: true,
    message: t('validate.advanceForm.required.awakeDate'),
    trigger: 'change',
  },
  workType: {
    required: true,
    message: t('validate.advanceForm.required.workType'),
    trigger: 'change',
  },
};

const columns = ref<Column[]>([
  {
    dataKey: 'name',
    title: '成员姓名',
    width: 120,
  },
  {
    dataKey: 'no',
    title: '工号',
    width: 120,
  },
  {
    dataKey: 'department',
    title: '所属部门',
    width: 120,
  },
]);

const repoTypeList = [
  {
    label: t('mock.option.repoType.public'),
    value: 0,
  },
  {
    label: t('mock.option.repoType.primary'),
    value: 1,
  },
];

const workTypeList = [
  {
    label: t('mock.option.workType.period'),
    value: 0,
  },
  {
    label: t('mock.option.workType.regular'),
    value: 1,
  },
];

const memberList = ref([
  {
    name: t('mock.member.name1'),
    no: '001',
    department: t('mock.member.department1'),
  },
  {
    name: t('mock.member.name2'),
    no: '002',
    department: t('mock.member.department2'),
  },
  {
    name: t('mock.member.name3'),
    no: '003',
    department: t('mock.member.department3'),
  },
]);

const adminList = computed(() => {
  return memberList.value.filter((item) => !!item.no).map(({ name, no }) => ({ label: name, value: no }));
});

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
.advance-form__footer {
  box-shadow: var(--el-box-shadow);
}

.advance-form__footer-placeholder {
  min-height: 60px;
}
</style>
