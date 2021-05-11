<template>
    <div ref="chart" class="pv12"></div>
</template>

<script>
import { Chart } from '@antv/g2';

const data = [
    { year: '2005', population: 25.8 },
    { year: '2006', population: 31.7 },
    { year: '2007', population: 33 },
    { year: '2008', population: 46 },
    { year: '2009', population: 38.3 },
    { year: '2010', population: 28 },
    { year: '2011', population: 42.5 },
    { year: '2012', population: 30.3 }
];

export default {
    name: 'PieChart',
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const chart = new Chart({
                container: this.$refs.chart,
                autoFit: true,
                height: 220
            });
            chart.data(data);
            chart.coordinate('polar');
            chart.legend('year', {
                position: 'right'
            });
            chart.axis(false);
            chart.tooltip({
                showMarkers: false
            });
            chart.interaction('element-highlight');
            chart.interval().position('year*population').color('year').style({
                lineWidth: 1,
                stroke: '#fff'
            });
            chart.render();
        }
    }
};
</script>

<style lang="scss" scoped></style>
