<template>
    <ul v-show="showPopper" class="contextmenu-dropdown-menu el-popper">
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
            size: this.dropdown.dropdownSize,
            showPopper: false,
            referenceElm: {}
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
        this.dropdown.popperElm = this.popperElm = this.$el;
        this.referenceElm = this.dropdown.$el;
        // compatible with 2.6 new v-slot syntax
        // issue link https://github.com/ElemeFE/element/issues/14345
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
