<template>
    <div class="container-card">
        <div v-if="$slots.header" class="container-card__header flex align-center">
            <slot name="header"></slot>
        </div>
        <div class="container-card__body">
            <slot></slot>
        </div>
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
    & + & {
        margin-top: $--main-padding;
    }
}

.container-card__header {
    min-height: 48px;
    padding: 12px $--main-padding;
    border-bottom: 1px solid $--border-color-light;
}

.container-card__body {
    padding: 12px $--main-padding;
}
</style>
