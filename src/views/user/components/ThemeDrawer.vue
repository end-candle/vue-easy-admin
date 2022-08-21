<template>
    <el-drawer
        ref="drawer"
        title="风格配色"
        :append-to-body="true"
        v-bind="$attrs"
        direction="rtl"
        size="378px"
        :before-close="handleClose"
        v-on="$listeners"
    >
        <el-form ref="form" :model="theme" label-position="top">
            <Typography tag="div" type="tip" size="title">品牌色</Typography>
            <the-color-picker v-model="theme.brandColor" label="主题色"></the-color-picker>
            <Typography class="mt16" tag="div" type="tip" size="title">进度条颜色</Typography>
            <the-color-picker v-model="theme.progressColor" label="进度条颜色"></the-color-picker>
            <Typography class="mt16" tag="div" type="tip" size="title">实用颜色</Typography>
            <the-color-picker
                v-model="theme.functionalColor.colorSuccess"
                label="成功颜色"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.functionalColor.colorWarning"
                label="警告颜色"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.functionalColor.colorDanger"
                label="危险颜色"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.functionalColor.colorInfo"
                label="信息颜色"
            ></the-color-picker>
            <Typography class="mt16" tag="div" type="tip" size="title">字体颜色</Typography>
            <the-color-picker
                v-model="theme.fontColor.colorTextPrimary"
                label="主要文字颜色"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.fontColor.colorTextRegular"
                label="常规文字颜色"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.fontColor.colorTextSecondary"
                label="次要文字颜色"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.fontColor.colorTextPlaceholder"
                label="占位文字颜色"
            ></the-color-picker>
            <Typography class="mt16" tag="div" type="tip" size="title">边框颜色</Typography>
            <the-color-picker
                v-model="theme.borderColor.borderColorBase"
                label="一级边框颜色"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.borderColor.borderColorLight"
                label="二级边框颜色"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.borderColor.borderColorLighter"
                label="三级边框颜色"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.borderColor.borderColorExtraLight"
                label="四级边框颜色"
            ></the-color-picker>
            <Typography class="mt16" tag="div" type="tip" size="title">背景颜色</Typography>
            <the-color-picker
                v-model="theme.backgroundColor.backgroundColorBase"
                label="基础背景色"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.backgroundColor.colorBlack"
                label="基础黑色"
            ></the-color-picker>
            <the-color-picker
                v-model="theme.backgroundColor.colorWhite"
                label="基础白色"
            ></the-color-picker>
        </el-form>
        <div class="the-drawer__footer">
            <el-button type="primary" @click="handleConfirm">确定</el-button>
            <el-button @click="handleCancel">取消</el-button>
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
