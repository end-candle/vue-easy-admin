<template>
    <div class="typography-page">
        <layout-container>
            <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
            <typography tag="h1" size="big-title">排版</typography>
            <typography class="mt12"> 通用文本排版。</typography>
        </layout-container>
        <el-row :gutter="24" class="align-stretch" type="flex">
            <el-col :span="12">
                <container-card class="h100">
                    <template #header>
                        <typography size="title"> type属性示例 </typography>
                    </template>
                    <typography tag="p" type="default">vue-easy-admin (default)</typography>
                    <typography tag="p" type="success">vue-easy-admin (success)</typography>
                    <typography tag="p" type="warning">vue-easy-admin (warning)</typography>
                    <typography tag="p" type="danger">vue-easy-admin (danger)</typography>
                    <typography tag="p" type="disabled">vue-easy-admin (disabled)</typography>
                    <typography tag="p" type="link">vue-easy-admin (link)</typography>
                    <typography tag="p" type="regular">vue-easy-admin (regular)</typography>
                    <typography tag="p" type="placeholder">vue-easy-admin (placeholder)</typography>
                    <typography tag="p" type="tip">vue-easy-admin (tip)</typography>
                </container-card>
            </el-col>
            <el-col :span="12">
                <container-card class="h100">
                    <template #header>
                        <typography size="title"> 标题组件 </typography>
                    </template>
                    <typography tag="h1">h1 排版</typography>
                    <typography tag="h2">h2 排版</typography>
                    <typography tag="h3">h3 排版</typography>
                    <typography tag="h4">h4 排版</typography>
                    <typography tag="h5">h5 排版</typography>
                </container-card>
            </el-col>
        </el-row>
        <el-row :gutter="24" class="mt24 align-stretch" type="flex">
            <el-col :span="12">
                <container-card class="h100">
                    <template #header>
                        <typography size="title"> size属性示例 </typography>
                    </template>
                    <typography tag="div" size="big-title">主标题 (big-title)</typography>
                    <typography tag="div" size="title">标题 (title)</typography>
                    <typography tag="div" size="subtitle">小标题 (subtitle)</typography>
                    <typography tag="div" size="normal">正文 (normal)</typography>
                    <typography tag="div" size="small">正文（小） (small)</typography>
                    <typography tag="div" size="auxiliary">辅助文字 (auxiliary)</typography>
                </container-card>
            </el-col>
            <el-col :span="12">
                <container-card class="h100">
                    <template #header>
                        <typography size="title"> 通用文本 </typography>
                    </template>
                    <typography tag="span">span 排版</typography>
                    <typography tag="div"
                        >In the process of internal desktop applications development, many different
                        design specs and implementations would be involved, which might cause
                        designers and developers difficulties and duplication and reduce the
                        efficiency of development.</typography
                    >
                    <typography tag="p"
                        >In the process of internal desktop applications development, many different
                        design specs and implementations would be involved, which might cause
                        designers and developers difficulties and duplication and reduce the
                        efficiency of development.</typography
                    >
                </container-card>
            </el-col>
        </el-row>
        <container-card class="h100 mt24">
            <template #header>
                <typography size="title"> Typography组件属性 </typography>
            </template>
            <the-attrs-table :data-source="attrsRecords" />
        </container-card>
    </div>
</template>

<script>
import Typography from '@components/Typography';
import ContainerCard from '@components/ContainerCard';
import LayoutContainer from '@components/LayoutContainer';
import NavBreadcrumb from '@components/NavBreadcrumb';
import TheAttrsTable from '@components/TheAttrsTable';
export default {
    name: 'FormPage',
    components: { TheAttrsTable, NavBreadcrumb, LayoutContainer, ContainerCard, Typography },
    data() {
        return {
            breadcrumbs: [{ path: '/', title: '首页' }, { title: '排版' }],
            attrsRecords: [
                {
                    attr: 'type',
                    desc: '文本类型',
                    type: 'string',
                    optional:
                        'default,success,warning,danger,disabled,link,regular,placeholder,tip',
                    default: 'default'
                },
                {
                    attr: 'size',
                    desc: '文本大小',
                    type: 'string',
                    optional: 'auxiliary,small,normal,subtitle,title,big-title',
                    default: 'normal'
                },
                {
                    attr: 'tag',
                    desc: '文本标签',
                    type: 'string',
                    optional: 'h1,h2,h3,h4,h5,span,div,p',
                    default: 'div'
                }
            ]
        };
    }
};
</script>
