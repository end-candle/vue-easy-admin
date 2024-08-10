<template>
  <div>
    <el-dropdown @command="handleCommand">
      <div class="flex items-center px-3 hover:bg-white lh-12">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          :size="24"
        ></el-avatar>
        <span class="pl-2">{{ $t('user.nick') }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu class="py-1">
          <el-dropdown-item command="user-profile"
            ><i-ep-user class="pr-1"></i-ep-user> {{ $t('user.profile') }}</el-dropdown-item
          >
          <el-dropdown-item command="system-settings"
            ><i-ep-setting class="pr-1" />{{ $t('system.settings') }}</el-dropdown-item
          >
          <el-dropdown-item
            command="logout"
            divided
            ><i-ep-switch-button class="pr-1" />{{ $t('common.logout') }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

function handleCommand(command: string) {
  switch (command) {
    case 'user-profile':
      toUserProfile();
      break;
    case 'system-settings':
      toSystemSettings();
      break;
    case 'logout':
      useAuthStore().logout();
      break;
  }
}

function toUserProfile() {
  useRouter().push({ name: 'UserBaseSetting' });
}

function toSystemSettings() {}
</script>
