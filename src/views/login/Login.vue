<template>
    <login-layout>
        <el-form :model="formData" class="login__form">
            <typography class="text-center mb12" size="big-title">登录</typography>
            <el-form-item prop="username">
                <el-input
                    v-model="formData.username"
                    placeholder="请输入用户名"
                    prefix-icon="el-icon-user"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                    v-model="formData.password"
                    placeholder="请输入密码"
                    show-password
                    prefix-icon="el-icon-lock"
                ></el-input>
            </el-form-item>
            <div class="mb22 flex justify-between align-center">
                <el-checkbox v-model="remember">记住密码</el-checkbox>
                <el-link type="primary">忘记密码</el-link>
            </div>
            <el-form-item>
                <el-button class="w100" type="primary" :loading="loading" @click="login"
                    >登录
                </el-button>
            </el-form-item>
            <div class="text-center">
                <i class="loginfont icon-qq"></i>
                <i class="loginfont icon-weibo"></i>
                <i class="loginfont icon-weixin"></i>
            </div>
        </el-form>
    </login-layout>
</template>

<script>
import LoginLayout from '@views/login/LoginLayout';
import Typography from '@components/Typography';
import { login } from '@services/login';
import { setAuth } from '@helpers/auth';
export default {
    name: 'Login',
    components: { Typography, LoginLayout },
    data() {
        return {
            formData: {
                username: 'admin',
                password: '123456'
            },
            loading: false,
            remember: true
        };
    },
    methods: {
        async login() {
            this.loading = true;
            try {
                const { username, password } = this.formData;
                const { data } = await login(username, password);
                const { token, role } = data;
                setAuth(token, role);
                const { redirectUrl = '/' } = this.$route.query;
                this.$router.replace(redirectUrl).catch((e) => {});
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~@assets/fonts/login/iconfont.css';

.login__form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 360px;
    margin: 0 auto;
    background-color: #ffffff;
    box-shadow: $--box-shadow-base;
    padding: $--main-padding;
    border-radius: $--border-radius-base;
}

.loginfont {
    font-size: 32px;
    cursor: pointer;
    & + & {
        margin-left: 20px;
    }
    &.icon-qq {
        color: rgb(52, 146, 237);
    }
    &.icon-weibo {
        color: rgb(77, 175, 41);
    }
    &.icon-weixin {
        color: rgb(207, 25, 0);
    }
}
</style>
