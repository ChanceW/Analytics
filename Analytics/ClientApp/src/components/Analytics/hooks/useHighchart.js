import { useEffect } from "react";
import Highcharts from "highcharts";
require('highcharts/modules/funnel')(Highcharts);
//require('highcharts/modules/highcharts-3d')(Highcharts);


const columnOptions = {
    chart: {
        type: 'column',
    },
    title: {
        text: 'Hackathon Chart'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    }
};

const pieOptions = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Hackathon Pie Chart'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    }
};

const enable3dOptions = (containerId) => {
    return {
        chart: {
            type: 'column',
            renderTo: containerId,
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Hackathon Chart 3d'
        },
        plotOptions: {
            column: {
                depth: 25,
                dataLabels: {
                    enabled: true
                }
            }
        }
    };
};

const pyramidOptions = {
    chart: {
        type: 'pyramid'
    },
    title: {
        text: 'Hackathon Chart Pyramid',
        x: -50
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> ({point.y:,.0f})',
                softConnector: true
            },
            center: ['40%', '50%'],
            width: '80%'
        }
    },
    legend: {
        enabled: false
    }
};

const series = (valueCountPairs) => {
    return {
        series: valueCountPairs && valueCountPairs.length ? valueCountPairs[0].map(vcp => {
            return { name: vcp.code, data: [vcp.count] }
        }) : []
    };
};

const pyramidSeries = (valueCountPairs) => {
    return {
        series: [{
            name: "Members",
            data: valueCountPairs && valueCountPairs.length ? valueCountPairs[0].map((vcp) => {
                return [vcp.code, vcp.count]
            }) : [] 
        }]
    };
};

const pieSeries = (valueCountPairs) => {
    return {
        series: [{
            name: "Members",
            colorByPoint: true,
            data: valueCountPairs && valueCountPairs.length ? valueCountPairs[0].map((vcp) => {
                return { name: vcp.code, y: vcp.count }
            }) : []
        }]
    };
};

const getChartOptions = (chartType, valueCountPairs) => {
    switch (chartType) {
        case "column":
            return { ...series(valueCountPairs), ...columnOptions };
        case "pyramid":
            return { ...pyramidSeries(valueCountPairs), ...pyramidOptions };
        case "column3d":
            return { ...series(valueCountPairs), ...enable3dOptions() };
        case "pie":
            return { ...pieSeries(valueCountPairs), ...pieOptions };
        default:
            break;
    }
}

export const useHighchart = (targetId, valueCountPairs, chartType, title = "test") => {
    useEffect(() => {
        Highcharts.chart(targetId, {
            ...getChartOptions(chartType, valueCountPairs)
        }),
            [chartType, valueCountPairs]
    }); 
};