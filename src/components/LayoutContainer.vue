<template>
    <div class="layout-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'LayoutContainer'
};
</script>

<style lang="scss">
.layout-container {
    margin: -$--main-padding;
    margin-bottom: $--main-padding;
    padding: 12px $--main-padding 16px;
    background-color: $--color-white;
}
</style>
