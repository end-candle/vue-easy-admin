<template>
    <div class="step-three">
        <div class="step-three__header text-center">
            <div class="step-three-icon"><i class="el-icon-success"></i></div>
            <div class="step-three-message">操作成功</div>
            <div class="step-three-desc">预计两小时到账</div>
        </div>
        <ul class="step-three-ul">
            <li class="step-three-li">转账账号：{{ payInfo.account }}</li>
            <li class="step-three-li">收款账户：{{ payInfo.user }}</li>
            <li class="step-three-li">收款人姓名：{{ payInfo.name }}</li>
            <li class="step-three-li">
                转账金额：<span class="step-three-money">{{ payInfo.money }}</span
                ><span class="step-three-unit">元</span>
            </li>
        </ul>
        <div class="step-three__footer text-center">
            <el-button type="primary" @click="handleAgain">再转一笔</el-button>
            <el-button @click="handleSeeDetail">查看账单</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheStepThree',
    props: {
        payInfo: {
            type: Object,
            required: true
        }
    },
    emits: ['again', 'see-detail'],
    methods: {
        handleAgain() {
            this.$emit('again');
        },
        handleSeeDetail() {
            this.$emit('see-detail');
        }
    }
};
</script>

<style lang="scss" scoped>
.step-three {
    max-width: 560px;
    margin: 16px auto;
}

.step-three-icon {
    font-size: 72px;
    color: $--color-success;
}

.step-three-message {
    font-size: 24px;
}
.step-three-desc {
    font-size: 14px;
    color: $--color-text-secondary;
}

.step-three-ul {
    padding: 24px 40px;
    margin-top: 24px;
    background-color: #fafafa;
}

.step-three-li {
    list-style: none;
    padding-bottom: 16px;
}

.step-three-money {
    font-size: 24px;
}
.step-three-unit {
    font-size: 16px;
    padding-left: 4px;
}

.step-three__footer {
    margin-top: 32px;
}
</style>
