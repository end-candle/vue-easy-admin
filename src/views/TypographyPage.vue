<template>
    <div class="typography-page">
        <container-card>
            <typography tag="p" size="title"> 通用文本 </typography>
            <typography tag="span">span 排版</typography>
            <typography tag="div"
                >In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of
                development.</typography
            >
            <typography tag="p"
                >In the process of internal desktop applications development, many different design
                specs and implementations would be involved, which might cause designers and
                developers difficulties and duplication and reduce the efficiency of
                development.</typography
            >
        </container-card>
        <container-card>
            <typography tag="p" size="title"> type属性示例 </typography>
            <typography tag="p" type="default">vue-easy-admin (default)</typography>
            <typography tag="p" type="success">vue-easy-admin (success)</typography>
            <typography tag="p" type="warning">vue-easy-admin (warning)</typography>
            <typography tag="p" type="danger">vue-easy-admin (danger)</typography>
            <typography tag="p" type="disabled">vue-easy-admin (disabled)</typography>
            <typography tag="p" type="link">vue-easy-admin (link)</typography>
            <typography tag="p" type="regular">vue-easy-admin (regular)</typography>
            <typography tag="p" type="placeholder">vue-easy-admin (placeholder)</typography>
        </container-card>
        <container-card>
            <typography tag="p" size="title"> size属性示例 </typography>
            <typography tag="div" size="big-title">主标题 (big-title)</typography>
            <typography tag="div" size="title">标题 (title)</typography>
            <typography tag="div" size="subtitle">小标题 (subtitle)</typography>
            <typography tag="div" size="normal">正文 (normal)</typography>
            <typography tag="div" size="small">正文（小） (small)</typography>
            <typography tag="div" size="auxiliary">辅助文字 (auxiliary)</typography>
        </container-card>
        <container-card>
            <typography tag="p" size="title"> 标题组件 </typography>
            <typography tag="h1">h1 排版</typography>
            <typography tag="h2">h2 排版</typography>
            <typography tag="h3">h3 排版</typography>
            <typography tag="h4">h4 排版</typography>
            <typography tag="h5">h5 排版</typography>
        </container-card>
    </div>
</template>

<script>
import Typography from '@components/Typography';
import ContainerCard from '@components/ContainerCard';
export default {
    name: 'FormPage',
    components: { ContainerCard, Typography },
    data() {
        return {};
    }
};
</script>
