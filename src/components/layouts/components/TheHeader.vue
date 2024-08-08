<template>
  <div class="h-12 leading-12 flex justify-between items-center">
    <ElButton
      type="text"
      :icon="fold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      :title="fold ? '展开' : '折叠'"
      class="main-header__btn"
      @click="handleToggleFold"
    ></ElButton>
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
