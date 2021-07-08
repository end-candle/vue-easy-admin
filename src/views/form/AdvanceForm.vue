<template>
    <div>
        <layout-header>
            <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
            <typography tag="h1" size="big-title">高级表单</typography>
            <typography class="mt12"> 高级表单常见于一次性输入和提交大批量数据的场景。</typography>
        </layout-header>
        <el-form ref="advanceForm" :model="formData" :rules="rules">
            <container-card>
                <template #header>
                    <typography size="title"> 仓库管理 </typography>
                </template>
                <el-row :gutter="24">
                    <el-col :sm="24" :md="12" :lg="6">
                        <el-form-item label="仓库名:" prop="name">
                            <el-input
                                v-model="formData.name"
                                placeholder="请输入仓库名称"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12" :lg="8" :xl="{ span: 7, offset: 1 }">
                        <el-form-item label="仓库域名:" prop="domain">
                            <el-input v-model="formData.domain" placeholder="请输入">
                                <template #prepend>http://</template>
                                <template #append>.com</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="10" :xl="{ span: 9, offset: 1 }">
                        <el-form-item label="仓库管理员:" prop="admin">
                            <el-select
                                v-model="formData.admin"
                                class="w100"
                                placeholder="请选择管理员"
                            >
                                <el-option
                                    v-for="item in adminList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :sm="24" :md="12" :lg="6">
                        <el-form-item label="审批人:" prop="leader">
                            <el-select
                                v-model="formData.leader"
                                class="w100"
                                placeholder="请选择管理员"
                            >
                                <el-option
                                    v-for="item in adminList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12" :lg="8" :xl="{ span: 7, offset: 1 }">
                        <el-form-item label="生效日期:" prop="workDate">
                            <el-date-picker
                                v-model="formData.workDate"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                clearable
                                class="w100"
                            >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="10" :xl="{ span: 9, offset: 1 }">
                        <el-form-item label="仓库类型:" prop="type">
                            <el-select
                                v-model="formData.type"
                                class="w100"
                                placeholder="请选择仓库类型"
                            >
                                <el-option
                                    v-for="item in repoTypeList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </container-card>
            <container-card class="mt24">
                <template #header>
                    <typography size="title"> 任务管理 </typography>
                </template>
                <el-row :gutter="24">
                    <el-col :sm="24" :md="12" :lg="6">
                        <el-form-item label="任务名:" prop="workName">
                            <el-input
                                v-model="formData.workName"
                                placeholder="请输入任务名称"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12" :lg="8" :xl="{ span: 7, offset: 1 }">
                        <el-form-item label="任务描述:" prop="workDesc">
                            <el-input v-model="formData.workDesc" placeholder="请输入任务描述">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="10" :xl="{ span: 9, offset: 1 }">
                        <el-form-item label="执行人:" prop="executor">
                            <el-select
                                v-model="formData.executor"
                                class="w100"
                                placeholder="请选择执行人"
                            >
                                <el-option
                                    v-for="item in adminList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :sm="24" :md="12" :lg="6">
                        <el-form-item label="责任人:" prop="charger">
                            <el-select
                                v-model="formData.charger"
                                class="w100"
                                placeholder="请选择责任人"
                            >
                                <el-option
                                    v-for="item in adminList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="12" :lg="8" :xl="{ span: 7, offset: 1 }">
                        <el-form-item label="提醒时间:" prop="awakeDate">
                            <el-time-picker
                                v-model="formData.awakeDate"
                                arrow-control
                                class="w100"
                                placeholder="请选择时间"
                            >
                            </el-time-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :sm="24" :md="24" :lg="10" :xl="{ span: 9, offset: 1 }">
                        <el-form-item label="任务类型:" prop="workType">
                            <el-select
                                v-model="formData.workType"
                                class="w100"
                                placeholder="请选择任务类型"
                            >
                                <el-option
                                    v-for="item in workTypeList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </container-card>
            <container-card class="mt24">
                <template #header>
                    <typography size="title"> 成员管理 </typography>
                </template>
                <pro-table :fields="fields" :data-source="memberList" :pagination-visible="false">
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
                <el-button icon="el-icon-plus" :plain="true" class="w100 mt24">添加成员</el-button>
            </container-card>
        </el-form>
    </div>
</template>

<script>
import ContainerCard from '@components/ContainerCard';
import Typography from '@components/Typography';
import ProTable from '@components/ProTable';
import LayoutHeader from '@components/LayoutHeader';
import NavBreadcrumb from '@components/NavBreadcrumb';
export default {
    name: 'AdvanceForm',
    components: { NavBreadcrumb, LayoutHeader, ProTable, Typography, ContainerCard },
    data() {
        return {
            breadcrumbs: [{ path: '/', title: '首页' }, { title: '表单页' }, { title: '高级表单' }],
            formData: {
                name: '',
                domain: '',
                admin: '',
                leader: '',
                workDate: [],
                type: '',
                workName: '',
                workDesc: '',
                executor: '',
                charger: '',
                awakeDate: '',
                workType: ''
            },
            rules: {
                name: {
                    required: true,
                    message: '请输入仓库名称',
                    trigger: 'blur'
                },
                domain: {
                    required: true,
                    message: '请输入仓库域名',
                    trigger: 'blur'
                },
                workName: {
                    required: true,
                    message: '请输入任务名称',
                    trigger: 'blur'
                },
                workDesc: {
                    required: true,
                    message: '请输入任务描述',
                    trigger: 'blur'
                },
                executor: {
                    required: true,
                    message: '请选择执行人',
                    trigger: 'change'
                },
                charger: {
                    required: true,
                    message: '请选择责任人',
                    trigger: 'change'
                },
                awakeDate: {
                    required: true,
                    message: '请选择提醒时间',
                    trigger: 'change'
                },
                workType: {
                    required: true,
                    message: '请选择任务类型',
                    trigger: 'change'
                }
            },
            repoTypeList: [
                {
                    label: '公开',
                    value: 0
                },
                {
                    label: '私密',
                    value: 1
                }
            ],
            workTypeList: [
                {
                    label: '周期执行',
                    value: 0
                },
                {
                    label: '定时执行',
                    value: 1
                }
            ],
            fields: [
                {
                    name: 'name',
                    title: '成员姓名'
                },
                {
                    name: 'no',
                    title: '工号'
                },
                {
                    name: 'department',
                    title: '所属部门'
                },
                {
                    name: 'actions',
                    slot: 'actions',
                    title: '操作'
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
    computed: {
        adminList() {
            return this.memberList
                .filter((item) => !!item.no)
                .map(({ name, no }) => ({ label: name, value: no }));
        }
    }
};
</script>

<style lang="scss" scoped></style>
