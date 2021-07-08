<template>
    <div class="step-two">
        <el-alert title="确认转账后，资金将直接打入对方账户，无法退回。" type="warning" show-icon />
        <el-form
            ref="payForm"
            :model="payForm"
            :rules="rules"
            hide-required-asterisk
            label-width="130px"
            class="step-two-form"
        >
            <ul class="step-two-ul">
                <li class="step-two-li">转账账号：{{ payInfo.account }}</li>
                <li class="step-two-li">收款账户：{{ payInfo.user }}</li>
                <li class="step-two-li">收款人姓名：{{ payInfo.name }}</li>
                <li class="step-two-li">
                    转账金额：<span class="step-two-money">{{ payInfo.money }}</span
                    ><span class="step-two-unit">元</span>
                </li>
            </ul>
            <el-divider />
            <div class="step-two-form__footer">
                <el-form-item class="mb24" label="支付密码" prop="password">
                    <el-input
                        v-model="payForm.password"
                        type="password"
                        placeholder="请输入支付密码"
                        show-password
                    >
                    </el-input>
                </el-form-item>
                <el-form-item class="mb24">
                    <el-button type="primary" @click="submitForm('payForm')">下一步</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'TheStepTwo',
    props: {
        payInfo: {
            type: Object,
            required: true
        }
    },
    emits: ['finished'],
    data() {
        return {
            payForm: {
                password: ''
            },
            rules: {
                password: [{ required: true, message: '请输入支付密码', trigger: 'change' }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('finished');
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
.step-two {
    max-width: 750px;
    margin: 16px auto;
}

.step-two-form {
    max-width: 500px;
    margin: 40px auto 0;
    &__footer {
        max-width: 400px;
    }
}

.step-two-ul {
    padding-left: 0;
}

.step-two-li {
    list-style: none;
    padding-bottom: 16px;
}

.step-two-money {
    font-size: 24px;
}
.step-two-unit {
    font-size: 16px;
    padding-left: 4px;
}
</style>
