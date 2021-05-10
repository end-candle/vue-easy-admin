<template>
    <div></div>
</template>

<script>
export default {
    name: 'Redirect',
    created() {
        const path = this.$route.query.path ?? '/';
        this.$router.replace(path);
    }
};
</script>
