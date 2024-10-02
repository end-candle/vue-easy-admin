<template>
  <div class="layout-container">
    <slot></slot>
  </div>
</template>

<script lang="ts" scoped></script>

<style lang="css">
.layout-container {
  margin: calc(-1 * var(--el-main-padding));
  margin-bottom: var(--el-main-padding);
  padding: var(--el-main-padding);
  background-color: var(--el-color-white);
}
</style>
