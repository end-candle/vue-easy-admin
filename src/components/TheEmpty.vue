<template>
    <div class="empty-container">
        <div v-if="message" class="empty-container__wrapper">{{ message }}</div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TheEmpty',
    props: {
        message: {
            type: String,
            default: '暂无数据'
        }
    }
};
</script>

<style lang="scss" scoped>
.empty-container {
    position: relative;
    width: 100%;
    min-height: 400px;
    height: 100%;

    &__wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 151px;
        height: 136px;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #a4a4a4;
        padding-top: 90px;
        line-height: 24px;
        background: url('~@images/empty-icon.png') no-repeat center top;
        background-size: 151px 136px;
    }
}
</style>
