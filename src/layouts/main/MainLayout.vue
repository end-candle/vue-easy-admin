<template>
    <el-container class="main-layout">
        <el-aside :width="asideWidth" class="main-layout__aside better-scroller">
            <the-logo></the-logo>
            <the-sider-menu :collapsed="fold"></the-sider-menu>
        </el-aside>
        <el-aside class="main-layout__aside-placeholder" :width="asideWidth"></el-aside>
        <el-container>
            <el-header height="108px" class="main-layout__header" :style="{ left: asideWidth }">
                <the-header :fold="fold" @change-fold="handleToggleFold"></the-header>
                <the-tabs ref="tabs"></the-tabs>
            </el-header>
            <div class="main-layout__header-placeholder"></div>
            <el-main>
                <router-view />
            </el-main>
            <el-footer>
                <the-footer></the-footer>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
import TheLogo from '@layouts/main/components/TheLogo';
import TheSiderMenu from '@layouts/main/components/TheSiderMenu';
import TheHeader from '@layouts/main/components/TheHeader';
import TheTabs from '@layouts/main/components/TheTabs';
import TheFooter from '@components/TheFooter';
export default {
    name: 'MainLayout',
    components: { TheFooter, TheTabs, TheHeader, TheSiderMenu, TheLogo },
    provide() {
        return {
            main: this
        };
    },
    data() {
        return {
            fold: false
        };
    },
    computed: {
        asideWidth() {
            const { fold } = this;
            return fold ? '64px' : '208px';
        }
    },
    methods: {
        handleToggleFold(fold) {
            this.fold = fold;
        }
    }
};
</script>

<style lang="scss" scoped>
.main-layout {
    min-height: 100vh;
    background-color: $--background-color-base;
}

.main-layout__aside {
    position: fixed;
    z-index: $--index-top;
    left: 0;
    top: 0;
    height: 100vh;
    background-color: #001529;
    color: #ffffff;
    transition: $--all-transition;
}

.main-layout__aside-placeholder {
    transition: $--all-transition;
}

.main-layout__header {
    position: fixed;
    z-index: $--index-top;
    top: 0;
    right: 0;
    background-color: $--color-white;
    transition: $--all-transition;
    //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.main-layout__header-placeholder {
    height: 108px;
}
</style>
