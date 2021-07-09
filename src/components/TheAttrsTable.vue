<template>
    <pro-table :fields="fields" :pagination-visible="false" v-bind="$attrs" v-on="$listeners" />
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
                    name: 'attr',
                    title: '参数',
                    width: 120
                },
                {
                    name: 'desc',
                    title: '说明'
                },
                {
                    name: 'type',
                    title: '类型',
                    width: 120
                },
                {
                    name: 'optional',
                    title: '可选值',
                    minWidth: 200
                },
                {
                    name: 'default',
                    title: '默认值'
                }
            ]
        };
    }
};
</script>
