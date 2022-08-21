<template>
    <div :class="['the-step', `the-step--${direction}`, `the-step--${currentStatus}`]">
        <div class="the-step-item-container">
            <div class="the-step-item-tail"></div>
            <div class="the-step-item-icon">
                <slot v-if="currentStatus !== 'success' && currentStatus !== 'error'" name="icon">
                    <i v-if="icon" :class="[icon]"></i>
                    <div v-if="!icon" class="the-step__icon-inner">{{ index + 1 }}</div>
                </slot>
                <i
                    v-else
                    :class="['el-icon-' + (currentStatus === 'success' ? 'check' : 'close')]"
                ></i>
            </div>
            <div class="the-step-item-content">
                <div class="the-step-item-title">
                    {{ title }}
                    <div v-if="subTitle" :title="subTitle" class="the-step-item-subtitle">
                        {{ subTitle }}
                    </div>
                </div>
                <div v-if="description" class="the-step-item-description">{{ description }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheStep',
    props: {
        icon: String,
        description: String,
        title: String,
        subTitle: String,
        tailContent: String,
        status: String
    },
    data() {
        return {
            index: -1,
            internalStatus: ''
        };
    },

    computed: {
        currentStatus() {
            return this.status || this.internalStatus;
        },
        direction() {
            return this.$parent.direction;
        },
        isLast() {
            const parent = this.$parent;
            return parent.steps[parent.steps.length - 1] === this;
        }
    },
    beforeCreate() {
        this.$parent.steps.push(this);
    },
    beforeDestroy() {
        const steps = this.$parent.steps;
        const index = steps.indexOf(this);
        if (index >= 0) {
            steps.splice(index, 1);
        }
    },

    mounted() {
        const unwatch = this.$watch('index', (val) => {
            this.$watch('$parent.active', this.updateStatus, { immediate: true });
            this.$watch(
                '$parent.status',
                () => {
                    const activeIndex = this.$parent.active;
                    this.updateStatus(activeIndex);
                },
                { immediate: true }
            );
            unwatch();
        });
    },
    methods: {
        updateStatus(val) {
            if (val > this.index) {
                this.internalStatus = 'success';
            } else if (val === this.index && this.prevStatus !== 'error') {
                this.internalStatus = 'process';
            } else {
                this.internalStatus = 'wait';
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.the-step {
    position: relative;
    width: 100%;
    flex: 1;
    margin-right: 16px;
    overflow: hidden;
    &-item-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    &-item-icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        border: 1px solid currentColor;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
    }
    &-item-title {
        display: inline-block;
        padding-right: 16px;
    }
    &-item-subtitle {
        display: inline;
        font-size: 14px;
        color: rgba($--color-text-secondary, 0.53);
    }
    &-item-description {
        font-size: 14px;
        color: rgba($--color-text-secondary, 0.8);
    }
    &--success {
        color: $--color-text-secondary;
        .the-step {
            &-item-icon {
                color: $--color-primary;
            }
        }
        .the-step-item-title {
            &::after {
                background-color: $--color-primary;
            }
        }
    }
    &--wait {
        color: $--color-text-secondary;
        .the-step {
            &-item-icon {
                color: $--color-text-secondary;
            }
        }
    }
    &--process {
        color: $--color-text-primary;
        .the-step {
            &-item-icon {
                background-color: $--color-primary;
                border-color: $--color-primary;
                color: $--color-white;
            }
        }
    }
    &--horizontal {
        .the-step-item-title {
            &::after {
                content: '';
                position: absolute;
                width: 9999px;
                height: 1px;
                top: 16px;
                transform: translateY(-50%) translateX(16px);
                background-color: $--color-text-secondary;
            }
        }
        &:last-of-type {
            width: auto;
            flex: none;
            margin-right: 0;
            .the-step-item-title {
                &::after {
                    content: '';
                    width: 0;
                }
            }
        }
    }
    &--vertical {
        .the-step {
            &-item-container {
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
            }
            &-item-tail {
                display: block;
                position: absolute;
                top: 0;
                left: 16px;
                height: 100%;
                padding: 36px 0 6px;
                &::after {
                    content: '';
                    display: inline-block;
                    top: 0;
                    width: 1px;
                    height: 100%;
                    background-color: $--color-text-secondary;
                    border-radius: 1px;
                    transition: background 0.3s;
                }
            }
            &-item-content {
                min-height: 48px;
            }
            &-item-description {
                padding-bottom: 12px;
            }
        }
        &:last-of-type {
            .the-step-item-tail {
                &::after {
                    content: '';
                    height: 0;
                }
            }
        }
    }
}
</style>
