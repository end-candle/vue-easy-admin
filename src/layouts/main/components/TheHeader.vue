<template>
    <div class="main-header flex justify-between">
        <el-button
            type="text"
            :icon="fold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            :title="fold ? '展开' : '折叠'"
            class="main-header__btn"
            @click="handleToggleFold"
        ></el-button>
        <the-right-content></the-right-content>
    </div>
</template>

<script>
import TheRightContent from '@layouts/main/components/TheRightContent';
export default {
    name: 'TheHeader',
    components: { TheRightContent },
    props: {
        fold: {
            type: Boolean,
            default: false
        }
    },
    emits: ['change-fold'],
    methods: {
        handleToggleFold() {
            this.$emit('change-fold', !this.fold);
        }
    }
};
</script>

<style lang="scss" scoped>
.main-header {
    height: 48px;
    line-height: 48px;
}

.main-header__btn {
    font-size: $--font-size-extra-large;
    color: $--color-text-primary;
}
</style>
