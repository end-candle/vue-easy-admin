<template>
    <div class="container-card">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ContainerCard'
};
</script>

<style lang="scss">
.container-card {
    background-color: $--color-white;
    padding: $--main-padding;
    & + & {
        margin-top: $--main-padding;
    }
}
</style>
