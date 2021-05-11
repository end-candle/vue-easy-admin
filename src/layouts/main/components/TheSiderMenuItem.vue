<template>
    <el-submenu v-if="menu.children" :index="menu.path + '__parent'" :popper-append-to-body="false">
        <template v-slot:title>
            <i v-if="menu.meta && menu.meta.icon" :class="menu.meta.icon"></i>
            <span>{{ menu.meta && menu.meta.title }}</span>
        </template>
        <the-sider-menu-item
            v-for="childMenu in menu.children"
            :key="childMenu.path"
            :menu="childMenu"
        ></the-sider-menu-item>
    </el-submenu>
    <el-menu-item v-else :index="menu.path">
        <i v-if="menu.meta && menu.meta.icon" :class="menu.meta.icon"></i>
        <template v-slot:title>
            <span>{{ menu.meta && menu.meta.title }}</span>
        </template>
    </el-menu-item>
</template>

<script>
export default {
    name: 'TheSiderMenuItem',
    props: {
        menu: {
            type: Object,
            required: true
        }
    }
};
</script>
