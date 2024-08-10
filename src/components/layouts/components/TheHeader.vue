<template>
  <div class="h-12 leading-12 flex justify-between items-center">
    <ElLink
      :underline="false"
      :title="fold ? $t('common.expand') : $t('common.fold')"
      class="main-header__btn"
      @click="handleToggleFold"
    >
      <i-ep-expand v-if="fold" />
      <i-ep-fold v-else />
    </ElLink>
    <TheRightContent />
  </div>
</template>

<script lang="ts" setup>
import type { TheHeaderEmits, TheHeaderProps } from './types/header';

const props = withDefaults(defineProps<TheHeaderProps>(), {
  fold: false,
});
const emit = defineEmits<TheHeaderEmits>();

function handleToggleFold() {
  emit('changeFold', !props.fold);
}
</script>
