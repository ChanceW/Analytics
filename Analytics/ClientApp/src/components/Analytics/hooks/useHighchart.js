import { useEffect } from "react";
import Highcharts from "highcharts";

const staticOptions = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Hackathon Chart'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    }
};

const xAxis = (title, fieldValues) => {
    return {
        xAxis: {
            categories: fieldValues.length
                ? fieldValues.map(fv => fv.name) 
                : "placeholder",
            title: title
        }
    };
};

const yAxis = (title) => {
    return {
        yAxis: {
            min: 0,
            title: {
                text: title
            }
        }
    };
};

const series = (valueCountPairs) => {
    return {
        series: valueCountPairs && valueCountPairs.length ? valueCountPairs.map(vcp => {
            return { name: vcp.name, count: vcp.count }
        }) : []
    };
};

const getSeriesAndAxisProperties = (chartProperties, valueCountPairs) => {
    let { title, fieldValues } = chartProperties;
    return {
        ...yAxis(title),
        ...xAxis(title, fieldValues),
        ...series(valueCountPairs)
    }
};

export const useHighchart = (targetId , chartProperties, valueCountPairs) => {
    useEffect(() => {
        Highcharts.chart(targetId, {
            ...staticOptions,
            ...getSeriesAndAxisProperties(chartProperties, valueCountPairs)
        }),
            [chartProperties]
    });
};