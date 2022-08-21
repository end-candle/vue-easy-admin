<template>
    <div>
        <layout-container>
            <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
            <typography tag="h1" size="big-title">动态表单</typography>
            <typography class="mt12"> 基于jsonschema动态生成表单。</typography>
        </layout-container>
        <container-card>
            <dynamic-form></dynamic-form>
        </container-card>
    </div>
</template>

<script>
import LayoutContainer from '@components/LayoutContainer';
import NavBreadcrumb from '@components/NavBreadcrumb';
import Typography from '@components/Typography';
import ContainerCard from '@components/ContainerCard';
import DynamicForm from '@components/dynamic-form/DynamicForm';
export default {
    name: 'DForm',
    components: { DynamicForm, ContainerCard, Typography, NavBreadcrumb, LayoutContainer },
    data() {
        return {
            breadcrumbs: [{ path: '/', title: '首页' }, { title: '表单页' }, { title: '动态表单' }]
        };
    }
};
</script>
