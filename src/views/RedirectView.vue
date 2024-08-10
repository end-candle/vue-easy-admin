<template>
  <div></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  await router.isReady();
  const path = (route.query.path ?? '/') as string;
  await router.replace(path);
});
</script>
