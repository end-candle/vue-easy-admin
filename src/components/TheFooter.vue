<template>
    <div class="footer flex flex-direction justify-center align-center">
        <a href="https://element.eleme.cn/#/zh-CN" target="_blank">
            <typography size="small">element-ui</typography>
        </a>
        <typography size="small">Copyright &copy; 2021 末烛出品</typography>
    </div>
</template>

<script>
import Typography from '@components/Typography';
export default {
    name: 'TheFooter',
    components: { Typography }
};
</script>

<style lang="scss" scoped>
.footer {
    min-height: 60px;
}
</style>
