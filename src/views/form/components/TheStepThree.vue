<template>
  <div class="max-w-140 my-16 mx-a">
    <div class="text-center">
      <div class="text-size-7xl text-green"><i-ep-success-filled></i-ep-success-filled></div>
      <div class="text-size-2xl">{{ $t('form.stepForm.operateSuccess') }}</div>
      <div class="text-size-sm">{{ $t('form.stepForm.need2Hour') }}</div>
    </div>
    <ul class="bg-#fafafa mt-6 px-10 py-6">
      <li class="list-none mb-4">{{ $t('form.stepForm.item.account2') }}：{{ formModel.account }}</li>
      <li class="list-none mb-4">{{ $t('form.stepForm.item.user') }}：{{ formModel.user }}</li>
      <li class="list-none mb-4">{{ $t('form.stepForm.item.name') }}：{{ formModel.name }}</li>
      <li class="list-none mb-4">
        {{ $t('form.stepForm.item.money') }}：￥<span class="text-size-2xl">{{ formModel.money }}</span>
      </li>
    </ul>
    <div class="mt-8 text-center">
      <el-button
        type="primary"
        @click="handleAgain"
        >{{ $t('form.stepForm.transformAgain') }}</el-button
      >
      <el-button @click="handleSeeDetail">{{ $t('form.stepForm.seeDetail') }}</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus';
import { useStepFormItem } from '../shared/useStepFormItem';
import type { StepFormInfo } from '../types/step-form';

const { formModel, setActive } = useStepFormItem<StepFormInfo>({ sequence: 1, formInstance: 'form' });
function handleAgain() {
  setActive(0);
}

function handleSeeDetail() {
  ElNotification.info('see detail');
}
</script>
