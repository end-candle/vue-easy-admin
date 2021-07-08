module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['alloy', 'alloy/vue', '@vue/prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style']
            }
        ],
        'vue/no-deprecated-destroyed-lifecycle': 'off',
        'vue/no-deprecated-dollar-listeners-api': 'off',
        'vue/no-deprecated-v-bind-sync': 'off'
    }
};
