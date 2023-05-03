<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <el-container class="min-h-screen bg-gray-50">
    <el-aside class="fixed top-0 bottom-0 left-0 shadow bg-white z-2001">Aside</el-aside>
    <el-container>
      <el-header class="sticky top-0 right-0 z-2000 shadow bg-white">Header</el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>
