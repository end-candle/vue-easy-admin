<template>
    <div class="layout-header">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LayoutHeader'
};
</script>

<style lang="scss">
.layout-header {
    margin: -$--main-padding;
    margin-bottom: $--main-padding;
    padding: 12px $--main-padding 16px;
    background-color: $--color-white;
}
</style>
