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
import { asyncRoutes } from '@router/routes';
import { normalizeRoutes } from '@helpers/route';
import { cloneDeep } from 'lodash-es';
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
            this.menus = normalizeRoutes(cloneDeep(asyncRoutes));
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
            &:hover {
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
