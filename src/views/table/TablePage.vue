<template>
    <div class="table">
        <layout-container>
            <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
            <typography tag="h1" size="big-title">高级表格</typography>
            <typography class="mt12"> 封装原el-table组件，封装请求和分页。</typography>
        </layout-container>
        <el-row :gutter="24">
            <el-col :span="12">
                <container-card>
                    <template #header>
                        <typography size="title"> 基础表格 </typography>
                    </template>
                    <pro-table
                        :header-cell-style="{
                            background: '#fafafa',
                            color: '#333333',
                            'font-weight': 500
                        }"
                        :fields="fields"
                        :data-source="memberList"
                        :pagination-visible="false"
                    >
                        <template #actions>
                            <el-button type="text" class="p0">编辑</el-button>
                            <el-divider direction="vertical" />
                            <el-popconfirm
                                icon="el-icon-info"
                                icon-color="red"
                                title="是否要删除此行？"
                                cancel-button-type=""
                            >
                                <template #reference>
                                    <el-button type="text" class="p0">删除</el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </pro-table>
                </container-card>
            </el-col>
            <el-col :span="12">
                <container-card>
                    <template #header>
                        <typography size="title">
                            <typography size="title"> 带斑马纹表格 </typography>
                        </typography>
                    </template>
                    <pro-table
                        :header-cell-style="{
                            background: '#fafafa',
                            color: '#333333',
                            'font-weight': 500
                        }"
                        :fields="fields"
                        stripe
                        :data-source="memberList"
                        :pagination-visible="false"
                    >
                        <template #actions>
                            <el-button type="text" class="p0">编辑</el-button>
                            <el-divider direction="vertical" />
                            <el-popconfirm
                                icon="el-icon-info"
                                icon-color="red"
                                title="是否要删除此行？"
                                cancel-button-type=""
                            >
                                <template #reference>
                                    <el-button type="text" class="p0">删除</el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </pro-table>
                </container-card>
            </el-col>
        </el-row>
        <el-row :gutter="24" class="mt24">
            <el-col :span="12">
                <container-card>
                    <template #header>
                        <typography size="title"> 带边框表格 </typography>
                    </template>
                    <pro-table
                        :header-cell-style="{
                            background: '#fafafa',
                            color: '#333333',
                            'font-weight': 500
                        }"
                        :fields="fields"
                        border
                        :data-source="memberList"
                        :pagination-visible="false"
                    >
                        <template #actions>
                            <el-button type="text" class="p0">编辑</el-button>
                            <el-divider direction="vertical" />
                            <el-popconfirm
                                icon="el-icon-info"
                                icon-color="red"
                                title="是否要删除此行？"
                                cancel-button-type=""
                            >
                                <template #reference>
                                    <el-button type="text" class="p0">删除</el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </pro-table>
                </container-card>
            </el-col>
            <el-col :span="12">
                <container-card>
                    <template #header>
                        <typography size="title">
                            <typography size="title"> 带状态表格 </typography>
                        </typography>
                    </template>
                    <pro-table
                        :header-cell-style="{
                            background: '#fafafa',
                            color: '#333333',
                            'font-weight': 500
                        }"
                        :fields="fields"
                        :row-class-name="tableRowClassName"
                        :data-source="memberList"
                        :pagination-visible="false"
                    >
                        <template #actions>
                            <el-button type="text" class="p0">编辑</el-button>
                            <el-divider direction="vertical" />
                            <el-popconfirm
                                icon="el-icon-info"
                                icon-color="red"
                                title="是否要删除此行？"
                                cancel-button-type=""
                            >
                                <template #reference>
                                    <el-button type="text" class="p0">删除</el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </pro-table>
                </container-card>
            </el-col>
        </el-row>
        <container-card class="mt24">
            <template #header>
                <typography size="title"> 异步请求表格 </typography>
            </template>
            <pro-table
                :header-cell-style="{
                    background: '#fafafa',
                    color: '#333333',
                    'font-weight': 500
                }"
                :fields="fields"
                :data-source="memberList"
                :pagination-visible="false"
            >
                <template #actions>
                    <el-button type="text" class="p0">编辑</el-button>
                    <el-divider direction="vertical" />
                    <el-popconfirm
                        icon="el-icon-info"
                        icon-color="red"
                        title="是否要删除此行？"
                        cancel-button-type=""
                    >
                        <template #reference>
                            <el-button type="text" class="p0">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </pro-table>
        </container-card>
    </div>
</template>

<script>
import ContainerCard from '@components/ContainerCard';
import ProTable from '@components/ProTable';
import layoutContainer from '@components/LayoutContainer';
import NavBreadcrumb from '@components/NavBreadcrumb';
import Typography from '@components/Typography';
export default {
    name: 'TablePage',
    components: { NavBreadcrumb, layoutContainer, ProTable, ContainerCard, Typography },
    data() {
        return {
            breadcrumbs: [{ path: '/', title: '首页' }, { title: '高级表格' }],
            fields: [
                {
                    prop: 'name',
                    label: '成员姓名'
                },
                {
                    prop: 'no',
                    label: '工号'
                },
                {
                    prop: 'department',
                    label: '所属部门'
                },
                {
                    prop: 'actions',
                    scopedSlot: 'actions',
                    label: '操作'
                }
            ],
            memberList: [
                {
                    name: '张三',
                    no: '001',
                    department: '行政部'
                },
                {
                    name: '李四',
                    no: '002',
                    department: 'IT部'
                },
                {
                    name: '王五',
                    no: '003',
                    department: '财务部'
                }
            ]
        };
    },
    methods: {
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 0) {
                return 'warning-row';
            } else if (rowIndex === 2) {
                return 'success-row';
            }
            return '';
        }
    }
};
</script>

<style>
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}
</style>
