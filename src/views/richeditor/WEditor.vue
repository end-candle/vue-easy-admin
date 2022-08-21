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
        <container-card class="mt24">
            <template #header>
                <typography size="title"> WangEditor组件属性 </typography>
            </template>
            <the-attrs-table :data-source="attrsRecords" />
        </container-card>
    </div>
</template>

<script>
import WangEditor from '@components/wang-editor/WangEditor';
import LayoutContainer from '@components/LayoutContainer';
import Typography from '@components/Typography';
import NavBreadcrumb from '@components/NavBreadcrumb';
import ContainerCard from '@components/ContainerCard';
import TheAttrsTable from '@components/TheAttrsTable';
export default {
    name: 'WEditor',
    components: {
        TheAttrsTable,
        ContainerCard,
        NavBreadcrumb,
        Typography,
        LayoutContainer,
        WangEditor
    },
    data() {
        return {
            breadcrumbs: [
                { path: '/', title: '首页' },
                { title: '富文本编辑器' },
                { title: 'wangEditor' }
            ],
            content: '',
            attrsRecords: [
                {
                    attr: 'value/v-model',
                    desc: '富文本内容',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'config',
                    desc: 'WangEditor配置项',
                    type: 'object',
                    optional: '-',
                    default: `{
                        zIndex: 3
                    }`
                },
                {
                    attr: 'setup',
                    desc: 'WangEditor事件监听对象，推荐事件在该对象处理',
                    type: 'object',
                    optional: '-',
                    default: '-'
                }
            ]
        };
    }
};
</script>
