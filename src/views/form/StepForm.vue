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
                <the-steps :active="1">
                    <the-step title="填写转账信息"></the-step>
                    <the-step title="确认转账信息"></the-step>
                    <the-step title="完成"></the-step>
                </the-steps>
            </div>
            <el-form
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                class="basic-form"
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
                <el-form-item label="活动名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
            </el-form>
            <el-divider />
            <div class="basic-form-desc">
                <typography tag="h3" class="text-normal" size="title" type="tip">说明</typography>
                <typography tag="h4" class="text-normal" size="title" type="tip"
                    >转账到支付宝账户</typography
                >
                <typography tag="p" size="normal" type="tip"
                    >如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</typography
                >
                <typography tag="h4" class="text-normal" size="title" type="tip"
                    >转账到银行卡</typography
                >
                <typography tag="p" size="normal" type="tip"
                    >如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</typography
                >
            </div>
        </container-card>
    </div>
</template>

<script>
import LayoutHeader from '@components/LayoutHeader';
import Typography from '@components/Typography';
import NavBreadcrumb from '@components/NavBreadcrumb';
import ContainerCard from '@components/ContainerCard';
import TheStep from '@components/steps/TheStep';
import TheSteps from '@components/steps/TheSteps';

export default {
    name: 'StepForm',
    components: { TheSteps, TheStep, ContainerCard, NavBreadcrumb, Typography, LayoutHeader },
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
    width: 500px;
    margin: 40px auto 0;
}
.basic-form-desc {
    padding: 0 56px;
}
</style>
