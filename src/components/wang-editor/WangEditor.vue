<template>
    <div ref="editor" class="wang-editor"></div>
</template>

<script>
import E from 'wangeditor';
import Kityformula from '@components/wang-editor/kityformula';

const toString = Object.prototype.toString;
const FUNC_TYPES = ['[object AsyncFunction]', '[object Function]'];

export default {
    name: 'WangEditor',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: {
            type: String
        },
        config: {
            type: Object,
            default: () => ({})
        },
        setup: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            editor: null
        };
    },
    watch: {
        value(val) {
            this.bindContentToEditor(val);
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        /**
         * 初始化编辑器
         */
        async init() {
            await this.$nextTick();
            this.editor = new E(this.$refs.editor);
            this.registerPlugins();
            // 绑定v-model
            this.bindModelToEditor();
            this.initEditorConfig();
            this.initEditorSetup();
            // 绑定销毁事件
            this.$once('hook:beforeDestroy', () => {
                this.editor.destroy();
                this.editor = null;
            });

            this.editor.create();
            // 绑定默认content
            this.bindContentToEditor(this.value);
        },
        /**
         * 注册插件
         */
        registerPlugins() {
            // 注册菜单
            const menuKey = 'Kityformula'; // 菜单 key ，各个菜单不能重复
            this.editor.menus.extend(menuKey, Kityformula);
            this.editor.config.menus = this.editor.config.menus.concat(menuKey);
        },
        /**
         * 绑定v-model
         */
        bindModelToEditor() {
            this.editor.config.onchange = (newHtml) => {
                this.$emit('change', newHtml);
            };
        },
        /**
         * 绑定content
         * @param content 绑定内容
         */
        bindContentToEditor(content = '') {
            if (content !== undefined && content && content !== '') {
                const oldContent = this.editor.txt.html();
                if (oldContent !== content) {
                    this.editor.txt.html(content);
                }
            } else {
                this.editor.txt.clear();
            }
        },
        /**
         * 初始化编辑器配置
         */
        initEditorConfig() {
            const { config, editor } = this;
            for (let key in config) {
                if (Object.prototype.hasOwnProperty.call(config, key)) {
                    editor.config[key] = config[key];
                }
            }
        },
        /**
         * 初始化编辑器回调函数
         */
        initEditorSetup() {
            const { setup, editor } = this;
            for (let key in setup) {
                if (Object.prototype.hasOwnProperty.call(setup, key)) {
                    let funcs = setup[key];
                    if (FUNC_TYPES.includes(toString.call(funcs))) {
                        funcs = [funcs];
                    } else if (Array.isArray(funcs)) {
                        funcs = funcs.filter((func) => FUNC_TYPES.includes(toString.call(func)));
                    } else {
                        break;
                    }
                    const originFunc = editor.config[key];
                    if (originFunc) {
                        funcs.unshift(originFunc);
                    }
                    editor.config[key] = this.bindEvent(funcs);
                }
            }
        },
        /**
         * 绑定事件
         * @param {Array<Function>} funcs 事件列表
         * @returns {function(...[*]): void}
         */
        bindEvent(funcs = []) {
            return async (...args) => {
                for (let func of funcs) {
                    const result = await func(...args);
                    if (result === false) {
                        break;
                    }
                }
            };
        }
    }
};
</script>

<style scoped>
.wang-editor {
    line-height: initial;
}
</style>
