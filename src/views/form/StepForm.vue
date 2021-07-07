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
                <the-steps :active="step">
                    <the-step title="填写转账信息"></the-step>
                    <the-step title="确认转账信息"></the-step>
                    <the-step title="完成"></the-step>
                </the-steps>
            </div>
            <el-form
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                hide-required-asterisk
                label-width="100px"
                class="basic-form"
            >
                <el-form-item class="mb24" label="付款账户" prop="name">
                    <el-select v-model="ruleForm.name" placeholder="请选择付款账户" class="w100">
                        <el-option label="付款账户一" value="shanghai"></el-option>
                        <el-option label="付款账户二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="mb24" label="收款账户" prop="account">
                    <el-input
                        v-model="ruleForm.account"
                        placeholder="请输入收款账户"
                        class="input-with-select"
                    >
                        <template #prepend>
                            <el-select
                                v-model="ruleForm.type"
                                class="input-select"
                                placeholder="请选择"
                            >
                                <el-option label="支付宝" :value="1"></el-option>
                                <el-option label="银行卡" :value="2"></el-option>
                            </el-select>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item class="mb24" label="收款人姓名" prop="desc">
                    <el-input v-model="ruleForm.name" placeholder="请输入收款人姓名"> </el-input>
                </el-form-item>
                <el-form-item class="mb24" label="转账金额" prop="desc">
                    <el-input
                        v-model="ruleForm.name"
                        prefix-icon="el-icon-monitor"
                        placeholder="请输入转账金额"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item class="mb24">
                    <el-button type="primary">下一步</el-button>
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
            step: 0,
            ruleForm: {
                name: '',
                type: 1,
                date1: '',
                date2: '',
                delivery: false,
                resource: '',
                account: ''
            },
            rules: {
                name: [{ required: true, message: '请选择付款账号', trigger: 'change' }],
                date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
                type: [
                    {
                        required: true,
                        message: '请选择收款账户类型',
                        trigger: 'change'
                    }
                ],
                resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
                account: [{ required: true, message: '请输入收款账号', trigger: 'blur' }]
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
::v-deep {
    .input-select .el-input {
        width: 100px;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
}
</style>
