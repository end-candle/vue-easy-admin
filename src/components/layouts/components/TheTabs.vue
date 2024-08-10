<template>
  <div class="tabs">
    <ElTabs
      v-model="currentTab"
      type="card"
      :closable="tabList.length > 1"
      @edit="handleTabsEdit"
      @tab-click="handleTabClick"
    >
      <ElTabPane
        v-for="(item, index) in tabList"
        :key="item.fullPath"
        :name="item.fullPath"
      >
        <template #label>
          <ContextMenu @command="handleMenuClick($event as string, item)">
            <div class="tab-route">{{ item.meta.title }}</div>
            <template #menu>
              <ContextmenuItem command="closeOther">{{ $t('tools.closeOther') }}</ContextmenuItem>
              <ContextmenuItem
                command="closeLeft"
                :disabled="index === 0"
                >{{ $t('tools.closeLeft') }}</ContextmenuItem
              >
              <ContextmenuItem
                command="closeRight"
                :disabled="index === tabList.length - 1"
                >{{ $t('tools.closeRight') }}</ContextmenuItem
              >
              <ContextmenuItem
                command="refreshCurrent"
                :divided="false"
                >{{ $t('tools.refreshCurrent') }}</ContextmenuItem
              >
            </template>
          </ContextMenu>
        </template>
      </ElTabPane>
    </ElTabs>
    <div class="tabs-extra">
      <el-dropdown
        trigger="click"
        @menu-item-click="handleMenuClick"
      >
        <el-button
          type="text"
          icon="el-icon-more"
          class="tabs-extra-btn"
        />
        <template #dropdown>
          <el-dropdown-menu class="tabs-extra__dropdown">
            <el-dropdown-item command="closeOther">{{ $t('tools.closeOther') }}</el-dropdown-item>
            <el-dropdown-item command="closeLeft">{{ $t('tools.closeLeft') }}</el-dropdown-item>
            <el-dropdown-item command="closeRight">{{ $t('tools.closeRight') }}</el-dropdown-item>
            <el-dropdown-item command="refreshCurrent">{{ $t('tools.refreshCurrent') }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTabStore } from '@/stores/tab';
import { type TabPaneName, type TabsPaneContext } from 'element-plus';
import { storeToRefs } from 'pinia';
import type { RouteLocationNormalized } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';

const tabStore = useTabStore();
const { tabList, currentTab } = storeToRefs(tabStore);
const route = useRoute();

/**
 * 标签页点击
 * @param tab 选中的标签对象
 */
function handleTabClick(tab: TabsPaneContext) {
  if (tab.paneName !== route.fullPath) {
    useRouter().push(String(tab.paneName));
  }
}

function handleTabsEdit(targetName: TabPaneName | undefined, action: 'add' | 'remove') {
  if (action === 'remove' && typeof targetName === 'string') {
    tabStore.removeTab(targetName);
  }
}
/**
 * 点击tab右键菜单
 */
function handleMenuClick(command: string, tab: RouteLocationNormalized) {
  switch (command) {
    case 'closeOther':
      tabStore.closeOther(tab);
      break;
    case 'closeLeft':
      tabStore.closeLeft(tab);
      break;
    case 'closeRight':
      tabStore.closeRight(tab);
      break;
    case 'refreshCurrent':
      tabStore.refreshCurrent(tab);
      break;
  }
}
</script>

<style lang="scss" scoped>
.tab-route {
  height: 100%;
  margin: 0 -20px;
  padding: 0 20px;
}

.tabs {
  position: relative;
  margin-top: 4px;
  margin-left: -24px;
  margin-right: -24px;
  &::v-deep {
    .el-tabs__header {
      padding: 0 40px 0 24px;
    }
    .el-tabs__nav {
      border: 0;
    }
    .el-tabs__item {
      background-color: #fafafa;
      border: 1px solid $--border-color-light;
      margin-left: 8px;
      border-radius: $--border-radius-base $--border-radius-base 0 0;
      &:first-child {
        margin-left: 0;
        border-left: 1px solid $--border-color-light;
      }
      &.is-active {
        background-color: $--color-white;
        .tab-route {
          color: $--color-primary;
        }
      }
      &:focus.is-active.is-focus:not(:active) {
        box-shadow: none;
      }
    }
  }
}

.tabs-extra {
  position: absolute;
  right: 16px;
  top: 8px;
  cursor: pointer;
}

.tabs-extra-btn {
  width: 24px;
  height: 24px;
  padding: 0;
  transform: rotate(90deg);
  color: $--color-text-regular;
}

.tabs-extra__dropdown {
  padding: 4px 0;
  &::v-deep {
    .el-dropdown-menu__item {
      padding: 0 12px;
      line-height: 32px;
    }
    .el-dropdown-menu__item--divided {
      margin-top: 4px;
      &::before {
        height: 4px;
        margin: 0 -20px 0 -12px;
      }
    }
  }
}
</style>
