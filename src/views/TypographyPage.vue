<template>
    <div class="typography-page">
        <layout-container>
            <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
            <typography tag="h1" size="big-title">{{ $t('typography.title') }}</typography>
            <typography class="mt12"> {{ $t('typography.description') }}</typography>
        </layout-container>
        <el-row :gutter="24" class="align-stretch" type="flex">
            <el-col :span="12">
                <container-card class="h100">
                    <template #header>
                        <typography size="title"> {{ $t('typography.typeDemo') }} </typography>
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
                        <typography size="title"> {{ $t('typography.tagDemo') }} </typography>
                    </template>
                    <typography tag="h1">This Is The Biggest Heading</typography>
                    <typography tag="h2">This Is A Slightly Smaller Heading</typography>
                    <typography tag="h3">This Is A Slightly Smaller Heading</typography>
                    <typography tag="h4">This Is A Slightly Smaller Heading</typography>
                    <typography tag="h5">This Is A Slightly Smaller Heading</typography>
                    <typography tag="h6">This Is A Slightly Smaller Heading</typography>
                    <typography tag="span">This Is A span</typography>
                    <typography tag="div">This Is A Div</typography>
                    <typography tag="p">This Is A Paragraph</typography>
                </container-card>
            </el-col>
        </el-row>
        <container-card class="h100 mt24">
            <template #header>
                <typography size="title"> {{ $t('typography.sizeDemo') }} </typography>
            </template>
            <typography tag="div" size="big-title"
                >{{ $t('typography.size.bigTitle') }} (big-title)</typography
            >
            <typography tag="div" size="title"
                >{{ $t('typography.size.title') }} (title)</typography
            >
            <typography tag="div" size="subtitle"
                >{{ $t('typography.size.subtitle') }} (subtitle)</typography
            >
            <typography tag="div" size="normal"
                >{{ $t('typography.size.normalText') }} (normal)</typography
            >
            <typography tag="div" size="small"
                >{{ $t('typography.size.smallText') }}(small)</typography
            >
            <typography tag="div" size="auxiliary"
                >{{ $t('typography.size.auxiliary') }} (auxiliary)</typography
            >
        </container-card>
        <container-card class="mt24">
            <template #header>
                <typography size="title"> {{ $t('typography.component.property') }} </typography>
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
import i18n from '@i18n';

export default {
    name: 'TypographyPage',
    components: { TheAttrsTable, NavBreadcrumb, LayoutContainer, ContainerCard, Typography },
    data() {
        return {
            breadcrumbs: [
                { path: '/', title: i18n.t('typography.breadcrumb.home') },
                { title: i18n.t('typography.breadcrumb.typography') }
            ],
            attrsRecords: [
                {
                    attr: 'type',
                    desc: i18n.t('typography.attrs.type'),
                    type: 'string',
                    optional:
                        'default,success,warning,danger,disabled,link,regular,placeholder,tip',
                    default: 'default'
                },
                {
                    attr: 'size',
                    desc: i18n.t('typography.attrs.size'),
                    type: 'string',
                    optional: 'auxiliary,small,normal,subtitle,title,big-title',
                    default: 'normal'
                },
                {
                    attr: 'tag',
                    desc: i18n.t('typography.attrs.tag'),
                    type: 'string',
                    optional: 'h1,h2,h3,h4,h5,h6,span,div,p',
                    default: 'div'
                }
            ]
        };
    },
    created() {
        console.log(this);
    }
};
</script>
