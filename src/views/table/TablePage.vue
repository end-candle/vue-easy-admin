<template>
    <div class="table">
        <layout-container>
            <nav-breadcrumb :breadcrumbs="breadcrumbs"></nav-breadcrumb>
            <typography tag="h1" size="big-title">高级表格</typography>
            <typography class="mt12"> 封装原el-table组件，封装请求和分页。</typography>
        </layout-container>
        <el-row :gutter="24">
            <el-col :span="12">
                <container-card>
                    <template #header>
                        <typography size="title"> 基础表格 </typography>
                    </template>
                    <pro-table
                        :header-cell-style="{
                            background: '#fafafa',
                            color: '#333333',
                            'font-weight': 500
                        }"
                        :fields="fields"
                        :data-source="memberList"
                        :pagination-visible="false"
                    >
                        <template #actions>
                            <el-button type="text" class="p0">编辑</el-button>
                            <el-divider direction="vertical" />
                            <el-popconfirm
                                icon="el-icon-info"
                                icon-color="red"
                                title="是否要删除此行？"
                                cancel-button-type=""
                            >
                                <template #reference>
                                    <el-button type="text" class="p0">删除</el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </pro-table>
                </container-card>
            </el-col>
            <el-col :span="12">
                <container-card>
                    <template #header>
                        <typography size="title">
                            <typography size="title"> 带斑马纹表格 </typography>
                        </typography>
                    </template>
                    <pro-table
                        :header-cell-style="{
                            background: '#fafafa',
                            color: '#333333',
                            'font-weight': 500
                        }"
                        :fields="fields"
                        stripe
                        :data-source="memberList"
                        :pagination-visible="false"
                    >
                        <template #actions>
                            <el-button type="text" class="p0">编辑</el-button>
                            <el-divider direction="vertical" />
                            <el-popconfirm
                                icon="el-icon-info"
                                icon-color="red"
                                title="是否要删除此行？"
                                cancel-button-type=""
                            >
                                <template #reference>
                                    <el-button type="text" class="p0">删除</el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </pro-table>
                </container-card>
            </el-col>
        </el-row>
        <el-row :gutter="24" class="mt24">
            <el-col :span="12">
                <container-card>
                    <template #header>
                        <typography size="title"> 带边框表格 </typography>
                    </template>
                    <pro-table
                        :header-cell-style="{
                            background: '#fafafa',
                            color: '#333333',
                            'font-weight': 500
                        }"
                        :fields="fields"
                        border
                        :data-source="memberList"
                        :pagination-visible="false"
                    >
                        <template #actions>
                            <el-button type="text" class="p0">编辑</el-button>
                            <el-divider direction="vertical" />
                            <el-popconfirm
                                icon="el-icon-info"
                                icon-color="red"
                                title="是否要删除此行？"
                                cancel-button-type=""
                            >
                                <template #reference>
                                    <el-button type="text" class="p0">删除</el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </pro-table>
                </container-card>
            </el-col>
            <el-col :span="12">
                <container-card>
                    <template #header>
                        <typography size="title">
                            <typography size="title"> 带状态表格 </typography>
                        </typography>
                    </template>
                    <pro-table
                        :header-cell-style="{
                            background: '#fafafa',
                            color: '#333333',
                            'font-weight': 500
                        }"
                        :fields="fields"
                        :row-class-name="tableRowClassName"
                        :data-source="memberList"
                        :pagination-visible="false"
                    >
                        <template #actions>
                            <el-button type="text" class="p0">编辑</el-button>
                            <el-divider direction="vertical" />
                            <el-popconfirm
                                icon="el-icon-info"
                                icon-color="red"
                                title="是否要删除此行？"
                                cancel-button-type=""
                            >
                                <template #reference>
                                    <el-button type="text" class="p0">删除</el-button>
                                </template>
                            </el-popconfirm>
                        </template>
                    </pro-table>
                </container-card>
            </el-col>
        </el-row>
        <container-card class="mt24">
            <template #header>
                <typography size="title"> 异步请求表格 </typography>
            </template>
            <pro-table
                :header-cell-style="{
                    background: '#fafafa',
                    color: '#333333',
                    'font-weight': 500
                }"
                :fields="fields"
                :request="requestData"
            >
                <template #actions>
                    <el-button type="text" class="p0">编辑</el-button>
                    <el-divider direction="vertical" />
                    <el-popconfirm
                        icon="el-icon-info"
                        icon-color="red"
                        title="是否要删除此行？"
                        cancel-button-type=""
                    >
                        <template #reference>
                            <el-button type="text" class="p0">删除</el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </pro-table>
        </container-card>
        <container-card class="mt24">
            <template #header>
                <typography size="title"> Table属性 </typography>
            </template>
            <the-attrs-table :data-source="tableAttrsRecords" :desc-width="300" :attr-width="200" />
        </container-card>
        <container-card class="mt24">
            <template #header>
                <typography size="title"> Table field属性 </typography>
            </template>
            <the-attrs-table :data-source="fieldAttrsRecords" :desc-width="300" :attr-width="200" />
        </container-card>
        <container-card class="mt24">
            <template #header>
                <typography size="title"> Table pagination属性 </typography>
            </template>
            <the-attrs-table
                :data-source="paginationAttrsRecords"
                :desc-width="300"
                :attr-width="200"
            />
        </container-card>
        <container-card class="mt24">
            <template #header>
                <typography size="title"> Table事件 </typography>
            </template>
            <the-events-table
                :data-source="tableEventsRecords"
                :desc-width="300"
                :name-width="200"
                :params-width="400"
            />
        </container-card>
        <container-card class="mt24">
            <template #header>
                <typography size="title">
                    Table方法（通过ref对象table属性调用el-table的方法）
                </typography>
            </template>
            <the-methods-table
                :data-source="tableMethodsRecords"
                :desc-width="300"
                :name-width="200"
                :params-width="400"
            />
        </container-card>
    </div>
</template>

<script>
import ContainerCard from '@components/ContainerCard';
import ProTable from '@components/ProTable';
import layoutContainer from '@components/LayoutContainer';
import NavBreadcrumb from '@components/NavBreadcrumb';
import Typography from '@components/Typography';
import TheAttrsTable from '@components/TheAttrsTable';
import TheEventsTable from '@components/TheEventsTable';
import TheMethodsTable from '@components/TheMethodsTable';
import { queryDepartmentUserList } from '@services/table';
export default {
    name: 'TablePage',
    components: {
        NavBreadcrumb,
        layoutContainer,
        ProTable,
        ContainerCard,
        Typography,
        TheAttrsTable,
        TheEventsTable,
        TheMethodsTable
    },
    data() {
        return {
            breadcrumbs: [{ path: '/', title: '首页' }, { title: '高级表格' }],
            fields: [
                {
                    prop: 'name',
                    label: '成员姓名'
                },
                {
                    prop: 'no',
                    label: '工号',
                    sortable: 'custom'
                },
                {
                    prop: 'department',
                    label: '所属部门'
                },
                {
                    prop: 'actions',
                    scopedSlot: 'actions',
                    label: '操作'
                }
            ],
            memberList: [
                {
                    name: '张三',
                    no: '001',
                    department: '行政部'
                },
                {
                    name: '李四',
                    no: '002',
                    department: 'IT部'
                },
                {
                    name: '王五',
                    no: '003',
                    department: '财务部'
                }
            ],
            tableAttrsRecords: [
                {
                    attr: 'fields',
                    desc: '显示的表头',
                    type: 'array<object>',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'dataSource',
                    desc: '显示的数据',
                    type: 'array',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'request',
                    desc: '加载远程数据，异步函数，含两个参数，第一个参数为pagination（包含分页信息）, sorter（包含排序信息）',
                    type: 'function',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'paginationVisible',
                    desc: '是否显示分页',
                    type: 'boolean',
                    optional: 'true/false',
                    default: 'true'
                },
                {
                    attr: 'pagination',
                    desc: '详见分页属性',
                    type: 'object',
                    optional: '-',
                    default: `{
                        current: 1,
                        size: 10,
                        total: 0
                    }`
                },
                {
                    attr: 'height',
                    desc: 'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。',
                    type: 'string/number',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'max-height',
                    desc: 'Table 的最大高度。合法的值为数字或者单位为 px 的高度。',
                    type: 'string/number',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'stripe',
                    desc: '是否为斑马纹 table',
                    type: 'boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'border',
                    desc: '是否带有纵向边框',
                    type: 'boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'size',
                    desc: 'Table 的尺寸',
                    type: 'string',
                    optional: 'medium / small / mini',
                    default: '-'
                },
                {
                    attr: 'fit',
                    desc: '列的宽度是否自撑开',
                    type: 'boolean',
                    optional: '-',
                    default: true
                },
                {
                    attr: 'show-header',
                    desc: '是否显示表头',
                    type: 'boolean',
                    optional: '-',
                    default: true
                },
                {
                    attr: 'highlight-current-row',
                    desc: '是否要高亮当前行',
                    type: 'boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'current-row-key',
                    desc: '当前行的 key，只写属性',
                    type: 'String,Number',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'row-class-name',
                    desc: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。',
                    type: 'Function({row, rowIndex})/String',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'row-style',
                    desc: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。',
                    type: 'Function({row, rowIndex})/Object',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'cell-class-name',
                    desc: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。',
                    type: 'Function({row, column, rowIndex, columnIndex})/String',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'cell-style',
                    desc: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。',
                    type: 'Function({row, column, rowIndex, columnIndex})/Object',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'header-row-class-name',
                    desc: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。',
                    type: 'Function({row, rowIndex})/String',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'header-row-style',
                    desc: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
                    type: 'Function({row, rowIndex})/Object',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'header-cell-class-name',
                    desc: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。',
                    type: 'Function({row, column, rowIndex, columnIndex})/String',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'header-cell-style',
                    desc: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。',
                    type: 'Function({row, column, rowIndex, columnIndex})/Object',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'row-key',
                    desc: '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。',
                    type: 'Function(row)/String',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'empty-text',
                    desc: '空数据时显示的文本内容，也可以通过 slot="empty" 设置',
                    type: 'String',
                    optional: '-',
                    default: '暂无数据'
                },
                {
                    attr: 'default-expand-all',
                    desc: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效',
                    type: 'Boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'expand-row-keys',
                    desc: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。',
                    type: 'Array',
                    optional: '-',
                    default: ''
                },
                {
                    attr: 'default-sort',
                    desc: '默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序',
                    type: 'Object',
                    optional: 'order: ascending, descending',
                    default: '如果只指定了prop, 没有指定order, 则默认顺序是ascending'
                },
                {
                    attr: 'tooltip-effect',
                    desc: 'tooltip effect 属性',
                    type: 'String',
                    optional: 'dark/light',
                    default: ''
                },
                {
                    attr: 'show-summary',
                    desc: '是否在表尾显示合计行',
                    type: 'Boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'sum-text',
                    desc: '合计行第一列的文本',
                    type: 'String',
                    optional: '-',
                    default: '合计'
                },
                {
                    attr: 'summary-method',
                    desc: '自定义的合计计算方法',
                    type: 'Function({ columns, data })',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'span-method',
                    desc: '合并行或列的计算方法',
                    type: 'Function({ row, column, rowIndex, columnIndex })',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'select-on-indeterminate',
                    desc: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行',
                    type: 'Boolean',
                    optional: '-',
                    default: true
                },
                {
                    attr: 'indent',
                    desc: '展示树形数据时，树节点的缩进',
                    type: 'Number',
                    optional: '-',
                    default: 16
                },
                {
                    attr: 'lazy',
                    desc: '是否懒加载子节点数据',
                    type: 'Boolean',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'load',
                    desc: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息',
                    type: 'Function(row, treeNode, resolve)',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'tree-props',
                    desc: '渲染嵌套数据的配置选项',
                    type: 'Object',
                    optional: '-',
                    default: "{ hasChildren: 'hasChildren', children: 'children' }"
                }
            ],
            fieldAttrsRecords: [
                {
                    attr: 'scopedSlot',
                    desc: '自定义插槽',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'type',
                    desc: '对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮',
                    type: 'string',
                    optional: 'selection/index/expand',
                    default: '-'
                },
                {
                    attr: 'index',
                    desc: '如果设置了 type=index，可以通过传递 index 属性来自定义索引',
                    type: 'number, Function(index)',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'column-key',
                    desc: 'column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                { attr: 'label', desc: '显示的标题', type: 'string', optional: '-', default: '-' },
                {
                    attr: 'prop',
                    desc: '对应列内容的字段名，也可以使用 property 属性',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'width',
                    desc: '对应列的宽度',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'min-width',
                    desc: '对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'fixed',
                    desc: '列是否固定在左侧或者右侧，true 表示固定在左侧',
                    type: 'string, boolean',
                    optional: 'true, left, right',
                    default: '-'
                },
                {
                    attr: 'render-header',
                    desc: '列标题 Label 区域渲染使用的 Function',
                    type: 'Function(h, { column, $index })',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'sortable',
                    desc: "对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件",
                    type: 'boolean, string',
                    optional: "true, false, 'custom'",
                    default: false
                },
                {
                    attr: 'sort-method',
                    desc: '对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致',
                    type: 'Function(a, b)',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'sort-by',
                    desc: '指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推',
                    type: 'String/Array/Function(row, index)',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'sort-orders',
                    desc: '数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序',
                    type: 'array',
                    optional:
                        '数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序',
                    default: "['ascending', 'descending', null]"
                },
                {
                    attr: 'resizable',
                    desc: '对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）',
                    type: 'boolean',
                    optional: '-',
                    default: true
                },
                {
                    attr: 'formatter',
                    desc: '用来格式化内容',
                    type: 'Function(row, column, cellValue, index)',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'show-overflow-tooltip',
                    desc: '当内容过长被隐藏时显示 tooltip',
                    type: 'Boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'align',
                    desc: '对齐方式',
                    type: 'String',
                    optional: 'left/center/right',
                    default: 'left'
                },
                {
                    attr: 'header-align',
                    desc: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
                    type: 'String',
                    optional: 'left/center/right',
                    default: '-'
                },
                {
                    attr: 'class-name',
                    desc: '列的 className',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'label-class-name',
                    desc: '当前列标题的自定义类名',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'selectable',
                    desc: '仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选',
                    type: 'Function(row, index)',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'reserve-selection',
                    desc: '仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）',
                    type: 'Boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'filters',
                    desc: '数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。',
                    type: 'Array[{ text, value }]',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'filter-placement',
                    desc: '过滤弹出框的定位',
                    type: 'String',
                    optional: '与 Tooltip 的 placement 属性相同',
                    default: '-'
                },
                {
                    attr: 'filter-multiple',
                    desc: '数据过滤的选项是否多选',
                    type: 'Boolean',
                    optional: '-',
                    default: true
                },
                {
                    attr: 'filter-method',
                    desc: '数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。',
                    type: 'Function(value, row, column)',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'filtered-value',
                    desc: '选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。',
                    type: 'Array',
                    optional: '-',
                    default: '-'
                }
            ],
            paginationAttrsRecords: [
                {
                    attr: 'small',
                    desc: '是否使用小型分页样式',
                    type: 'boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'background',
                    desc: '是否为分页按钮添加背景色',
                    type: 'boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'size',
                    desc: '每页显示条目个数',
                    type: 'number',
                    optional: '-',
                    default: 10
                },
                { attr: 'total', desc: '总条目数', type: 'number', optional: '-', default: '-' },
                {
                    attr: 'page-count',
                    desc: '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
                    type: 'Number',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'pager-count',
                    desc: '页码按钮的数量，当总页数超过该值时会折叠',
                    type: 'number',
                    optional: '大于等于 5 且小于等于 21 的奇数',
                    default: 7
                },
                {
                    attr: 'current',
                    desc: '当前页数',
                    type: 'number',
                    optional: '-',
                    default: 1
                },
                {
                    attr: 'layout',
                    desc: '组件布局，子组件名用逗号分隔',
                    type: 'String',
                    optional: 'sizes, prev, pager, next, jumper, ->, total, slot',
                    default: "'prev, pager, next, jumper, ->, total'"
                },
                {
                    attr: 'page-sizes',
                    desc: '每页显示个数选择器的选项设置',
                    type: 'number[]',
                    optional: '-',
                    default: '[10, 20, 30, 40, 50, 100]'
                },
                {
                    attr: 'popper-class',
                    desc: '每页显示个数选择器的下拉框类名',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'prev-text',
                    desc: '替代图标显示的上一页文字',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'next-text',
                    desc: '替代图标显示的下一页文字',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'disabled',
                    desc: '是否禁用',
                    type: 'boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'hide-on-single-page',
                    desc: '只有一页时是否隐藏',
                    type: 'boolean',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'formatter',
                    desc: '用来格式化内容',
                    type: 'Function(row, column, cellValue, index)',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'show-overflow-tooltip',
                    desc: '当内容过长被隐藏时显示 tooltip',
                    type: 'Boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'align',
                    desc: '对齐方式',
                    type: 'String',
                    optional: 'left/center/right',
                    default: 'left'
                },
                {
                    attr: 'header-align',
                    desc: '表头对齐方式，若不设置该项，则使用表格的对齐方式',
                    type: 'String',
                    optional: 'left/center/right',
                    default: '-'
                },
                {
                    attr: 'class-name',
                    desc: '列的 className',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'label-class-name',
                    desc: '当前列标题的自定义类名',
                    type: 'string',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'selectable',
                    desc: '仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选',
                    type: 'Function(row, index)',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'reserve-selection',
                    desc: '仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）',
                    type: 'Boolean',
                    optional: '-',
                    default: false
                },
                {
                    attr: 'filters',
                    desc: '数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。',
                    type: 'Array[{ text, value }]',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'filter-placement',
                    desc: '过滤弹出框的定位',
                    type: 'String',
                    optional: '与 Tooltip 的 placement 属性相同',
                    default: '-'
                },
                {
                    attr: 'filter-multiple',
                    desc: '数据过滤的选项是否多选',
                    type: 'Boolean',
                    optional: '-',
                    default: true
                },
                {
                    attr: 'filter-method',
                    desc: '数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。',
                    type: 'Function(value, row, column)',
                    optional: '-',
                    default: '-'
                },
                {
                    attr: 'filtered-value',
                    desc: '选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。',
                    type: 'Array',
                    optional: '-',
                    default: '-'
                }
            ],
            tableEventsRecords: [
                {
                    name: 'select',
                    desc: '当用户手动勾选数据行的 Checkbox 时触发的事件',
                    params: 'selection, row'
                },
                {
                    name: 'select-all',
                    desc: '当用户手动勾选全选 Checkbox 时触发的事件',
                    params: 'selection'
                },
                {
                    name: 'selection-change',
                    desc: '当选择项发生变化时会触发该事件',
                    params: 'selection'
                },
                {
                    name: 'cell-mouse-enter',
                    desc: '当单元格 hover 进入时会触发该事件',
                    params: 'row, column, cell, event'
                },
                {
                    name: 'cell-mouse-leave',
                    desc: '当单元格 hover 退出时会触发该事件',
                    params: 'row, column, cell, event'
                },
                {
                    name: 'cell-click',
                    desc: '当某个单元格被点击时会触发该事件',
                    params: 'row, column, cell, event'
                },
                {
                    name: 'cell-dblclick',
                    desc: '当某个单元格被双击击时会触发该事件',
                    params: 'row, column, cell, event'
                },
                {
                    name: 'row-click',
                    desc: '当某一行被点击时会触发该事件',
                    params: 'row, column, event'
                },
                {
                    name: 'row-contextmenu',
                    desc: '当某一行被鼠标右键点击时会触发该事件',
                    params: 'row, column, event'
                },
                {
                    name: 'row-dblclick',
                    desc: '当某一行被双击时会触发该事件',
                    params: 'row, column, event'
                },
                {
                    name: 'header-click',
                    desc: '当某一列的表头被点击时会触发该事件',
                    params: 'column, event'
                },
                {
                    name: 'header-contextmenu',
                    desc: '当某一列的表头被鼠标右键点击时触发该事件',
                    params: 'column, event'
                },
                {
                    name: 'sort-change',
                    desc: '当表格的排序条件发生变化的时候会触发该事件',
                    params: '{ column, prop, order }'
                },
                {
                    name: 'filter-change',
                    desc: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。',
                    params: 'filters'
                },
                {
                    name: 'current-change',
                    desc: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
                    params: 'currentRow, oldCurrentRow'
                },
                {
                    name: 'header-dragend',
                    desc: '当拖动表头改变了列的宽度的时候会触发该事件',
                    params: 'newWidth, oldWidth, column, event'
                },
                {
                    name: 'expand-change',
                    desc: '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）',
                    params: 'row, (expandedRows | expanded)'
                }
            ],
            tableMethodsRecords: [
                { name: 'clearSelection', desc: '用于多选表格，清空用户的选择', params: '-' },
                {
                    name: 'toggleRowSelection',
                    desc: '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）',
                    params: 'row, selected'
                },
                {
                    name: 'toggleAllSelection',
                    desc: '用于多选表格，切换所有行的选中状态',
                    params: '-'
                },
                {
                    name: 'toggleRowExpansion',
                    desc: '用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）',
                    params: 'row, expanded'
                },
                {
                    name: 'setCurrentRow',
                    desc: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。',
                    params: 'row'
                },
                {
                    name: 'clearSort',
                    desc: '用于清空排序条件，数据会恢复成未排序的状态',
                    params: '-'
                },
                {
                    name: 'clearFilter',
                    desc: '不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件',
                    params: 'columnKey'
                },
                {
                    name: 'doLayout',
                    desc: '对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法',
                    params: '-'
                },
                {
                    name: 'sort',
                    desc: '手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。',
                    params: 'prop: string, order: string'
                }
            ]
        };
    },
    methods: {
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 0) {
                return 'warning-row';
            } else if (rowIndex === 2) {
                return 'success-row';
            }
            return '';
        },
        requestData(pager, sorter) {
            return queryDepartmentUserList(pager, {}, sorter);
        }
    }
};
</script>

<style lang="scss" scoped>
::v-deep {
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
}
</style>
