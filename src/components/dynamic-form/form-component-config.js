export const FORM = 'form';
export const FORM_TITLE = 'form-title';
export const FORM_DESC = 'form-desc';
export const FORM_GROUP = 'form-group';
export const FORM_GROUP_TITLE = 'form-group-title';
export const FORM_GROUP_DESC = 'form-group-desc';
export const STRING = 'string';
export const PASSWORD = 'password';
export const DATE = 'date';
export const TIME = 'time';
export const DATETIME = 'date-time';
export const SWITCH = 'switch';
export const SELECT = 'select';
export const OPTION = 'option';
export const CASCADER = 'cascader';
export const NUMBER = 'number';
export const SLIDER = 'slider';
export const CHECKBOX = 'checkbox';
export const RADIO = 'radio';
export const UPLOAD = 'upload';
export const RATE = 'rate';
export const COLOR = 'color';
export const TRANSFER = 'transfer';
export const ROW = 'row';
export const COL = 'col';

export default {
    [FORM]: 'el-form',
    [FORM_TITLE]: 'div',
    [FORM_DESC]: 'div',
    [FORM_GROUP]: 'div',
    [FORM_GROUP_TITLE]: 'div',
    [FORM_GROUP_DESC]: 'div',
    [STRING]: {
        widget: 'el-input',
        model: 'value',
        event: 'input',
        native: false,
        formatter: (val) => val
    },
    [PASSWORD]: {
        widget: 'el-input',
        event: 'input',
        model: 'value',
        native: false,
        formatter: (val) => val
    },
    [DATE]: {
        widget: 'el-date-picker',
        event: 'input',
        model: 'value',
        native: false,
        formatter: (val) => val
    },
    [TIME]: {
        widget: 'el-time-picker',
        event: 'input',
        model: 'value',
        native: false,
        formatter: (val) => val
    },
    [DATETIME]: {
        widget: 'el-date-picker',
        event: 'change',
        model: 'value',
        native: false,
        formatter: (val) => val
    },
    [SWITCH]: {
        widget: 'el-switch',
        event: 'change',
        model: 'value',
        native: false,
        formatter: (val) => val
    },
    [SELECT]: {
        widget: 'el-select',
        event: 'change',
        model: 'value',
        native: false,
        formatter: (val) => val
    },
    [OPTION]: 'el-option',
    [CASCADER]: {
        widget: 'el-cascader',
        event: 'change',
        model: 'value',
        native: false,
        formatter: (val) => val
    },
    [NUMBER]: {
        widget: 'el-input-number',
        event: 'input',
        model: 'value',
        native: false,
        formatter: (val) => val
    },
    [SLIDER]: {
        widget: 'el-slider',
        model: 'value',
        event: 'change',
        native: false,
        formatter: (val) => val
    },
    [CHECKBOX]: {
        widget: 'el-checkbox',
        model: 'value',
        event: 'change',
        native: false,
        formatter: (val) => val
    },
    [RADIO]: {
        widget: 'el-radio',
        model: 'value',
        event: 'change',
        native: false,
        formatter: (val) => val
    },
    [UPLOAD]: {
        widget: 'el-upload',
        model: 'value',
        event: 'change',
        native: false,
        formatter: (val) => val,
        renderSlot: (h) => h('i', { class: 'el-icon-plus' })
    },
    [RATE]: {
        widget: 'el-rate',
        model: 'value',
        event: 'change',
        native: false,
        formatter: (val) => val
    },
    [COLOR]: {
        widget: 'el-color-picker',
        model: 'value',
        event: 'change',
        native: false,
        formatter: (val) => val
    },
    [TRANSFER]: {
        widget: 'el-transfer',
        model: 'value',
        event: 'change',
        native: false,
        formatter: (val) => val
    },
    [ROW]: 'el-row',
    [COL]: 'el-col'
};
