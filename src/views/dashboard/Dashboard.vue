<template>
    <div class="home">
        <layout-header>
            <typography tag="h1" size="big-title">工作台</typography>
            <div class="flex justify-between home__header">
                <div class="flex align-center">
                    <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        :size="72"
                    ></el-avatar>
                    <div class="home__header-info">
                        <typography size="subtitle">
                            管理员，欢迎登录系统，祝你开心每一天！
                        </typography>
                        <typography class="mt12" type="secondary">
                            某某公司 － 某某事业群 － 某某平台部
                        </typography>
                    </div>
                </div>
                <div class="home__header-right flex align-center">
                    <div class="home__header-item flex flex-direction align-end">
                        <typography type="secondary"> 项目数 </typography>
                        <typography class="mt12" size="title"> 35 </typography>
                    </div>
                    <el-divider class="home__header-divider" direction="vertical"></el-divider>
                    <div class="home__header-item flex flex-direction align-end">
                        <typography type="secondary"> 访问人数 </typography>
                        <typography class="mt12" size="title"> 2,234 </typography>
                    </div>
                </div>
            </div>
        </layout-header>
        <el-row :gutter="24">
            <el-col :span="8">
                <container-card>
                    <template #header>
                        <typography size="title"> 雷达图示例 </typography>
                    </template>
                    <radar></radar>
                </container-card>
            </el-col>
            <el-col :span="8">
                <container-card>
                    <template #header>
                        <typography size="title"> 柱状图示例 </typography>
                    </template>
                    <bar-chart></bar-chart>
                </container-card>
            </el-col>
            <el-col :span="8">
                <container-card>
                    <template #header>
                        <typography size="title"> 饼图示例 </typography>
                    </template>
                    <pie-chart></pie-chart>
                </container-card>
            </el-col>
        </el-row>
        <el-row :gutter="24" class="mt24 align-stretch" type="flex">
            <el-col :span="12">
                <container-card body-class="pt12">
                    <custom-table></custom-table>
                </container-card>
            </el-col>
            <el-col :span="12">
                <container-card class="h100">
                    <template #header>
                        <typography size="title"> 手风琴示例 </typography>
                    </template>
                    <the-list></the-list>
                </container-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import LayoutHeader from '@components/LayoutHeader';
import Typography from '@components/Typography';
import ContainerCard from '@components/ContainerCard';
import Radar from '@views/dashboard/components/Radar';
import BarChart from '@views/dashboard/components/BarChart';
import PieChart from '@views/dashboard/components/PieChart';
import CustomTable from '@views/dashboard/components/CustomTable';
import TheList from '@views/dashboard/components/TheList';
export default {
    name: 'Dashboard',
    components: {
        TheList,
        CustomTable,
        PieChart,
        BarChart,
        Radar,
        ContainerCard,
        Typography,
        LayoutHeader
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.home__header {
    margin-top: 16px;
}

.home__header-info {
    margin-left: 24px;
}

.home__header-item {
    padding: 0 12px;
}

.home__header-divider {
    height: 40px;
}
</style>
