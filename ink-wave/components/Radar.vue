<template>
    <Radar id="test" ref="imageCanvas" :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
        :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
        :height="height" />
</template>
  
<script>
import { Radar } from 'vue-chartjs'

import {
    Chart as ChartJS,
    Legend,
    PointElement,
    LineElement,
    RadialLinearScale
} from 'chart.js'

ChartJS.register(
    Legend,
    PointElement,
    RadialLinearScale,
    LineElement
)

export default {
    name: 'RadarChart',
    components: {
        Radar
    },
    props: {
        chartId: {
            type: String,
            default: 'radar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 700
        },
        height: {
            type: Number,
            default: 700
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Array,
            default: () => []
        },
        chartData: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        // 外枠ラベルの設定
                        pointLabels: {
                            font: {
                                size: 22,
                            },
                            color: 'white'
                        },
                        min: 0,
                        max: 5,
                        ticks: {
                            display: false, // メモリ非表示
                            stepSize: 1,
                        },
                        // 外周枠
                        grid: {
                            color: 'white'
                        },
                        // 角度線
                        angleLines: {
                            color: 'white'
                        }
                    },


                },
                plugins: {
                    legend: {
                        display: false, // 凡例を非表示にする
                    },
                    beforeDraw: chart => {
                        // const { ctx, scale, config } = chart
                        const { ctx, scale } = chart
                        const { xCenter, yCenter, drawingArea: radius } = scale

                        ctx.save();
                        ctx.arc(xCenter, yCenter, radius, 0, Math.PI * 2)
                        // ctx.fillStyle = config.options.chartArea.backgroundColor;
                        ctx.fillStyle = 'rgba(225, 49, 106, 0.5)';
                        ctx.fill();
                        ctx.restore();
                    },
                },
            },
        }
    }
}
</script>
