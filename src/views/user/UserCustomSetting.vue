<template>
    <user-layout>
        <typography size="big-title">个性化</typography>
        <div class="flex justify-between mt24 w100">
            <div>
                <typography>风格配色</typography>
                <typography type="secondary" class="mt8">整体风格配色设置</typography>
            </div>
            <el-button type="text">修改</el-button>
        </div>
        <el-divider class="mv12" />
        <div class="flex justify-between align-center w100">
            <div>
                <typography>主题色</typography>
                <typography type="secondary" class="mt8">页面风格配色：</typography>
            </div>
            <el-color-picker v-model="color" />
        </div>
    </user-layout>
</template>

<script>
import UserLayout from '@views/user/UserLayout';
import Typography from '@components/Typography';
export default {
    name: 'UserCustomSetting',
    components: { Typography, UserLayout },
    data() {
        return {
            color: '#409EFF'
        };
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
