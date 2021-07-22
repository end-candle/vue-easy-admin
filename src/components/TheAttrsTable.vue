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
    data() {
        return {
            fields: [
                {
                    prop: 'attr',
                    label: '参数',
                    width: 120
                },
                {
                    prop: 'desc',
                    label: '说明'
                },
                {
                    prop: 'type',
                    label: '类型',
                    width: 120
                },
                {
                    prop: 'optional',
                    label: '可选值',
                    minWidth: 200
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
