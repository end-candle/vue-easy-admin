<template>
  <LayoutContainer>
    <ElText
      tag="h1"
      size="large"
      >{{ $t('form.stepForm.title') }}</ElText
    >
    <ElText
      tag="div"
      class="mt-3"
    >
      {{ $t('form.stepForm.desc') }}</ElText
    >
  </LayoutContainer>
  <ContainerCard>
    <ElSteps
      class="step-form__header"
      align-center
      v-model:active="active"
      finish-status="success"
    >
      <ElStep
        :title="$t('form.stepForm.stepOne')"
        @click="setActive(0)"
      ></ElStep>
      <ElStep
        :title="$t('form.stepForm.stepTwo')"
        @click="setActive(1)"
      ></ElStep>
      <ElStep
        :title="$t('form.stepForm.stepThree')"
        @click="setActive(2)"
      ></ElStep>
    </ElSteps>
    <TheStepOne v-if="active === 0" />
    <TheStepTwo v-if="active === 1" />
    <!-- <TheStepThree v-if="active === 2" /> -->
  </ContainerCard>
</template>

<script setup lang="ts">
import { useStepForm } from './shared/useStepForm';
import type { StepFormInfo } from './types/step-form';

const { active, setActive } = useStepForm<StepFormInfo>({
  defaultValue: {
    name: '',
    account: '',
    user: '',
    type: 1,
  },
  callback: submit,
  submitActive: 1,
  useProvider: true,
});
function submit() {}
</script>

<style scoped>
.step-form__header {
  max-width: 750px;
  margin: 0 auto;
}
</style>
