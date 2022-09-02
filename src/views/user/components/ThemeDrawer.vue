<template>
    <el-drawer
        ref="drawer"
        :title="$t('user.style')"
        :append-to-body="true"
        v-bind="$attrs"
        direction="rtl"
        size="378px"
        :before-close="handleClose"
        v-on="$listeners"
    >
        <el-form ref="form" :model="theme" label-position="top">
            <Typography tag="div" type="tip" size="title">{{
                $t('user.brandColorTitle')
            }}</Typography>
            <the-color-picker
                v-model="theme.brandColor"
                :label="$t('user.brandColor')"
            ></the-color-picker>
            <Typography class="mt16" tag="div" type="tip" size="title">{{
                $t('user.progressColor')
            }}</Typography>
            <the-color-picker
                v-model="theme.progressColor"
                :label="$t('user.progressColor')"
            ></the-color-picker>
            <Typography class="mt16" tag="div" type="tip" size="title">{{
                $t('user.utilColor')
            }}</Typography>
            <the-color-picker
                v-model="theme.functionalColor.colorSuccess"
                :label="$t('user.successColor')"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.functionalColor.colorWarning"
                :label="$t('user.warningColor')"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.functionalColor.colorDanger"
                :label="$t('user.dangerColor')"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.functionalColor.colorInfo"
                :label="$t('user.infoColor')"
            ></the-color-picker>
            <Typography class="mt16" tag="div" type="tip" size="title">{{
                $t('user.fontColor.title')
            }}</Typography>
            <the-color-picker
                v-model="theme.fontColor.colorTextPrimary"
                :label="$t('user.fontColor.primary')"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.fontColor.colorTextRegular"
                :label="$t('user.fontColor.regular')"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.fontColor.colorTextSecondary"
                :label="$t('user.fontColor.secondary')"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.fontColor.colorTextPlaceholder"
                :label="$t('user.fontColor.placeholder')"
            ></the-color-picker>
            <Typography class="mt16" tag="div" type="tip" size="title">{{
                $t('user.borderColor.title')
            }}</Typography>
            <the-color-picker
                v-model="theme.borderColor.borderColorBase"
                :label="$t('user.borderColor.base')"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.borderColor.borderColorLight"
                :label="$t('user.borderColor.light')"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.borderColor.borderColorLighter"
                :label="$t('user.borderColor.lighter')"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.borderColor.borderColorExtraLight"
                :label="$t('user.borderColor.extralight')"
            ></the-color-picker>
            <Typography class="mt16" tag="div" type="tip" size="title">{{
                $t('user.backgroundColor.title')
            }}</Typography>
            <the-color-picker
                v-model="theme.backgroundColor.backgroundColorBase"
                :label="$t('user.backgroundColor.base')"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.backgroundColor.colorBlack"
                :label="$t('user.backgroundColor.black')"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.backgroundColor.colorWhite"
                :label="$t('user.backgroundColor.white')"
            ></the-color-picker>
        </el-form>
        <div class="the-drawer__footer">
            <el-button type="primary" @click="handleConfirm">{{ $t('common.ok') }}</el-button>
            <el-button @click="handleCancel">{{ $t('common.cancel') }}</el-button>
        </div>
    </el-drawer>
</template>

<script>
import { cloneDeep } from 'lodash-es';
import Typography from '@components/Typography.vue';
import TheColorPicker from './TheColorPicker.vue';

export default {
    components: { Typography, TheColorPicker },
    props: {
        themeColor: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            theme: {}
        };
    },
    watch: {
        themeColor: {
            immediate: true,
            deep: true,
            handler(val) {
                this.theme = cloneDeep(val);
            }
        }
    },
    methods: {
        handleConfirm() {
            this.$refs.drawer.closeDrawer();
            this.$emit('confirm', this.theme);
        },
        handleCancel() {
            this.$refs.drawer.closeDrawer();
        },
        handleClose(done) {
            this.theme = cloneDeep(this.themeColor);
            done();
        }
    }
};
</script>

<style lang="scss" scoped>
::v-deep .el-form--label-top .el-form-item__label {
    padding-bottom: 0;
}

::v-deep .el-drawer__body {
    position: relative;
    padding-bottom: 88px;
}

.the-drawer__footer {
    position: fixed;
    width: 378px;
    right: 0;
    bottom: 0;
    background-color: $--color-white;
    padding: 16px 24px;
    box-shadow: $--box-shadow-light;
}
</style>
