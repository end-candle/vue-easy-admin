<template>
    <div :class="['the-steps--' + direction, 'the-steps']">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TheSteps',

    props: {
        active: Number,
        direction: {
            type: String,
            default: 'horizontal'
        },
        status: {
            type: String,
            default: 'process'
        }
    },
    emits: ['change'],

    data() {
        return {
            steps: []
        };
    },

    watch: {
        active(newVal, oldVal) {
            this.$emit('change', newVal, oldVal);
        },

        steps(steps) {
            steps.forEach((child, index) => {
                child.index = index;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.the-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    &--vertical {
        flex-direction: column;
    }
}
</style>
