<template>
    <div class="right-content">
        <el-dropdown>
            <div class="right-content-user flex align-center">
                <el-avatar icon="el-icon-user-solid" :size="24"></el-avatar>
                <span class="right-content-user__nick">管理员</span>
            </div>
            <template #dropdown>
                <el-dropdown-menu class="right-content-user__dropdown">
                    <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-setting">系统设置</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-switch-button" divided
                        >退出登录</el-dropdown-item
                    >
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: 'TheRightContent'
};
</script>

<style lang="scss" scoped>
.right-content-user {
    padding: 0 12px;
    &:hover {
        background-color: $--background-color-base;
    }
}

.right-content-user__nick {
    padding-left: 8px;
}

.right-content-user__dropdown {
    padding: 4px 0;
    &::v-deep {
        .el-dropdown-menu__item {
            padding: 0 20px 0 12px;
            line-height: 32px;
        }
        .el-dropdown-menu__item--divided {
            margin-top: 4px;
            &::before {
                height: 4px;
                margin: 0 -20px 0 -12px;
            }
        }
        [class^='el-icon-'],
        [class*=' el-icon-'] {
            padding-right: 4px;
        }
    }
}
</style>
