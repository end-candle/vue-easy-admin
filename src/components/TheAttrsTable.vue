<template>
    <pro-table
        :header-cell-style="{ background: '#fafafa', color: '#333333', 'font-weight': 500 }"
        :fields="fields"
        :pagination-visible="false"
        v-bind="$attrs"
        v-on="$listeners"
    />
</template>

<script>
import ProTable from '@components/ProTable';
export default {
    name: 'TheAttrsTable',
    components: { ProTable },
    props: {
        descWidth: {
            type: Number
        },
        attrWidth: {
            type: Number,
            default: 120
        },
        typeWidth: {
            type: Number,
            default: 120
        },
        optionalWidth: {
            type: Number,
            default: 200
        }
    },
    data() {
        return {
            fields: [
                {
                    prop: 'attr',
                    label: '参数',
                    width: this.attrWidth
                },
                {
                    prop: 'desc',
                    label: '说明',
                    minWidth: this.descWidth
                },
                {
                    prop: 'type',
                    label: '类型',
                    width: this.typeWidth
                },
                {
                    prop: 'optional',
                    label: '可选值',
                    minWidth: this.optionalWidth
                },
                {
                    prop: 'default',
                    label: '默认值'
                }
            ]
        };
    }
};
</script>
