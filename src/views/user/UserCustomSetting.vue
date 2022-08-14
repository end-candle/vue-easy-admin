<template>
    <user-layout>
        <typography size="big-title">个性化</typography>
        <div class="flex justify-between mt24 w100">
            <div>
                <typography>风格配色</typography>
                <typography type="secondary" class="mt8">整体风格配色设置</typography>
            </div>
            <el-button type="text" @click="handleVisibleDrawer">修改</el-button>
            <theme-drawer
                :visible.sync="themeVisible"
                :theme-color="theme"
                @confirm="handleChangeTheme"
            />
        </div>
        <el-divider class="mv12" />
        <div class="flex justify-between align-center w100">
            <div>
                <typography>主题色</typography>
                <typography type="secondary" class="mt8">页面风格配色：</typography>
            </div>
            <el-color-picker :value="primaryColor" @change="handleChangeBrandColor" />
        </div>
    </user-layout>
</template>

<script>
import UserLayout from '@views/user/UserLayout';
import Typography from '@components/Typography';
import { mapGetters, mapMutations, mapState } from 'vuex';
import ThemeDrawer from './components/ThemeDrawer.vue';

export default {
    name: 'UserCustomSetting',
    components: { Typography, UserLayout, ThemeDrawer },
    data() {
        return {
            themeVisible: false
        };
    },
    computed: {
        ...mapGetters('app', ['primaryColor']),
        ...mapState('app', ['theme'])
    },
    methods: {
        ...mapMutations('app', ['setTheme']),
        handleChangeBrandColor(color) {
            this.setTheme({ ...this.theme, brandColor: color });
        },
        handleVisibleDrawer() {
            this.themeVisible = true;
        },
        handleChangeTheme(themeColor) {
            this.setTheme(themeColor);
        }
    }
};
</script>

<style lang="scss" scoped>
.user-form__body {
    display: inline-block;
    width: 328px;
}

.w120 {
    width: 120px;
}

.user-form__footer {
    display: inline-block;
    vertical-align: top;
    padding-left: 144px;
}
</style>
