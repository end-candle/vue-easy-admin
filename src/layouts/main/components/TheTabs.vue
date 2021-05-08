<template>
    <div class="tabs">
        <el-tabs
            v-model="editableTabsValue"
            type="card"
            :closable="editableTabs.length > 1"
            @edit="handleTabsEdit"
        >
            <el-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'TheTabs',
    data() {
        return {
            editableTabsValue: '2',
            editableTabs: [
                {
                    title: 'Tab 1',
                    name: '1',
                    content: 'Tab 1 content'
                },
                {
                    title: 'Tab 2',
                    name: '2',
                    content: 'Tab 2 content'
                }
            ],
            tabIndex: 2
        };
    },
    methods: {
        handleTabsEdit(targetName, action) {
            if (action === 'remove') {
                let tabs = this.editableTabs;
                let activeName = this.editableTabsValue;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                this.editableTabsValue = activeName;
                this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.tabs {
    margin-top: 4px;
    margin-left: -24px;
    margin-right: -24px;
    &::v-deep {
        .el-tabs__header {
            padding: $--header-padding;
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
            }
        }
    }
}
</style>
