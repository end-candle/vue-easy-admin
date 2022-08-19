<template>
    <user-layout>
        <typography size="big-title">{{ $t('user.securitySetting') }}</typography>
        <div class="flex justify-between mt24 w100">
            <div>
                <typography>{{ $t('user.accountAndPassword') }}</typography>
                <typography type="secondary" class="mt8">{{
                    $t('user.passswordSecurity')
                }}</typography>
            </div>
            <el-button type="text">{{ $t('common.modify') }}</el-button>
        </div>
        <el-divider class="mv12" />
        <div class="flex justify-between w100">
            <div>
                <typography>{{ $t('user.sercetPhone') }}</typography>
                <typography type="secondary" class="mt8"
                    >{{ $t('user.bandPhone') }} 138****8293</typography
                >
            </div>
            <el-button type="text">{{ $t('common.modify') }}</el-button>
        </div>
        <el-divider class="mv12" />
        <div class="flex justify-between w100">
            <div>
                <typography>{{ $t('user.sercetQuestion') }}</typography>
                <typography type="secondary" class="mt8">{{
                    $t('user.sercetQuestionTip')
                }}</typography>
            </div>
            <el-button type="text">{{ $t('common.settting') }}</el-button>
        </div>
        <el-divider class="mv12" />
        <div class="flex justify-between w100">
            <div>
                <typography>{{ $t('user.backupEmail') }}</typography>
                <typography type="secondary" class="mt8"
                    >{{ $t('user.bandEmail') }} ant***sign.com</typography
                >
            </div>
            <el-button type="text">{{ $t('common.modify') }}</el-button>
        </div>
    </user-layout>
</template>

<script>
import UserLayout from '@views/user/UserLayout';
import Typography from '@components/Typography';
export default {
    name: 'UserSecuritySetting',
    components: { Typography, UserLayout }
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
