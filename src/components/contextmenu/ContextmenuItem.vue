<template>
    <li
        :class="[
            {
                'is-disabled': disabled,
                'contextmenu-dropdown-menu__item--divided': divided
            },
            'contextmenu-dropdown-menu__item'
        ]"
        :aria-disabled="disabled"
        :tabindex="disabled ? null : -1"
        @click="handleClick"
    >
        <i v-if="icon" :class="icon"></i>
        <slot></slot>
    </li>
</template>
<script>
import Emitter from 'element-ui/src/mixins/emitter';

export default {
    name: 'ContextmenuItem',

    mixins: [Emitter],

    props: {
        command: {},
        disabled: Boolean,
        divided: Boolean,
        icon: String
    },

    methods: {
        handleClick(e) {
            this.dispatch('ContextmenuDropdown', 'menu-item-click', [this.command, this]);
        }
    }
};
</script>
