<template>
    <el-breadcrumb class="nav-breadcrumb">
        <el-breadcrumb-item
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="index"
            :to="breadcrumb.path"
            >{{ breadcrumb.title }}</el-breadcrumb-item
        >
    </el-breadcrumb>
</template>

<script>
export default {
    name: 'NavBreadcrumb',
    props: {
        breadcrumbs: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style lang="scss" scoped>
.nav-breadcrumb {
    margin-bottom: 16px;
    &::v-deep {
        .el-breadcrumb__inner.is-link {
            font-weight: normal;
            color: $--color-text-secondary;
        }
        .el-breadcrumb__inner {
            color: $--color-text-primary;
        }
    }
}
</style>
