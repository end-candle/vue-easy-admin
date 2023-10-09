<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { LoginFormModel } from './types/login-form';

const loginFormModel = reactive<LoginFormModel>({
  username: '',
  password: '',
});

const autoLogin = ref(Boolean(localStorage.getItem('autoLogin')));
</script>

<template>
  <div class="mb-4 flex justify-center items-center">
    <span class="text-5">{{ $t('login') }}</span>
  </div>
  <ElForm :model="loginFormModel" label-width="auto" :hide-required-asterisk="true" class="mb-4.5">
    <ElFormItem prop="username">
      <ElInput
        v-model:model-value="loginFormModel.username"
        :placeholder="$t('username')"
        clearable
      >
        <template #prefix>
          <i-ep-user class="color-#000"></i-ep-user>
        </template>
      </ElInput>
    </ElFormItem>
    <ElFormItem prop="password">
      <ElInput
        v-model:model-value="loginFormModel.password"
        :placeholder="$t('password')"
        type="password"
        clearable
        show-password
      >
        <template #prefix>
          <i-ep-lock class="color-#000"></i-ep-lock>
        </template>
      </ElInput>
    </ElFormItem>
    <div class="flex justify-between items-center mb-4.5">
      <ElCheckbox v-model:model-value="autoLogin" class="h-4!">
        {{ $t('autoLogin') }}
      </ElCheckbox>
      <ElLink type="primary" href="javascript:void" target="_blank" rel="noopener noreferrer">{{
        $t('forgetPassword')
      }}</ElLink>
    </div>
    <ElButton type="primary" :auto-insert-space="true" class="w-full">{{ $t('login') }}</ElButton>
  </ElForm>
  <ElSpace>
    <ElText>{{ $t('otherLoginWay') }}</ElText>
    <ElButtonGroup class="login-ways">
      <ElButton type="primary" link>
        <i-uiw-alipay></i-uiw-alipay>
      </ElButton>
      <ElButton type="success" link>
        <i-uiw-weixin></i-uiw-weixin>
      </ElButton>
      <ElButton type="default" link>
        <i-uiw-qq></i-uiw-qq>
      </ElButton>
      <ElButton type="danger" link>
        <i-uiw-weibo></i-uiw-weibo>
      </ElButton>
    </ElButtonGroup>
  </ElSpace>
</template>
