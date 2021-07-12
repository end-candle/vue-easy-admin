class FormItemSchema {
    constructor({ jsonSchema, uiSchema = {}, errSchema = {}, formData = {} }) {
        if (!jsonSchema) {
            throw new Error('jsonSchema is required');
        }
        this.jsonSchema = jsonSchema;
        this.uiSchema = uiSchema;
        this.errSchema = errSchema;
        this.formData = formData;
    }
}

export default FormItemSchema;
