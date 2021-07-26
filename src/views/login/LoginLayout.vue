<template>
    <div class="login">
        <slot></slot>
        <the-footer class="login__footer" />
    </div>
</template>

<script>
import TheFooter from '@components/TheFooter';

export default {
    name: 'LoginLayout',
    components: { TheFooter }
};
</script>

<style lang="scss" scoped>
.login {
    position: relative;
    height: 100vh;
    background: url('~@images/bg.jpg') no-repeat center center;
    background-size: cover;

    &::before {
        content: '';
        background-color: rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
}

.login__footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    &::v-deep {
        .typography {
            color: #ffffff;
        }

        a:hover {
            text-decoration: none;
        }
    }
}
</style>
