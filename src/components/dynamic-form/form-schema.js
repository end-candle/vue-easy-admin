import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { cloneDeep, merge } from 'lodash-es';
import formComponentConfig, {
    COL,
    DATE,
    DATETIME,
    FORM,
    FORM_DESC,
    FORM_GROUP,
    FORM_GROUP_DESC,
    FORM_GROUP_TITLE,
    FORM_TITLE,
    OPTION,
    PASSWORD,
    ROW,
    SELECT,
    STRING,
    SWITCH,
    TIME
} from './form-component-config';

const SCHEMA_NAME = 'dynamic-form';

class FormSchema {
    constructor({
        jsonSchema,
        uiSchema = {},
        errSchema = {},
        formModel = {},
        formComponents = formComponentConfig
    }) {
        if (!jsonSchema) {
            throw new Error('jsonSchema is required');
        }
        this.jsonSchema = jsonSchema;
        this.uiSchema = uiSchema;
        this.errSchema = errSchema;
        this.formModel = formModel;
        this.formComponents = formComponents;
    }

    /**
     * 注册组件
     * @param name
     * @param component
     */
    registerComponent(name, component) {
        this.formComponents[name] = component;
    }

    _getProp(obj, field) {
        let fieldValue = obj[field];
        const schemaEnv = this._getSchemaEnv();
        if (fieldValue?.$ref && schemaEnv) {
            fieldValue = {
                ...fieldValue,
                ...cloneDeep(schemaEnv.refs[`${schemaEnv.baseId}${fieldValue.$ref}`])
            };
        }
        return fieldValue;
    }

    _parsePropertiesVDom({ properties, deeps, h }) {
        const result = [];
        for (let key in properties) {
            if (Object.hasOwnProperty.call(properties, key)) {
                const prop = this._getProp(properties, key);
                const newDeeps = [...deeps, key];
                let vdom;
                if (prop.properties) {
                    vdom = this._renderChildren({ prop, deeps: newDeeps, h });
                } else {
                    vdom = this._renderChild(prop, newDeeps, h);
                }
                result.push(vdom);
            }
        }
        return result;
    }

    _renderChildren({ prop, deeps, h }) {
        const childrenVDom = [];
        const title = this._getDisplayProp({
            obj: prop,
            field: 'title',
            deeps
        });
        const desc = this._getDisplayProp({
            obj: prop,
            field: 'description',
            deeps
        });
        if (title) {
            childrenVDom.push(h(this._getWidget(FORM_GROUP_TITLE).widget, {}, title));
        }
        if (desc) {
            childrenVDom.push(h(this._getWidget(FORM_GROUP_DESC).widget, {}, desc));
        }
        childrenVDom.push(...this._parsePropertiesVDom({ properties: prop.properties, deeps, h }));
        return h(
            this._getWidget(FORM_GROUP).widget,
            this._getVDomAttrs({
                prop,
                deeps: [...deeps]
            }),
            childrenVDom
        );
    }

    /**
     * 获取SchemaEnv
     * @returns {SchemaEnv | undefined}
     * @private
     */
    _getSchemaEnv() {
        return this.ajv?.getSchema(SCHEMA_NAME)?.schemaEnv;
    }

    /**
     * 渲染子节点
     * @param prop 字段对象
     * @param deeps 层级嵌套对象
     * @param h 渲染函数
     * @returns {*}
     * @private
     */
    _renderChild(prop, deeps, h) {
        const grid =
            this._getWidgetProps(prop, 'grid', [...deeps]) ??
            this._getWidgetProps(this._getSchemaEnv()?.schema, 'grid', []);
        const labelChildrenVDom = [];
        const title = this._getTitle(prop, [...deeps], deeps[deeps.length - 1]);
        if (title) {
            labelChildrenVDom.push(
                h(
                    'span',
                    {
                        class: 'dynamic-form-item__title'
                    },
                    title
                )
            );
        }
        const desc = this._getDesc(prop, [...deeps]);
        if (desc) {
            labelChildrenVDom.push(
                h(
                    'span',
                    {
                        class: 'dynamic-form-item__desc'
                    },
                    desc
                )
            );
        }
        const valueChildrenVDom = [];
        const widgetName = this._getWidgetName(prop, [...deeps]);
        const widget = this._getWidget(widgetName);
        if (widgetName === SELECT) {
            valueChildrenVDom.push(
                this._renderSelectWidget({
                    prop,
                    deeps,
                    widget,
                    h
                })
            );
        } else {
            valueChildrenVDom.push(
                h(
                    widget.widget,
                    this._getVDomAttrs({
                        prop,
                        deeps: [...deeps],
                        widget
                    }),
                    [widget.renderSlot && widget.renderSlot(h)]
                )
            );
        }
        return h(
            this._getWidget(ROW).widget,
            {
                class: {
                    'dynamic-form-item': true,
                    ...(grid?.row?.class ?? {})
                },
                props: grid?.row ?? {},
                style: grid?.row?.style ?? {}
            },
            [
                h(
                    this._getWidget(COL).widget,
                    {
                        class: {
                            'dynamic-form-item__label': true,
                            ...(grid?.labelCol?.class ?? {})
                        },
                        props: grid?.labelCol ?? {},
                        style: grid?.labelCol?.style ?? {}
                    },
                    labelChildrenVDom
                ),
                h(
                    this._getWidget(COL).widget,
                    {
                        class: {
                            'dynamic-form-item__value': true,
                            ...(grid?.wrapperCol?.class ?? {})
                        },
                        props: grid?.wrapperCol ?? {},
                        style: grid?.wrapperCol?.style ?? {}
                    },
                    valueChildrenVDom
                )
            ]
        );
    }

    /**
     * 渲染select组件
     * @param prop 字段对象
     * @param deeps 层级嵌套对象
     * @param widget 注册组件
     * @param h 渲染函数
     * @returns {*}
     * @private
     */
    _renderSelectWidget({ prop, deeps, widget, h }) {
        const options = this._getOptions(prop, [...deeps]);
        const useOption =
            this._getDisplayProp({
                obj: prop,
                field: 'useOption',
                deeps: [...deeps],
                ui: true
            }) ?? true;
        if (useOption) {
            return h(
                widget.widget,
                this._getVDomAttrs({
                    prop,
                    deeps: [...deeps],
                    widget
                }),
                options.map((item) => {
                    return h(
                        this._getWidget(OPTION).widget,
                        {
                            props: {
                                value: item.value || item
                            }
                        },
                        [item.label || item]
                    );
                })
            );
        }
        return h(
            widget.widget,
            this._getVDomAttrs({
                prop,
                deeps: [...deeps],
                extraProps: {
                    options
                },
                widget
            })
        );
    }

    /**
     * 获取组件vdom属性
     * @param prop 属性
     * @param deeps 层级嵌套对象
     * @param extraProps 额外的属性
     * @param extraVDomAttrs 额外的虚拟Dom属性
     * @param widget 注册的组件
     * @private
     */
    _getVDomAttrs({ prop, deeps = [], extraProps = {}, extraVDomAttrs = {}, widget }) {
        const result = merge(extraVDomAttrs, {
            class: this._getWidgetProps(prop, 'class', deeps),
            style: this._getWidgetProps(prop, 'style', deeps),
            attrs: this._getWidgetProps(prop, 'attrs', deeps),
            props: { ...extraProps, ...this._getWidgetProps(prop, 'props', deeps) },
            domProps: this._getWidgetProps(prop, 'domProps', deeps),
            on: this._getWidgetProps(prop, 'on', deeps),
            nativeOn: this._getWidgetProps(prop, 'nativeOn', deeps),
            directives: this._getWidgetProps(prop, 'directives', deeps),
            scopedSlots: this._getWidgetProps(prop, 'scopedSlots', deeps),
            slot: this._getWidgetProps(prop, 'slot', deeps),
            key: this._getWidgetProps(prop, 'key', deeps),
            ref: this._getWidgetProps(prop, 'ref', deeps),
            refInFor: this._getWidgetProps(prop, 'refInFor', deeps)
        });
        if (deeps.length && widget) {
            this._bindVModel(result, widget, [...deeps]);
        }
        return result;
    }

    /**
     * 绑定组件v-model
     * @param props 属性
     * @param widget 组件
     * @param deeps 层级嵌套对象
     * @private
     */
    _bindVModel(props, widget, deeps) {
        let modelBind = 'props';
        let eventBind = 'on';
        if (widget.native) {
            modelBind = 'domProps';
            eventBind = 'nativeOn';
        }
        if (!props[modelBind]) {
            props[modelBind] = {};
        }
        if (!props[eventBind]) {
            props[eventBind] = {};
        }
        props[modelBind][widget.model] = this._getModel(deeps);
        props[eventBind][widget.event] = (val) => {
            const newDeeps = [...deeps];
            const field = newDeeps.pop();
            const model = this._getModel(newDeeps);
            model[field] = widget.formatter(val) ?? '';
        };
    }

    /**
     * 获取model
     * @param deeps 层级嵌套对象
     * @private
     */
    _getModel(deeps = []) {
        if (!deeps.length) {
            return this.formModel;
        }
        return deeps.reduce((prev, current) => {
            return prev[current] ?? {};
        }, this.formModel);
    }

    /**
     * 获取组件
     * @param name 组件名
     * @returns {{widget: string, event: string}}
     * @private
     */
    _getWidget(name) {
        const widget = this.formComponents[name];
        if (typeof widget === 'string') {
            return {
                widget,
                event: 'input',
                native: false,
                formatter: (val) => val
            };
        }
        return widget;
    }

    /**
     * 获取属性组件名
     * @param prop 属性
     * @param deeps 层级嵌套对象
     * @private
     */
    _getWidgetName(prop, deeps = []) {
        const widget = this._getDisplayProp({
            obj: prop,
            field: 'widget',
            deeps,
            ui: true
        });
        if (widget) {
            return widget;
        }

        const enums = this._getProp(prop, 'enum') ?? [];
        if (enums.length) {
            return SELECT;
        }

        const format = this._getProp(prop, 'format');
        if ([PASSWORD, DATE, TIME, DATETIME].includes(format)) {
            return format;
        }

        const type = this._getProp(prop, 'type');
        if ([STRING, Number].includes(type)) {
            return type;
        }
        if (type === 'boolean') {
            return SWITCH;
        }
        if (type === 'array') {
            return SELECT;
        }

        return STRING;
    }

    /**
     * 获取组件options
     * @param prop 属性
     * @param deeps 层级嵌套对象
     * @private
     */
    _getOptions(prop, deeps = []) {
        const enums = this._getProp(prop, 'enum') ?? [];
        const enumNames = this._getProp(prop, 'enum') ?? [];
        if (enums.length && enumNames.length) {
            return enums.map((item, index) => {
                return {
                    label: enumNames[index],
                    value: item
                };
            });
        } else if (enums.length) {
            return enums;
        }

        const props = this._getWidgetProps(prop, deeps);
        return props?.options ?? [];
    }

    /**
     * 获取属性标题
     * @param prop 属性
     * @param deeps 层级嵌套对象
     * @param defaultTitle 默认标题
     * @private
     */
    _getTitle(prop, deeps = [], defaultTitle) {
        return (
            this._getDisplayProp({
                obj: prop,
                field: 'title',
                deeps
            }) ?? defaultTitle
        );
    }

    /**
     * 获取属性描述
     * @param prop 属性
     * @param deeps 层级嵌套对象
     * @private
     */
    _getDesc(prop, deeps = []) {
        return this._getDisplayProp({
            obj: prop,
            field: 'description',
            deeps
        });
    }

    /**
     * 获取属性组件属性
     * @param prop 属性
     * @param field 字段名
     * @param deeps 层级嵌套对象
     * @private
     */
    _getWidgetProps(prop, field, deeps = []) {
        return this._getDisplayProp({
            obj: prop,
            field,
            deeps,
            ui: true
        });
    }

    /**
     * 转化成表单虚拟dom树
     * @param schema jsonSchema对象
     * @param h 渲染函数
     * @returns {*}
     * @private
     */
    _parseFormVDom(schema, h) {
        const properties = this._getProp(schema, 'properties');
        const { formModel } = this;
        const childrenVDom = [];
        const formTitle = this._getDisplayProp({
            obj: schema,
            field: 'title',
            deeps: []
        });
        const formDesc = this._getDisplayProp({
            obj: schema,
            field: 'description',
            deeps: []
        });
        if (formTitle) {
            childrenVDom.push(h(this._getWidget(FORM_TITLE).widget, {}, formTitle));
        }
        if (formDesc) {
            childrenVDom.push(h(this._getWidget(FORM_DESC).widget, {}, formDesc));
        }
        childrenVDom.push(...this._parsePropertiesVDom({ properties, deeps: [], h }));
        return h(
            this._getWidget(FORM).widget,
            this._getVDomAttrs({
                prop: schema,
                extraProps: {
                    model: formModel
                }
            }),
            childrenVDom
        );
    }

    /**
     * 获取实际展示属性
     * @param obj 属性对象
     * @param field 字段
     * @param deeps 层级嵌套对象
     * @param ui 是否为UI组件属性
     * @returns {*}
     * @private
     */
    _getDisplayProp({ obj, field, deeps = [], ui = false }) {
        const fieldValue = this._getUIProp(field, deeps);
        if (fieldValue) {
            return fieldValue;
        }
        return this._getProp(obj, ui ? `ui:${field}` : field);
    }

    /**
     * 获取UI属性
     * @param field 字段名
     * @param deeps 层级嵌套对象
     * @returns {*}
     * @private
     */
    _getUIProp(field, deeps = []) {
        const result = deeps.reduce((prev, current) => {
            return prev[current] ?? {};
        }, this.uiSchema);
        return result[`ui:${field}`];
    }

    render(h) {
        this.ajv = new Ajv();
        this.ajv.addKeyword('ui:widget');
        this.ajv.addKeyword('ui:attrs');
        this.ajv.addKeyword('ui:props');
        this.ajv.addKeyword('ui:class');
        this.ajv.addKeyword('ui:style');
        this.ajv.addKeyword('ui:grid');
        this.ajv.addKeyword('ui:domProps');
        this.ajv.addKeyword('ui:on');
        this.ajv.addKeyword('ui:nativeOn');
        this.ajv.addKeyword('ui:directives');
        this.ajv.addKeyword('ui:scopedSlots');
        this.ajv.addKeyword('ui:slot');
        this.ajv.addKeyword('ui:key');
        this.ajv.addKeyword('ui:ref');
        this.ajv.addKeyword('ui:refInFor');
        addFormats(this.ajv);
        this.ajv.addSchema(this.jsonSchema, SCHEMA_NAME);
        return this._parseFormVDom(cloneDeep(this._getSchemaEnv().schema), h);
    }
}

export default FormSchema;
