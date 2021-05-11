<script>
import Clickoutside from 'element-ui/src/utils/clickoutside';
import Emitter from 'element-ui/src/mixins/emitter';
import Migrating from 'element-ui/src/mixins/migrating';
import ElButton from 'element-ui/packages/button';
import ElButtonGroup from 'element-ui/packages/button-group';
import { generateId } from 'element-ui/src/utils/util';

export default {
    name: 'ContextmenuDropdown',

    componentName: 'ContextmenuDropdown',

    directives: { Clickoutside },

    components: {
        ElButton,
        ElButtonGroup
    },

    mixins: [Emitter, Migrating],

    provide() {
        return {
            dropdown: this
        };
    },

    props: {
        type: String,
        splitButton: Boolean,
        hideOnClick: {
            type: Boolean,
            default: true
        },
        visibleArrow: {
            default: true
        },
        showTimeout: {
            type: Number,
            default: 250
        },
        hideTimeout: {
            type: Number,
            default: 150
        },
        tabindex: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
            timeout: null,
            visible: false,
            triggerElm: null,
            dropdownElm: null,
            listId: `dropdown-menu-${generateId()}`,
            position: {}
        };
    },
    watch: {
        visible(val) {
            this.broadcast('Contextmenu', 'visible', val);
            this.$emit('visible-change', val);
        }
    },

    mounted() {
        this.$on('menu-item-click', this.handleMenuItemClick);
    },

    methods: {
        show() {
            if (this.triggerElm.disabled) return;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.visible = true;
            }, 0);
        },
        hide() {
            if (this.triggerElm.disabled) return;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.visible = false;
            }, 0);
        },
        handleClick() {
            if (this.triggerElm.disabled) return;
            if (this.visible) {
                this.hide();
            }
        },
        handleContextmenu(e) {
            e.preventDefault();
            this.show();
            this.position = {
                left: e.clientX + 'px',
                top: e.clientY + 'px',
                position: 'fixed',
                zIndex: 1000
            };
            return false;
        },
        initEvent() {
            let { handleContextmenu, handleClick } = this;
            this.triggerElm = this.$slots.default[0].elm;

            this.triggerElm.addEventListener('contextmenu', handleContextmenu);
            this.triggerElm.addEventListener('click', handleClick);
        },
        handleMenuItemClick(command, instance) {
            if (this.hideOnClick) {
                this.visible = false;
            }
            this.$emit('command', command, instance);
        },
        initDomOperation() {
            this.initEvent();
        }
    },

    render(h) {
        let { hide } = this;

        return (
            <div class="contextmenu-dropdown" v-clickoutside={hide}>
                {this.$slots.default}
                {this.$slots.dropdown}
            </div>
        );
    }
};
</script>

<style lang="scss">
.contextmenu-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
}

.contextmenu-dropdown__icon {
    font-size: 12px;
    margin: 0 3px;
}
.contextmenu-dropdown-menu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 4px 0;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.contextmenu-dropdown-menu__item {
    list-style: none;
    padding: 0 12px;
    line-height: 32px;
    margin: 0;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: 0;
}
.contextmenu-dropdown-menu__item:focus,
.contextmenu-dropdown-menu__item:not(.is-disabled):hover {
    background-color: mix($--color-white, $--color-primary, 90%);
    color: mix($--color-white, $--color-primary, 20%);
}
.contextmenu-dropdown-menu__item i {
    margin-right: 5px;
}
.contextmenu-dropdown-menu__item--divided {
    position: relative;
    margin-top: 4px;
    border-top: 1px solid #ebeef5;
}
.contextmenu-dropdown-menu__item--divided:before {
    content: '';
    display: block;
    height: 4px;
    margin: 0 -12px;
    background-color: #fff;
}
.contextmenu-dropdown-menu__item.is-disabled {
    cursor: default;
    color: #bbb;
    pointer-events: none;
}
</style>
