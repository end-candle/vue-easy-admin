<template>
    <pro-table
        :data-source="tableData"
        :fields="fields"
        :pagination-visible="false"
        :row-class-name="tableRowClassName"
        :header-cell-style="{ background: '#fafafa', color: '#333333', 'font-weight': 500 }"
    >
    </pro-table>
</template>

<script>
import ProTable from '@components/ProTable';
export default {
    name: 'CustomTable',
    components: { ProTable },
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-05',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ],
            fields: [
                {
                    prop: 'date',
                    label: '日期',
                    align: 'center',
                    width: 180
                },
                {
                    prop: 'name',
                    label: '姓名',
                    align: 'center',
                    width: 180
                },
                {
                    prop: 'address',
                    align: 'center',
                    label: '地址'
                }
            ]
        };
    },
    methods: {
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        }
    }
};
</script>
