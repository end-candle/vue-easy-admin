<template>
    <el-form-item class="mb0" v-bind="$attrs" v-on="$listeners">
        <el-input
            readonly
            class="mr8 color-picker__input"
            :value="color"
            @click.native="handleTrigger"
        ></el-input>
        <el-color-picker ref="picker" v-model="color" @change="handleChangeColor"></el-color-picker>
    </el-form-item>
</template>

<script>
export default {
    name: 'TheColorPicker',
    props: {
        value: {
            type: String
        }
    },
    data() {
        return {
            color: ''
        };
    },
    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.color = val;
            }
        }
    },
    methods: {
        handleChangeColor(color) {
            this.$emit('input', color);
        },
        handleTrigger() {
            this.$refs.picker.handleTrigger();
        }
    }
};
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__content {
    display: flex;
}

::v-deep .el-form-item__label {
    color: $--color-text-primary;
}

.color-picker__input::v-deep .el-input__inner {
    cursor: pointer;
}
</style>
