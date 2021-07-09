<template>
    <div class="w-editor">
        <layout-container>
            <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
            <typography tag="h1" size="big-title">wangEditor</typography>
            <typography class="mt12"> 富文本编辑器。</typography>
        </layout-container>
        <container-card>
            <template #header>
                <typography size="title"> 编辑器演示 </typography>
            </template>
            <wang-editor v-model="content" />
        </container-card>
    </div>
</template>

<script>
import WangEditor from '@components/wang-editor/WangEditor';
import LayoutContainer from '@components/LayoutContainer';
import Typography from '@components/Typography';
import NavBreadcrumb from '@components/NavBreadcrumb';
import ContainerCard from '@components/ContainerCard';
export default {
    name: 'WEditor',
    components: { ContainerCard, NavBreadcrumb, Typography, LayoutContainer, WangEditor },
    data() {
        return {
            breadcrumbs: [
                { path: '/', title: '首页' },
                { title: '富文本编辑器' },
                { title: 'wangEditor' }
            ],
            content: ''
        };
    }
};
</script>

<style lang="scss" scoped></style>
