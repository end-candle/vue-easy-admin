<template>
    <div>
        <layout-header>
            <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
            <typography tag="h1" size="big-title">分步表单</typography>
            <typography class="mt12">
                将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</typography
            >
        </layout-header>
        <container-card>
            <div class="step-form__header">
                <el-steps
                    :space="200"
                    :active="1"
                    process-status="finish"
                    finish-status="success"
                    :align-center="true"
                >
                    <el-step title="步骤 1"></el-step>
                    <el-step title="步骤 2"></el-step>
                    <el-step title="步骤 3"></el-step>
                </el-steps>
            </div>
            <el-form
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="25%"
                class="basic-form mt24"
            >
                <el-form-item label="活动名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域" class="w100">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动时间" required>
                    <el-date-picker
                        v-model="ruleForm.date1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        class="w100"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="即时配送" prop="delivery">
                    <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式" prop="desc">
                    <el-input v-model="ruleForm.desc" type="textarea" :rows="5"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </container-card>
    </div>
</template>

<script>
import LayoutHeader from '@components/LayoutHeader';
import Typography from '@components/Typography';
import NavBreadcrumb from '@components/NavBreadcrumb';
import ContainerCard from '@components/ContainerCard';

export default {
    name: 'StepForm',
    components: { ContainerCard, NavBreadcrumb, Typography, LayoutHeader },
    data() {
        return {
            breadcrumbs: [{ path: '/', title: '首页' }, { title: '表单页' }, { title: '分步表单' }],
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
                date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
                type: [
                    {
                        type: 'array',
                        required: true,
                        message: '请至少选择一个活动性质',
                        trigger: 'change'
                    }
                ],
                resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
                desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style lang="scss" scoped>
.step-form__header {
    width: 800px;
    margin: 0 auto;
}
.basic-form {
    &::v-deep {
        .el-form-item__content {
            width: 40%;
            min-width: 280px;
        }
    }
}
</style>
