<template>
    <user-layout>
        <typography size="big-title">安全设置</typography>
        <div class="flex justify-between mt24 w100">
            <div>
                <typography>账户密码</typography>
                <typography type="secondary" class="mt8">当前密码强度:强</typography>
            </div>
            <el-button type="text">修改</el-button>
        </div>
        <el-divider class="mv12" />
        <div class="flex justify-between w100">
            <div>
                <typography>密保手机</typography>
                <typography type="secondary" class="mt8">已绑定手机:138****8293</typography>
            </div>
            <el-button type="text">修改</el-button>
        </div>
        <el-divider class="mv12" />
        <div class="flex justify-between w100">
            <div>
                <typography>密保问题</typography>
                <typography type="secondary" class="mt8"
                    >未设置密保问题，密保问题可有效保护账户安全</typography
                >
            </div>
            <el-button type="text">设置</el-button>
        </div>
        <el-divider class="mv12" />
        <div class="flex justify-between w100">
            <div>
                <typography>备用邮箱</typography>
                <typography type="secondary" class="mt8">已绑定邮箱:ant***sign.com</typography>
            </div>
            <el-button type="text">修改</el-button>
        </div>
    </user-layout>
</template>

<script>
import UserLayout from '@views/user/UserLayout';
import Typography from '@components/Typography';
export default {
    name: 'UserSecuritySetting',
    components: { Typography, UserLayout },
    data() {
        return {};
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
