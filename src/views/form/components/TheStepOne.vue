<template>
    <div class="step-one">
        <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            hide-required-asterisk
            label-width="100px"
            class="step-one-form"
        >
            <el-form-item class="mb24" label="付款账户" prop="account">
                <el-select v-model="ruleForm.account" placeholder="请选择付款账户" class="w100">
                    <el-option
                        label="endcandle@alipay.com"
                        value="endcandle@alipay.com"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="mb24" label="收款账户" prop="user">
                <el-input
                    v-model="ruleForm.user"
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
            <el-form-item class="mb24" label="收款人姓名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入收款人姓名"> </el-input>
            </el-form-item>
            <el-form-item class="mb24" label="转账金额" prop="money">
                <el-input
                    v-model="ruleForm.money"
                    prefix-icon="icon-money"
                    placeholder="请输入转账金额"
                >
                </el-input>
            </el-form-item>
            <el-form-item class="mb24">
                <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
            </el-form-item>
        </el-form>
        <el-divider />
        <div class="step-one-desc">
            <h3 class="text-normal step-one-desc__title">说明</h3>
            <h4 class="text-normal step-one-desc__subtitle mb8">转账到支付宝账户</h4>
            <p>
                如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
            </p>
            <h4 class="text-normal step-one-desc__subtitle mb8">转账到银行卡</h4>
            <p>
                如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheStepOne',
    emits: ['finished'],
    data() {
        return {
            ruleForm: {
                name: '',
                account: '',
                user: '',
                type: 1,
                money: null
            },
            rules: {
                account: [{ required: true, message: '请选择付款账号', trigger: 'change' }],
                user: [{ required: true, message: '请输入收款账号', trigger: 'blur' }],
                type: [
                    {
                        required: true,
                        message: '请选择收款账户类型',
                        trigger: 'change'
                    }
                ],
                name: [{ required: true, message: '请输入收款人姓名', trigger: 'blur' }],
                money: [
                    {
                        required: true,
                        message: '请输入正确的转账金额',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('finished', this.ruleForm);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.step-one-form {
    width: 500px;
    margin: 40px auto 0;
}
.step-one-desc {
    padding: 0 56px;
    color: rgba($--color-text-secondary, 0.73);
    &__title {
        font-size: 16px;
    }
    &__subtitle {
        font-size: 14px;
    }
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
