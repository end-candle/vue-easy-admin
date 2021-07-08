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
            <the-step-one v-if="step === 0" @finished="handleNext" />
            <the-step-two v-if="step === 1" :pay-info="payInfo" @finished="handleFinished" />
            <the-step-three v-if="step === 2" :pay-info="payInfo" @again="handleAgain" />
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
import TheStepOne from '@views/form/components/TheStepOne';
import TheStepTwo from '@views/form/components/TheStepTwo';
import TheStepThree from '@views/form/components/TheStepThree';

export default {
    name: 'StepForm',
    components: {
        TheStepThree,
        TheStepTwo,
        TheStepOne,
        TheSteps,
        TheStep,
        ContainerCard,
        NavBreadcrumb,
        Typography,
        LayoutHeader
    },
    data() {
        return {
            breadcrumbs: [{ path: '/', title: '首页' }, { title: '表单页' }, { title: '分步表单' }],
            step: 0,
            payInfo: {}
        };
    },
    methods: {
        handleNext(payInfo) {
            this.step++;
            this.payInfo = payInfo;
        },
        handleFinished() {
            this.step++;
        },
        handleAgain() {
            this.step = 0;
        }
    }
};
</script>

<style lang="scss" scoped>
.step-form__header {
    max-width: 750px;
    margin: 0 auto;
}
</style>
