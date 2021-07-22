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
        nameWidth: {
            type: Number,
            default: 120
        },
        paramsWidth: {
            type: Number,
            default: 120
        }
    },
    data() {
        return {
            fields: [
                {
                    prop: 'name',
                    label: '方法名',
                    width: this.nameWidth
                },
                {
                    prop: 'desc',
                    label: '说明',
                    minWidth: this.descWidth
                },
                {
                    prop: 'params',
                    label: '参数',
                    width: this.paramsWidth
                }
            ]
        };
    }
};
</script>
