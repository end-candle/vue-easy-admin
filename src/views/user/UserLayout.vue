<template>
    <container-card body-class="flex ph0 align-stretch">
        <div>
            <el-menu
                mode="vertical"
                :router="true"
                :default-active="$route.name"
                class="user__aside"
            >
                <el-menu-item
                    v-for="(menu, index) in menus"
                    :key="index"
                    :index="menu.route.name"
                    :route="menu.route"
                    class="user__menu"
                >
                    <template #title> {{ menu.name }}</template>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="user__body">
            <slot></slot>
        </div>
    </container-card>
</template>

<script>
import ContainerCard from '@components/ContainerCard';
import i18n from '@i18n/index';

export default {
    name: 'UserLayout',
    components: { ContainerCard },
    data() {
        return {
            menus: [
                {
                    name: i18n.t('user.basicSetting'),
                    route: {
                        name: 'UserBaseSetting'
                    }
                },
                {
                    name: i18n.t('user.securitySetting'),
                    route: {
                        name: 'UserSecuritySetting'
                    }
                },
                {
                    name: i18n.t('user.personalized'),
                    route: {
                        name: 'UserCustomSetting'
                    }
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.user__aside {
    width: 208px;
    height: 100%;
}

.user__menu {
    height: 40px;
    line-height: 40px;
    margin-top: 4px;
    margin-bottom: 8px;
    &:first-of-type {
        margin-top: 0;
    }
    &.is-active {
        background-color: $--color-primary-light-9;
    }
}

.user__body {
    width: 100%;
    padding: 8px 40px;
}
</style>
