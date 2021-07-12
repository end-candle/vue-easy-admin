import Ajv from 'ajv';
import { cloneDeep } from 'lodash-es';
import formComponentConfig, {
    COL,
    COLOR,
    DATE,
    DATETIME,
    FORM,
    FORM_DESC,
    FORM_TITLE,
    OPTION,
    PASSWORD,
    ROW,
    SELECT,
    STRING,
    TIME
} from './form-component-config';

const SCHEMA_NAME = 'dynamic-form';

class FormSchema {
    constructor({
        jsonSchema,
        uiSchema = {},
        errSchema = {},
        formData = {},
        formComponents = formComponentConfig
    }) {
        if (!jsonSchema) {
            throw new Error('jsonSchema is required');
        }
        this.jsonSchema = jsonSchema;
        this.uiSchema = uiSchema;
        this.errSchema = errSchema;
        this.formData = formData;
        this.formComponents = formComponents;
    }

    /**
     * 注册组件
     * @param name
     * @param componentName
     */
    registerComponent(name, componentName) {
        this.formComponents[name] = componentName;
    }

    _getProp(obj, field, schemaEnv) {
        let fieldValue = obj[field];
        if (fieldValue?.$ref && schemaEnv) {
            fieldValue = {
                ...fieldValue,
                ...schemaEnv.refs[`${schemaEnv.baseId}${fieldValue.$ref}`]
            };
        }
        return fieldValue;
    }

    _parsePropertiesVDom({ properties, schemaEnv, deeps, h }) {
        const result = [];
        for (let key in properties) {
            if (Object.hasOwnProperty.call(properties, key)) {
                const prop = this._getProp(properties, key, schemaEnv);
                const newDeeps = [...deeps, key];
                let vdom;
                if (prop.properties) {
                    vdom = this._parsePropertiesVDom({
                        properties: prop.properties,
                        schemaEnv,
                        deeps: [...newDeeps],
                        h
                    });
                } else {
                    const { formComponents } = this;
                    const grid = this._getWidgetGrid(prop, [...newDeeps]);
                    const labelChildrenVDom = [];
                    const title = this._getTitle(prop, [...newDeeps], key);
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
                    const desc = this._getDesc(prop, [...newDeeps]);
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
                    const widget = this._getWidget(prop, [...newDeeps]);
                    if (widget !== formComponents[SELECT]) {
                        valueChildrenVDom.push(
                            h(
                                widget,
                                this._getVDomAttrs({
                                    prop,
                                    deeps: [...newDeeps],
                                    extraProps: {
                                        value: this.formData[key]
                                    }
                                })
                            )
                        );
                    } else {
                        const options = this._getOptions(prop, [...newDeeps]);
                        const useOption =
                            this._getDisplayProp({
                                obj: prop,
                                field: 'useOption',
                                deeps: [...newDeeps],
                                ui: true
                            }) ?? true;
                        if (useOption) {
                            valueChildrenVDom.push(
                                h(
                                    widget,
                                    this._getVDomAttrs({ prop, deeps: [...newDeeps] }),
                                    options.map((item) => {
                                        return h(
                                            formComponents[OPTION],
                                            {
                                                props: {
                                                    value: item.value || item
                                                }
                                            },
                                            [item.label || item]
                                        );
                                    })
                                )
                            );
                        } else {
                            valueChildrenVDom.push(
                                h(
                                    widget,
                                    this._getVDomAttrs({
                                        prop,
                                        deeps: [...newDeeps],
                                        extraProps: {
                                            options
                                        }
                                    })
                                )
                            );
                        }
                    }
                    vdom = h(
                        formComponents[ROW],
                        {
                            class: 'dynamic-form-item'
                        },
                        [
                            h(
                                formComponents[COL],
                                {
                                    class: 'dynamic-form-item__label',
                                    props: grid?.labelCol ?? {}
                                },
                                labelChildrenVDom
                            ),
                            h(
                                formComponents[COL],
                                {
                                    class: 'dynamic-form-item__value',
                                    props: grid?.wrapperCol ?? {}
                                },
                                valueChildrenVDom
                            )
                        ]
                    );
                }
                result.push(vdom);
            }
        }
        return result;
    }

    /**
     * 获取组件vdom属性
     * @param prop 属性
     * @param deeps 层级嵌套对象
     * @param extraProps 额外的属性
     * @param extraVDomAttrs 额外的虚拟Dom属性
     * @private
     */
    _getVDomAttrs({ prop, deeps = [], extraProps = {}, extraVDomAttrs = {} }) {
        return {
            ...extraVDomAttrs,
            class: this._getWidgetClass(prop, deeps),
            style: this._getWidgetStyle(prop, deeps),
            attrs: this._getWidgetAttrs(prop, deeps),
            props: { ...extraProps, ...this._getWidgetProps(prop, deeps) }
        };
    }

    /**
     * 获取属性组件
     * @param prop 属性
     * @param deeps 层级嵌套对象
     * @private
     */
    _getWidget(prop, deeps = []) {
        const widget = this._getDisplayProp({
            obj: prop,
            field: 'widget',
            deeps,
            ui: true
        });
        if (widget) {
            return this.formComponents[widget];
        }

        const enums = this._getProp(prop, 'enum') ?? [];
        if (enums.length) {
            return this.formComponents[SELECT];
        }

        const format = this._getProp(prop, 'format');
        if ([PASSWORD, DATE, TIME, DATETIME, COLOR].includes(format)) {
            return this.formComponents[format];
        }

        const type = this._getProp(prop, 'type');
        if ([STRING, Number].includes(type)) {
            return this.formComponents[type];
        }

        return this.formComponents[STRING];
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
     * @param deeps 层级嵌套对象
     * @private
     */
    _getWidgetProps(prop, deeps = []) {
        return this._getDisplayProp({
            obj: prop,
            field: 'props',
            deeps,
            ui: true
        });
    }

    /**
     * 获取属性组件属性（普通的 HTML attribute）
     * @param prop 属性
     * @param deeps 层级嵌套对象
     * @private
     */
    _getWidgetAttrs(prop, deeps = []) {
        return this._getDisplayProp({
            obj: prop,
            field: 'attrs',
            deeps,
            ui: true
        });
    }

    /**
     * 获取属性组件className
     * @param prop 属性
     * @param deeps 层级嵌套对象
     * @private
     */
    _getWidgetClass(prop, deeps = []) {
        return this._getDisplayProp({
            obj: prop,
            field: 'class',
            deeps,
            ui: true
        });
    }

    /**
     * 获取属性组件样式
     * @param prop 属性
     * @param deeps 层级嵌套对象
     * @private
     */
    _getWidgetStyle(prop, deeps = []) {
        return this._getDisplayProp({
            obj: prop,
            field: 'style',
            deeps,
            ui: true
        });
    }

    /**
     * 获取属性组件布局
     * @param prop 属性
     * @param deeps 层级嵌套对象
     * @private
     */
    _getWidgetGrid(prop, deeps = []) {
        return this._getDisplayProp({
            obj: prop,
            field: 'grid',
            deeps,
            ui: true
        });
    }

    /**
     * 转化成表单虚拟dom树
     * @param schemaEnv jsonSchema对象
     * @param h 渲染函数
     * @returns {*}
     * @private
     */
    _parseFormVDom(schemaEnv, h) {
        const schema = schemaEnv.schema;
        const properties = this._getProp(schema, 'properties', schemaEnv);
        const { formComponents, formData } = this;
        const formTitle = this._getDisplayProp({
            obj: schema,
            field: 'title',
            schemaEnv,
            deeps: []
        });
        const formDesc = this._getDisplayProp({
            obj: schema,
            field: 'description',
            schemaEnv,
            deeps: []
        });
        return h(
            formComponents[FORM],
            {
                props: {
                    model: formData
                }
            },
            [
                h(formComponents[FORM_TITLE], {}, formTitle),
                h(formComponents[FORM_DESC], {}, formDesc),
                ...this._parsePropertiesVDom({ properties, schemaEnv, deeps: [], h })
            ]
        );
    }

    /**
     * 获取实际展示属性
     * @param obj 属性对象
     * @param field 字段
     * @param schemaEnv jsonSchema对象
     * @param deeps 层级嵌套对象
     * @param ui 是否为UI组件属性
     * @returns {*}
     * @private
     */
    _getDisplayProp({ obj, field, schemaEnv, deeps = [], ui = false }) {
        const fieldValue = this._getUIProp(field, deeps);
        if (fieldValue) {
            return fieldValue;
        }
        return this._getProp(obj, ui ? `ui:${field}` : field, schemaEnv);
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
        this.ajv.addSchema(this.jsonSchema, SCHEMA_NAME);
        return this._parseFormVDom(cloneDeep(this.ajv.getSchema(SCHEMA_NAME).schemaEnv), h);
    }
}

export default FormSchema;
