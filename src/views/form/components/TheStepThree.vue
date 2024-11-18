<template>
  <ElResult
    icon="success"
    :title="$t('form.stepForm.operateSuccess')"
    :sub-title="$t('form.stepForm.need2Hour')"
  >
    <template #extra>
      <ul class="bg-#fafafa px-10 py-6 text-left max-w-140">
        <li class="list-none mb-4">{{ $t('form.stepForm.item.account2') }}：{{ formModel.account }}</li>
        <li class="list-none mb-4">{{ $t('form.stepForm.item.user') }}：{{ formModel.user }}</li>
        <li class="list-none mb-4">{{ $t('form.stepForm.item.name') }}：{{ formModel.name }}</li>
        <li class="list-none">
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
    </template>
  </ElResult>
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
