<template>
    <div class="right-content">
        <el-dropdown @command="handleCommand">
            <div class="right-content-user flex align-center">
                <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    :size="24"
                ></el-avatar>
                <span class="right-content-user__nick">管理员</span>
            </div>
            <template #dropdown>
                <el-dropdown-menu class="right-content-user__dropdown">
                    <el-dropdown-item command="user-profile" icon="el-icon-user"
                        >个人中心</el-dropdown-item
                    >
                    <el-dropdown-item command="system-settings" icon="el-icon-setting"
                        >系统设置</el-dropdown-item
                    >
                    <el-dropdown-item command="logout" icon="el-icon-switch-button" divided
                        >退出登录</el-dropdown-item
                    >
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: 'TheRightContent',
    methods: {
        handleCommand(command) {
            switch (command) {
                case 'user-profile':
                    this.toUserProfile();
                    break;
                case 'system-settings':
                    this.toSystemSettings();
                    break;
                case 'logout':
                    this.logout();
                    break;
            }
        },
        /**
         * 跳转个人中心
         */
        toUserProfile() {
            this.$router.push({ name: 'UserBaseSetting' });
        },
        /**
         * 跳转系统设置
         */
        toSystemSettings() {},
        /**
         * 退出
         */
        logout() {}
    }
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
