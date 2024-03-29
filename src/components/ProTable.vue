<template>
    <div v-loading="loading" class="custom-table">
        <div class="custom-table__body">
            <el-table
                ref="table"
                :data="records"
                v-bind="$attrs"
                v-on="$listeners"
                @sort-change="handleSortChange"
            >
                <el-table-column v-for="(field, index) in fields" :key="index" v-bind="field">
                    <template
                        v-if="field.scopedSlot || field.type === 'no'"
                        #default="{ row, column, $index }"
                    >
                        <span v-if="field.type === 'no'">{{
                            $index + 1 + (current - 1) * size
                        }}</span>
                        <slot
                            v-else
                            :name="field.scopedSlot"
                            v-bind="{
                                row,
                                column,
                                $index,
                                index: $index + 1 + (current - 1) * size
                            }"
                        ></slot>
                    </template>
                    <template v-if="field.headerScopedSlot" #header="{ column, $index }">
                        <slot
                            :name="field.headerScopedSlot"
                            v-bind="{
                                column,
                                $index,
                                index: $index + 1 + (current - 1) * size
                            }"
                        ></slot>
                    </template>
                </el-table-column>
                <template #empty>
                    <the-empty />
                </template>
                <template #append>
                    <slot name="append"></slot>
                </template>
            </el-table>
        </div>
        <slot v-if="paginationVisible" name="tablePagination">
            <div v-if="total !== 0" class="custom-table__footer">
                <el-pagination
                    v-bind="pagination"
                    :current-page.sync="current"
                    :page-size.sync="size"
                    :total="dataSource.length === 0 ? total : dataSource.length"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                >
                </el-pagination>
            </div>
        </slot>
    </div>
</template>

<script>
import TheEmpty from '@components/TheEmpty';
const defaultRequest = async () => {};
export default {
    name: 'ProTable',
    components: { TheEmpty },
    inheritAttrs: false,
    props: {
        request: {
            type: Function,
            default: defaultRequest
        },
        dataSource: {
            type: Array,
            default: () => []
        },
        fields: {
            type: Array,
            default: () => []
        },
        paginationVisible: {
            type: Boolean,
            default: true
        },
        pagination: {
            type: Object,
            default: () => ({
                current: 1,
                size: 10,
                total: 0
            })
        }
    },
    data() {
        return {
            current: this.pagination.current,
            total: this.pagination.total,
            size: this.pagination.size,
            loading: false,
            error: false,
            records: [],
            sorter: {}
        };
    },
    computed: {
        mode() {
            const { dataSource } = this;
            if (dataSource.length > 0) {
                return 'local';
            }
            return 'remote';
        },
        table() {
            return this.$refs.table;
        }
    },
    watch: {
        dataSource: {
            handler() {
                this.initTable();
            },
            immediate: true
        }
    },
    methods: {
        /**
         * 初始化表单
         */
        initTable() {
            this.total = this.dataSource.length;
            this.current = 1;
            this.loadData();
        },
        /**
         * 加载数据
         */
        loadData() {
            if (this.mode === 'local') {
                this.loadLocalData();
            } else if (this.mode === 'remote') {
                this.loadRemoteData();
            }
        },
        /**
         * 加载本地数据
         */
        loadLocalData() {
            const { dataSource, current, size, paginationVisible } = this;
            if (!paginationVisible) {
                this.records = dataSource;
                return true;
            }
            const begin = (current - 1) * size;
            this.records = dataSource.slice(begin, begin + size);
        },
        /**
         * 加载远程数据
         */
        async loadRemoteData() {
            const { size, current, sorter } = this;
            this.loading = true;
            try {
                const { success, data, total } = await this.request({ size, current }, sorter);
                if (success) {
                    this.total = total;
                    this.records = data;
                } else {
                    this.error = true;
                }
            } catch (e) {
                this.error = true;
            } finally {
                this.loading = false;
            }
        },
        /**
         * 页面大小
         * @param val
         */
        handleSizeChange(val) {
            this.size = val;
            this.current = 1;
            this.loadData();
        },
        /**
         * 页码修改
         * @param val
         */
        handleCurrentChange(val) {
            this.current = val;
            this.loadData();
        },
        /**
         * 重新加载数据
         */
        reload() {
            this.current = 1;
            this.loadData();
        },
        /**
         * 重新加载数据
         */
        refresh() {
            this.loadData();
        },
        /**
         * 排序修改
         */
        handleSortChange({ prop, order }) {
            this.sorter = {
                prop,
                order
            };
            this.loadData();
        }
    }
};
</script>

<style lang="scss" scoped>
.custom-table__footer {
    margin-top: 20px;
    line-height: 40px;
    text-align: right;
    &::v-deep {
        .el-pager .number {
            min-width: 30px;
            &.active {
                border: 1px solid $--color-primary;
                border-radius: $--border-radius-base;
            }
        }
    }
}
</style>
