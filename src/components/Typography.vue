<script>
export default {
    name: 'Typography',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        type: {
            type: String,
            default: 'default',
            validator: (val) =>
                [
                    'default',
                    'secondary',
                    'success',
                    'warning',
                    'danger',
                    'disabled',
                    'link',
                    'regular',
                    'placeholder',
                    'tip'
                ].includes(val)
        },
        size: {
            type: String,
            default: 'normal',
            validator: (val) =>
                ['auxiliary', 'small', 'normal', 'subtitle', 'title', 'big-title'].includes(val)
        },
        strong: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classList() {
            const { type, size, strong } = this;
            const classList = ['typography', type, `typography--${size}`];
            if (strong) {
                classList.push('strong');
            }
            return classList;
        }
    },
    render(createElement, context) {
        const { tag, classList } = this;
        const className = classList.join(' ');
        return createElement(
            tag,
            {
                class: className
            },
            this.$slots.default
        );
    }
};
</script>

<style lang="scss" scoped>
h1.typography {
    margin: 0 0 0.5rem;
    font-weight: 600;
    font-size: 38px;
    line-height: 1.23;
}
h2.typography,
h3.typography,
h4.typography,
h5.typography,
h6.typography {
    margin: 0 0 0.5rem;
    font-weight: 600;
    line-height: 1.35;
}
h2.typography {
    font-size: 30px;
}
h3.typography {
    font-size: 24px;
}
h4.typography {
    font-size: 20px;
}
h5.typography {
    font-size: 16px;
}
.typography {
    color: $--color-text-primary;
    font-size: $--font-size-base;
    overflow-wrap: break-word;
    &.secondary {
        color: $--color-text-secondary;
    }
    &.regular {
        color: $--color-text-regular;
    }
    &.tip {
        color: rgba($--color-text-regular, 0.73);
    }
    &.placeholder {
        color: $--color-text-placeholder;
    }
    &.success {
        color: $--color-success;
    }
    &.warning {
        color: $--color-warning;
    }
    &.danger {
        color: $--color-danger;
    }
    &.disabled {
        cursor: not-allowed;
        user-select: none;
        color: $--font-color-disabled-base;
    }
    &.strong {
        font-weight: 600;
    }
    &.link {
        color: $--color-primary;
    }
    &.typography--auxiliary {
        font-size: $--font-size-extra-small;
    }
    &.typography--small {
        font-size: $--font-size-small;
    }
    &.typography--title {
        font-size: $--font-size-large;
    }
    &.typography--subtitle {
        font-size: $--font-size-medium;
    }
    &.typography--big-title {
        font-size: $--font-size-extra-large;
    }
}
</style>
