<template>
    <div class="tabs">
        <el-tabs
            v-model="routeTabsValue"
            type="card"
            :closable="tabList.length > 1"
            @edit="handleTabsEdit"
            @tab-click="handleTabClick"
        >
            <el-tab-pane v-for="(item, index) in tabList" :key="item.key" :name="item.key">
                <template #label>
                    <contextmenu-dropdown @menu-item-click="handleMenuClick($event, item)">
                        <div class="tab-route">{{ item.title }}</div>
                        <template #dropdown>
                            <contextmenu>
                                <contextmenu-item command="closeOther">关闭其他</contextmenu-item>
                                <contextmenu-item command="closeLeft" :disabled="index === 0"
                                    >关闭左侧</contextmenu-item
                                >
                                <contextmenu-item
                                    command="closeRight"
                                    :disabled="index === tabList.length - 1"
                                    >关闭右侧</contextmenu-item
                                >
                                <contextmenu-item command="refreshCurrent"
                                    >刷新当前页</contextmenu-item
                                >
                            </contextmenu>
                        </template>
                    </contextmenu-dropdown>
                </template>
            </el-tab-pane>
        </el-tabs>
        <div class="tabs-extra">
            <el-dropdown trigger="click" @menu-item-click="handleMenuClick">
                <el-button type="text" icon="el-icon-more" class="tabs-extra-btn" />
                <template #dropdown>
                    <el-dropdown-menu class="tabs-extra__dropdown">
                        <el-dropdown-item command="closeOther">关闭其他</el-dropdown-item>
                        <el-dropdown-item command="closeLeft">关闭左侧</el-dropdown-item>
                        <el-dropdown-item command="closeRight">关闭右侧</el-dropdown-item>
                        <el-dropdown-item command="refreshCurrent">刷新当前页</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import ContextmenuDropdown from '@components/contextmenu/ContextmenuDropdown';
import Contextmenu from '@components/contextmenu/Contextmenu';
import ContextmenuItem from '@components/contextmenu/ContextmenuItem';
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'TheTabs',
    components: { ContextmenuItem, Contextmenu, ContextmenuDropdown },
    data() {
        return {
            routeTabsValue: '',
            tabIndex: 2
        };
    },
    computed: {
        ...mapState('tab', ['tabList'])
    },
    watch: {
        $route: {
            handler(val) {
                if (val) {
                    this.addTab(val);
                    this.routeTabsValue = val.fullPath;
                }
            },
            immediate: true
        }
    },
    methods: {
        ...mapMutations('tab', ['addTab', 'updateTabList']),
        /**
         * 移除指定标签
         * @param targetName
         */
        handleTabRemove(targetName) {
            const tabs = this.tabList;
            let activeName = this.routeTabsValue;
            if (activeName === targetName) {
                const index = tabs.findIndex((tab) => tab.key === targetName);
                if (index !== -1) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];
                    if (nextTab) {
                        activeName = nextTab.key;
                        this.$router.push(activeName);
                    }
                }
            }
            this.routeTabsValue = activeName;
            this.updateTabList(tabs.filter((tab) => tab.key !== targetName));
        },
        /**
         * 标签页点击
         * @param tab 选中的标签对象
         */
        handleTabClick(tab) {
            if (tab.name !== this.$route.fullPath) {
                this.$router.push(tab.name);
            }
        },
        handleTabsEdit(targetName, action) {
            if (action === 'remove') {
                this.handleTabRemove(targetName);
            }
        },
        /**
         * 点击tab右键菜单
         */
        handleMenuClick(command, tab) {
            switch (command) {
                case 'closeOther':
                    this.closeOther(tab);
                    break;
                case 'closeLeft':
                    this.closeLeft(tab);
                    break;
                case 'closeRight':
                    this.closeRight(tab);
                    break;
                case 'refreshCurrent':
                    this.refreshCurrent(tab);
                    break;
            }
        },
        /**
         * 关闭其他tab
         */
        closeOther(target) {
            const activeName = this.routeTabsValue;
            const path = target?.key ?? activeName;
            if (activeName !== path) {
                this.$router.push(path);
            }
            this.updateTabList(this.tabList.filter((tab) => tab.key === path));
        },
        /**
         * 关闭左侧tab
         */
        closeLeft(target) {
            const tabs = this.tabList;
            const activeName = this.routeTabsValue;
            // 当前激活页位置
            const currentIndex = tabs.findIndex((item) => item.key === activeName);

            const path = target?.key ?? activeName;
            // 鼠标指向页面位置
            const index = tabs.findIndex((item) => item.key === path);
            if (currentIndex < index) {
                this.$router.push(path);
            }
            this.updateTabList(tabs.slice(index, tabs.length));
        },
        /**
         * 关闭右侧tab
         */
        closeRight(target) {
            const tabs = this.tabList;
            const activeName = this.routeTabsValue;
            // 当前激活页位置
            const currentIndex = tabs.findIndex((item) => item.key === activeName);

            const path = target?.key ?? activeName;
            // 鼠标指向页面位置
            const index = tabs.findIndex((item) => item.key === path);
            if (currentIndex > index) {
                this.$router.push(path);
            }
            this.updateTabList(tabs.slice(0, index + 1));
        },
        /**
         * 刷新当前页
         */
        refreshCurrent(target) {
            this.$router.push({
                name: 'Refresh',
                query: {
                    path: target?.key ?? this.routeTabsValue
                }
            });
        }
    }
};
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
