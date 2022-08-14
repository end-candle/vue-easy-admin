<template>
    <ul v-if="showPopper" class="contextmenu-dropdown-menu el-popper" :style="dropdown.position">
        <slot></slot>
    </ul>
</template>
<script>
export default {
    name: 'Contextmenu',
    componentName: 'Contextmenu',
    inject: ['dropdown'],
    data() {
        return {
            showPopper: false
        };
    },
    created() {
        this.$on('visible', (val) => {
            this.showPopper = val;
        });
    },
    beforeDestroy() {
        document.body.removeChild(this.$el);
    },
    mounted() {
        this.dropdown.popperElm = this.$el;
        this.dropdown.initDomOperation();
        document.body.appendChild(this.$el);
    },
    methods: {
        close() {
            this.showPopper = false;
        }
    }
};
</script>
