<template>
    <el-menu
        :default-active="$route.path"
        :router="true"
        :collapse="collapsed"
        :collapse-transition="false"
        active-text-color="#ffffff"
        text-color="#ffffffa6"
        class="sider-menu"
    >
        <the-sider-menu-item
            v-for="menu in menus"
            :key="menu.path"
            :menu="menu"
        ></the-sider-menu-item>
    </el-menu>
</template>

<script>
import { getRoutes, normalizeRoutes } from '@helpers/route';
import TheSiderMenuItem from '@layouts/main/components/TheSiderMenuItem';

export default {
    name: 'TheSiderMenu',
    components: { TheSiderMenuItem },
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            menus: []
        };
    },
    created() {
        this.getMenus();
    },
    methods: {
        getMenus() {
            this.menus = normalizeRoutes(getRoutes());
        }
    }
};
</script>

<style lang="scss" scoped>
@mixin menu {
    background-color: transparent;
    border-right: 0;
}

.sider-menu {
    @include menu;
    &::v-deep {
        .el-menu {
            @include menu;
        }
        .el-menu--popup {
            padding: 0;
            background-color: #001529 !important;
            .el-menu-item:last-child {
                margin-bottom: 0;
            }
        }
        .el-menu-item {
            height: 40px;
            line-height: 40px;
            margin-bottom: 8px;
            &:hover {
                background-color: transparent !important;
                color: $--color-white !important;
                i {
                    color: $--color-white !important;
                }
            }
            &.is-active {
                background-color: $--color-primary !important;
            }
        }
        .el-submenu__title {
            height: 40px;
            line-height: 40px;
            margin-bottom: 8px;

            &:hover,
            &:focus,
            &:active {
                background-color: transparent !important;
                color: $--color-white !important;

                i {
                    color: $--color-white !important;
                }
            }
        }
    }
}
</style>
