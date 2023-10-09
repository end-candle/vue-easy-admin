<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import LoginForm from './LoginForm.vue';
</script>

<template>
  <div class="login-view relative">
    <div
      class="w-82 p-4 bg-white shadow rd absolute top-50% left-50% -translate-x-50% -translate-y-50%"
    >
      <LoginForm />
    </div>
    <TheFooter class="fixed bottom-0 left-0 right-0"></TheFooter>
  </div>
</template>

<style scoped>
.login-view {
  height: 100vh;
  background: url('@images/bg.jpg') no-repeat center center;
  background-size: cover;
}
</style>
