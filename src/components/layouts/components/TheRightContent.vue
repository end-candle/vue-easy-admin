<template>
  <div class="right-content">
    <el-dropdown @command="handleCommand">
      <div class="right-content-user flex items-center px-3 hover:bg-white">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          :size="24"
        ></el-avatar>
        <span class="pl-2">{{ $t('user.nick') }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu class="py-1">
          <el-dropdown-item
            command="user-profile"
            icon="el-icon-user"
            >{{ $t('user.profile') }}</el-dropdown-item
          >
          <el-dropdown-item
            command="system-settings"
            icon="el-icon-setting"
            >{{ $t('system.settings') }}</el-dropdown-item
          >
          <el-dropdown-item
            command="logout"
            icon="el-icon-switch-button"
            divided
            >{{ $t('common.logout') }}</el-dropdown-item
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
