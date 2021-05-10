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
        size: {
            type: String,
            default: ''
        },
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
            menuItems: null,
            menuItemsArray: null,
            dropdownElm: null,
            focusing: false,
            listId: `dropdown-menu-${generateId()}`
        };
    },

    computed: {
        dropdownSize() {
            return this.size || (this.$ELEMENT || {}).size;
        }
    },

    watch: {
        visible(val) {
            this.broadcast('Contextmenu', 'visible', val);
            this.$emit('visible-change', val);
        },
        focusing(val) {
            const selfDefine = this.$el.querySelector('.contextmenu-dropdown-selfdefine');
            if (selfDefine) {
                // 自定义
                if (val) {
                    selfDefine.className += ' focusing';
                } else {
                    selfDefine.className = selfDefine.className.replace('focusing', '');
                }
            }
        }
    },

    mounted() {
        this.$on('menu-item-click', this.handleMenuItemClick);
    },

    methods: {
        getMigratingConfig() {
            return {
                props: {
                    'menu-align': 'menu-align is renamed to placement.'
                }
            };
        },
        show() {
            if (this.triggerElm.disabled) return;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.visible = true;
            }, 0);
        },
        hide() {
            if (this.triggerElm.disabled) return;
            this.removeTabindex();
            if (this.tabindex >= 0) {
                this.resetTabindex(this.triggerElm);
            }
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
            this.dropdownElm.style.left = e.clientX + 'px';
            this.dropdownElm.style.top = e.clientY + 'px';
            this.dropdownElm.style.position = 'fixed';
            this.dropdownElm.style.zIndex = 1000;
            return false;
        },
        handleTriggerKeyDown(ev) {
            const keyCode = ev.keyCode;
            if ([38, 40].indexOf(keyCode) > -1) {
                // up/down
                this.removeTabindex();
                this.resetTabindex(this.menuItems[0]);
                this.menuItems[0].focus();
                ev.preventDefault();
                ev.stopPropagation();
            } else if (keyCode === 13) {
                // space enter选中
                this.handleClick();
            } else if ([9, 27].indexOf(keyCode) > -1) {
                // tab || esc
                this.hide();
            }
        },
        handleItemKeyDown(ev) {
            const keyCode = ev.keyCode;
            const target = ev.target;
            const currentIndex = this.menuItemsArray.indexOf(target);
            const max = this.menuItemsArray.length - 1;
            let nextIndex;
            if ([38, 40].indexOf(keyCode) > -1) {
                // up/down
                if (keyCode === 38) {
                    // up
                    nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
                } else {
                    // down
                    nextIndex = currentIndex < max ? currentIndex + 1 : max;
                }
                this.removeTabindex();
                this.resetTabindex(this.menuItems[nextIndex]);
                this.menuItems[nextIndex].focus();
                ev.preventDefault();
                ev.stopPropagation();
            } else if (keyCode === 13) {
                // enter选中
                this.triggerElmFocus();
                target.click();
                if (this.hideOnClick) {
                    // click关闭
                    this.visible = false;
                }
            } else if ([9, 27].indexOf(keyCode) > -1) {
                // tab // esc
                this.hide();
                this.triggerElmFocus();
            }
        },
        resetTabindex(ele) {
            // 下次tab时组件聚焦元素
            this.removeTabindex();
            ele.setAttribute('tabindex', '0'); // 下次期望的聚焦元素
        },
        removeTabindex() {
            this.triggerElm.setAttribute('tabindex', '-1');
            this.menuItemsArray.forEach((item) => {
                item.setAttribute('tabindex', '-1');
            });
        },
        initAria() {
            this.dropdownElm.setAttribute('id', this.listId);
            this.triggerElm.setAttribute('aria-haspopup', 'list');
            this.triggerElm.setAttribute('aria-controls', this.listId);

            if (!this.splitButton) {
                // 自定义
                this.triggerElm.setAttribute('role', 'button');
                this.triggerElm.setAttribute('tabindex', this.tabindex);
                this.triggerElm.setAttribute(
                    'class',
                    (this.triggerElm.getAttribute('class') || '') +
                        ' contextmenu-dropdown-selfdefine'
                ); // 控制
            }
        },
        initEvent() {
            let {
                handleContextmenu,
                handleClick,
                splitButton,
                handleTriggerKeyDown,
                handleItemKeyDown
            } = this;
            this.triggerElm = splitButton ? this.$refs.trigger.$el : this.$slots.default[0].elm;

            let dropdownElm = this.dropdownElm;

            this.triggerElm.addEventListener('keydown', handleTriggerKeyDown); // triggerElm keydown
            dropdownElm.addEventListener('keydown', handleItemKeyDown, true); // item keydown
            // 控制自定义元素的样式
            if (!splitButton) {
                this.triggerElm.addEventListener('focus', () => {
                    this.focusing = true;
                });
                this.triggerElm.addEventListener('blur', () => {
                    this.focusing = false;
                });
                this.triggerElm.addEventListener('click', () => {
                    this.focusing = false;
                });
            }
            this.triggerElm.addEventListener('contextmenu', handleContextmenu);
            this.triggerElm.addEventListener('click', handleClick);
        },
        handleMenuItemClick(command, instance) {
            if (this.hideOnClick) {
                this.visible = false;
            }
            this.$emit('command', command, instance);
        },
        triggerElmFocus() {
            this.triggerElm.focus && this.triggerElm.focus();
        },
        initDomOperation() {
            this.dropdownElm = this.popperElm;
            this.menuItems = this.dropdownElm.querySelectorAll("[tabindex='-1']");
            this.menuItemsArray = [].slice.call(this.menuItems);

            this.initEvent();
            this.initAria();
        }
    },

    render(h) {
        let { hide, splitButton, type, dropdownSize } = this;

        const handleMainButtonClick = (event) => {
            this.$emit('click', event);
            hide();
        };

        let triggerElm = !splitButton ? (
            this.$slots.default
        ) : (
            <el-button-group>
                <el-button type={type} size={dropdownSize} nativeOn-click={handleMainButtonClick}>
                    {this.$slots.default}
                </el-button>
                <el-button
                    ref="trigger"
                    type={type}
                    size={dropdownSize}
                    class="contextmenu-dropdown__caret-button"
                >
                    <i class="contextmenu-dropdown__icon el-icon-arrow-down"></i>
                </el-button>
            </el-button-group>
        );

        return (
            <div class="contextmenu-dropdown" v-clickoutside={hide}>
                {triggerElm}
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
.contextmenu-dropdown .el-button-group {
    display: block;
}
.contextmenu-dropdown .el-button-group .el-button {
    float: none;
}
.contextmenu-dropdown .contextmenu-dropdown__caret-button {
    padding-left: 5px;
    padding-right: 5px;
    position: relative;
    border-left: none;
}
.contextmenu-dropdown .contextmenu-dropdown__caret-button::before {
    content: '';
    position: absolute;
    display: block;
    width: 1px;
    top: 5px;
    bottom: 5px;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
}
.contextmenu-dropdown .contextmenu-dropdown__caret-button.el-button--default::before {
    background: rgba(220, 223, 230, 0.5);
}
.contextmenu-dropdown .contextmenu-dropdown__caret-button:hover::before {
    top: 0;
    bottom: 0;
}
.contextmenu-dropdown .contextmenu-dropdown__caret-button .contextmenu-dropdown__icon {
    padding-left: 0;
}
.contextmenu-dropdown__icon {
    font-size: 12px;
    margin: 0 3px;
}
.contextmenu-dropdown .contextmenu-dropdown-selfdefine:focus:active,
.contextmenu-dropdown .contextmenu-dropdown-selfdefine:focus:not(.focusing) {
    outline-width: 0;
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
